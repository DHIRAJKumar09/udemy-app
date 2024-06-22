import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Cards from './Components/Cards/Cards';

import Learning from './Components/Learning/Learning';
import Plans from './Components/Plans/Plans';
import Reviews from './Components/Reviews/Reviews';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Learning></Learning>
    <Plans/>
    <Reviews/>
    <Footer/>

    </div>
  );
}

export default App;
