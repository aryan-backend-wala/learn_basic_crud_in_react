import { useState } from "react"

export default function AddTitle({onAddTitle}){
  const [title, setTitle] = useState(
    {id : 0, title: ""}
  );
  return (
    <>
      <label>
        <input 
          type="text"
          placeholder="add title"
          name="title"
          value={title.title}
          onChange={(e) => setTitle({...title, title: e.target.value})}
        />
      </label>
      <button onClick={() => {
        onAddTitle(title)
        setTitle({
          id: title.id + 1,
          title: ""
        })
      }}>Add</button>
    </>
  );
}