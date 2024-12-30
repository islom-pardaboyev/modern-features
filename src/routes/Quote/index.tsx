import { useRoutes } from "react-router-dom";
import { Quote } from "../../pages";

function QuoteRoutes() {
  return useRoutes([
    {
      path: "/",
      element: <Quote />,
    },
  ]);
}

export default QuoteRoutes;
