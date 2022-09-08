import React from "react";
import { SideBar } from "./sidenav/spotifySideNav";
import { TopNav } from "./topNav/spotifytopnav";
import { CardsLoby } from "./main/cardsLoby/cardsLoby";

export function Mainsite() {
  return (
    <div>
      <TopNav />
      <SideBar />
      <CardsLoby />
    </div>
  );
}
