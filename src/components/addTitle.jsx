import { useEffect, useState } from "react"
import { Input, Button, ButtonGroup, Box } from '@chakra-ui/react'

export default function AddTitle({onAddTitle, movie}){
  const [title, setTitle] = useState("");
  useEffect(() => {
    if(movie){
      setTitle(movie.title)
    } else {
      setTitle("")
    }
  }, [movie])
  return (
    <Box>
      <Input
        width='auto'
        marginRight={5}
        marginLeft={5}
        htmlSize={40}
        type="text"
        placeholder="add title"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button onClick={() => {
        onAddTitle(title)
        setTitle("")
      }}>{movie ? 'Save': "Add"}</Button>
    </Box>
  );
}