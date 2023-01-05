import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { LogoIcon } from "../theme";
import "./Header.css";

export default function Header() {
  const onClickSearch = () => {
    console.log("abc");
  };

  return (
    <div className="headerContainer">
      <div className="logoBox">
        <img src={LogoIcon} alt="Logo Icon" className="logoImg" />
      </div>
      <div className="searchBox">
        <input type="text" placeholder="Tìm kiếm ..." className="inputBox" />
        <div className="searchButtonBox" onClick={onClickSearch}>
          Tìm kiếm
        </div>
      </div>
      <div className="cartBox">
        <FaShoppingCart className="cartIcon" />
        <div className="quantityProductBox">0</div>
      </div>
    </div>
  );
}
