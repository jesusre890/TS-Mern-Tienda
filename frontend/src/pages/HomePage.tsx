import { Link } from "react-router-dom";
import { sampleProducts } from "../data";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function HomePage() {
  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {sampleProducts.map((product) => (
          <li key={product.slug} className=" flex mx-4">
            <Card className="w-80 max-h-96 shadow-2xl" placeholder={undefined}>
              <Link to={"/product/" + product.slug}>
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
              </Link>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
