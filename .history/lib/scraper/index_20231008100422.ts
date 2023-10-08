import axios from "axios";
import * as cheerio from "cheerio";
import { extractCurrency, extractDescription, extractPrice, extractRating, extractReview } from "../utils";

export async function scrapeAmazonProduct(url:string) {
    if(!url) return;

    //BrightData proxy configuration
    const username = String(process.env.BRIGHT_DATA_USERNAME);
    const password = String(process.env.BRIGHT_DATA_PASSWORD);
    const port = 22225;
    const session_id =(1000000 * Math.random()) | 0;
    const options = {
        auth: {
            username: `${username}-session-${session_id}`,
            password,
        },
        host: 'brd.superproxy.io',
        port,
        rejectUnauthorized: false,
    }

    try {
        //Fetch the product page
        const response = await axios.get(url, options);
        const $ = cheerio.load(response.data)

        //Extract the product title
        const title = $('#productTitle').text().trim();
        const reviewsCount = extractReview (
            $('#acrCustomerReviewText')
        );
        const stars = extractRating(
            $('.a-size-base .a-color-base')
        );
        const currentPrice = extractPrice(
            $('.priceToPay span.a-price-whole'),
            $('a.size.base.a-color-price'),
            $('.a-button-selected .a-color-base')
        );

        const originalPrice = extractPrice(
            $('#priceblock_ourprice'),
            $('.a-price.a-text-price span.a-offscreen'),
            $('#listPrice'),
            $('#priceblock_dealprice'),
            $('.a-size-base.a-color-price')
        );

        const outOfStock = $('#availability span').text().trim().toLowerCase() === 'currently unavailable';

        const images = 
            $('#imgBlkFront').attr('data-a-dynamic-image') ||
            $('#landingImage').attr('data-a-dynamic-image')||
            '{}'

        const imageUrls = Object.keys(JSON.parse(images));

        const currency = extractCurrency($('.a-price-symbol'));
        const discountRate = $('.savingsPercentage').text().replace(/[-%]/g,"");

        const description = extractDescription($)

        console.log(title, currentPrice, originalPrice, outOfStock, imageUrls, currency, discountRate, reviewsCount, stars)

        // Construt data object with scraped information
        const data = {
            url,
            currency: currency || '$',
            image: imageUrls[0],
            title,
            currentPrice: Number(currentPrice) || Number(originalPrice),
            originalPrice: Number(originalPrice) || Number(currentPrice),
            priceHistory: [],
            discountRate: Number(discountRate),
            category: 'category', //get this
            reviewsCount, //get this Done
            stars:, //get this
            isOutOfStock: outOfStock,
            description,
            lowestPrice: Number(currentPrice) || Number(originalPrice),
            higestPrice: Number(originalPrice) || Number(currentPrice),
            average: Number(currentPrice) || Number(originalPrice),
        }

        // console.log(data)
        return data;
    } catch (error: any) {
        throw new Error(`Failed to scrape product: ${error.message}`);
        
    }

}