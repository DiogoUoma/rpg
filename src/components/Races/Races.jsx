import { useState, useEffect } from "react";

import styles from "./Races.module.css";
import Racesdata from "./Racesdata.json";

const Races = () => {
  const [races, setRaces] = useState([]);

  useEffect(() => {
    setRaces(Racesdata);
  }, []);

  return (
    <div className={styles.races_container}>
      <h1 className={styles.races_title}>Races</h1>
      <div>
        <ul className={styles.races_list}>
          {races.map((race, index) => (
            <li key={race.id} className={styles.races_list_item}>
              {index % 2 === 0 ? (
                <>
                  <img
                    src={race.imagem}
                    alt={race.raca}
                    className={styles.races_list_img}
                  />
                  <div className={styles.races_list_text}>
                    <h1>{race.raca} </h1>
                    <h2>{race.descricao}</h2>
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.races_list_text}>
                    <h1>{race.raca} </h1>
                    <h2>{race.descricao}</h2>
                  </div>
                  <img
                    src={race.imagem}
                    alt={race.raca}
                    className={styles.races_list_img}
                  />
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Races;
