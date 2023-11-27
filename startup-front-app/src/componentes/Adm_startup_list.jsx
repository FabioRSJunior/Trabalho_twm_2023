// StartupList.js
import React, { useState, useEffect } from 'react';

const linkGetStartup = 'http://localhost:5001/startupsall';

const StartupList = () => {
  const [startups, setStartups] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(linkGetStartup);

        if (!response.ok) {
          throw new Error(`Erro ao obter as startups: ${response.statusText}`);
        }

        const data = await response.json();
        setStartups(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []); // Executará apenas uma vez durante a montagem do componente

  const handleExcluirStartup = async (id) => {
    try {
      const response = await fetch(`http://localhost:5001/startupsall/${id}`, { method: 'DELETE' });

      if (!response.ok) {
        throw new Error(`Erro ao excluir a startup: ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data); // Exibe a mensagem de sucesso ou erro

      // Atualiza o estado local de startups após a exclusão
      setStartups((prevStartups) => prevStartups.filter((startup) => startup.id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleAprovarStartup = async (id) => {
    try {
      const response = await fetch(`http://localhost:5001/startups/aprovar/${id}`, { method: 'POST' });

      if (!response.ok) {
        throw new Error(`Erro ao aprovar a startup: ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data); // Exibe a mensagem de sucesso ou erro

      // Atualiza o estado local de startups após a aprovação
      setStartups((prevStartups) => prevStartups.filter((startup) => startup.id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="container mt-4">
      <h1>Lista de Startups Para Autorização</h1>
      {startups.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-bordered table-striped align-middle">
            <thead>
              <tr>
                <th>Nome da Startup</th>
                <th>Descrição</th>
                <th>Excluir</th>
                <th>Aprovar</th>
              </tr>
            </thead>
            <tbody>
              {startups.map((startup) => (
                <tr key={startup.id}>
                  <td>
                    <h4>{startup.nomeStartup}</h4>
                  </td>
                  <td>
                    <p>{startup.descricao}</p>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleExcluirStartup(startup.id)}
                    >
                      Excluir
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => handleAprovarStartup(startup.id)}
                    >
                      Aprovar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Nenhum cadastro pendente</p>
      )}
    </div>
  );

  //return (
  //   <div className="container mt-4">
  //     <h1>Lista de Startups Para Autorização</h1>
  //     <ul className="list-group">
  //       {startups.map((startup) => (
  //         <li key={startup.id} className="list-group-item">
  //           <h4>{startup.nomeStartup}</h4>
  //           <h4>{startup.id}</h4>
  //           <p>{startup.descricao}</p>
  //           <button
  //             className="btn btn-danger"
  //             onClick={() => handleExcluirStartup(startup.id)}
  //           >
  //             Excluir
  //           </button>
  //           <button
  //             className="btn btn-success"
  //             onClick={() => handleAprovarStartup(startup.id)}
  //           >
  //             Aprovar
  //           </button>
  //           {/* Adicione mais informações da startup conforme necessário */}
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
};

export default StartupList;
