import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Website from "./Website.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Website />
  </StrictMode>
);
