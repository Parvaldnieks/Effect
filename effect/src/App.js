import ToDo from "./ToDo";

function App() {

  const todo = [{
    userId: 1,
    id: 1,
    title: "An autist has been detected!!!",
    completed: false,
  }];

  const todojsx = todo.map((user, index) => {
    return <ToDo key={index} user={user.id} id={user.id} title={user.title} completed={user.completed} />
  });

  return (
    <>
    {todojsx}
    </>
  );
}

export default App;
