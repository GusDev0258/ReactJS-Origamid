import React from "react";
import styles from "../css/Produtos.module.css";
import { Link } from "react-router-dom";
import Head from './Head';

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((response) => response.json())
      .then((json) => setProdutos(json));
  }, []);

  if (produtos === null) return null;

  return (
    <section className={`${styles.produtos} animaLeft`}>
      <Head title="Ranek | Produtos" description="Página de produtos" />
      {produtos.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <h1 className={styles.nome}>{produto.nome}</h1>
          <p>R$ {produto.preco}</p>
          <img className={`animaSize`} src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
        </Link>
      ))}
    </section>
  );
};

export default Produtos;
