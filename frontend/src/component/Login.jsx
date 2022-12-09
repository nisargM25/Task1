import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/auth";


const Login = () => {
    const [user, setUser] = useState({
        name: "",
        password: "",
    })
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const handleChange = e => {
        setUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            await login(user)
            navigate("/");
        } catch (error) {
            // console.log(error)
            alert(error.response.data)
        }
    }
    return (
        <div>
            <form className="card-body cardbody-color p-lg-5" onSubmit={handleSubmit}>
                <h1 className="text-center text-dark my-1">Login</h1>

                <div className="text-center logo">
                <img src="https://www.autodap.parts/img/logo-top.svg" className="img-fluid  img-thumbnail my-2"  alt="profile" />
                </div>
                <div className="my-3">
                    <input type="text" onChange={handleChange} className="form-control" name="name" required id="username" placeholder="User Name or Email id" />
                </div>
                <div className="mb-3">
                    <input type="password" onChange={handleChange} className="form-control" required name="password" id="password" placeholder="password" />
                </div>
                <div className="text-center"><button type="submit" className="btn btn-outline-dark px-1 mb-2 w-100" >Login</button>
                </div>
                <div className="text-center">
                    <p>
                        Don't have an account? <Link to='/Register'>Register</Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Login