import React from 'react'

function MovieCard( {movie: {title , poster_path , vote_average ,original_language , release_date}}){


  return (

    <div className='movie-card'>
         
        <img src= {poster_path? `https://image.tmdb.org/t/p/w500${poster_path}` : "src/images/no_image.png" } />
        <div className='mt-5'>
            <h3>{title}</h3>

            <div className="content">
                <div className="rating">
                    <img src="src/images/Rating_start_icon.png" alt="" />
                    <p className=' text-white'>{vote_average?  vote_average.toFixed(1) : 'N/A' }</p>
                    <span>•</span>
                    <p className='lang'>{original_language ? original_language : 'N/A'}</p>
                    <span>•</span>
                    <p className='year'>{release_date? release_date.split('-')[0] : 'N/A'}</p>
                </div>
            </div>
        </div>
    </div>

  )
}

export default MovieCard;
