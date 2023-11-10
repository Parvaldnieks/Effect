import { useEffect, useState } from "react";
import Post from "./Post";

function NamesList(props) {

const [names, setNamesList] = useState([]);

useEffect(() => {
  async function getNamesList() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setNamesList(data);
    }
  getNamesList();
}, []);

const namesListJSX = names.map((names, index) => {
  return <p> <Post key={index} {...names} /> </p>
});

return (
    <>
    {namesListJSX}
    </>
)
}

export default NamesList;