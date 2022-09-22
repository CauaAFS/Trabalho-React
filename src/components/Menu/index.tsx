import "./style.css" 
import {Link} from"react-router-dom";

export const Menu = () => {
   return( 
<>
<header>
    <h1 className="logo">BUGATTI CHIRON</h1>
    <nav className="menu"><ul>

            <Link to='/'>Home</Link>
            <Link to='/sobre'>Sobre</Link>
            <Link to='/contato'>Contato</Link>
         </ul>
    </nav>
</header>
</>
);
};

