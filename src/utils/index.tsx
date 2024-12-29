import { Check, ReceiptIcon, ShoppingBasket } from "lucide-react";

export const navbarContext = [
  {
    name: "Home",
    link: "/",
  },
];

export type categoryContext = {
  name: string;
  slug: string;
  url: string;
};

export type SingleProductContext = {
  availabilityStatus: string;
  brand: string;
  category: string;
  description: string;
  dimensions: {
    depth: string;
    height: string;
    width: string;
  };
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  returnPolicy: string;
  reviews: {
    comment: string;
    date: string;
    rating: number;
    reviewerEmail: string;
    reviewerName: string;
  }[];
  shippingInformation: string;
  sku: string;
  stock: number;
  tags: string[];
  thumbnail: string;
  title: string;
  warrantyInformation: string;
  weight: number;
};

export type Products = {
  products: SingleProductContext[];
  total: number;
  limit: number;
};

export const WhichOneContext = [
  {
    name: "product",
    desc: "lorem ipsum dolor sit amet, consectetur adip",
    icon: <ShoppingBasket className="size-20" />,
  },
  {
    name: "reciept",
    desc: "lorem ipsum dolor sit amet, consectetur adip",
    icon: <ReceiptIcon className="size-20"  />,
  },
  {
    name: "todo",
    desc: "lorem ipsum dolor sit amet, consectetur adip",
    icon: <Check className="size-20" />,
  },
];

export enum which_one  {
  product = "product",
  reciept = "reciept",
  todo = "todo",
}