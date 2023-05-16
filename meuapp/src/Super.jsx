import React from "react";
import { GlobalContext } from "./GlobalContext";

const Super = () => {
  const global = React.useContext(GlobalContext);
  console.log(global);
  if (global.dados === null) {
    return null;
  }
  return (
    <div>
      {global.dados.map((produto) => {
        return <li key={produto.id}>{produto.nome}</li>
      })}
      <button onClick={global.limparDados}>
        Limpar Dados
      </button>
    </div>
  );
};
export default Super;
