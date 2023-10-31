import ToDo from "./ToDo";
import { useEffect, useState } from "react";

function App(props) {

  const [todo, setToDo] = useState({});
  useEffect(() => {
    async function getToDo() {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/4');
      const data = await response.json();
      setToDo(data);
      }
    getToDo();
  }, []);
  
  // const todo = {
  //   userId: 1,
  //   id: 1,
  //   title: "An autist has been detected!!!",
  //   completed: false,
  // }

  return (
    <>
    <ToDo {...todo} />
    </>
  );
}

export default App;
