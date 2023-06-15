/* eslint-disable react/jsx-key */

import { useEffect,useState } from 'react';
import axios from 'axios';
import { MovieCard } from './components/MovieCard';


function App() {

  const[search,setSearch]=useState([]);

  const [movies,setMovies]= useState([]);

  const getMovies = async () => {
    try {
      const { data } = await axios.get("https://movies-app.prakashsakari.repl.co/api/movies");
      let filteredMovies = data;
  
      
      if (search) {
        filteredMovies = filteredMovies.filter(
          movie =>
            movie.name.toLowerCase().includes(search.toLowerCase()) ||
            movie.cast_name.toLowerCase().includes(search.toLowerCase()) || 
            movie.genre.toLowerCase().includes(search.toLowerCase()) || 
            movie.director_name.toLowerCase().includes(search.toLowerCase())
        );
      }
  
      
      setMovies(filteredMovies);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(()=>{
    getMovies();
  },[getMovies])

  return (
    <div className="">
     <header className='flex justify-between pt-10'>
    <a href='#'>
    <h1 className='font-semibold text-5xl'>Movies</h1>
    </a>
    <form className='flex flex-row gap-x-2  relative'>
      <button className='bg-slate-400 hover:bg-slate-50 hover:text-black transition-all rounded-lg p-3 ' type='submit'>Search</button>
      <input type='text' value={search}  onChange={(e)=> setSearch(e.target.value)} className='w-full p-2 ml-1 outline-none rounded-md text-black' placeholder='TV | Movie | Film'></input>
    </form>
     </header>
     <main className='flex gap-6 flex-wrap  justify-center pt-10'>
     {
     movies &&movies.length > 0 && movies.map(movie => <MovieCard  key={movie.id} movie={movie}/>)
     }
     </main>
    
    </div>
  );
}

export default App;
