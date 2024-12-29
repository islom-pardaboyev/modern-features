import { useParams } from "react-router-dom";
import { useGetSingleRecipeQuery } from "../../../store/api/recipes/get-single-recipe-api";
import { SingpleRecipe } from "../../../utils";
import { Clock, Users, Utensils } from "lucide-react";

function SingleRecipe() {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleRecipeQuery(id) as {
    data: SingpleRecipe;
    isLoading: boolean;
  };
  console.log(data);
  return (
    <section className="w-full h-screen bg-gradient-to-b flex overflow-x-auto items-center justify-center from-yellow-400 to-orange-500">
      {isLoading && (
        <div className="bg-white rounded-lg flex gap-5 p-5 w-[70vw] animate-pulse">
          <div className="w-full">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="flex items-center my-3 justify-between mt-2">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4 mx-2"></div>
              <div className ="h-4 bg-gray-200 rounded w-1/4"></div>
            </div>
            <div className="grid grid-cols-2 mt-2">
              <div>
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                <ul className="list-disc pl-5">
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-1"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-1"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </ul>
              </div>
              <div>
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                <ul className="list-disc pl-5">
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-1"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-1"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </ul>
              </div>
            </div>
          </div>
          <div className="h-48 w-40 bg-gray-200 rounded"></div>
        </div>
      )}
      {data && (
        <div className="bg-white rounded-lg flex gap-5 p-5 w-[70vw]">
          <div className="w-full">
            <b>{data.name}</b>
            <div className="flex items-center my-3 justify-between">
              <div className="rounded-full flex font-bold text-xs w-fit items-center border py-1 px-2">
                <p className="flex gap-2 items-center">
                  <Clock size={20} />
                  Prep:{" "}
                </p>
                {data.prepTimeMinutes}
              </div>
              <div className="rounded-full flex font-bold text-xs w-fit items-center border py-1 px-2">
                <p className="flex gap-2 items-center">
                  <Utensils size={20} />
                  Cook:{" "}
                </p>
                {data.cookTimeMinutes}
              </div>
              <div className="rounded-full flex font-bold text-xs w-fit items-center border py-1 px-2">
                <p className="flex gap-2 items-center">
                  <Users size={20} />
                  Serves:{" "}
                </p>
                {data.servings}
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div>
                <h2 className="font-bold">Ingredients:</h2>
                <ul className="list-disc pl-5">
                  {data.ingredients.map((ingredient, inx) => (
                    <li key={inx}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-bold">Instructions:</h2>
                <ul className="list-disc pl-5">
                  {data.instructions.map((ingredient, inx) => (
                    <li key={inx}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <img
            src={data.image}
            width={300}
            className="mx-auto object-cover"
            alt=""
          />
        </div>
      )}
    </section>
  );
}

export default SingleRecipe;
