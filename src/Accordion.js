import React, { useEffect, useState } from 'react'
import Comment from "./Comment"

const Accordion = ({ id, text, title }) => {

    const [open, setOpen] = useState(false)
    const [comments, setComments] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            await fetch(`https://dummyjson.com/posts/${id}/comments`)
                .then(res => res.json())
                .then(data => setComments(data.comments));
        }
        fetchData()
    }, [id])
    return (
        <div>
            <br />

            <a href='!#'
                onClick={(e) => {
                    e.preventDefault()
                    setOpen(!open)
                }}
                style={{ color: 'blue', textDecoration: 'none', marginButton: '10px', }}>{title}</a>
            <br />
            {open && <div>{text}
                <ul key={id} >
                <br />
                    <h4> Comment </h4>
                    {comments.map((com) => (
                        <li key={com.id}><Comment comment={com.body} /></li>
                    ))} </ul>
                <br />

            </div>}
        </div>
    )
}


export default Accordion