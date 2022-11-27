import logo from '../../assets/logo.png';
import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png';


const cesta = {
  topo: {
    titulo: 'Detalhe da cesta',
  },
  detalhes: {
    nome: 'Cesta de Verduras',
    logoFazenda: logo,
    nomeFazenda: 'Fazenda Rancho Fundo',
    descricao: 'Uma cestão por um preção',
    preco: 'R$ 40,00',
  },

  itens: {
    titulo: 'Itens da cesta',
    lista: [
      {
        nome: 'Tomate',
        imagem: tomate,
	link: "https://www.ecycle.com.br/tomate/"
      },
      {
        nome: 'Brócolis',
        imagem: brocolis,
        link: "https://www.ecycle.com.br/brocolis/"
      },
      {
        nome: 'Batata',
        imagem: batata,
	link: "https://www.ecycle.com.br/batata/"
      },
      {
        nome: 'Pepino',
        imagem: pepino,
	link: "https://www.ecycle.com.br/pepino/"
      },
      {
        nome: 'Abóbora',
        imagem: abobora,
	link: "https://www.ecycle.com.br/abobora/"
      }
    ]
  }
}

export default cesta;