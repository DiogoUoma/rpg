import React from "react";
import styles from "./RecapList.module.css";

import aventurasData from "./aventuras.json";

const RecapList = () => {
  const [aventuras, setAventura] = React.useState([]);

  React.useEffect(() => {
    setAventura(aventurasData);
  });

  return (
    <div className={styles.recap_container}>
      <h1>Recapitulação das aventuras</h1>
      <ul>
        {aventuras.map((aventura) => (
          <li key={aventura.id}>
            <h2>{aventura.nome_aventura}</h2>
            <p>{aventura.data}</p>
            <h3>{aventura.resumo}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecapList;
