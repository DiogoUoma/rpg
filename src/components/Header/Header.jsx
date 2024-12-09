import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header_container}>
      <h1>Logo</h1>
      <nav>
        <Link to={"/recap"} className={styles.link}>
          Recapitulação
        </Link>
        <Link to={"https://www.youtube.com"} className={styles.link}>
          Download Arquivos
        </Link>
        <Link to={"https://www.youtube.com"} className={styles.link}>
          Criar Personagem
        </Link>
      </nav>
    </header>
  );
};

export default Header;
