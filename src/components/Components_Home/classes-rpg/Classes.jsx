import styles from "./Classes.module.css";

import rogue from "../../../assets/classes-rpg/rogue.png";
import arcanist from "../../../assets/classes-rpg/arcanist.png";
import chemerist from "../../../assets/classes-rpg/chemerist.png";
import weaponmaster from "../../../assets/classes-rpg/weaponmaster.png";
import spiritist from "../../../assets/classes-rpg/spiritist.png";
import sharpshooter from "../../../assets/classes-rpg/sharpshooter.png";
import tinkerer from "../../../assets/classes-rpg/tinkerer.png";
import loremaster from "../../../assets/classes-rpg/loremaster.png";
import orator from "../../../assets/classes-rpg/orator.png";
import wayfarer from "../../../assets/classes-rpg/wayfarer.png";
import darkblade from "../../../assets/classes-rpg/darkblade.png";
import fury from "../../../assets/classes-rpg/fury.png";
import entropist from "../../../assets/classes-rpg/entropist.png";
import guardian from "../../../assets/classes-rpg/guardian.png";

import livro from "../../../assets/livro-aberto.png";

const Classes = () => {
  return (
    <div className={styles.classes_container}>
      <h1 className={styles.classes_title}>Classes</h1>

      <div className={styles.card_container}>
        <div className={styles.slider} style={{ "--quantity": 14 }}>
          <div className={styles.card} style={{ "--position": 1 }}>
            <img src={rogue} alt="classe rogue" className={styles.class_icon} />
            <h2>ROGUE</h2>
          </div>
          <div className={styles.card} style={{ "--position": 2 }}>
            <img
              src={arcanist}
              alt="classe arcanist"
              className={styles.class_icon}
            />
            <h2>ARCANIST</h2>
          </div>
          <div className={styles.card} style={{ "--position": 3 }}>
            <img
              src={chemerist}
              alt="classe chemerist"
              className={styles.class_icon}
            />
            <h2>CHEMERIST</h2>
          </div>
          <div className={styles.card} style={{ "--position": 4 }}>
            <img
              src={weaponmaster}
              alt="classe weapon master"
              className={styles.class_icon}
            />
            <h2>WEAPONMASTER</h2>
          </div>
          <div className={styles.card} style={{ "--position": 5 }}>
            <img
              src={spiritist}
              alt="classe spiritist"
              className={styles.class_icon}
            />
            <h2>SPIRITIST</h2>
          </div>
          <div className={styles.card} style={{ "--position": 6 }}>
            <img
              src={sharpshooter}
              alt="classe sharpshooter"
              className={styles.class_icon}
            />
            <h2>SHARPSHOOTER</h2>
          </div>
          <div className={styles.card} style={{ "--position": 7 }}>
            <img
              src={tinkerer}
              alt="classe tinkerer"
              className={styles.class_icon}
            />
            <h2>TINKERER</h2>
          </div>
          <div className={styles.card} style={{ "--position": 8 }}>
            <img
              src={loremaster}
              alt="classe loremaster"
              className={styles.class_icon}
            />
            <h2>LOREMASTER</h2>
          </div>
          <div className={styles.card} style={{ "--position": 9 }}>
            <img
              src={orator}
              alt="classe orator"
              className={styles.class_icon}
            />
            <h2>ORATOR</h2>
          </div>
          <div className={styles.card} style={{ "--position": 10 }}>
            <img
              src={wayfarer}
              alt="classe wayfarer"
              className={styles.class_icon}
            />
            <h2>WAYFARER</h2>
          </div>
          <div className={styles.card} style={{ "--position": 11 }}>
            <img
              src={darkblade}
              alt="classe darkblade"
              className={styles.class_icon}
            />
            <h2>DARKBLADE</h2>
          </div>
          <div className={styles.card} style={{ "--position": 12 }}>
            <img src={fury} alt="classe fury" className={styles.class_icon} />
            <h2>FURY</h2>
          </div>
          <div className={styles.card} style={{ "--position": 13 }}>
            <img
              src={entropist}
              alt="classe entropist"
              className={styles.class_icon}
            />
            <h2>ENTROPIST</h2>
          </div>
          <div className={styles.card} style={{ "--position": 14 }}>
            <img
              src={guardian}
              alt="classe guardian"
              className={styles.class_icon}
            />
            <h2>GUARDIAN</h2>
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
