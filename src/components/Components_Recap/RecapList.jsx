import React from "react";

import aventurasData from "./aventuras.json";

const RecapList = () => {
  const [aventuras, setAventura] = React.useState([]);

  React.useEffect(() => {
    setAventura(aventurasData);
  });

  return (
    <div>
      <h1>Recaptulação das aventuras</h1>
      <ul>
        {aventuras.map((aventura) => (
          <li key={aventura.id}>
            <h2>{aventura.nome_aventura}</h2>
            <p>{aventura.data}</p>
            <p>{aventura.descricao}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecapList;
