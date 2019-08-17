import React, {useState, useEffect} from 'react';
import './App.css';

import Header from "./containers/Header/Header";
import IntroPage from "./containers/IntroPage/IntroPage";
import Main from "./containers/Main/Main"
import Footer from './containers/Footer/Footer';
  

function App() {

    const [width, setWidth]= useState(window.innerWidth);

useEffect(()=>{
   const handleResize = () => {
    window.addEventListener = ("resize", () => {
      setWidth(window.innerWidth)
      console.log(width)
    })
    console.log(width)
   } 
     handleResize()
}, [width])
  
  return (
    <div className=".App">
        <Header />
        <div className="mainpage" >
          <IntroPage />
          <Main/>
        </div>
        <Footer />
    </div>
  );
}



export default App;
