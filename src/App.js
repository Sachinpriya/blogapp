
import{BrowserRouter,Routes,Route}from "react-router-dom";
import Bollywood from './components/Bollywood';
import Fitness from './components/Fitness';
import Hollywood from './components/Hollywood';
import Technology from './components/Technology';
import Food from './components/Food';
import Home from "./navigation/Home";
import Sports from "./components/Sports";
import Api from "./components/Api";
import Homes from "./Home-Section/Homes"
function App() {
  return (
    
    <Api>
    <div className="App">
    <BrowserRouter>
    <Home/>
    <Routes>
    <Route path='/' element={<Homes/>}/>
      <Route path='/homes' element={<Homes/>}/>
      <Route path="/bollywood" element={<Bollywood/>}/>
      <Route path="/technology" element={<Technology/>}/>
      <Route path="/hollywood" element={<Hollywood/>}/>
      <Route path="/fitness"element={<Fitness/>}/>
      <Route path="/food" element={<Food/>}/>
      <Route path="/sports" element={<Sports/>}/>
    </Routes>
  </BrowserRouter>
  </div>
  </Api>
  
  );
}

export default App;
