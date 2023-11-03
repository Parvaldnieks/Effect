import { useEffect, useState } from "react";
import Post from "./Post";

function PostList() {

const [postList, setPostList] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  async function getPostList() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    setPostList(data);
    }
  getPostList();
  setLoading(false);
}, []);

const postListJSX = postList.map((post, index) => {
    return <p> <Post key={index} {...post} /> </p>
});

return (
    <>
    {loading ? <p>Loading...</p> : postListJSX}
    </>
)
}

export default PostList;