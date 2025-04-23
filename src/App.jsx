import React, { cache, useEffect , useState } from 'react';
import { useDebounce } from 'react-use';
import Search from './components/search';
import MovieCard from './components/movieCard';

const BASE_URL = 'https://api.themoviedb.org/3';
const SEARCH_ENDPOINT = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';
const API_KEY = import.meta.env.VITE_TMDB_API_TOKEN;
const options = {
method: 'GET',
headers: {
  accept: 'application/json',
  Authorization: `Bearer ${API_KEY}`
  }
};

function App(){
  const [searchTerm , setSearchTerm] = useState('');
  const [errorMsg , setErrorMsg ] = useState('');
  const [movies , setMovies] = useState([]);
  const [debouncedSearchTerm , setDebouncedSearchTerm ] = useState('');


  useDebounce(() => setDebouncedSearchTerm(searchTerm) , 1000 , [searchTerm]  );

  async function getMovies(quary = ''){

    try{
      const search_url = `/search/movie?query=${encodeURI(quary)}&include_adult=false&language=en-US&page=1`
      const end_point = quary ? `${BASE_URL}${search_url}` : `${BASE_URL}/movie/popular?language=en-US&page=1`;
      const response = await fetch(end_point, options);

      if(!response.ok){
        throw new Error('Failed to load movies.')
      }
      const data = await response.json();

      if(data.Response === 'False'){
        setErrorMsg('Failed to load movies.');
        setMovies([]);
        return;
      }
      setMovies(data.results);
      
    }catch(error){
      setErrorMsg(`Error getting movies: ${error}`);
    }
    
  }

  useEffect(() => {
    getMovies(debouncedSearchTerm);
    },[debouncedSearchTerm]);

  return (
    <main>

      <div className='pattern'/>

      <div className='wrapper'>
        <header>
          <img src="/src/images/image1.png" alt="heros img" />
          <h1>We bring <span className='text-gradient'> Great Movies</span> to watch!</h1>
        <Search  searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>


        <section className='all-movies'>
        <h2 className='mt-10' >All Movies</h2>

        <ul>
          {movies.map((movie) => (
            <MovieCard key={movie.id}  movie={movie}/>
         
        ))}

        </ul>
        </section>
     </div>
    </main>

  )
}

export default App