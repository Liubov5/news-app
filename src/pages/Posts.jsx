import React, { useEffect, useRef, useState } from "react";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import MyModal from "../components/UI/MyModal/MyModal";

import MyButton from "../components/UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import '../styles/App.css';

import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import Pagination from "../components/UI/pagination/Pagination";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import { useObserver } from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";

function Posts() {
 
  /* TODO: изучитб больше про useState */
  const [posts, setPosts] = useState([])

  const [filter, setFilter] = useState({sort:"", query:""});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef();

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page)=>{
      const response = await PostService.getAll(limit, page);
      setPosts([...posts, ...response.data]); //добавляем в конец массива новые посты
      const totalCount = response.headers['x-total-count'];
      setTotalPages(getPageCount(totalCount, limit));
  }); //передаем колбэк аргументом т.к. он ждет его в самой функци

  const SortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  } );

  useEffect(()=>{
    fetchPosts(limit, page);
  }, [page, limit]);

  const createPost = (newPost)=>{
      setPosts([...posts, newPost]) //ляяя теперь понятно как работает
      setModal(false)
  }

  const removePost =(post)=>{
    setPosts(posts.filter(p=>p.id !== post.id))
  }

  const changePage = (page)=>{
    setPage(page);
  }
  return (
    <div className="App">
      
        <MyButton style={{marginTop:'30px'}} onClick = {() => {setModal(true)}}>Создать пост</MyButton>
       <hr style={{margin: '15px 0'}}/>
       <PostFilter 
        filter={filter}
        setFilter = {setFilter}
       />
       <MySelect 
        value={limit} 
        onChange={value=>setLimit(value)} 
        defaultValue="Кол-во элементов " 
        options={[
          {value: 5, name: "5"},
          {value: 10, name: "10"},
          {value: 20, name: "20"}
        ]}
       />
      {postError &&
        <h1>Ошибка получения данных</h1>
      }
       <PostList remove={removePost} posts={SortedAndSearchedPosts} title="Список текстов"/>
       <div ref={lastElement} style={{height: "20px", background: "gray"}}></div>
      {isPostsLoading &&    
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
      }
      
      <Pagination totalPages={totalPages} changePage={changePage} page={page}/>
      <MyModal visible={modal} setVisible={setModal}> 
          <PostForm create = {createPost}/>
      </MyModal>
    </div>
  );
}

export default Posts;
