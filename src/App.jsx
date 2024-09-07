import { useId, useRef, useState } from "react";
import AddTitle from "./components/addTitle";

export default function App() {
  const [data, setData] = useState([]);

  const id = useRef(0);

  function handleAddTitle(title){
    id.current += 1
    setData(prevData => {
      return [
        ...prevData,
        {
          title: title,
          id: id.current
        }
      ]
    })
  }

  console.log(data)

  return (
    <div>
      <h1>Basic CRUD</h1>
      <AddTitle 
        onAddTitle={handleAddTitle}
      />
    </div>
  );
}


