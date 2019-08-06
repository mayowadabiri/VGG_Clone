import React from 'react';
import './App.css';
import Header from "./containers/Header/Header";
import IntroPage from "./containers/IntroPage/IntroPage";
import Main from "./containers/Main/Main"
import Footer from './containers/Footer/Footer';

function App() {

// useEffect(()=>{

//   console.log(window.innerWidth)
// }, [window.innerWidth])
  
  return (
    <div >
        <Header />
        <div className="mainpage" >
          <IntroPage />
          <Main />
        </div>
        <Footer />
    </div>
  );
}

export default App;
