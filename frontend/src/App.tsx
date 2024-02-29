import { useContext, useEffect } from "react";
import { Badge, Button, Container, Nav, Navbar } from "react-bootstrap";
import { IoCartOutline } from "react-icons/io5";
import { Link, Outlet } from "react-router-dom";
import { Store } from "./Store";

function App() {
  const {
    state: { mode, cart },
    dispatch,
  } = useContext(Store);

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", mode);
  }, [mode]);
  const switchModeHandler = () => {
    dispatch({ type: "SWITCH_MODE" });
  };

  return (
    <div className="">
      <header>
        <Navbar>
          <Container>
            <Navbar.Brand>Shoes Shop</Navbar.Brand>
          </Container>
          <Nav>
            <Button variant={mode} onClick={switchModeHandler}>
              <i className={mode === "light" ? "fa fa-sun" : "fa fa-moon"}></i>
            </Button>
            <Link
              to="/cart"
              className="flex items-center text-2xl hover:bg-blue-gray-50 p-1 rounded-full no-underline"
            >
              <IoCartOutline/>
              {cart.cartItems.length > 0 && (
                <Badge pill bg="danger" className=" text-xs">
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                </Badge>
              )}
            </Link>
            <a href="/signin" className="nav-link w-20">
              Sing In
            </a>
          </Nav>
        </Navbar>
      </header>
      <main className=" mt-8 flex justify-center">
        <Outlet />
      </main>
      <footer className=" mt-10 ">Todos los derechos reservados</footer>
    </div>
  );
}

export default App;
