import React, { cache, useEffect , useState } from 'react'
import Search from './components/search'

const URL = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
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

  async function getMovies(){
    setErrorMsg('');
    setMovies([]);
    try{
      const end_point = `${URL}`;
      const response = await fetch(URL, options);

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
      console.log(data.results);
      
    }catch(error){
      setErrorMsg(`Error getting movies: ${error}`);
    }
    
  }

  useEffect(() => {
    getMovies();
    },[]);

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
          <p key={movie.id} className='text-white'>{movie.title}</p>
        ))}

        </ul>
        </section>
     </div>
    </main>

  )
}

export default App