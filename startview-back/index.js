const express = require("express");
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(cors());
const path = require('path');
const fs = require('fs').promises;

app.get("/", (req, res) => {
    res.send("Bem vindo ao backend do startview");
})

// ## --- Modulo que lida com arquivo JSON OK, FUNCIONA

const lerStartupsDoArquivo = async (nome_arquivo) => {
  try {
    const caminhoCompleto = path.join(__dirname, nome_arquivo);
    const conteudo = await fs.readFile(caminhoCompleto, 'utf-8');
    return JSON.parse(conteudo);
  } catch (error) {
    return []; // Retorna uma matriz vazia se o arquivo não existir ou ocorrer algum erro
  }
};

const escreverStartupsNoArquivo = async (startups, nome_arquivo) => {
  try {
    const caminhoCompleto = path.join(__dirname, nome_arquivo);
    await fs.writeFile(caminhoCompleto, JSON.stringify(startups, null, 2), 'utf-8');
  } catch (error) {
    // Lidar com erros ao escrever no arquivo, se necessário
    console.error('Erro ao escrever no arquivo:', error);
  }
};


const multer = require('multer');
const upload = multer();

//const caminhoImagens = '/home/fabio/Área de Trabalho/Trabalho_final_twm/startview-app/src/images'; // Variável para o diretório de imagens
const caminhoImagens = '../startview-app/public/images'; // Variável para o diretório de imagens


app.post("/cadastraStartup", upload.single('imagem'), async (req, res) => {
    try {
        const startups = await lerStartupsDoArquivo("startups.json");

        // Gera um ID único para a nova startup
        const novoId = Date.now().toString();

        // Verifica se a imagem foi enviada
        if (!req.file || !req.file.buffer) {
            throw new Error('Imagem não encontrada na requisição.');
        }

        // Obtenha a imagem do buffer (multer adiciona 'buffer' ao req.file)
        const imagemBuffer = req.file.buffer;

        // Salva a imagem no diretório 'images' com o nome do arquivo sendo o ID da startup
        const caminhoImagem = `${caminhoImagens}${novoId}.jpg`;
        await fs.writeFile(caminhoImagem, imagemBuffer);

        const nome_referencia_link = `/images${novoId}.jpg`;

        // Adiciona o ID à startup e a adiciona à lista de startups
        const novaStartup = { id: novoId, ...req.body, imagem: nome_referencia_link };
        startups.push(novaStartup);

        // Escreve a lista atualizada no arquivo JSON
        await escreverStartupsNoArquivo(startups, "startups.json");

        res.json({ mensagem: "Startup cadastrada com sucesso!", startup: novaStartup });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensagem: "Erro ao cadastrar a startup." });
    }
});

// ## --- FIM --- Modulo que lida com arquivo JSON 

// ## sTARTUPS ATIVAS 
app.get("/startupativas", async (req, res) => {
  try {
    const startups = await lerStartupsDoArquivo("startups_aprovadas.json");
    res.json(startups);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: "Erro ao obter as startups." });
  }
});

app.delete("/startupsativas/:id", async (req, res) => {
  try {
    const startups = await lerStartupsDoArquivo("startups_aprovadas.json");
    const idStartup = req.params.id;

    // Encontre o índice da startup a ser excluída
    const index = startups.findIndex((startup) => startup.id === idStartup);

    // Se a startup existir, remova-a da lista
    if (index !== -1) {
      const startupRemovida = startups.splice(index, 1)[0];
      await escreverStartupsNoArquivo(startups,"startups_aprovadas.json");

      res.json({ mensagem: "Startup removida com sucesso!", startup: startupRemovida });
    } else {
      res.status(404).json({ mensagem: "Startup não encontrada." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: "Erro ao excluir a startup." });
  }
});


// ## fim do startups ativas 


     // ## Retorna as startups cadastradas no JSON 

     app.get("/startupsall", async (req, res) => {
        try {
          const startups = await lerStartupsDoArquivo("startups.json");
          res.json(startups);
        } catch (error) {
          console.error(error);
          res.status(500).json({ mensagem: "Erro ao obter as startups." });
        }
    });


    //pega um id para que possa apagar da lista
    app.delete("/startupsall/:id", async (req, res) => {
        try {
          const startups = await lerStartupsDoArquivo("startups.json");
          const idStartup = req.params.id;
      
          // Encontre o índice da startup a ser excluída
          const index = startups.findIndex((startup) => startup.id === idStartup);
      
          // Se a startup existir, remova-a da lista
          if (index !== -1) {
            const startupRemovida = startups.splice(index, 1)[0];
            await escreverStartupsNoArquivo(startups,"startups.json");
      
            res.json({ mensagem: "Startup removida com sucesso!", startup: startupRemovida });
          } else {
            res.status(404).json({ mensagem: "Startup não encontrada." });
          }
        } catch (error) {
          console.error(error);
          res.status(500).json({ mensagem: "Erro ao excluir a startup." });
        }
      });
      

    // ## -- FIM --- Retorna as startups cadastradas no JSON 

    // startups que serão exibidas, essas foram autorizadas pelo ADM 
    // /startups/aprovar/ 
    // http://localhost:3000/startups/aprovar/1700263489719
    
    app.post("/startups/aprovar/:id", async (req, res) => {
        const { id } = req.params;
      
        try {
          // Ler o conteúdo do arquivo startups.json
          const startups = await lerStartupsDoArquivo("startups.json");
      
          // Encontrar a startup pelo ID
          const startupAprovar = startups.find((startup) => startup.id === id);
      
          if (!startupAprovar) {
            return res.status(404).json({ mensagem: 'Startup não encontrada.' });
          }
      
          // Remover a startup da lista original
          const startupsAtualizadas = startups.filter((startup) => startup.id !== id);
      
          // Escrever as startups atualizadas no arquivo startups.json
          await escreverStartupsNoArquivo(startupsAtualizadas,"startups.json");
      
          // Adicionar a startup à lista de startups aprovadas (startups_aprovadas.json)
          const startupsAprovadas = await lerStartupsAprovadasDoArquivo();
          startupsAprovadas.push(startupAprovar);
          await escreverStartupsAprovadasNoArquivo(startupsAprovadas);
      
          res.json({ mensagem: 'Startup aprovada com sucesso!', startup: startupAprovar });
        } catch (error) {
          console.error(error);
          res.status(500).json({ mensagem: 'Erro ao aprovar a startup.' });
        }
      });


      const startupsFilePath_aprovadas = path.join(__dirname, 'startups_aprovadas.json');

  // Função para ler startups do arquivo startups.json
  const lerStartupsAprovadasDoArquivo = async () => {
      try {
        const data = await fs.readFile(startupsFilePath_aprovadas, 'utf-8');
        return JSON.parse(data);
      } catch (error) {
        console.error('Erro ao ler startups do arquivo:', error);
        return [];
      }
    };
    
    // Função para escrever startups no arquivo startups.json
    const escreverStartupsAprovadasNoArquivo = async (startups) => {
      try {
        await fs.writeFile(startupsFilePath_aprovadas, JSON.stringify(startups, null, 2));
        console.log('Startups foram escritas no arquivo com sucesso.');
      } catch (error) {
        console.error('Erro ao escrever startups no arquivo:', error);
      }
    };


app.listen(5001, ()=> console.log("SERVER IS RUNNING!!"));