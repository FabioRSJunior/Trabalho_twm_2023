import React from "react";
import StartupForm from "./form_cadastra_startup";

const Pag_CadastraStartup = () => {

    return (
        <div>
            <div class="container mt-5">
                <h2 class="text-center">O Que Você Ganha ao Cadastrar Sua Startup:</h2>
                <div class="row mt-4">
                    <div class="col-md-6">
                        <h4>Visibilidade Instantânea:</h4>
                        <p>Ao se cadastrar, sua startup se torna parte de um catálogo digital acessível a empresas em busca de inovação. Ganhe visibilidade instantânea no cenário empreendedor.</p>
                    </div>
                    <div class="col-md-6">
                        <h4>Oportunidades Sob Medida:</h4>
                        <p>Conecte-se a demandas específicas de empresas que estão procurando exatamente o que sua startup oferece. Nossa plataforma facilita essa conexão, proporcionando oportunidades sob medida.</p>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-md-6">
                        <h4>História Contada do Seu Jeito:</h4>
                        <p>Compartilhe a história única da sua startup. Mostre suas conquistas, projetos impactantes e a visão que impulsiona sua equipe. Crie uma narrativa envolvente que destaque seu valor no mercado.</p>
                    </div>
                    <div class="col-md-6">
                        <h4>Networking Estratégico:</h4>
                        <p>Faça parte de uma comunidade empreendedora engajada. Ao cadastrar sua startup, você ganha acesso a oportunidades de networking estratégico, conectando-se a outros líderes de pensamento e empresas inovadoras.</p>
                    </div>
                </div>
            </div>
            <div>
                <StartupForm>
                </StartupForm>
            </div>

            <p style={{ textAlign: 'center' }}>Agradecemos seu cadastro!</p>

        </div>
    );
}

export default Pag_CadastraStartup;