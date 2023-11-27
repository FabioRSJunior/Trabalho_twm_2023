import React, { useState, useEffect } from 'react';
import StartupCard from './Card_startup';

const GetStartup = () => {
  const [startupList, setStartupList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5001/startupativas');
        if (!response.ok) {
          throw new Error('Erro ao obter dados da API');
        }

        const data = await response.json();
        setStartupList(data);
      } catch (error) {
        console.error('Erro ao obter dados da API:', error);
      }
    };

    fetchData();
  }, []); 

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  if (startupList.length === 0) {
    return <p>Carregando informações da startup...</p>;
  }

  const filteredStartups = startupList.filter(startup =>
    startup.nomeStartup.toLowerCase().includes(searchTerm.toLowerCase()) ||
    startup.descricao.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
      <div>
        <div className="input-group mb-3 mt-4">
          <input
            type="text"
            className="form-control"
            placeholder="Procurando por algo específico?"
            aria-label="Procurar"
            aria-describedby="button-addon2"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button className="btn btn-primary" type="button" id="button-addon2">
            Buscar
          </button>
        </div>
  
        {filteredStartups.length > 0 ? (
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {filteredStartups.map(startup => (
              <div key={startup.id} className="col">
                <StartupCard {...startup} />
              </div>
            ))}
          </div>
        ) : (
          <p>Nenhuma startup encontrada.</p>
        )}
      </div>
    );
  };

export default GetStartup;

// import React, { useState, useEffect } from 'react';
// import StartupCard from './Card_startup';

// const GetStartup = () => {
//   const [startupList, setStartupList] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:5001/startupativas');
//         if (!response.ok) {
//           throw new Error('Erro ao obter dados da API');
//         }

//         const data = await response.json();
//         setStartupList(data);
//       } catch (error) {
//         console.error('Erro ao obter dados da API:', error);
//       }
//     };

//     fetchData();
//   }, []); // O segundo argumento [] faz com que o useEffect seja executado apenas uma vez, semelhante ao componentDidMount

//   // return (
//   //   <div>
//   //     {startupList.length > 0 ? (
//   //       <div className="startup-grid">
//   //         {startupList.map(startup => (
//   //           <StartupCard key={startup.id} {...startup} />
//   //         ))}
//   //       </div>
//   //     ) : (
//   //       <p>Carregando informações da startup...</p>
//   //     )}
//   //   </div>
//   // );

//   return (
//     <div>
//       {startupList.length > 0 ? (
//         <div className="row row-cols-1 row-cols-md-3 g-4">
//           {startupList.map(startup => (
//             <div key={startup.id} className="col">
//               <StartupCard {...startup} />
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>Carregando informações da startup...</p>
//       )}
//     </div>
//   );

// };

// export default GetStartup;



// // import React, { useState, useEffect } from 'react';
// // //import StartupCard from './StartupCard';
// // import StartupCard from './Card_startup';

// // const GetStartup = () => {
// //   const [startupInfo, setStartupInfo] = useState(null);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await fetch('http://localhost:5001/startups');
// //         if (!response.ok) {
// //           throw new Error('Erro ao obter dados da API');
// //         }

// //         const data = await response.json();
// //         setStartupInfo(data);
// //       } catch (error) {
// //         console.error('Erro ao obter dados da API:', error);
// //       }
// //     };

// //     fetchData();
// //   }, []); // O segundo argumento [] faz com que o useEffect seja executado apenas uma vez, semelhante ao componentDidMount

// //   return (
// //     <div>
// //       {startupInfo ? (
// //         <StartupCard {...startupInfo} />
// //       ) : (
// //         <p>Carregando informações da startup...</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default GetStartup;

// // import React from 'react';

// // import StartupCard from './Card_startup';\

// // const Get_Startup = () => {
// //     const startupInfo = {
// //     nomeStartup: 'Minha Startup',
// //     emailResponsavel: 'contato@minhastartup.com',
// //     telefone: '(11) 1234-5678',
// //     cep: '12345-678',
// //     modalidadeList: 'Tecnologia',
// //     imagem: 'https://raw.githubusercontent.com/FabioRSJunior/TecnologiasWebMobile/main/Imagens/Algod%C3%A3o%20doce.jpg',
// //     descricao: 'Uma descrição curta da startup...',
// //     tecnologiasUtilizadas: 'React, Node.js, MongoDB',
// //     anoFundacao: '2020',
// //     setorIndustria: 'Tecnologia da Informação',
// //     linkedin: 'https://www.linkedin.com/minhastartup',
// //     site: 'https://www.minhastartup.com',
// //     startupImagemId: 'id_da_imagem'
// //   };

// //   return (
// //     <div>
// //       <StartupCard {...startupInfo} />
// //     </div>
// //   );
// // };

// // export default Get_Startup;

// // import React from "react";
// // const StartupGet = () => {
// // return (<div>
// //     <h1>Olá eu sou um card de startup</h1>
// // </div>)
// // };

// // export default StartupGet;
