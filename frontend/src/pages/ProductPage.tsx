import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductDetailsBySlugQuery } from "../hooks/productHooks";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { convertProductToCartItem, getError } from "../utils";
import { ApiError } from "../types/ApiError";
import { Button, Card, List, ListItem, Rating } from "@material-tailwind/react";
import { useContext } from "react";
import { Store } from "../Store";
import { toast } from "sonner";

export default function ProductPage() {
  const params = useParams();
  const { slug } = params;
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsBySlugQuery(slug!);
  //console.log(product);

  const { state, dispatch } = useContext(Store);
  const { cart }=state;
  
  const navigate = useNavigate()

  const addToCartHandler=() => {
    const existItem=cart.cartItems.find((x) => x._id===product!._id)
    const quantity=existItem? existItem.quantity+1:1
    if (product!.countInStock < quantity) {
      toast.error("Lo siento, el producto esta fuera de stock");
      return;
    }
     dispatch({
       type: "CART_ADD_ITEM",
       payload: { ...convertProductToCartItem(product!), quantity },
     });
     toast.success("Producto adherido al carrito");
     navigate("/cart");
  }

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox>{getError(error as unknown as ApiError)}</MessageBox>
  ) : !product ? (
    <MessageBox>Product Not Found</MessageBox>
  ) : (
    <div className="lg:flex md:flex lg:flex-wrap md:flex-wrap justify-center">
      <Helmet>
        <title>Pagina de producto</title>
      </Helmet>
      <div className="flex flex-col justify-center md:flex-row lg:gap-10 lg:w-3/4">
        <div>
          <img
            className="h-auto w-full rounded-lg object-cover object-center"
            src={product?.image}
            alt={product?.name}
          />
        </div>
        <Card placeholder={undefined} className="w-96 m-auto">
          <List placeholder={undefined}>
            <h1 className="text-4xl font-medium">{product?.name}</h1>

            <ListItem placeholder={undefined}>
              <Rating placeholder={undefined} />
            </ListItem>

            <ListItem placeholder={undefined}>
              Precio: ${product?.price}
            </ListItem>

            <ListItem placeholder={undefined}>{product?.description}</ListItem>

            <div className="flex justify-start">
              <ListItem placeholder={undefined}>Status: </ListItem>
              <ListItem placeholder={undefined}>
                {product?.countInStock > 0 ? (
                  <div className=" text-green-600 font-bold">En Stock</div>
                ) : (
                  <div className=" text-red-600 font-bold">Sin Stock</div>
                )}
              </ListItem>
            </div>
            {product?.countInStock === 0 ? (
              <Button
                disabled
                placeholder={undefined}
                ripple={false}
                fullWidth={true}
                className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                Out of stock
              </Button>
            ) : (
              <Button
                onClick={addToCartHandler}
                placeholder={undefined}
                ripple={false}
                fullWidth={true}
                className=" bg-light-blue-600  shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                Add to Cart
              </Button>
            )}
          </List>
        </Card>
      </div>
    </div>
  );
}
