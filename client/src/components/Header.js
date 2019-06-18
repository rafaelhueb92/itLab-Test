import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import home from "../assets/home.svg";
import carnaval from "../assets/eye-mask.svg";

export default function Header() {
  return (
    <header id="main-header">
      <div className="header-content">
        <Link to="/">
          <img height="30" width="30" src={home} alt="Home" />
        </Link>
        <Link to="/carnaval">
          <img
            height="30"
            width="30"
            src={carnaval}
            alt="Calcular Data do Carnaval"
          />
        </Link>
      </div>
    </header>
  );
}
