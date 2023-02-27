import './css/home.css'

import Menu from './pages/menu.js'
import Card from './pages/cardFilmes.js'


function App() {
  return (
    <section className="container">
        <div className="capa"></div>
            <Menu />
            <div className='conteudo'>
              <div className='alinha-conteudo'>
                <div className='titulo-conteudo'>
                  <h1>EMPRESA</h1>
                </div>
                <div className='genero'>
                  <p>Filmes</p>
                </div>
                <div className='descricao'>
                  <p>Streaming é a tecnologia de transmissão de dados pela internet, principalmente áudio e vídeo, sem a necessidade de baixar o conteúdo. O arquivo, que pode ser um vídeo ou uma música, é acessado pelo usuário de forma online.</p>
                </div>
              </div>
            </div>
        
        <div className='card-filmes'>
            <Card />
        </div>    
    </section>
  );
}

export default App;
