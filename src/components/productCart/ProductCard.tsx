import { useNavigate } from "react-router-dom";
import { SingleProductContext } from "../../utils";

interface ProductCardProps {
  data: SingleProductContext;
  isLoading: boolean;
}

function ProductCard({ data, isLoading }: ProductCardProps) {
  const navigate = useNavigate();
  if (isLoading) {
    return (
      <div className="border hover:opacity-80 duration-3000 rounded-md animate-pulse">
        <div className="h-24 bg-gray-200"></div>
        <div className="p-3 flex justify-between gap-5">
          <div>
            <div className="h-4 bg-gray-200 w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 w-1/2"></div>
          </div>
          <div className="h-4 bg-gray-200 w-1/4"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        onClick={() => navigate(`/${data.id}`)}
        className="border hover:opacity-80 duration-3000 rounded-md"
      >
        <img
          src={data.images[0]}
          className="size-96 border-b drop-shadow-lg object-contain"
          alt=""
        />
        <div className="p-3 flex justify-between gap-5">
          <div>
            <h1 className="font-semibold line-clamp-1">{data.title}</h1>
            <p className="text-zinc-500">{data.category}</p>
          </div>
          <p className="font-bold">${data.price}</p>
        </div>
      </div>
    );
  }
}

export default ProductCard;
