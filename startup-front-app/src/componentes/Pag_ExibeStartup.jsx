import React from "react";
import Get_Startup from "./Get_Startup";

const Pag_ExibeStartup = () => {
    return (
        <div className="container mt-5">
            <h2 className="text-center">Catálogo de Startups</h2>
            <p className="lead text-center">Explore inovações, descubra soluções e conecte-se ao futuro com as startups em nosso catálogo.</p>

            <Get_Startup></Get_Startup>

            <p style={{ textAlign: 'center' }}>Obrigado por usar Start View</p>        
        </div>
    );
};

export default Pag_ExibeStartup;
