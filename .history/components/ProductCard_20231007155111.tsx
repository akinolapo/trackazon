import { Product } from '@/types';
import Link from 'next/link';
import React from 'react'

interface Props{
    product: Product;
}

const ProductCard = ({product}: Props) => {
  return (
    <Link href={`/products/${product}`}>ProductCard</Link href={`/products/${product}`}>
  )
}

export default ProductCard