'use server'

export async function scrapeAndStoreProduct(productUrl:string) {
    if(!productUrl) return;

    try {
        con
    } catch (error: any) {
        throw new Error(`Failed to create/update product: ${error.message}`)
    }
}