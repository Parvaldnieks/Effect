import { useEffect, useState } from "react";

function Comment() {

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
        {
        loading ? <p>Loading...</p> :
        <>
            <p>UserId: {comment.postId} </p>
            <p>Id: {comment.id} </p>
            <p>Name: {comment.name} </p>
            <p>Email: {comment.email} </p>
            <p>Comment: {comment.body} </p>
        </>
        }
        </>
    );
}

export default Comment;