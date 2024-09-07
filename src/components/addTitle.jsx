import { useState } from "react"

export default function AddTitle({onAddTitle}){
  const [title, setTitle] = useState('');
  return (
    <>
      <label>
        <input 
          type="text"
          placeholder="add title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.title)}
        />
      </label>
      <button onClick={() => {
        onAddTitle(title)
        setTitle("")
      }}>Add</button>
    </>
  );
}