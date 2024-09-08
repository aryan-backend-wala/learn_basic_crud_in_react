export function handleAddTitle(title){
  if(currentMovie){
    setMovies((prevData) =>
      prevData.map((movie) =>
        movie.id === currentMovie.id ? { ...movie, title } : movie
      )
    );
    setCurrentMovie(null);
  } else {
    setMovies(prevData => [
        ...prevData,
        {
          title: title,
          id: id + new Date().toLocaleTimeString()
        }
    ])
  }
}

export function handleDeleteTitle(id){
  setMovies(movies.filter(movies => movies.id !== id))
}