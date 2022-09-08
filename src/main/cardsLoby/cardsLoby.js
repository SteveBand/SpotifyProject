import React, { useEffect, useContext } from "react";
import { CardsHipHop, CardsMood, CardsRock, CardsUpdated } from "./spotifyApi";
import { Modal } from "../cardsLoby/modal";
import { SignIn } from "../spotifylogin";
import { Content } from "../../context";

export const CardsLoby = () => {
  const { showModal, setShowModal, token } = useContext(Content);

  if (token) {
    console.log(token);
  }
  useEffect(() => {}, [token]);
  return (
    <div>
      {!token ? (
        <SignIn />
      ) : (
        <>
          <CardsUpdated />
          <CardsMood />
          <CardsHipHop />
          <CardsRock />
          <Modal />
        </>
      )}
    </div>
  );
};
