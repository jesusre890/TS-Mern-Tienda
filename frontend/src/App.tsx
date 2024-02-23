//import "./App.css";
import { sampleProducts } from "./data";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function App() {
  return (
    <div>
      <header>Shoes Shop</header>
      <main>
        <ul className="flex flex-col">
          {sampleProducts.map((product) => (
            <li key={product.slug} className=" flex mb-5 mx-4">
              <Card className="w-80" placeholder={undefined}>
                <CardHeader
                  shadow={false}
                  floated={false}
                  className=""
                  placeholder={undefined}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </CardHeader>
                <CardBody placeholder={undefined}>
                  <div className="mb-2 flex items-center justify-between">
                    <Typography
                      placeholder={undefined}
                      color="blue-gray"
                      className="font-medium"
                    >
                      {product.name}
                    </Typography>
                    <Typography
                      placeholder={undefined}
                      color="blue-gray"
                      className="font-medium"
                    >
                      ${product.price}
                    </Typography>
                  </div>
                  <Typography
                    placeholder={undefined}
                    variant="small"
                    color="gray"
                    className="font-normal opacity-75"
                  >
                    {product.description}
                  </Typography>
                </CardBody>
                <CardFooter placeholder={undefined} className="pt-0">
                  <Button
                    placeholder={undefined}
                    ripple={false}
                    fullWidth={true}
                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                  >
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </li>
            //<li key={index}>
            //  <img src={product.image} alt="image" />
            //  <h2>{product.name}</h2>
            //</li>
          ))}
        </ul>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
