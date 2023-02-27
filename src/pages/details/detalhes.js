import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import '../../css/detalhes.css'
import '../../css/detalhesMobile.css'
import Menu from '../menu.js'
import CardOutros from "./cardoutros.js"
import { BsFillPlayFill } from 'react-icons/bs'
import { IoMdAdd } from 'react-icons/io'




function Details() {

    const { id } = useParams()
    
    const [ movie, setMovie ] = useState({})
    const image_parh = 'https://image.tmdb.org/t/p/w500/'

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c8db2e9869cd58ab68e2138b73519325&language=pt-BR&page=1`)
        .then(response => response.json())
        .then(data => {

            const { title, poster_path, overview, release_date, backdrop_path, runtime, vote_average, genres } = data

            const movie = {
                id,
                title,
                sinopse: overview,
                image: `${image_parh}${poster_path}`,
                releaseDate:  new Date(release_date).getFullYear(),
                background: `https://image.tmdb.org/t/p/original${backdrop_path}`,
                duracao: runtime,
                popula: `${ Math.round(vote_average)}`,
                genero: `${genres[0].name}, ${genres[1].name}`
                


            }
            setMovie(movie)
            console.log(data)
        })

    }, [id])


    return (
        <div className="container">
            <div className="part1">
                <div className="capa-detalhes" style={{ backgroundImage: `url(${movie.background})` }}></div>
                <Menu />
                <div className="alinha-detalhes">
                    <div className="datalhes">
                        <div className="titulo-filme">
                            <h1>{movie.title}</h1>
                        </div>
                        <div className="outros">
                            <p className="ob"> Duração: {movie.duracao}min </p>
                            <p className="ob"> IMDB: {movie.popula} </p>
                            <p className="ob"> Genero: {movie.genero} </p>
                            <p className="ob"> Ano: {movie.releaseDate}</p>


                        </div>
                        <div className="sinopse">
                            <p> Sinopse: {movie.sinopse}</p>
                        </div>

                        <div className="buttons">
                            <div className="botao-play">
                                <button><BsFillPlayFill /></button>
                            </div>
                            <div className="botao-add">
                                <button><IoMdAdd /></button>
                            </div>
                        </div>
                    
                        </div>
   
                    </div>

            </div>
            <div className="part2">
                <CardOutros />
            </div>
                

        </div>
    )
}

export default Details