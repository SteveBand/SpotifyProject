import React, { useContext } from "react";
import { Content } from "../context";
import "../topNav/topnavcss.css";

export const TopNav = () => {
  const { token } = useContext(Content);

  const redirect_url = "http://localhost:3000/";

  const logout = () => {
    window.localStorage.removeItem("token");
  };

  return (
    <div className="topnav-items">
      <div className="nav-log">
        <ul className="first-ul">
          {token && (
            <div className="btn">
              <li>
                <a href={redirect_url} onClick={logout}>
                  Log-out
                </a>
              </li>
            </div>
          )}

          <li style={{ width: "max-content" }}>
            <a href="https://www.spotify.com/us/signup" className="anchor">
              Register
            </a>
          </li>
        </ul>
      </div>
      <div className="right-section">
        <ul>
          <li style={{ width: "max-content" }}>
            <a href="#" className="anchor">
              Download
            </a>
          </li>
          <li style={{ width: "max-content" }}>
            <a href="#" className="anchor">
              Support
            </a>
          </li>
          <li style={{ width: "max-content" }}>
            <a href="#" className="anchor">
              Premium
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
