import React, {useState} from "react";
import MyButton from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";

const PostItem = (props) => {
   let navigate = useNavigate();
   
    return (
        <div className="post">
            <div className="post_content">
            <strong>{props.post.id}. {props.post.title}</strong>
            <p> {props.post.body}</p>
            </div>
            <div className="post_btn">
                <MyButton onClick = {()=>navigate(`/posts/${props.post.id}`)}>Открыть</MyButton>
                <MyButton onClick = {()=>props.remove(props.post)}>Удалить</MyButton>
            </div>
        </div>
    );
}

export default PostItem;