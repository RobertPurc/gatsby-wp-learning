import React from "react";
import { Card, Button } from "react-bootstrap";
import * as postStyles from "./Post.module.css";


const Post = (props) => (

    <Card>
        <Card.Img variant="top" src="./test.png" />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                {props.excerpt}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>


)

export default Post;
