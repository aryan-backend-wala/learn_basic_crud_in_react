import { Text } from "@chakra-ui/react"; 

import { useId, useState } from "react";
import AddTitle from "./components/addTitle";
import TitleList from "./components/titleList";
import { initialData } from "./utlis/initialData";

export default function App() {
  const [movies, setMovies] = useState(initialData);
  const [currentMovie, setCurrentMovie] = useState(null); 

  const id = useId();

  function handleAddTitle(title){
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

  function handleDeleteTitle(id){
    setMovies(movies.filter(movies => movies.id !== id))
  }

  function handleEditTitle(id){
    const movie = movies.find((movie) => movie.id === id);
    setCurrentMovie(movie)
  }

  console.log(movies)

  return (
    <div>
      <Text 
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >Basic CRUD</Text>
      <AddTitle 
        onAddTitle={handleAddTitle}
        movie={currentMovie}
      />
      <TitleList 
        titles={movies}
        onDeleteTitle={handleDeleteTitle}
        onEditTitle={handleEditTitle}
      />
    </div>
  );
}


