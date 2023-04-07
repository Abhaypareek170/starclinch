import React, { Suspense } from 'react';
import './App.css';
import Header from './Components/Header';
import UpperFooter from './Components/UpperFooter';
import Footer from './Components/Footer';
import LoadingSpinner from './Components/LoadingSpinner';

const Singers = React.lazy(()=>import('./Components/Singers')) ;
function App() {
  return (
    <div className="root">
      <Suspense fallback={<div className="centered">
            <LoadingSpinner /><p>Please wait...</p>
      </div>}>  
     <Header/>
     <Singers/></Suspense>
     <UpperFooter/>
     <Footer/>
    </div>
  );
}

export default App;
