import { useEffect, useState } from "react";

function Comment(props) {

    const [comment, setComment] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getComment() {
          const response = await fetch('https://jsonplaceholder.typicode.com/comments/4');
          const data = await response.json();
          setComment(data);
          }
        getComment();
        setLoading(false);
      }, []);

    return(
        <>
        {loading ? <p>Loading...</p> :
        <>
            <p>UserId: {props.postId} </p>
            <p>Id: {props.id} </p>
            <p>Name: {props.name} </p>
            <p>Email: {props.email} </p>
            <p>Comment: {props.body} </p>
        </>
        }
        </>
    );
}

export default Comment;