import { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'


const Register = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
    })
    const navigate = useNavigate();
    const handleChange = e => {
        setUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleSubmit = async e => {

        /*const ph = document.querySelector('#phno');
        const submit = document.querySelector('#submit');
        submit.addEventListener('click', () => {
            if (ph.validity.typeMismatch) {
                ph.setCustomValidity('Please enter correct ph no');
            } else {
                ph.setCustomValidity('');
            }
        })*/
        e.preventDefault()
        try {
            await axios.post("http://10.0.3.98:9000/api/auth/register", user)
            navigate("/");
        } catch (error) {
            alert(error.response.data)
        }
    }
    return (
        <div>
            <form className="card-body cardbody-color p-lg-5" onSubmit={handleSubmit}>
                <h1 className="text-center text-dark mb-1">Register</h1>

                <div className="text-center logo">
                    <img src="https://www.autodap.parts/img/logo-top.svg" className="img-fluid img-thumbnail my-2" alt="profile" />
                </div>
                <div className="my-3">
                    <input type="text" onChange={handleChange} required className="form-control" name="name" id="Username" placeholder="User Name" />
                </div>
                <div className="my-3">
                    <input type="email" onChange={handleChange} required className="form-control" name="email" id="Email" placeholder="Email" />
                </div>
                <div className="my-3">
                    <input type="text" onChange={handleChange} required className="form-control" name="mobile" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" id="phno" placeholder="Enter 10 Digit Mobile Number" />
                </div>
                <div className="mb-3">
                    <input type="password" onChange={handleChange} required className="form-control" name="password" id="password" placeholder="password" />
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