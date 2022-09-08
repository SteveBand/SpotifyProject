import React, { useContext, useState } from "react";
import styles from "./spotifySideNavStyles";
import { Content } from "../context";
import { Link } from "react-router-dom";

import "../sidenav/spotifySideNavCss.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faSquarePlus,
  faFolderOpen,
  faMagnifyingGlass,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

export const SideBar = () => {
  const { setShowModal } = useContext(Content);

  function onMouseOver(event) {
    event.target.style.color = "white";
  }

  function onMouseLeave(event) {
    event.target.style.color = "#a39da2";
  }

  const handleModalClick = () => {
    setShowModal(true);
  };

  return (
    <div style={styles.sideNav}>
      <div className="logo" style={styles.logo}>
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
          alt="Spotify"
          style={styles.logoImg}
        />
      </div>

      <div className="navItems" style={styles.navItems}>
        <ul style={styles.navItemsUl}>
          <li style={{ padding: "0.75rem 0" }}>
            <Link
              to="/"
              style={styles.ulAnchor}
              onMouseOver={onMouseOver}
              onMouseLeave={onMouseLeave}
            >
              Home
              <FontAwesomeIcon
                icon={faHouse}
                style={{ width: "20", paddingLeft: "12" }}
              />
            </Link>
          </li>
          <li style={{ padding: "0.75rem 0" }}>
            <a
              href="#"
              style={styles.ulAnchor}
              onMouseOver={onMouseOver}
              onMouseLeave={onMouseLeave}
              onClick={handleModalClick}
              id="search"
            >
              Search
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ maxWidth: "20", paddingLeft: "14" }}
              />
            </a>
          </li>
          <li style={{ padding: "0.75rem 0" }}>
            <a
              href="#"
              to="library"
              style={styles.ulAnchor}
              onMouseOver={onMouseOver}
              onMouseLeave={onMouseLeave}
            >
              Library
              <FontAwesomeIcon
                icon={faFolderOpen}
                style={{ maxWidth: "20", paddingLeft: "14" }}
              />
            </a>
          </li>
        </ul>

        <ul style={{ listStyle: "none", paddingTop: "2.5rem" }}>
          <li style={{ padding: "0.65rem 0" }}>
            <a
              href="#"
              style={styles.ulAnchor}
              onMouseOver={onMouseOver}
              onMouseLeave={onMouseLeave}
            >
              Create playlist
              <FontAwesomeIcon
                icon={faSquarePlus}
                style={{ maxWidth: "20", paddingLeft: "8" }}
              />
            </a>
          </li>
          <li style={{ padding: "0.65rem 0" }}>
            <a
              href="#"
              style={styles.ulAnchor}
              onMouseOver={onMouseOver}
              onMouseLeave={onMouseLeave}
            >
              Liked songs
              <FontAwesomeIcon
                icon={faHeart}
                style={{ maxWidth: "20", paddingLeft: "10" }}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
