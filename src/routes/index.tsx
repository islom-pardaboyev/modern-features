import { useRoutes } from "react-router-dom";
import { Home, ProductsFromCategory, SingleProduct } from "../pages";
import Header from "../components/header/Header";

function CustomRoutes() {
  return (
    <main>
      <Header />
      {useRoutes([
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/category/:category",
          element: <ProductsFromCategory />,
        },
        {
          path: "/:id",
          element: <SingleProduct />,
        },
      ])}
    </main>
  );
}

export default CustomRoutes;
