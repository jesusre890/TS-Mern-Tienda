import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useGetProductDetailsBySlugQuery } from "../hooks/productHooks";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { getError } from "../utils";
import { ApiError } from "../types/ApiError";
import { Badge, Card, List, ListItem, Rating } from "@material-tailwind/react";

export default function ProductPage() {
  const params = useParams();
  const { slug } = params;
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsBySlugQuery(slug!);
  //console.log(slug);

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox>{getError(error as unknown as ApiError)}</MessageBox>
  ) : !product ? (
    <MessageBox>Product Not Found</MessageBox>
  ) : (
    <div>
      <Helmet>
        <title>Product Page</title>
      </Helmet>
      <div className="flex flex-col justify-center">
        <div>
          <img
            className="h-full w-full rounded-lg object-cover object-center"
            src={product.image}
            alt={product.name}
          />
        </div>
        <Card placeholder={undefined} className="w-96 m-auto">
          <List placeholder={undefined}>
            <h1 className="text-4xl font-medium">{product.name}</h1>

            <a href="#" className="text-initial">
              <ListItem placeholder={undefined}>
                <Rating placeholder={undefined} />
              </ListItem>
            </a>
            <a href="#" className="text-initial">
              <ListItem placeholder={undefined}>
                Precio: ${product.price}
              </ListItem>
            </a>
            <a href="#" className="text-initial">
              <ListItem placeholder={undefined}>{product.description}</ListItem>
            </a>
            <a href="#" className="text-initial">
                    <ListItem placeholder={undefined}>
                      Status: {product.countInStock}
                      
                    </ListItem>
            </a>
          </List>
        </Card>
      </div>
    </div>
  );
}
