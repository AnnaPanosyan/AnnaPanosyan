import React, { useEffect, useState } from "react";
import Accordion from "./Accordion";


function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            await fetch('https://dummyjson.com/posts')
                .then(res => res.json())
                .then(data => setPosts(data.posts))

        }
        fetchData()
    }, [])

    return (
        <div>
            {posts.map((post) =>
            (<Accordion  key={post.id} id={post.id} text={post.body}
                title={post.title}  />)
            )}
        </div >
    )

}
export default Posts