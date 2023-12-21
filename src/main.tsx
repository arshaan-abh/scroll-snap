import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
