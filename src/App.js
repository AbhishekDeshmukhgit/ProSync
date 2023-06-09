import './App.css';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
