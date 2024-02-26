import { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  IconButton,
  Typography,
  Button,
} from "@material-tailwind/react";
import { IoCartOutline } from "react-icons/io5";
import { Outlet } from "react-router-dom";

function App() {

  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  },[]);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        placeholder={undefined}
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center text-lg">
          <IoCartOutline />
        </a>
      </Typography>
    </ul>
  );
  
  return (
    <div className="">
      <header>
        <div className="max-h-[768px] w-auto">
          <Navbar
            placeholder={undefined}
            className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4"
          >
            <div className="flex items-center justify-between text-blue-gray-900">
              <Typography
                placeholder={undefined}
                as="a"
                href="#"
                className="mr-4 cursor-pointer py-1.5 font-medium"
              >
                Shoes Shop
              </Typography>
              <div className="flex items-center gap-4">
                <div className="mr-4 hidden lg:block">{navList}</div>
                <div className="flex items-center gap-x-1">
                  <Button
                    placeholder={undefined}
                    variant="text"
                    size="sm"
                    className="hidden lg:inline-block"
                  >
                    <span>Log In</span>
                  </Button>
                  <Button
                    placeholder={undefined}
                    variant="gradient"
                    size="sm"
                    className="hidden lg:inline-block"
                  >
                    <span>Sign in</span>
                  </Button>
                </div>
                <IconButton
                  placeholder={undefined}
                  variant="text"
                  className=" text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                  ripple={false}
                  onClick={() => setOpenNav(!openNav)}
                >
                  {openNav ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </IconButton>
              </div>
            </div>
            <MobileNav open={openNav}>
              {navList}
              <div className="flex items-center gap-x-1">
                <Button
                  placeholder={undefined}
                  fullWidth
                  variant="text"
                  size="sm"
                  className=""
                >
                  <span>Log In</span>
                </Button>
                <Button
                  placeholder={undefined}
                  fullWidth
                  variant="gradient"
                  size="sm"
                  className=""
                >
                  <span>Sign in</span>
                </Button>
              </div>
            </MobileNav>
          </Navbar>
        </div>
      </header>
      <main className=" mt-8 flex justify-center">
        <Outlet/>
      </main>
      <footer className=" mt-10 ">Todos los derechos reservados</footer>
    </div>
  );
}

export default App;
