import './App.css';
import AddStudent from './components/AddStudent';
import Header from './components/Header';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from './components/Home';


function App() {
  return (
  
      <Router>
          <div>
              <Header/>
            <Routes>
              <Route index Component={Home}/>
              <Route path='/home' exact Component={Home}/>
              <Route path='/add' exact Component={AddStudent}/>
            </Routes>
          </div>
      </Router>
       
   );
}

export default App;
