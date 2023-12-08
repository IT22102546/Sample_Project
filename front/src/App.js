import './App.css';
import AddStudent from './components/AddStudent';
import Header from './components/Header';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
  
   
    <div>
        <Header/>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path="/home" element ={<Home/>}/>
          <Route path="/add" element ={<AddStudent/>}/> 
        </Routes>
      </BrowserRouter>
     </div>
   
   
  );
}

export default App;
