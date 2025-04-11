import React from 'react'

function MovieCard( {movie: {title , poster_path , vote_average}}){
    console.log(`poster : ${title}`)


  return (
        //  <p className='text-white'>{title}</p> 

    <div className='movie-card'>
         
        <img src= {`https://image.tmdb.org/t/p/w500${poster_path}`} alt='poster'/>
        <div className='mt-5'>
            <h3>{title}</h3>

            <div className="content">
                <div className="rating">
                    <img src="src/images/Rating_start_icon.png" alt="" />
                    <p className=' text-white'>{vote_average.toFixed(1)}</p>
                </div>
            </div>
        </div>
    </div>

  )
}

export default MovieCard;
