import { useState } from 'react';
import Main from './components/Main'
import NavBar from './components/NavBar'
import { tempMovieData } from './App';

function App() {

  const [movies, setMovies] = useState(tempMovieData);


  return (
    <>
   <NavBar movies={movies}/>
   <Main movies={movies}/>
   </>
  )
  
}

export default App
