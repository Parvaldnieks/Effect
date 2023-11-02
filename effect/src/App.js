import ToDo from "./ToDo";
import Comment from "./Comment";
import { useEffect, useState } from "react";

function App(props) {

  const [todo, setToDo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getToDo() {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/4');
      const data = await response.json();
      setToDo(data);
      }
    getToDo();
    setLoading(false);
  }, []);



  return (
    <>
    {loading ? <p>Loading...</p> : <ToDo {...todo} />}
    <Comment />
    </>
  );
}

export default App;
