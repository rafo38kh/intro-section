import { useState } from "react";
import Dropdown from "./Dropdown";
import DesktopMenu from "./DesktopMenu";

import snap from "../images/logo.svg";
import menuIcon from "../images/icon-menu.svg";
import closeIcon from "../images/icon-close-menu.svg";

export default function Navigation() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="w z-50 mx-auto flex w-full max-w-[110rem] items-center justify-between bg-almostWhite p-4 lg:justify-center">
        <img className="lg:h-10" src={snap} alt="snap-logo" />
        <DesktopMenu />
        <button
          className="lg:hidden"
          onClick={() => setToggle((prevState) => !prevState)}
        >
          <img src={toggle ? closeIcon : menuIcon} alt="menu-icon" />
        </button>
      </div>
      {toggle && <Dropdown />}
    </>
  );
}
