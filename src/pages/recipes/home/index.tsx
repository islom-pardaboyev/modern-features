import { Search } from "lucide-react";
import { Input } from "../../../components/ui/input";
import { useGetAllRecipesQuery } from "../../../store/api/recipes/get-all-recipes-api";
import { RecipesDataContext } from "../../../utils";
import { ChangeEvent, useEffect, useState } from "react";
import { useGetSearchedRecipesQuery } from "../../../store/api/recipes/get-searched-recipes-api";
import RecipeCard from "../../../components/recipes/recipe_card/RecipeCard";

function RecipesHome() {
  const [searchedText, setSearchedText] = useState<string>();
  const { data } = useGetAllRecipesQuery(0);
  const { data: searchedData } = useGetSearchedRecipesQuery(searchedText);
  const [mappingData, setMappingData] = useState<RecipesDataContext>();
  useEffect(() => {
    setMappingData(data);
  }, [data]);
  useEffect(() => {
    if (searchedText) {
      setMappingData(searchedData);
    } else {
      setMappingData(data);
    }
  }, [searchedText, searchedData, data]);
  return (
    <section className="w-full h-screen flex flex-col overflow-scroll items-center  bg-gradient-to-b from-yellow-400 to-orange-500">
      <div className="flex flex-col items-center mt-10">
        <h1 className="capitalize text-3xl font-bold text-white mb-5">
          recipes app
        </h1>
        <div className="flex items-center bg-white rounded-full px-3 py-2">
          <Search />
          <Input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearchedText(e.target.value)
            }
            className="border-none w-[300px]"
            placeholder="Search recipes..."
          />
        </div>
      </div>
      {mappingData && (
        <div className="container py-10 grid grid-cols-3 gap-5">
          {mappingData.recipes.map((recipe, inx) => (
            <RecipeCard key={inx} {...recipe} />
          ))}
        </div>
      )}
    </section>
  );
}

export default RecipesHome;
