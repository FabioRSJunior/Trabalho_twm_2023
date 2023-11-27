import React from 'react';


const StartupCard = ({
  nomeStartup,
  emailResponsavel,
  telefone,
  cep,
  modalidadeList,
  imagem,
  descricao,
  tecnologiasUtilizadas,
  anoFundacao,
  setorIndustria,
  linkedin,
  site,
  startupImagemId
}) => {
  return (
    <div className="card" style={{ width: '20rem' }}>
      <img
        src={imagem} public
        className="card-img-top"
        alt="Startup Logo"
        style={{ width: '100%', height: '150px', objectFit: 'cover' }}
      />
      <div className="card-body" style={{ maxHeight: '250px', overflow: 'hidden' }}>
        <h5 className="card-title">{nomeStartup}</h5>
        <p className="card-text">{descricao}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Email: {emailResponsavel}</li>
        <li className="list-group-item">Telefone: {telefone}</li>
        <li className="list-group-item">Cep: {cep}</li>
        {/* Adicione mais informações conforme necessário */}
      </ul>
      <div className="card-body">
        <a href={linkedin} className="card-link" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href={site} className="card-link" target="_blank" rel="noopener noreferrer">
          Site
        </a>
      </div>
    </div>
  );
  // return (
  //   <div className="card" style={{ width: '18rem' }}>
  //     {/* <img src={imagem} className="card-img-top" alt="Startup Logo" /> */}
  //     <img
  //     src={imagem}
  //     className="card-img-top"
  //     alt="Startup Logo"
  //     // style={{ maxWidth: '100%', height: 'auto' }} // Adicione esta linha para limitar o tamanho da imagem
  //     style={{ width: '200px', height: '150px', objectFit: 'cover' }}
  //   />
  //     <div className="card-body">
  //       <h5 className="card-title">{nomeStartup}</h5>
  //       <p className="card-text">{descricao}</p>
  //     </div>
  //     <ul className="list-group list-group-flush">
  //       <li className="list-group-item">Email: {emailResponsavel}</li>
  //       <li className="list-group-item">Telefone: {telefone}</li>
  //       <li className="list-group-item">Cep: {cep}</li>
  //       {/* Adicione mais informações conforme necessário */}
  //     </ul>
  //     <div className="card-body">
  //       <a href={linkedin} className="card-link" target="_blank" rel="noopener noreferrer">
  //         LinkedIn
  //       </a>
  //       <a href={site} className="card-link" target="_blank" rel="noopener noreferrer">
  //         Site
  //       </a>
  //     </div>
  //   </div>
  // );
};

export default StartupCard;
