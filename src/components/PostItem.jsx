import React, {useState} from "react";
import MyButton from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const PostItem = (props) => {
   let navigate = useNavigate();
    return (
        <div className="bg-light mt-3 p-3 rounded-3">
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