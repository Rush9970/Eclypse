import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DesktopHome } from "./screens/DesktopHome";
import { CheckoutPage } from "./screens/CheckoutPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<DesktopHome />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Router>
  </StrictMode>
);