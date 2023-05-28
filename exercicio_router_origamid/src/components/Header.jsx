import React from "react";
import styles from "../css/Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <NavLink className={styles.link} to="/" end>
            Produtos
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="/contato">
            Contatos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
