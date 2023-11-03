function Post(props) {
    return (
    <>
    <div key={props.index} >

        <p>UserId: {props.userId} </p>
        <p>Id: {props.id} </p>
        <p>Title: {props.title} </p>
        <p>Body: {props.body} </p>
        
    </div>
    </>
    );
}

export default Post;