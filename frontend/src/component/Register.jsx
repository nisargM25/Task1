import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'


const Register = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
    })
    const [errorMessage, setErrorMessage] = useState(user)
    const navigate = useNavigate();
    const handleChange = e => {
        setUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleSubmit = async e => {
        e.preventDefault();
        setErrorMessage(validator(user))
        if (Object.keys(errorMessage).length === 0) {
            try {
                await axios.post("http://10.0.3.98:9000/api/auth/register", user)
                console.log("Done This");
                navigate("/");
            } catch (error) {
                alert(error.response.data)
            }
        }
    }
    useEffect(() => {
        if (Object.keys(errorMessage).length > 0) {
            if (errorMessage.name) alert(errorMessage.name)
            if (errorMessage.email) alert(errorMessage.email)
            if (errorMessage.mobile) alert(errorMessage.mobile)
            if (errorMessage.password) alert(errorMessage.password)
        }


    }, [errorMessage])

    return (
        <div>
            <form className="card-body cardbody-color p-lg-5" onSubmit={handleSubmit}>
                <h1 className="text-center text-dark mb-1">Register</h1>

                <div className="text-center logo">
                    <img src="https://www.autodap.parts/img/logo-top.svg" className="img-fluid img-thumbnail my-2" alt="profile" />
                </div>
                <div className="my-3">
                    <input type="text" onChange={handleChange} className="form-control" name="name" id="Username" placeholder="User Name" />
                </div>
                <div className="my-3">
                    <input type="email" onChange={handleChange} className="form-control" name="email" id="Email" placeholder="Email" />
                </div>
                <div className="my-3">
                    <input type="text" onChange={handleChange} className="form-control" name="mobile" id="phno" placeholder="Enter 10 Digit Mobile Number" />
                </div>
                <div className="mb-3">
                    <input type="password" onChange={handleChange} className="form-control" name="password" id="password" placeholder="password" />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-outline-dark px-1 mb-2 w-100" >Register</button>
                </div>
                <div className="text-center">
                    <p>
                        Already have an account?<Link to='/'>Login</Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Register


const validator = (user) => {
    console.log(user)
    // error object
    let err = {}
    if (!user.name.trim()) {
        err.name = "Username is required";
        if (!user.name.trim()) {

        }
        else {
            if (!user.email.trim()) {
                err.email = "Email is required";
                if (!user.email.trim()) { }
                else{
                    if (!user.password.trim()) {
                        err.password = "Password is required";
                    }
                }
            }
        }
    }
    if (user.mobile.trim()) {
        var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
        if (!user.mobile.match(phoneno)) {
            err.mobile = "Enter 10 Digit Mobile Number";
        }
    }

    return err;
}