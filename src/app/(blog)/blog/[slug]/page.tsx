export default async function BlogDetails({params}:{params:{slug:string}}){

          const {slug} = params
    return(
        <div>
            Dynamig route {slug}
        </div>
    )
}