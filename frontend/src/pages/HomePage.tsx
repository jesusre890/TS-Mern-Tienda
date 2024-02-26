import { Product } from "../types/Product";
import { useEffect, useReducer } from "react";
import axios from "axios";
import { getError } from "../utils";
import { ApiError } from "../types/ApiError";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import ProductItem from "../components/ProductItem";

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
        {products.map((product) => (
          <li key={product.slug} className=" flex mx-4">
            <ProductItem product={product}/>
          </li>
        ))}
      </ul>
    </div>
  );
}
