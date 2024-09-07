import { useEffect, useState } from "react"

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
    <div className="navbar">
      <label>
        <input 
          type="text"
          placeholder="add title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <button onClick={() => {
        onAddTitle(title)
        setTitle("")
      }}>{movie ? 'Save': "Add"}</button>
    </div>
  );
}