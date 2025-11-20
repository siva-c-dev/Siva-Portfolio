import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App, { ScrollToTop } from "./App";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer";

createRoot(document.getElementById("root")).render(
  <BrowserRouter >
  <StrictMode>
  <ScrollToTop />
    <App />
    <Footer />
  </StrictMode>
  </BrowserRouter>
);
