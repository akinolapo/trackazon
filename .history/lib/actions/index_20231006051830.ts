"use server"

import Product from "../models/product.model";
import { connectToDB } from "../mongoose";
import { scrapeAmazonProduct } from "../scraper";

export async function scrapeAndStoreProduct(productUrl:string) {
    if(!productUrl) return;

    try {
        connectToDB();
        const scrapeProduct = await scrapeAmazonProduct(productUrl);

        if(!scrapeProduct) return;

        let product = scrapeProduct;
        const existingProduct = await Product.findOne({ url: scrapeProduct.url});

        if(existingProduct){
            const updatedPriceHi
        }

    } catch (error: any) {
        throw new Error(`Failed to create/update product: ${error.message}`)
    }
}