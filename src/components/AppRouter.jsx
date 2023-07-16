import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";

import NoMatch from "./NoMatch";
import PostIdPage from "../pages/PostIdPage";
import { privateRoutes, publicRoutes } from "../router/routes";
import Login from "../pages/Login";
import { AuthContext } from "../context";

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);
    return (
        <Routes>
            { isAuth
            ?   <>
                    { privateRoutes.map((route)=><Route key={route.path} path={route.path} element={route.component} />) }
                    <Route path="/" element={<Posts/>}>
                    </Route>
                    <Route path="*" element={<NoMatch/>}>   
                    </Route>
                </>
            :   <>
                    { publicRoutes.map(route=><Route key={route.path} path={route.path} element={route.component} />) }
                    <Route path="*" element={<Login/>}>   </Route>
                </> 
            }
           
           
           
            
            
        </Routes>  
    )
}

export default AppRouter;