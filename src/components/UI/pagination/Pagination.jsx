import React, { useState } from "react";
import classes from './Pagination.module.css';
import { getPagesArray } from "../../../utils/pages";


const Pagination = ({totalPages, changePage, page}) => {
    let pagesArray = getPagesArray(totalPages);
    let showedPagesArray = pagesArray.slice(0, 10);
   
    if(page > 4){
        showedPagesArray = pagesArray.slice(page-1, page+10);
    }  
       
    return (
        <div className={classes.page__wrapper}> 
            
            {page > 4 &&
                <span onClick={()=>changePage(1)} style={{padding: "10px", border:"1px solid black", marginLeft:"5px", cursor: "pointer"}}>В начало</span>
            }
            {showedPagesArray.map(p=> <span onClick={()=>changePage(p)} key={p} className={page === p ? `${classes.page} ${classes.page__current}` : classes.page}> {p}</span> )}

            <span onClick={()=>changePage(page + 1)}   style={{padding: "10px", border:"1px solid black", marginLeft:"5px", cursor: "pointer"}}> Дальше</span>
           
        </div>
    )
}

export default Pagination;