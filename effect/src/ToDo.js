import { useState } from "react";

function ToDo(props) {

    const [check, setCheck] = useState(props.completed);

    function handleChange(event) {
      setCheck(event.target.checked);
    }

    return (
    <>
        <p>UserId: {props.userId} </p>
        <p>Id: {props.id} </p>
        <p>{props.title} </p>
        <label>completed: </label>
        <input checked={check} onChange={handleChange} type="checkbox" />
    </>
    );
}

export default ToDo;