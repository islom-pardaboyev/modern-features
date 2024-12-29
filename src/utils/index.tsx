export const navbarContext = [
  {
    name: "Products",
    link: "/",
  },
  {
    name: "Todo",
    link: "/todo",
  },
  {
    name: "Reciept",
    link: "/reciept",
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
  },
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
  weight: number
}

export type Products = {
  products: SingleProductContext[];
  total: number;
  limit: number
}