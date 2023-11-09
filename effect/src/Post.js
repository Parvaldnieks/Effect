function Post(props) {
    return (
    <>
    <div key={props.index} >

        <p>Id: {props.id} </p>
        <p>Name: {props.name} </p>
        <p>Title: {props.title} </p>
        <p>Body: {props.body} </p>

        <br></br>
        
    </div>
    </>
    );
}

export default Post;