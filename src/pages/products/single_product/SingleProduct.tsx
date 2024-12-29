import { useParams } from "react-router-dom";
import { SingleProductContext } from "../../../utils";
import { Rate } from "antd";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel";
import { Card, CardContent } from "../../../components/ui/card";
import { pulsar } from "ldrs";
import { useGetProductByIDQuery } from "../../../store/api/products/get-product-bg-id-api";

pulsar.register();

function SingleProduct() {
  const { id } = useParams();
  const { data, isLoading } = useGetProductByIDQuery(id) as {
    data: SingleProductContext;
    isLoading: boolean;
  };
  return (
    <section className="mt-10 container">
      {isLoading && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <l-pulsar size="40" speed="1.75" color="black"></l-pulsar>
        </div>
      )}
      {data && (
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-6 grid gap-3 grid-cols-5">
            <div className="col-span-1">
              {data.images.map((image, inx) => (
                <img
                  className="h-[100px] w-full object-contain cursor-pointer"
                  src={image}
                  key={inx}
                />
              ))}
            </div>
            <div className="col-span-4">
              <Carousel className="w-full">
                <CarouselContent>
                  {data.images.map((image, inx) => (
                    <CarouselItem key={inx}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6">
                            <img src={image} alt="" />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
          <div className="col-span-6">
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-2xl mb-5">{data.title}</h1>
              <p>{data.brand}</p>
            </div>
            <p className="text-zinc-500 text-xs">{data.description}</p>
            <div className="flex items-center justify-between my-3">
              <p className="font-medium text-xl">
                {data.price.toLocaleString()}$
              </p>
              <div className="flex items-center gap-2">
                <Rate disabled defaultValue={data.rating} />
                <p>{data.rating}</p>
              </div>
            </div>

            <div className="flex text-zinc-500 items-end flex-col my-5">
              <p>Weight: {data.weight}kg</p>
              <p>Shipping: {data.shippingInformation}</p>
              <p>Tags: {data.tags.join(", ")}</p>
              <p>Warranty: {data.warrantyInformation}</p>
              <p>Return Policy: {data.returnPolicy}</p>
              <p>Shipping: {data.shippingInformation}</p>
            </div>
            <ul>
              {Object.entries(data.dimensions).map(([key, inx]) => (
                <li key={key} className="flex gap-2">
                  <p className="capitalize">{key}:</p>
                  <p>{inx}</p>
                </li>
              ))}
            </ul>
            <a
              href="#reviews"
              className="hover:underline cursor-pointer text-end"
            >
              Reviews: {data.reviews.length}
            </a>
          </div>
        </div>
      )}
      {data && (
        <div
          id="reviews"
          className="h-screen mt-10 scroll-mt-10 flex flex-col gap-3"
        >
          <h1 className="text-center font-semibold my-5 text-3xl">Reviews</h1>
          <div className="grid grid-cols-3 gap-4">
            {data &&
              data.reviews.map((review, inx) => (
                <div key={inx} className="border p-2 rounded-lg">
                  <header className="flex items-center justify-between">
                    <div className="flex gap-3">
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col gap-0">
                        <p className="font-bold text-sm">
                          {review.reviewerName}
                        </p>
                        <p className="font-bold text-xs text-zinc-500">
                          {review.reviewerEmail}
                        </p>
                      </div>
                    </div>
                    <Rate
                      className="scale-75"
                      disabled
                      defaultValue={review.rating}
                    />
                  </header>
                  <p className="mt-4 px-2">{review.comment}</p>
                </div>
              ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default SingleProduct;
