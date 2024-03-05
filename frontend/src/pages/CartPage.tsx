import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Store } from "../Store";
import { Helmet } from "react-helmet-async";
import { toast } from "sonner";
import { Card, List, ListItem } from "@material-tailwind/react";
import MessageBox from "../components/MessageBox";
import { CartItem } from "../types/Cart";
import { Button } from "react-bootstrap";

export default function CartPage() {
  const navigate = useNavigate();
  const {
    state: {
      cart: { cartItems },
    },
    dispatch,
  } = useContext(Store);
  const updateCartHandler = (item: CartItem, quantity: number) => {
    if (item.countInStock < quantity) {
      toast.error("Lo siento, el producto esta fuera de stock");
      return;
    }
    dispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };
  const checkoutHandler = () => {
    navigate("/signin?redirect=/shipping");
  };
  return (
    <div>
      <Helmet>
        <title>Carrito de compras</title>
      </Helmet>
      <h1 className=" text-3xl mb-6 text-center">Carrito de compras</h1>
      <div className="flex flex-col gap-10 lg:flex-row">
        {cartItems.length === 0 ? (
          <MessageBox>
            El carrito esta vacío. <Link to="/">Ir a la tienda</Link>
          </MessageBox>
        ) : (
            <Card placeholder={undefined} className="">
            <List placeholder={undefined} className="flex gap-6">
              {cartItems.map((item: CartItem) => (
                <ListItem
                  placeholder={undefined}
                  key={item._id}
                  className="flex gap-3 md:flex"
                >
                  <div className="flex gap-3 flex-col justify-center md:flex-row md:mr-10">
                    <img src={item.image} alt={item.name} className=" w-16" />
                    <Link to={`/product/${item.slug}`} className=" w-16 text-sm text-center md:w-24">
                      {item.name}
                    </Link>
                  </div>
                  <div className="flex items-center w-32 justify-center md:mx-10">
                    <Button
                      variant="light"
                      onClick={() => updateCartHandler(item, item.quantity - 1)}
                      disabled={item.quantity === 1}
                    >
                      <i className="fas fa-plus-circle"></i>
                    </Button>{" "}
                    <span className="">{item.quantity}</span>
                    <Button
                      variant="light"
                      onClick={() => updateCartHandler(item, item.quantity + 1)}
                      disabled={item.quantity === item.countInStock}
                    >
                      <i className="fas fa-plus-circle"></i>
                    </Button>
                  </div>
                  <div className=" w-5 flex justify-end md:mx-8">${item.price}</div>
                  <div>
                    <Button
                      //onClick={() => removeItemHandler(item)}
                      variant="light"
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </div>
                </ListItem>
              ))}
            </List>
          </Card>
        )}
        <div className="flex justify-center h-36">
          <Card placeholder={undefined}>
            <List placeholder={undefined}>
              <ListItem placeholder={undefined}>
                <h3 className=" font-extrabold">
                  Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{" "}
                  items) : $
                  {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                </h3>
              </ListItem>
              <ListItem placeholder={undefined}>
                <div className="d-grid">
                  <Button
                    type="button"
                    variant="primary"
                    onClick={checkoutHandler}
                    disabled={cartItems.length === 0}
                  >
                    Proceed to Checkout
                  </Button>
                </div>
              </ListItem>
            </List>
          </Card>
        </div>
      </div>
    </div>
  );
}
