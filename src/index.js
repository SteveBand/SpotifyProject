import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import { AppContent } from "./context";

export const Content = React.createContext();

export const Index = () => {
  return (
    <AppContent>
      <App />
    </AppContent>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
