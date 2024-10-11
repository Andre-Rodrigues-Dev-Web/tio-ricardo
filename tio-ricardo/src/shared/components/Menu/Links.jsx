import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <ul className="links">
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/sobre-nos"}>Conheça o Tio Ricardo</Link>
      </li>
      <li>
        <Link to={"/playlist"}>Composições</Link>
      </li>
      <li>
        <Link to={"/"}>Agenda</Link>
      </li>
      <li>
        <Link to={"/galeria-de-fotos"}>Galeria de Fotos</Link>
      </li>
      <li>
        <Link to={"/"}>Blog</Link>
      </li>
      <li>
        <Link to={"/contato"}>Contato</Link>
      </li>
    </ul>
  );
};

export default Links;
