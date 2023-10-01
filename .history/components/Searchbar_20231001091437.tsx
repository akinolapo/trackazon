'use client';

import { FormEvent, useState } from "react";

const isValidAmazonProductURL = (url: string) => {
  try {
    const parsedURL = new URL(url)
    const hostname = parsedURL.hostname

    //Check if hostname is amazon.com pr amazon.ca
    if(hostname.includes('amazon.com') ||)
  } catch (error) {
    
  }
}

const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState('')
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const isValidLink = isValidAmazonProductURL(searchPrompt)
   }
  return (
    <form className='flex flex-wrap gap-4 mt-12' onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        placeholder="Enter product link"
        className="searchbar-input"
      />
      <button type="submit" className="searchbar-btn">Search</button>
    </form>
  )
}

export default Searchbar