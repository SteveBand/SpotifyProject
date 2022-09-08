import React from "react";
import { Mainsite } from "./homepage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Content = React.createContext();

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainsite />} />
      </Routes>
    </BrowserRouter>
  );
};
