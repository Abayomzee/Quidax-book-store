import React from "react";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "Components/Pages/Home/Index";
import Details from "Components/Pages/Details/Index";

interface Props {}
const Router: React.FC<Props> = () => {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default Router;

interface AnimatedProps {}
const AnimatedRoutes: React.FC<AnimatedProps> = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="details" element={<Details />}>
          <Route path=":id" element={<Details />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
