
import React from 'react';

const Conteudo = (props) => {
  const { imagemDoConteudo, tituloDoConteudo, conteudoDoConteudo, linkMateriaPrincipal } = props;

  return (
    <div className="container-fluid p-0">
        <div className="card mb-3" style={{ maxWidth: '540px' }}>
        <div className="row g-0">
            <div className="col-md-4">
            <img
              src={imagemDoConteudo}
              className="img-fluid rounded-start mx-auto"  // Adicionando mx-auto para centralizar horizontalmente
              alt="Imagem do Conteúdo"
              style={{ maxWidth: '100%', height: 'auto' }}  // Limitando a largura da imagem
            />
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{tituloDoConteudo}</h5>
                <p className="card-text">{conteudoDoConteudo}</p>
                <a href={linkMateriaPrincipal} className="btn btn-primary" role="button">
                Leia mais
                </a>
            </div>
            </div>
        </div>
        </div>
        </div>
  );
};

export default Conteudo;

