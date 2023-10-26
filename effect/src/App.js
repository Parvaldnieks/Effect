import ToDo from "./ToDo";

function App() {

  const todo = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  }

  const todojsx = todo.map((user, index) => {
    return <todo key={index} user={user.id} id={user.id} title={user.title} completed={user.completed} />
  });

  return (
    <>
    <ToDo />
    {todojsx}
    </>
  );
}

export default App;
