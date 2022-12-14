import Home from "./pages/Home";
import './index.css'
import './global.scss'
import { Navigate, Route, Routes } from "react-router-dom";
import Register from "./component/Register";
import Login from "./component/Login";
import Profile from "./component/Profile";
import { useContext } from "react";
import { AuthContext } from "./context/auth.js";
import Navbar from "./component/Navbar";
import SellCar from "./component/SellCar";

function App() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="AppMain">
      {currentUser && <Navbar />}
      <Routes>
        <Route path='/register' element={!currentUser&&<Register />} />
        <Route path='/' element={!currentUser ? <Login /> : <Home />} />
        <Route path='/profile' element={currentUser ? <Profile /> :<Navigate replace to="/" /> } />
        <Route path='/sellcar' element={currentUser ? <SellCar />:<Navigate replace to="/" />} />
        <Route path="*" element={<Navigate replace to="/" />} />
        {/* <Route path='*' element={!currentUser ? <Login /> : <Profile />}/> */}
      </Routes>
    </div>
  );
}

export default App;
