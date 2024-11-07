import React from "react";
import '../assets/css/components/404.css'
import erro404 from '../assets/img/catiorrinho404.svg';


const Page404 = () => {
    return(
        <main className="container flex flex--centro flex--coluna">
            <img className="catiorrinho-imagem" src={erro404} alt="Ilustração Catiorinho" />
            <p className="naoencontrado-texto">
                Au, au, foi mau!
            </p>
            <p className="naoencontrado-texto">
                Página não encontrada!
            </p>
        </main>
    )
}

export default Page404;