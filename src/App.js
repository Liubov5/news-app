import React, { useEffect, useState } from "react";
import AppRouter from "./components/AppRouter";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import { AuthContext } from "./context";

function App() {
  const [isAuth, setIsAuth] = useState(false); //что за хуйня господа? что тут происходит

  useEffect(()=>{
      if(localStorage.getItem('auth')){
        setIsAuth(true)
      }
  }, []); //что делает useEffect()???? aaa?

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth //передаём данные в приложение
    }}> 
      <React.StrictMode>
        <BrowserRouter>
          <Navbar/>
          <AppRouter/>
        </BrowserRouter>
      </React.StrictMode>
    </AuthContext.Provider>
  )
  
}

export default App;
