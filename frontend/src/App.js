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
import SingleProduct from "./pages/SingleProduct";
import UpdateCar from "./component/UpdateCar";
import { ToastContainer } from "react-toastify";

function App() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="AppMain">
      {currentUser && <Navbar />}
      <Routes>
        <Route path='/register' element={!currentUser?<Register />:<Navigate replace to="/" />} />
        <Route path='/' element={!currentUser ? <Login /> : <Home />} />
        <Route path='/profile' element={currentUser ? <Profile /> :<Navigate replace to="/" /> } />
        <Route path='/sellcar' element={currentUser ? <SellCar />:<Navigate replace to="/" />} />
        <Route path='/car/:id' element={currentUser ? <SingleProduct />:<Navigate replace to="/" />} />
        <Route path='/updateCar/:id' element={currentUser ? <UpdateCar />:<Navigate replace to="/" />} />
        <Route path="*" element={<Navigate replace to="/" />} />
        {/* <Route path='*' element={!currentUser ? <Login /> : <Profile />}/> */}
      </Routes>
      <ToastContainer position="top-right" autoClose={6000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
    </div>
  );
}

export default App;
