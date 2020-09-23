import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//Scrolla a pagina pro topo nas transicoes entre paginas
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}