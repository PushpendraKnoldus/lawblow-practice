import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login/Login";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/homepage" element={<Homepage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
