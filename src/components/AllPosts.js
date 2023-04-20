import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

export default function AllPosts({ user }) {
    const [allPostsData, setAllPosts] = useState(null);

    useEffect(() => {
        if(!user) {
            fetch("/getAllPosts")
            .then((res) => res.json())
            .then((data) => setAllPosts(data))
            .catch((err) => console.error(err));
        }
    }, [user])

    return <div className="center mt-3">
        { allPostsData.map((post, index) => (
            <div className="center m-2" style={{min_width: "30%", maxWidth: "400px"}} key={index}>
                <Card>
                    <div className="d-flex align-items-center flex-column">
                        <Card.Img variant="top" src={post.photo.asset.url} style={{width: "100%"}}></Card.Img>
                    </div>
                    <Card.Body>
                        <Card.Title>@{post.username}</Card.Title>
                        <Card.Text>{post.caption}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">{post.created_at}</Card.Footer>
                </Card>
            </div>
        )) }
    </div>
}