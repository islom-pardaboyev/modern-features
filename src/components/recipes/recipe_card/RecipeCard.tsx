import { useNavigate } from "react-router-dom";
import { SingpleRecipe } from "../../../utils";
import { Clock, Utensils } from "lucide-react";

function RecipeCard(recipe: SingpleRecipe, ) {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/${recipe.id}`)} className="bg-white group rounded-lg overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={recipe.image}
          className="group-hover:scale-110 duration-300"
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-end bg-gradient-to-b from-transparent to-black">
          <h1 className="font-bold text-lg text-white p-3">{recipe.name}</h1>
        </div>
      </div>
      <div className="p-3">
        <i>{recipe.cuisine}</i>
      </div>
      <div className="bg-zinc-100 flex items-center justify-between text-zinc-500 p-3">
        <div className="flex items-center gap-2">
          <Clock />
          <p>{recipe.prepTimeMinutes} minutes</p>
        </div>
        <div className="flex items-center gap-2">
          <Utensils />
          <p>{recipe.servings} servings</p>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
