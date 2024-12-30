import WhichOne from "../pages/which_one";
import { useWhichOne } from "../context";
import { which_one } from "../utils";
import ProductsRoutes from "./Products";
import RecipesRoutes from "./Recipes";
import QuoteRoutes from "./Quote";

function CustomRoutes() {
  const { whichOne } = useWhichOne();
  if (whichOne) {
    if (whichOne === which_one.product) {
      return <ProductsRoutes />;
    } else if (whichOne === which_one.recipes) {
      return <RecipesRoutes/>
    }else {
      return <QuoteRoutes/>
    }
  } else {
    return <WhichOne />;
  }
}

export default CustomRoutes;
