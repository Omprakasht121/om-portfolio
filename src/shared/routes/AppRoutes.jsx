import { Route, Routes } from "react-router-dom";
import About from "../../modules/landing page/pages/About";
import Skills from "../../modules/landing page/pages/Skills";
import Hero from "../../modules/landing page/pages/Hero";
export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Hero/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/skills" element={<Skills/>} />
        </Routes>
    );
}