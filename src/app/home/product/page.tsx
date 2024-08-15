import Link from "next/link"
function Products({params}:{params:{productid:string}}){
    return <div>
        <h1>PRODUCT LIST</h1>
        <Link href={`/home/product/${params.productid}`}>
        <h2>product1</h2>
        <h2>product2</h2>
        <h2>product3</h2>
        
        </Link>

    </div>
}
export default Products