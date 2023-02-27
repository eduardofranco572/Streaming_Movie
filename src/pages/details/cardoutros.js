import { useState, useEffect } from "react"
import '../../css/cardoutros.css'
import { Link } from 'react-router-dom'
import { AiOutlineLeft } from 'react-icons/ai'
import { AiOutlineRight } from 'react-icons/ai'


function CardOutros() {

    const [ filmes, setFilmes ] = useState([])
    const image_parh2 = 'https://image.tmdb.org/t/p/w500/'

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=c8db2e9869cd58ab68e2138b73519325&language=en-US&page=1')
            .then(response => response.json())
            .then(data => setFilmes(data.results))
    }, [])

    const [scrollX, setScrollX] = useState(-400)

    const handleLeftArrow = () =>{
        let x = scrollX + Math.round(window.innerWidth / 2)
        if(x > 0){
            x = 0
        }
        setScrollX(x)
    }
    
    const handRightArrow = () =>{
        let x = scrollX - Math.round(window.innerWidth / 2)
        let listW = filmes.length * 210
        if((window.innerWidth - listW) > x ){
            x = (window.innerWidth - listW) 
        }
        setScrollX(x)
    }

    return (
        <div className="container">
            <div className="part-card">
                <div className='titulo'>
                    <h1>Outros</h1>
                </div>
                <div className="seta-left" onClick={handleLeftArrow}>
                    <AiOutlineLeft style={{fontSize: 40, color: 'white'}} />
                </div>
                <div className="seta-right" onClick={handRightArrow}>
                    <AiOutlineRight style={{fontSize: 40, color: 'white'}} />
                </div>

                <div className='card' style={{
                    marginLeft: scrollX,
                    width: filmes.length * 250
                    }}>
                    {filmes.map(filme => {
                        return(
                            <div className='card1' key={filme.id}>
                                <Link to={`/details/${filme.id}`}><img src={`${image_parh2}${filme.poster_path}`}></img></Link>
                                <h1>{filme.title}</h1>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CardOutros