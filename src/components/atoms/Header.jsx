import "../../assets/styles/Header.css"
import Foto from "../../assets/perfil.png";

function Header(){
    return(
        <header>
            <img src={Foto} alt="Foto de perfil"/>
           <info>
               <h1 className="name">
                   Emmanuel
               </h1>
               <h1 className="lastname">
                   Moreno Lopez
               </h1>

           </info>
            <contacts>
                <h3>
                    Telefono: +52 961-299-2741
                </h3>
                <h3>
                    Ubicacion:
                </h3>
                <h3>
                    Correo Electronico:
                </h3>
                <h3>
                    Repositorio en GitHub:
                </h3>
            </contacts>
        </header>
    );
}

export default Header;