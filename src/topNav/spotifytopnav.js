import React, { useContext } from "react";
import { Content } from "../context";

import "../index.css";
import { styles } from "./spotifyTopNavStyles";
export const TopNav = () => {
  const { token } = useContext(Content);

  const redirect_url = "http://localhost:3000/";

  const logout = () => {
    window.localStorage.removeItem("token");
  };

  const mouseOver = (event) => {
    event.target.style.fontSize = "105%";
    event.target.style.color = "white";
  };

  const mouseLeave = (event) => {
    event.target.style.fontSize = "100%";
    event.target.style.color = "#a7a7a7";
  };

  return (
    <div className="topnav-items" style={styles.topNavItems}>
      <div className="nav-log" style={styles.navLog}>
        <ul style={styles.firstUl}>
          {token && (
            <div style={styles.buttonDiv}>
              <li style={styles.buttonLi}>
                <a
                  href={redirect_url}
                  onClick={logout}
                  style={styles.buttonAnchor}
                >
                  Log-out
                </a>
              </li>
            </div>
          )}

          <li
            style={{ width: "max-content" }}
            onMouseOver={mouseOver}
            onMouseLeave={mouseLeave}
          >
            <a href="https://www.spotify.com/us/signup" style={styles.Anchors}>
              Register
            </a>
          </li>
        </ul>
      </div>
      <div style={styles.secondDiv}>
        <ul style={styles.secondUl}>
          <li
            style={{ width: "max-content" }}
            onMouseOver={mouseOver}
            onMouseLeave={mouseLeave}
          >
            <a href="#" style={styles.Anchors}>
              Download
            </a>
          </li>
          <li
            style={{ width: "max-content" }}
            onMouseOver={mouseOver}
            onMouseLeave={mouseLeave}
          >
            <a href="#" style={styles.Anchors}>
              Support
            </a>
          </li>
          <li
            style={{ width: "max-content" }}
            onMouseOver={mouseOver}
            onMouseLeave={mouseLeave}
          >
            <a href="#" style={styles.Anchors}>
              Premium
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
