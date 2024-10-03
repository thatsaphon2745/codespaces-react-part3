import './App.css';
import Home from './Home';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Posts from './Posts';
import About from './About';
function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/posts?fname=thatsaphon&lname=losuwannarak">Thatsaphon</Link></li>
          <li><Link to="/posts/1">Post id 1</Link></li>
          <li><Link to="/posts/Adult">Adult</Link></li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/posts/:id" element={<Posts/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
