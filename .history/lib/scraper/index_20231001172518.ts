export async function scrapeAmazonProduct(url:string) {
    if(!url) return;

    //BrightData proxy configuration
    const username = String(process.env.BRIGHT_DATA)
}