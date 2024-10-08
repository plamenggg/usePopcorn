import WatchedMovie from "./WatchedMovie"

/* eslint-disable react/prop-types */
function WatchedMovieList({watched}) {
    return (
        <ul className="list">
        {watched.map((movie) => (
          <WatchedMovie movie={movie}  key={movie.imdbID} />
        ))}
      </ul>
    )
}

export default WatchedMovieList
