"use server"

import Product from "../models/product.model";
import { connectToDB } from "../mongoose";
import { scrapeAmazonProduct } from "../scraper";
import { getAveragePrice, getHighestPrice, getLowestPrice } from "../utils";

export async function scrapeAndStoreProduct(productUrl:string) {
    if(!productUrl) return;

    try {
        connectToDB();
        const scrapeProduct = await scrapeAmazonProduct(productUrl);

        if(!scrapeProduct) return;

        let product = scrapeProduct;
        const existingProduct = await Product.findOne({ url: scrapeProduct.url});

        if(existingProduct){
            const updatedPriceHistory: any = [
                ...existingProduct.priceHistory,
                {price: scrapeProduct.currentPrice}
            ]

            product = {
                ...scrapeProduct,
                priceHistory: updatedPriceHistory,
                lowestPrice: getLowestPrice(updatedPriceHistory),
                higestPrice: getHighestPrice(updatedPriceHistory),
                averagePrice: getAveragePrice(updatedPriceHistory),

            }
        }

        const newProduct = await Product.

    } catch (error: any) {
        throw new Error(`Failed to create/update product: ${error.message}`)
    }
}