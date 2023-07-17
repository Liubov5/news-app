import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';
import Loader from '../components/UI/Loader/Loader';


const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([]);
    const location = useLocation();

    useEffect(()=>{
       setPost(location.state.post);
       console.dir(post)
    }, []);
    
    return (
        <div>
            <h1>
                {post.title}
            </h1>

                <div> 
                    
                    <p>{post.description}</p>
                    <p>Author: {post.author}</p>
                    <p><a href={post.url} target='_blank'>Know more</a></p>
                    
                    <img src={post.urlToImage} alt="" />

                </div>
            
           

        </div>
    )
}

export default PostIdPage;