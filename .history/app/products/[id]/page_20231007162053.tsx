type Props = {
  params: { id: string}
}

const ProductDetails = async ({params: {id}}: Props) => {
  const product = await getProductById
  return (
    <div>{id}</div>
  )
}

export default ProductDetails