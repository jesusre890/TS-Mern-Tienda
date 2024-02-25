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
import { Product } from "../types/Product";
import { useEffect, useReducer } from "react";
import axios from "axios";
import { getError } from "../utils";
import { ApiError } from "../types/ApiError";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

type State = {
  products: Product[];
  loading: boolean;
  error: string;
};

type Action =
  | { type: "FETCH_REQUEST" }
  | {
      type: "FETCH_SUCCESS";
      payload: Product[];
    }
  | { type: "FETCH_FAIL"; payload: string };

const initialState: State = {
  products: [],
  loading: true,
  error: "",
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function HomePage() {
  const [{ loading, error, products }, dispatch] = useReducer<
    React.Reducer<State, Action>
  >(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: getError(err as ApiError) });
      }
    };
    fetchData();
  }, []);

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox>{error}</MessageBox>
  ) : (
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
