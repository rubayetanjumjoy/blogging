import './App.css';
import {BrowserRouter,Routes,Route,Navigate,Outlet,Link} from "react-router-dom";
import About from './Components/About';
import LandingPage from './Components/LandingPage';
import BlogPage from './Components/BlogPage';
import Error from './Components/Error';
import Details from './Components/Details';
function App() {
  return (
    
    
    
     <>
    
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<LandingPage/>}></Route>
      <Route exact path="/blog" element={<BlogPage/>}></Route>
      <Route exact path="/about" element={<About/>}></Route>
      <Route exact path="/details" element={<Details/>}></Route>
      <Route exact path="*" element={<Error/>}></Route>

    </Routes>
    </BrowserRouter>
     </>
    
    
  );
}

export default App;
