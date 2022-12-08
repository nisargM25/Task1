import Login from "../component/Login"
import Register from "../component/Register"
import {Routes, Route } from "react-router-dom"


const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 m-auto offset-md-3">
                        <div className="card">
                            <Routes>
                                <Route>
                                    <Route path='/register' element={<Register />} />
                                    <Route path='/' element={<Login />} />
                                </Route>
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home