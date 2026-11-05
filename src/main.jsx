import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop.jsx";
import App from "./App.jsx"
import ProjectPage from "./ProjectPage.jsx";
import "./index.css"

const root = createRoot(document.getElementById("root"))
root.render(
    <BrowserRouter>
        <ScrollToTop />
        <Routes>
            <Route path="/" element={ <App/> } />
            <Route path="/project/:id" element={ <ProjectPage /> } />
        </Routes>
    </BrowserRouter>
)