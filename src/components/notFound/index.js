import React from "react";
import "./style.css";

function NotFound(props) {
  return (
    <div id="not-found">
      <h1>NÃO ENCONTRADO</h1>
      <img
        alt="unpluged"
        src="https://solarservicegroup.com.au/wp-content/uploads/2019/01/unplugged-vecotr-1500x500.png"
      />
      <h2>Algo de errado aconteceu, recarregue a página e tente novamente.</h2>
    </div>
  );
}

export default NotFound;
