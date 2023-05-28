import React from "react";
import styles from "../css/Contato.module.css";

import foto from "../assets/contato.jpg";

const Contato = () => {
  return (
    <section className={`${styles.contato} animaLeft`}>
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato conosco</h1>
        <ul className={styles.dados}>
          <li>gustavohernandes0258@gmail.com</li>
          <li>(32) 98813-0258</li>
          <li>Rua São Pereneu Bascos, 865</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
