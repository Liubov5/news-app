import React from 'react';
import PostItem from "./PostItem";
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';
const PostList =({posts, title, totalCount, query})=> {
    if(!posts.length){
        return (
            <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
        )
    }
    return (
        <div>
            <h1 style={ {textAlign: 'center'} }>{title}</h1>
            <h5>Количество новостей по теме <span style={{color: 'green', fontSize:"24px"}}>{query}</span>: {totalCount}</h5>
            <TransitionGroup>
            {
            posts.map((post,index) =>
                <CSSTransition key={post.id} classNames="post" timeout={500}>
                    <PostItem number={index+1} post={post} />
                </CSSTransition>
            )
            }
            </TransitionGroup>
        </div>
    );
};

export default PostList