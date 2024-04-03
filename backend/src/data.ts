import bcrypt from 'bcryptjs';
import { User } from "./models/userModel";
import { Product } from "./models/productModel";

export const sampleProducts: Product[] = [
  {
    name: "Adidas Ultraboost",
    slug: "adidas-ultraboost",
    image: "/images/Zapatillas Adidas Ultraboost.png",
    category: "Zapatillas",
    brand: "Adidas",
    price: 150,
    countInStock: 1000,
    description:
      "Las zapatillas Adidas Ultraboost ofrecen comodidad y retorno de energía sin límites para tu carrera diaria.",
    rating: 4.8,
    numReviews: 500,
  },
  {
    name: "Nike Air Max",
    slug: "nike-air-max",
    image: "/images/Zapatillas Nike Air Max.png",
    category: "Zapatillas",
    brand: "Nike",
    price: 120,
    countInStock: 800,
    description:
      "Las zapatillas Nike Air Max ofrecen una amortiguación ligera y cómoda con un diseño icónico que nunca pasa de moda.",
    rating: 4.7,
    numReviews: 600,
  },
  {
    name: "Reebok Classic Leather",
    slug: "reebok-classic-leather",
    image: "/images/Zapatillas Reebok Classic Leather.png",
    category: "Zapatillas",
    brand: "Reebok",
    price: 80,
    countInStock: 1200,
    description:
      "Las zapatillas Reebok Classic Leather combinan un estilo retro con una comodidad duradera para un look versátil.",
    rating: 4.5,
    numReviews: 400,
  },
  {
    name: "Le Coq Sportif Omega",
    slug: "le-coq-sportif-omega",
    image: "/images/Zapatillas Le Coq Sportif Omega.jpg",
    category: "Zapatillas",
    brand: "Le Coq Sportif",
    price: 90,
    countInStock: 600,
    description:
      "Las zapatillas Le Coq Sportif Omega ofrecen un estilo elegante y un rendimiento excepcional para tus actividades diarias.",
    rating: 4.6,
    numReviews: 300,
  },
  {
    name: "Fila Disruptor II",
    slug: "fila-disruptor-ii",
    image: "/images/Zapatillas Fila Disruptor II.jpg",
    category: "Zapatillas",
    brand: "Fila",
    price: 100,
    countInStock: 0,
    description:
      "Las zapatillas Fila Disruptor II destacan por su diseño robusto y su confort superior, perfectas para destacar en la calle.",
    rating: 4.4,
    numReviews: 450,
  },
];

export const sampleUsers: User[] = [
  {
    name: "Joe",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: true,
  },
  {
    name: "John",
    email: "user@example.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: false,
  },
];