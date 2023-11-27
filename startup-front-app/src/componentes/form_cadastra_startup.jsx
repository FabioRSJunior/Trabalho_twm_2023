import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Link_submit_form = "http://localhost:5001/cadastraStartup";

const StartupForm = () => {
  const [nomeStartup, setNomeStartup] = useState('');
  const [emailResponsavel, setEmailResponsavel] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cep, setCep] = useState('');
  const [modalidadeList, setModalidadeList] = useState('');
  const [imagem, setImagem] = useState(null);
  const [descricao, setDescricao] = useState('');
  const [tecnologiasUtilizadas, setTecnologiasUtilizadas] = useState('');
  const [anoFundacao, setAnoFundacao] = useState('');
  const [setorIndustria, setSetorIndustria] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [site, setSite] = useState('');
  const [startupImagemId, setStartupImagemId] = useState('');

  // variáveis do cadastro
  const [cadastroSucesso, setCadastroSucesso] = useState(false);
  const [erroCadastro, setErroCadastro] = useState('');

  const handleImagemChange = (e) => {
    const arquivo = e.target.files[0];
    setImagem(arquivo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append('nomeStartup', nomeStartup);
    formData.append('emailResponsavel', emailResponsavel);
    formData.append('telefone', telefone);
    formData.append('cep', cep);
    formData.append('modalidadeList', modalidadeList);
    formData.append('descricao', descricao);
    formData.append('tecnologiasUtilizadas', tecnologiasUtilizadas);
    formData.append('anoFundacao', anoFundacao);
    formData.append('setorIndustria', setorIndustria);
    formData.append('linkedin', linkedin);
    formData.append('site', site);
    formData.append('startupImagemId', startupImagemId);

    if (imagem) {
      formData.append('imagem', imagem, imagem.name); // Adicione o nome do arquivo
    }

    try {
      const resposta = await axios.post(Link_submit_form, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Resposta do servidor:', resposta.data);

      setCadastroSucesso(true); // cadastro OK 

    } catch (erro) {
      console.error('Erro ao enviar a solicitação:', erro);
      setErroCadastro('Erro ao cadastrar a startup. Por favor, tente novamente.');
    }
  };

  return (
    <div className="container mt-5" encType="multipart/form-data" style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px' }}>
      <h2>Cadastro de Startup</h2>

      {cadastroSucesso && (
        <div className="alert alert-success" role="alert">
          A startup foi cadastrada com sucesso!
        </div>
      )}

      {erroCadastro && (
        <div className="alert alert-danger" role="alert">
          {erroCadastro}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Linha 1: Nome e Email */}
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="nomeStartup" className="form-label">Nome da Startup</label>
              <input
                type="text"
                className="form-control"
                id="nomeStartup"
                value={nomeStartup}
                onChange={(e) => setNomeStartup(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="emailResponsavel" className="form-label">Email do Responsável</label>
              <input
                type="email"
                className="form-control"
                id="emailResponsavel"
                value={emailResponsavel}
                onChange={(e) => setEmailResponsavel(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Linha 2: Telefone, CEP e Modalidade */}
        <div className="row">
          <div className="col-md-4">
            <div className="mb-3">
              <label htmlFor="telefone" className="form-label">Telefone</label>
              <input
                type="tel"
                className="form-control"
                id="telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-3">
              <label htmlFor="cep" className="form-label">CEP</label>
              <input
                type="text"
                className="form-control"
                id="cep"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-3">
              <label htmlFor="modalidadeList" className="form-label">Modalidade</label>
              <input
                type="text"
                className="form-control"
                id="modalidadeList"
                value={modalidadeList}
                onChange={(e) => setModalidadeList(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Linha 3: Descrição, Tecnologias, Site e ID da Imagem da Startup */}
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="descricao" className="form-label">Descrição</label>
              <textarea
                className="form-control"
                id="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                rows="5"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="tecnologiasUtilizadas" className="form-label">Tecnologias Utilizadas</label>
              <input
                type="text"
                className="form-control"
                id="tecnologiasUtilizadas"
                value={tecnologiasUtilizadas}
                onChange={(e) => setTecnologiasUtilizadas(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="site" className="form-label">Site</label>
              <input
                type="text"
                className="form-control"
                id="site"
                value={site}
                onChange={(e) => setSite(e.target.value)}
              />
            </div>

            {/* <div className="mb-3">
              <label htmlFor="startupImagemId" className="form-label">ID da Imagem da Startup</label>
              <input
                type="text"
                className="form-control"
                id="startupImagemId"
                value={startupImagemId}
                onChange={(e) => setStartupImagemId(e.target.value)}
              />
            </div> */}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="imagem" className="form-label">Imagem da Startup</label>
          <input
            type="file"
            className="form-control"
            id="imagem"
            accept="image/*"
            onChange={handleImagemChange}
          />
        </div>

        {/* Linha 4: Ano de Fundação, Setor da Indústria e LinkedIn */}
        <div className="row">
          <div className="col-md-4">
            <div className="mb-3">
              <label htmlFor="anoFundacao" className="form-label">Ano de Fundação</label>
              <input
                type="text"
                className="form-control"
                id="anoFundacao"
                value={anoFundacao}
                onChange={(e) => setAnoFundacao(e.target.value)}
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="mb-3">
              <label htmlFor="setorIndustria" className="form-label">Setor da Indústria</label>
              <input
                type="text"
                className="form-control"
                id="setorIndustria"
                value={setorIndustria}
                onChange={(e) => setSetorIndustria(e.target.value)}
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="mb-3">
              <label htmlFor="linkedin" className="form-label">LinkedIn</label>
              <input
                type="text"
                className="form-control"
                id="linkedin"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
              />
            </div>
          </div>
        </div>



        <button type="submit" className="btn btn-primary">Enviar</button>
      </form >
    </div >
  );
};

export default StartupForm;
