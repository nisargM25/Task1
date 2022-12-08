
import { Link } from 'react-router-dom'


const Register = () => {
    return (
        <div>
            <form className="card-body cardbody-color p-lg-5">
                <h2 className="text-center text-dark mb-1">Register</h2>

                <div className="text-center">
                    <img src="./images/Logo.jpg"
                        className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3" width="100px"
                        alt="profile" />
                </div>
                <div className="my-3">
                    <input type="text" className="form-control" id="Username" placeholder="User Name" />
                </div>
                <div className="my-3">
                    <input type="text" className="form-control" id="Email" placeholder="Email" />
                </div>
                <div className="my-3">
                    <input type="text" className="form-control" id="phno" placeholder="Mobile Number" />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" id="password" placeholder="password" />
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