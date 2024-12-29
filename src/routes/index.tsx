import WhichOne from "../pages/which_one";
import { useWhichOne } from "../context";
import { which_one } from "../utils";
import ProductsRoutes from "./Products";

function CustomRoutes() {
  const { whichOne } = useWhichOne();
  if (whichOne) {
    if (whichOne === which_one.product) {
      return <ProductsRoutes />;
    } else {
      alert("yesss..");
    }
  } else {
    return <WhichOne />;
  }
}

export default CustomRoutes;
