import { useState } from "react";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import { tempMovieData } from "./App";
import Logo from "./components/Logo";
import Search from "./components/Search";
import NumResults from "./components/NumResults";
import ListBox from "./components/ListBox";
import WatchedBox from "./components/WatchedBox";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <>
      <NavBar>
        <Logo />
        <Search />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <ListBox movies={movies}>
          <MovieList movies={movies}/>
        </ListBox>
        <WatchedBox />
      </Main>
    </>
  );
}

export default App;
