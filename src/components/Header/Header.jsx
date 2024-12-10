import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScoll = window.scrollY;

    if (currentScoll > lastScrollY) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }

    setLastScrollY(currentScoll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`header_container ${showHeader ? "visible" : "hidden"}`}>
      <nav>
        <Link to={"/"} className="link">
          Logo
        </Link>
        <Link to={"/recap"} className="link">
          Recapitulação
        </Link>
        <Link to={"/criapersonagem"} className="link">
          Criar Personagem
        </Link>
        <Link to={"/mestre"} className="link">
          Area do Mestre
        </Link>
      </nav>
    </header>
  );
};

export default Header;
