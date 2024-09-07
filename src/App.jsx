import { useId, useState } from "react";
import AddTitle from "./components/addTitle";



export default function App() {
  const [data, setData] = useState([]);

  function handleAddTitle(title){
    setData(prevData => {
      return [
        ...prevData,
        title
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


