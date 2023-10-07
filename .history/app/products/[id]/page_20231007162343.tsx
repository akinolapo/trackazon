import { getProductById } from "@/lib/actions"
import { redirect } from "next/navigation";

type Props = {
  params: { id: string}
}

const ProductDetails = async ({params: {id}}: Props) => {
  const product = await getProductById(id);

  if(!product) redirect('/')

  return (
    <div class></div>
  )
}

export default ProductDetails