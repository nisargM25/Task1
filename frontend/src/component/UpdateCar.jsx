import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../global.scss';
import { AuthContext } from '../context/auth';
import { updateCarValidation, sellCarValidation } from '../schemas';

const UpdateCar = () => {
    const state = useLocation().state;
    const [img, setImg] = useState(state.images.split(","))
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(state)

    const initialValues = {
        make: state?.make,
        model: state?.model,
        regNo: state?.registrationNumber,
        date: state?.dateOfManufacturing.substring(0, 10),
        miles: state?.miles,
        images: state?.images.split(","),
        minPrice:state?.sellingPriceRange.split("-")[0],
        maxPrice:state?.sellingPriceRange.split("-")[1],
        price: state?.sellingPriceRange,
        sid: currentUser.id,
    }
    console.log(initialValues)

    const { values, errors, touched, handleBlur, setFieldValue, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: img.length > 0 ? updateCarValidation : sellCarValidation,
        onSubmit: async (values) => {
            // console.log(values.images[0])
            const upload = async () => {
                try {
                    const formData = new FormData();
                    for (let index = 0; index < values.images.length; index++) {
                        const file = values.images[index];
                        formData.append("images", file);
                    }
                    const res = await axios.post("http://10.0.3.98:9000/uploads", formData);
                    return res.data
                } catch (error) {
                    console.log(error)
                }
            }
            const imgUrl = await upload();
            let allImg = "";
            // console.log(img.length)
            for (let index = 0; index < img.length; index++) {
                let imgM = img[index];
                allImg === "" ? allImg = imgM : allImg += "," + imgM;
            }
            // console.log(allImg)    

            values.images = imgUrl ? imgUrl : allImg;
            values.price=values.minPrice+"-"+values.maxPrice;

            try {
                await axios.put(`http://10.0.3.98:9000/api/cars/update/${state.id}`, values, { headers: { authorization: `Bearer ${currentUser.accessToken}` } });
                toast.success("Successfully Updated");
                navigate("/");
            } catch (error) {
                toast.error(error.response.data)
            }


        },
    });

    const removeImage = (e) => {
        //images are inserted correctly cannot delete 
        setImg((ProductImg) => ProductImg.filter((item) => item !== e));

    }

    useEffect(() => {
        setImg(img);
    }, [img])

    return (
        <div className='App'>
            <div className="container">
                <div className="RowMain row">
                    <div className="col-md-6 m-auto offset-md-3">
                        <div className="card">
                            <form className="card-body cardbody-color p-lg-4" encType="multipart/form-data" onSubmit={handleSubmit}>
                                <h1 className="text-center text-dark mb-1">Update Car Details</h1>
                                <div className="my-2 form-floating">
                                    <input type="text" value={values.make} onChange={handleChange} onBlur={handleBlur} className="form-control" name="make" id="Make" placeholder="Car Make" />
                                    <label htmlFor="Make">Make</label>
                                    {errors.make && touched.make ? <p className='form-error'>{errors.make}</p> : null}
                                </div>
                                <div className="mb-2 form-floating">
                                    <input type="text" value={values.model} onChange={handleChange} onBlur={handleBlur} className="form-control" name="model" id="Model" placeholder="Car Model" />
                                    <label htmlFor="Model">Model</label>
                                    {errors.model && touched.model ? <p className='form-error'>{errors.model}</p> : null}
                                </div>
                                <div className="mb-2 form-floating">
                                    <input type="text" value={values.regNo} onChange={handleChange} onBlur={handleBlur} className="form-control" name="regNo" id="RegNo" placeholder=" Registration Plate/License Number" />
                                    <label htmlFor="RegNo">Registration Plate/License Number</label>
                                    {errors.regNo && touched.regNo ? <p className='form-error'>{errors.regNo}</p> : null}
                                </div>
                                <div className="mb-2 form-floating form-floating">
                                    <input type="Date" value={values.date} onChange={handleChange} onBlur={handleBlur} className="form-control" name="date" id="Date" />
                                    <label htmlFor="floatingTextarea my-1">Manufacturing Date</label>
                                    {errors.date && touched.date ? <p className='form-error'>{errors.date}</p> : null}
                                </div>
                                <div className="mb-2 form-floating">
                                    <input type="text" value={values.miles} onChange={handleChange} onBlur={handleBlur} className="form-control" name="miles" id="Miles" placeholder="Miles Covered" />
                                    <label htmlFor="Miles">Miles</label>
                                    {errors.miles && touched.miles ? <p className='form-error'>{errors.miles}</p> : null}
                                </div>
                                <div className="mb-1 ">
                                    <input type="file" accept='image/*' multiple onChange={(e) => { setFieldValue("images", e.currentTarget.files) }} onBlur={handleBlur} className="form-control" name="images" id="Images" />
                                    {errors.images && touched.images ? <p className='form-error'>{errors.images}</p> : null}
                                    <div className='UpdateImg' >
                                        {img.length > 0 ? Array.from(img).map((e) => (<div key={e}>
                                            <div className="containerX">
                                                {< img src={`../upload/${e}`} alt="cars" width={"100%"} />}
                                                <button className='btnX btn btn-outline-dark' onClick={() => removeImage(e)}><i className="fa fa-close"></i> Remove</button>
                                            </div>
                                        </div>
                                        )):(<div className="containerX"><label htmlFor="Images" className='CursorType'>Upload Image</label></div>)}
                                    </div>
                                </div>
                                <div className="mb-1">
                                <label htmlFor="Price">Price Range in $</label>
                                    <div className="row g-2">
                                        <div className="col form-floating">
                                            <input type="text" className="form-control" value={values.minPrice} placeholder="Price From" onChange={handleChange} onBlur={handleBlur} id='PriceFrom' name='minPrice' aria-label="First name" />
                                            <label htmlFor="PriceFrom">Min Price</label>
                                            {errors.minPrice && touched.minPrice ? <p className='form-error'>{errors.minPrice}</p> : null}
                                        </div>
                                        <div className="col form-floating">
                                            <input type="text" className="form-control" value={values.maxPrice} onChange={handleChange} onBlur={handleBlur} placeholder="Price to" id='PriceTo' name='maxPrice' aria-label="Last name" />
                                            <label htmlFor="PriceTo">Max Price</label>
                                            {errors.maxPrice && touched.maxPrice ? <p className='form-error'>{errors.maxPrice}</p> : null}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    {<button type="submit" className="btn btn-outline-dark px-1 mb-2 w-50" >Update</button>}
                                </div>

                            </form>
                            <ToastContainer position="top-right" autoClose={6000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateCar