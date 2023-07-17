import React, {useState} from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";
import MyButton from "./UI/button/MyButton";

const PostFilter = ({query, setQuery}) => {
    const [currentQuery, setCurrentQuery] = useState(query);

    return (
        <div>
            {/* <MyInput 
            placeholder="Поиск новостей по ключевому слову"
            value={filter.query}
            onChange = {(e)=>setFilter({...filter, query: e.target.value})}
            /> */}

            <MyInput 
            placeholder="Поиск новостей по ключевому слову"
            value={currentQuery}
            onChange={(e)=>setCurrentQuery(e.target.value)}

            />
            <MyButton onClick = {()=>setQuery(currentQuery)}>Найти</MyButton>

            {/* <MySelect 
            value={filter.sort}
            onChange = {selectedSort=> setFilter({...filter, sort:selectedSort})}
            defaultValue="Сортировка" 
            options={[
            {value: "title", name:"По названию"},
            {value: "body", name:"По описанию"}
            ]}/> */}
        </div>
        
    )
}

export default PostFilter;

