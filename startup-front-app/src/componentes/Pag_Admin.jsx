import React from "react";

import StartupList from "./Adm_startup_list";
import StartupListativas from "./Adm_startup_ativas_list";

const Pag_Admin = () =>{
    
    
    return (
        <div>

        <StartupList></StartupList>

        <StartupListativas></StartupListativas>

        <p style={{ textAlign: 'center' }}>Start View LTDA</p>    

        </div>
    );
}

export default Pag_Admin;