import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signUpSchema } from '../schemas';



const Register = () => {
    const navigate = useNavigate();

    const initialValues = {
        name: "",
        email: "",
        mobile: "",
        password: "",
        confirm_password: ""
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: signUpSchema,
        onSubmit: async (values, action) => {
            try {
                await axios.post("http://10.0.3.98:9000/api/auth/register", values);
                navigate("/login");
            } catch (error) {
                toast.error(error.response.data)
            }

            action.resetForm();
        },
    });

    return (
        <div className='App'>
            <div className="container">
                <div className="RowMain row">
                    <div className="col-md-5 m-auto offset-md-3">
                        <div className="card">
                            <form className="card-body cardbody-color p-lg-5" onSubmit={handleSubmit}>
                                <h1 className="text-center text-dark mb-1">Register</h1>
                                <div className="text-center logo">
                                    <img src="./images/logo.png" className="img-fluid img-thumbnail my-2" alt="profile" />
                                </div>
                                <div className="form-floating my-2">
                                    <input type="text" value={values.name} onChange={handleChange} onBlur={handleBlur} className="form-control" name="name" id="Username" placeholder="User Name" />
                                    <label htmlFor="Username">Username</label>
                                    {errors.name && touched.name ? <p className='form-error'>{errors.name}</p> : null}
                                </div>
                                <div className="form-floating mb-2">
                                    <input type="email" value={values.email} onChange={handleChange} onBlur={handleBlur} className="form-control" name="email" id="Email" placeholder="Email Id" />
                                    <label htmlFor="Email">Email</label>
                                    {errors.email && touched.email ? <p className='form-error'>{errors.email}</p> : null}
                                </div>
                                <div className="form-floating mb-2">
                                    <input type="text" value={values.mobile} onChange={handleChange} onBlur={handleBlur} className="form-control" name="mobile" id="Mobile" placeholder="Enter 10 Digit Mobile Number" />
                                    <label htmlFor="Mobile">Mobile</label>
                                    {errors.mobile && touched.mobile ? <p className='form-error'>{errors.mobile}</p> : null}
                                </div>
                                <div className="form-floating mb-2">
                                    <input type="password" value={values.password} onChange={handleChange} onBlur={handleBlur} className="form-control" name="password" id="Password" placeholder="Password" />
                                    <label htmlFor="Password">Password</label>
                                    {errors.password && touched.password ? <p className='form-error'>{errors.password}</p> : null}
                                </div>
                                <div className="form-floating mb-2">
                                    <input type="password" value={values.confirm_password} onChange={handleChange} onBlur={handleBlur} className="form-control" name="confirm_password" id="confirm_password" placeholder="Confirm Password" />
                                    <label htmlFor="confirm_password">Confirm password</label>
                                    {errors.confirm_password && touched.confirm_password ? <p className='form-error'>{errors.confirm_password}</p> : null}
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-outline-dark px-1 mb-2 w-100" >Register</button>
                                </div>
                                <div className="text-center">
                                    <p className="para">
                                        Already have an account? <Link to='/login'>Login</Link>
                                    </p>
                                </div>
                            </form>
                            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register

