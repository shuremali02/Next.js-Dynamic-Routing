import Link from "next/link"
export default function Review({params}:{params:{productid:string,reviewid:string}}) {
  return (
    <div> 
      <h1>Review list</h1>
        <Link href={`/home/product/${params.productid}/review/${params.reviewid}`}>
        <h2>Review 1</h2>
        <h2>Review 2</h2>
        <h2>Review 3</h2>
        </Link>
    </div>
  )
}