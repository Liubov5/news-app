import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';
import Loader from '../components/UI/Loader/Loader';


const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([]);

    const [fetchPostById, isLoading, error] = useFetching(async (id)=> {
        let response = await PostService.getPost(id);
        setPost(response.data)
        console.log(post)
    });
    const [fetchComments, isCommentLoading, comError] = useFetching(async (id)=> {
        let response = await PostService.getComments(id);
        setComments(response.data)
        
    });

    useEffect(()=>{
       fetchPostById(params.id);
       fetchComments(params.id)
    }, []);
    
    return (
        <div>
            <h1>
                Это страница поста 
            </h1>
            {isLoading
                ? <Loader/> 
                : <div> 
                    <div>{post.id}. {post.title}</div>
                    <div>{post.body}</div>
                </div>
            }
            <h1>Комментарии</h1>
            {comments.map((comment)=> 
                (
                <div key={comment.id} style={{marginTop: "15px"}}>
                    <h5>Имя: {comment.email}</h5>
                    <p>Текст: {comment.body}</p>
                    
                </div>
                )
            )}

        </div>
    )
}

export default PostIdPage;