import React, {useState} from "react";
import MyButton from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";

const PostItem = (props) => {
   let navigate = useNavigate();
    return (
        <div className="post">
            <div className="post_content">
            <strong>{props.post.title}</strong>
            <p> {props.post.description}</p>
            </div>
            <div className="post_btn">
                <MyButton onClick = {()=>navigate(`/posts/${props.post.title}`,  { state:{post:props.post}} )}>Открыть</MyButton>
            </div>
        </div>
    );
}

export default PostItem;