import '../css/menu.css'
import imgPefil from '../img/perfil.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { pesqFechada, fechaPes } from '../js/animacoes'


function Menu() {
  return (
    <div className="menu">
        <div className="elementos-menu">
            <div className="parte-left">
                <div className="logo">
                    <h1>LOGO</h1>
                </div>
                <div className="links">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Conteudo</a></li>
                        <li><a href="#">Contato</a></li>
      
                    </ul>
                </div>
            </div>
            <div className="alinha">
                <AiOutlineSearch className='pesquisaFechada' onClick={pesqFechada} />
                <div className="pesquisa">
                    <AiOutlineSearch className='pesquisaAberta' onClick={fechaPes}/>
                    <input type="text" placeholder="Digito o nome de um filme"/>
                </div>
                <div className="perfio">
                    <img src={imgPefil} alt=""/>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default Menu
