import { useNavigate, useParams } from "react-router-dom";
import { useGetProductsByCategoryNameQuery } from "../../store/api/get-products-by-category-name-api";
import { MoveLeft } from "lucide-react";
import { Products } from "../../utils";
import ProductCard from "../../components/productCart/ProductCard";

function ProductsFromCategory() {
  const navigate = useNavigate();
  const { category } = useParams();
  const { data, isLoading } = useGetProductsByCategoryNameQuery(
    category?.split(" ").join("-").toLowerCase()
  ) as { data: Products; isLoading: boolean };
  console.log(data);
  return (
    <section className="container">
      <div
        onClick={() => navigate(-1)}
        className="bg-zinc-100 hover:opacity-70 cursor-pointer gap-4 my-5 flex w-fit p-3"
      >
        <MoveLeft />
        <h1>{category}</h1>
      </div>
      {isLoading ? (
        <div className="grid grid-cols-4 gap-4">
          {Array(6)
            .fill(null)
            .map((_, inx) => (
              <div
                key={inx}
                className="border hover:opacity-80 duration-3000 rounded-md animate-pulse"
              >
                <div className="h-24 bg-gray-200"></div>
                <div className="p-3 flex justify-between gap-5">
                  <div>
                    <div className="h-4 bg-gray-200 w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 w-1/2"></div>
                  </div>
                  <div className="h-4 bg-gray-200 w-1/4"></div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        data && (
          <div className="grid grid-cols-4 gap-4">
            {data.products.map((product, inx) => (
              <ProductCard key={inx} data={product} isLoading={isLoading} />
            ))}
          </div>
        )
      )}
    </section>
  );
}

export default ProductsFromCategory;
