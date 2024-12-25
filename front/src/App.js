import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from
'react-router-dom';
import './App.css';
import Signin from './Page/Signin';
import Signup from './Page/Signup';
import Propslearn from './Page/Propslearn';
import Profile from './Page/Profile';
import Post from './Page/Post';

function App() {
  return (
    <Router>
    <Routes>



<Route path="/Signin" element={<Signin/>} />
<Route path="/Signup" element={<Signup/>} />
<Route path="/Propslearn" element={<Propslearn/>} />
<Route path="/Profile" element={<Profile/>} />
<Route path="/Post" element={<Post/>} />

    </Routes>
  
    </Router>
  );
}

export default App;
