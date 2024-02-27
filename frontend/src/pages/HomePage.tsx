import { getError } from "../utils";
import { ApiError } from "../types/ApiError";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import ProductItem from "../components/ProductItem";
import { Helmet } from "react-helmet-async";
import { useGetProductsQuery } from "../hooks/productHooks";

export default function HomePage() {

  const { data: products,isLoading,error }=useGetProductsQuery()
  
  //console.log(products);
  

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox>{getError(error as unknown as ApiError)}</MessageBox> //verr
  ) : (
    
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        <Helmet>
          <title>Shoes Shop</title>
        </Helmet>
        {products!.map((product) => (
          <li key={product.slug} className=" flex mx-4">
            <ProductItem product={product} />
          </li>
        ))}
      </ul>
    
  );
}
