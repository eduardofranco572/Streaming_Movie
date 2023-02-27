import '../css/card.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Card() {
    const [ movies, setMovies ] = useState([])
    const image_parh = 'https://image.tmdb.org/t/p/w500/'

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=c8db2e9869cd58ab68e2138b73519325&language=en-US&page=1')
            .then(response => response.json())
            .then(data => setMovies(data.results))
    }, [])


  return (
    <div className='container'>
        <div className='titulo'>
            <h1>Filmes</h1>
        </div>
        <div className='cardPri'>
            {movies.map(movie => {
                return(
                    <div className='card1' key={movie.id}>
                        <Link to={`/details/${movie.id}`}><img src={`${image_parh}${movie.poster_path}`}></img></Link>
                        <h1>{movie.title}</h1>
                    </div>
                )
            })}
        </div>

    </div>
  )
}

export default Card
