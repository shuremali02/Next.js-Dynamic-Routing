export default function Reviewid({params}:{params:{productid:string,reviewid:string}}){
    return <div>
        <h1>Review for {params.productid} is {params.reviewid}</h1>
    </div>
}