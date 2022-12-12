import Login from "../component/Login"
import Register from "../component/Register"
import { Routes, Route } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../context/auth";
import Profile from "../component/Profile";


const Home = () => {
    const { currentUser } = useContext(AuthContext);
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 m-auto offset-md-3">
                        <div className="card">
                            <Routes>
                                <Route path='/register' element={<Register />} />
                                <Route path='/' element={!currentUser ? <Login /> : <Profile />} />
                                <Route path='*' element={!currentUser ? <Login /> : <Profile />}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home