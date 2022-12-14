import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from "formik";
import { signInSchema } from "../schemas";




const Login = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const initialValues = {
        name: "",
        password: "",
    }
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: signInSchema,
        onSubmit: async (values, action) => {
            try {
                await login(values)
                navigate("/");
            } catch (error) {
                // console.log(error)
                toast.error(error.response.data)
            }
            action.resetForm();
        },
    },
    )

    return (
        <div className='App'>
            <div className="container">
                <div className="row RowMain">
                    <div className="col-md-5 m-auto offset-md-3">
                        <div className="card">
                            <form className="card-body cardbody-color p-lg-5" onSubmit={handleSubmit}>
                                <h1 className="text-center text-dark my-1">Login</h1>

                                <div className="text-center logo">
                                    <img src="./images/logo.png" className="img-fluid  img-thumbnail my-2" alt="profile" />
                                </div>
                                <div className="form-floating my-3">
                                    <input type="text" value={values.name} onChange={handleChange} onBlur={handleBlur} className="form-control" name="name" id="Username" placeholder="Enter Username or Email Id" />
                                    <label htmlFor="Username">Email address or Username</label>
                                    {errors.name && touched.name ? <p className='form-error'>{errors.name}</p> : null}
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" value={values.password} onChange={handleChange} onBlur={handleBlur} className="form-control" name="password" id="Password" placeholder="Password" />
                                    <label htmlFor="Password">Password</label>
                                    {errors.password && touched.password ? <p className='form-error'>{errors.password}</p> : null}
                                </div>
                                <div className="text-center"><button type="submit" className="btn btn-outline-dark px-1 mb-2 w-100" >Login</button>
                                </div>
                                <div className="text-center">
                                    <p className="para">
                                        Don't have an account? <Link to='/Register'>Register</Link>
                                    </p>
                                </div>
                            </form>
                            <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
