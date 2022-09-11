import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "../cardsLoby/modal.css";
import { FaTimes } from "react-icons/fa";
import { Content } from "../../context";

export const Modal = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const { showModal, setShowModal, token } = useContext(Content);

  const authorization = {
    Method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleModal = () => {
    setShowModal(false);
    setData([]);
    setInput("");
  };

  const search = async () => {
    const artistSearch = await fetch(
      "https://api.spotify.com/v1/search?q=" + input + "&type=artist",
      authorization
    )
      .then((response) => response.json())
      .then((data) => {
        return data.artists.items[0].id;
      });

    console.log("artist ID is " + artistSearch);

    const albums = await fetch(
      "https://api.spotify.com/v1/artists/" +
        artistSearch +
        "/albums" +
        "?include_groups=album&market=US&limit=50",
      authorization
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data.items);
      });
  };

  useEffect(() => {}, []);

  useEffect(() => {}, [data]);

  useEffect(() => {}, [input]);

  //if (!showModal) return null;
  return ReactDOM.createPortal(
    <CSSTransition
      in={showModal}
      timeout={300}
      classNames="fibel"
      unmountOnExit
      mountOnEnter
    >
      <div className="modal-box">
        <div className="modal-container" variant="primary" dismissable>
          <button className="search-btn" type="button" onClick={handleModal}>
            <FaTimes />
          </button>
          <input
            type="text"
            placeholder={input}
            id="searchBar"
            onChange={handleChange}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                search();
              }
            }}
          />
          {data ? (
            data.map((item) => {
              console.log(item);
              const { id, images, name, external_urls } = item;
              return (
                <div className="card" id={id}>
                  <a href={external_urls.spotify} target="_blank">
                    {" "}
                    <div
                      className="img-holder"
                      style={{
                        backgroundImage: `url(${images[1].url})`,
                        backgroundRepeat: "no-repeat",
                        width: "12vw",
                        height: "22vh",
                      }}
                    ></div>
                  </a>
                  <p>{name}</p>
                </div>
              );
            })
          ) : (
            <p>Please Type an artist name</p>
          )}
        </div>
      </div>
    </CSSTransition>,
    document.body
  );
};
