import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { Product } from "../types/Product";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function ProductItem({ product }: { product: Product }) {
  return (
    <div>
      <Card className="w-80 min-h-80 shadow-2xl" placeholder={undefined}>
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
              className=" h-40 w-full object-cover"
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
            <div className=" mb-3">
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </div>
          </CardBody>
          <CardFooter placeholder={undefined}>
            {product.countInStock === 0 ? (
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
                placeholder={undefined}
                ripple={false}
                fullWidth={true}
                className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              >
                Add to Cart
              </Button>
            )}
          </CardFooter>
        </Link>
      </Card>
    </div>
  );
}
