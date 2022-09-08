import React, { useEffect, useState } from "react";

export const Content = React.createContext();

export const AppContent = ({ children }) => {
  const [token, setToken] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, [token]);
  return (
    <Content.Provider value={{ showModal, setShowModal, token }}>
      {children}
    </Content.Provider>
  );
};
