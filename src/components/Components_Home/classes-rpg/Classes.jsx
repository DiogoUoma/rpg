import styles from "./Classes.module.css";

import mago from "../../../assets/classes-rpg/mago.png";
import barbaro from "../../../assets/classes-rpg/barbaro.png";
import bardo from "../../../assets/classes-rpg/bardo.png";
import druida from "../../../assets/classes-rpg/druida.png";
import feiticeiro from "../../../assets/classes-rpg/feiticeiro.png";
import ladrao from "../../../assets/classes-rpg/ladrao.png";
import livro from "../../../assets/livro-aberto.png";

const Classes = () => {
  return (
    <div className={styles.classes_container}>
      <h1 className={styles.classes_title}>Classes</h1>

      <div className={styles.card_container}>
        <div className={styles.slider} style={{ "--quantity": 6 }}>
          <div className={styles.card} style={{ "--position": 1 }}>
            <img src={mago} alt="classe mago" className={styles.class_icon} />
            <h2>Mago</h2>
          </div>
          <div className={styles.card} style={{ "--position": 2 }}>
            <img
              src={barbaro}
              alt="classe barbaro"
              className={styles.class_icon}
            />
            <h2>Barbaro</h2>
          </div>
          <div className={styles.card} style={{ "--position": 3 }}>
            <img src={bardo} alt="classe bardo" className={styles.class_icon} />
            <h2>Bardo</h2>
          </div>
          <div className={styles.card} style={{ "--position": 4 }}>
            <img
              src={druida}
              alt="classe druida"
              className={styles.class_icon}
            />
            <h2>Druida</h2>
          </div>
          <div className={styles.card} style={{ "--position": 5 }}>
            <img
              src={feiticeiro}
              alt="classe feiticeiro"
              className={styles.class_icon}
            />
            <h2>Feiticeiro</h2>
          </div>
          <div className={styles.card} style={{ "--position": 6 }}>
            <img
              src={ladrao}
              alt="classe ladrao"
              className={styles.class_icon}
            />
            <h2>Ladrao</h2>
          </div>
        </div>
        <div className={styles.model_book}>
          <img src={livro} alt="Livro aberto" />
        </div>
      </div>
    </div>
  );
};

export default Classes;
