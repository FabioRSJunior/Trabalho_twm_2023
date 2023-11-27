import React from 'react';
import Conteudo from './conteudo';

const Homepage = () => {

  const conteudoInfo = {
    idConteudo: 1,
    imagemDoConteudo: './images_estaticas/3.png',
    tituloDoConteudo: 'O Impacto Vital das Startups no Crescimento Econômico, Inovação',
    conteudoDoConteudo: 'Startups impulsionam inovação, competição e empregos, sendo essenciais para o crescimento econômico dinâmico e sustentável.',
    linkMateriaPrincipal: 'https://exemplo.com/materia1',
  };

  const conteudoInfo_2 = {
    idConteudo: 2,
    imagemDoConteudo: './images_estaticas/3.png',
    tituloDoConteudo: 'Startups: Motores da Economia e Criadores de Transformação Inovadora',
    conteudoDoConteudo: 'Startups impulsionam inovação, geram empregos e elevam padrões, sendo fundamentais para um crescimento econômico dinâmico e sustentável',
    linkMateriaPrincipal: 'https://exemplo.com/materia1',
  };

  return (
    <div className="container-md mt-4">
      <h1 className="text-center">Start View</h1>
      <p className="lead">
        Bem-vindo ao nosso ecossistema inovador, onde a colaboração entre empresas e startups redefine os limites do progresso. Nosso site é a ponte que conecta visionários empreendedores a oportunidades valiosas, proporcionando uma vitrine digital para destacar o trabalho incrível das startups.
      </p>

      {/* <img src="./images_estaticas/1.png" alt="Logo da Startup view"></img> */}
      <img src="./images_estaticas/1.png" alt="Logo da Startup view" class="mx-auto d-block"></img>

      <div className="mt-4">
        <h2>Entenda o Conceito:</h2>
        <p>Descubra como nosso site funciona e como ele pode beneficiar sua empresa. Criamos um catálogo completo de startups, proporcionando uma visão detalhada de suas capacidades e serviços.</p>

        {/* <h2>Crie sua Demanda:</h2>
        <p>Explore a seção "Demanda de Startup" e preencha um formulário simples para expressar suas necessidades específicas. Nossa plataforma conectará você às startups mais adequadas para atender às suas demandas.</p> */}

        <h2>Descubra Startups:</h2>
        <p>Navegue pelo catálogo abrangente de startups e descubra inovações que podem transformar o seu setor. Explore suas histórias, conquistas e competências exclusivas.</p>

        <h2>Barra de Pesquisa Inteligente:</h2>
        <p>Experimente nossa barra de pesquisa avançada, onde você pode apresentar um problema específico. Nossa inteligência artificial analisará suas necessidades e recomendará as startups mais adequadas para resolver seus desafios.</p>

        <h2>Cadastro de Startup:</h2>
        <p>Se você é uma startup pronta para ser reconhecida, cadastre-se facilmente em nossa plataforma. Compartilhe sua história, projetos e visão, conectando-se diretamente a oportunidades valiosas.</p>

        <h2>Página da Startup:</h2>
        <p>Para startups que se destacam, criamos páginas dedicadas, destacando-as no cenário digital. Se o tempo permitir, cada startup terá uma página única ou será redirecionada para seu site oficial.</p>
      </div>

      <h1>Noticias:</h1>

      <p>Explore as últimas novidades no fascinante mundo das startups. Mantenha-se atualizado com as notícias mais recentes, descubra histórias inspiradoras e mergulhe no universo dinâmico da inovação empresarial.</p>

      <div className="d-flex flex-row">
        <div className="container-fluid p-0 d-flex align-items-center justify-content-center">
          <Conteudo {...conteudoInfo} />
        </div>

        <div className="container-fluid p-0 d-flex align-items-center justify-content-center">
          <Conteudo {...conteudoInfo_2} />
        </div>
      </div>
      <p style={{ textAlign: 'center' }}>Obrigado por usar Start View</p>    
    </div>
  );
};

export default Homepage;
