import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Singers from './Components/Singers';
import UpperFooter from './Components/UpperFooter';

function App() {
  return (
    <div className="root">
     <Header/>
     <Singers/>
     <UpperFooter/>
     <Footer/>
    </div>
  );
}

export default App;
