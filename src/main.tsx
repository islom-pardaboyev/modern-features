import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index.tsx";
import "ldrs/ring";
import { WhichOneProvider } from "./context/index.tsx";
import { Toaster } from "./components/ui/sonner.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <WhichOneProvider>
        <Toaster theme="dark"/>
        <App />
      </WhichOneProvider>
    </Provider>
  </BrowserRouter>
);
