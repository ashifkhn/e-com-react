import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Gaming PC",
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "50000",
    categoryName: "PC",
    rating: 4,
    fastDelivery: false,
    inStock: true
  },
  {
    _id: uuid(),
    title: "PC",
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80",
    price: "30000",
    categoryName: "PC",
    rating: 3,
    fastDelivery: true,
    inStock: true
  },
  {
    _id: uuid(),
    title: "Laptop",
    image: "https://images.unsplash.com/photo-1640955014216-75201056c829?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    price: "10000",
    categoryName: "Laptop",
    rating: 4.2,
    fastDelivery: false,
    inStock: true
  },
  {
    _id: uuid(),
    title: "HighEnd-Laptop",
    image: "https://images.unsplash.com/photo-1640955014216-75201056c829?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    price: "15000",
    categoryName: "Laptop",
    rating: 3.8,
    fastDelivery: true,
    inStock: false
  },
  {
    _id: uuid(),
    title: "HighEnd-Processor",
    image: "https://images.unsplash.com/photo-1591799265444-d66432b91588?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    price: "25000",
    categoryName: "Processor",
    rating: 2.5,
    fastDelivery: false,
    inStock: true
  },
  {
    _id: uuid(),
    title: "Accessories",
    image: "https://images.unsplash.com/photo-1577375729078-820d5283031c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    price: "35000",
    categoryName: "Processor",
    rating: 4.9,
    fastDelivery: false,
    inStock: true

  },
  {
    _id: uuid(),
    title: "Accessories",
    image: "https://images.unsplash.com/photo-1588103645580-73bc0b1bc230?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "5000",
    categoryName: "Processor",
    rating: 4.4,
    fastDelivery: true,
    inStock: true,
  },
  {
    _id: uuid(),
    title: "Accessories",
    image: "https://images.unsplash.com/photo-1588103645580-73bc0b1bc230?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "7000",
    categoryName: "Processor",
    rating: 5,
    fastDelivery: false,
    inStock: true
  },
  {
    _id: uuid(),
    title: "Accessories",
    image: "https://images.unsplash.com/photo-1588103645580-73bc0b1bc230?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "6000",
    categoryName: "Processor",
    fastDelivery: false,
    inStock: true
  },
  {
    _id: uuid(),
    title: "Accessories",
    image: "https://images.unsplash.com/photo-1588103645580-73bc0b1bc230?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "9000",
    categoryName: "Processor",
    rating: 4.7,
    fastDelivery: false,
    inStock: true
  },
  {
    _id: uuid(),
    title: "Accessories",
    image: "https://images.unsplash.com/photo-1588103645580-73bc0b1bc230?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "13000",
    categoryName: "Processor",
    rating: 3.6,
    fastDelivery: true,
    inStock: true
  },
  {
    _id: uuid(),
    title: "Accessories",
    image: "https://images.unsplash.com/photo-1588103645580-73bc0b1bc230?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "17500",
    categoryName: "Processor",
    fastDelivery: false,
    inStock: true
  },
  {
    _id: uuid(),
    title: "Accessories",
    image: "https://images.unsplash.com/photo-1588103645580-73bc0b1bc230?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "500",
    categoryName: "Processor",
    rating: 3.2,
    fastDelivery: true,
    inStock: false
  },
  {
    _id: uuid(),
    title: "Accessories",
    image: "https://images.unsplash.com/photo-1588103645580-73bc0b1bc230?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "700",
    categoryName: "Processor",
    rating: 1,
    fastDelivery: true,
    inStock: true
  },
  {
    _id: uuid(),
    title: "Accessories",
    image: "https://images.unsplash.com/photo-1588103645580-73bc0b1bc230?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "1350",
    categoryName: "Processor",
    rating: 5,
    fastDelivery: false,
    inStock: false
  },
  {
    _id: uuid(),
    title: "Accessories",
    image: "https://images.unsplash.com/photo-1588103645580-73bc0b1bc230?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "5000",
    categoryName: "Processor",
    rating: 1,
    fastDelivery: false,
    inStock: true
  },
  {
    _id: uuid(),
    title: "Accessories",
    image: "https://images.unsplash.com/photo-1588103645580-73bc0b1bc230?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "9000",
    categoryName: "Processor",
    rating: 2.1,
    fastDelivery: false,
    inStock: true
  },
  {
    _id: uuid(),
    title: "Accessories",
    image: "https://images.unsplash.com/photo-1588103645580-73bc0b1bc230?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "10000",
    categoryName: "Processor",
    rating: 5,
    fastDelivery: false,
    inStock: true
  },
];
