import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [user, setUser] = useState({
        name: "",
        password: "",
    })
    const [errorMessage, setErrorMessage] = useState(user)
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const handleChange = e => {
        setUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleSubmit = async e => {
        e.preventDefault()
        setErrorMessage(validator(user))
        if (Object.keys(errorMessage).length === 0) {
            try {
                await login(user)
                navigate("/");
            } catch (error) {
                // console.log(error)
                toast.error(error.response.data)
            }
        }
    }

    useEffect(() => {
        if (Object.keys(errorMessage).length > 0) {
            if (errorMessage.name) toast.error(errorMessage.name)
            if (errorMessage.password) toast.error(errorMessage.password)
        }
    }, [errorMessage])

    return (
        <div>
            <form className="card-body cardbody-color p-lg-5" onSubmit={handleSubmit}>
                <h1 className="text-center text-dark my-1">Login</h1>

                <div className="text-center logo">
                    <img src="https://www.autodap.parts/img/logo-top.svg" className="img-fluid  img-thumbnail my-2" alt="profile" />
                </div>
                <div className="my-3">
                    <input type="text" onChange={handleChange} className="form-control" name="name" id="Username" placeholder="User Name or Email id" />
                </div>
                <div className="mb-3">
                    <input type="password" onChange={handleChange} className="form-control" name="password" id="Password" placeholder="password" />
                </div>
                <div className="text-center"><button type="submit" className="btn btn-outline-dark px-1 mb-2 w-100" >Login</button>
                </div>
                <div className="text-center">
                    <p>
                        Don't have an account? <Link to='/Register'>Register</Link>
                    </p>
                </div>
            </form>
            <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
        </div>
    )
}

export default Login


const validator = (user) => {
    console.log(user)
    // error object
    let err = {}
    if (!user.name.trim()) {
        document.getElementById("Username").focus();
        err.name = "Username or Email ID is required";
    }
    else if (!user.password.trim()) {
        document.getElementById("Password").focus();
        err.password = "Password is required";
    }
    return err;
}