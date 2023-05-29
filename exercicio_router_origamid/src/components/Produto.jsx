import React from "react";
import styles from "../css/Produto.module.css";
import { useParams } from "react-router-dom";
import Head from "./Head";

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchData(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (error) {
        setError("Um erro ocorreu");
      } finally {
        setLoading(false);
      }
    }
    fetchData(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  if (produto === null) {
    return null;
  }
  return (
    <section className={styles.produto + " animaLeft"}>
      <Head
        title={`Ranek | ${produto.nome}`}
        description={`Página do produto ${produto.nome}`}
      />
      <div>
        {produto.fotos.map((foto) => (
          <img key={foto.src} src={foto.src} alt={foto.titulo} />
        ))}
      </div>
      <div>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>R$ {produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  );
};

export default Produto;
