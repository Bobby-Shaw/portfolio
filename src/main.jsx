import { createRoot } from "react-dom/client";
import App from "./App.jsx"
import ProjectPage from "./ProjectPage.jsx";
import "./index.css"

const root = createRoot(document.getElementById("root"))
root.render(
    <ProjectPage />
)