import ToDo from "./ToDo";


function App(props) {

  const todo = {
    userId: 1,
    id: 1,
    title: "An autist has been detected!!!",
    completed: false,
  }

  return (
    <>
    <ToDo {...todo} />
    </>
  );
}

export default App;
