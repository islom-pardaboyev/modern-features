import { useRoutes } from "react-router-dom";
import { RecipesHome, SingleRecipe } from "../../pages";

function RecipesRoutes() {
  return useRoutes([
    {
      path: "/",
      element: <RecipesHome />,
    },
    {
      path: "/:id",
      element: <SingleRecipe />,
    },
  ]);
}

export default RecipesRoutes;
