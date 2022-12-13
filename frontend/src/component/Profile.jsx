import React, { useContext } from 'react'
import { AuthContext } from '../context/auth';

const Profile = () => {
    const { currentUser, logout } = useContext(AuthContext);
    return (
        <div className='App'>
            <div className="container">
                <div className="RowMain row">
                    <div className="col-md-5 m-auto offset-md-3">
                        <div className="card">
                            <div className='profile-container'>
                                <div className="card profile" >
                                    <img src="https://www.autodap.parts/img/logo-top.svg" className="card-img-top logo img-thumbnail" alt="..." />
                                    <div className="card-body  text-center">
                                        <h1 className="card-title mb-3">{currentUser.name}</h1>
                                        <p className="card-text">
                                            <span >Mobile No. : {currentUser.mobile}</span>
                                            <br />
                                            <span >Email ID : {currentUser.email}</span></p>
                                        <button type="button" className="btn btn-outline-dark" onClick={logout}>Logout</button>
                                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile