import axios from 'axios';
import { useFormik } from 'formik';
import { useContext, useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/auth';
import { placeBid } from '../schemas';
import './SingleProduct.scss'

const SingleProduct = () => {
    const { currentUser } = useContext(AuthContext);
    const [car, setCar] = useState([])
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const navigate = useNavigate();
    const initialValues = {
        bid: "",
        sellerId:"",
        vehicleId: ""
    }
    const { values, errors,  handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: placeBid,
        onSubmit: async (values) => {
            values.vehicleId = id
            values.sellerId = car[0].seller_id;
            try {
                await axios.post(`http://10.0.3.98:9000/api/cars/offer`, values, { headers: { authorization: `Bearer ${currentUser.accessToken}` } });
                toast.success("Successfully Placed Offer");
                navigate("/");
            } catch (error) {
                toast.error(error.response.data)
            }
        },
    });

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get(`http://10.0.3.98:9000/api/cars/${id}`, { headers: { authorization: `Bearer ${currentUser.accessToken}` } });
                setCar(res.data);
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchProducts()
    }, [currentUser.accessToken, id])
    const handleDelete = async () => {
        try {
            console.log("Delete")
            await axios.delete(`http://10.0.3.98:9000/api/cars/${id}`, { headers: { authorization: `Bearer ${currentUser.accessToken}` } });
            navigate("/")
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='dark d-flex' style={{ minHeight: "100vh" }}>
            <div className="container my-5">
                <div className="card details-card p-0">
                    {car.map(scar => (
                        <div className="row" key={scar.id}>
                            <div className="col-md-6 col-sm-12 p-5">
                                <Carousel>
                                    {Array.from(scar.images.split(",")).map((e) => (
                                        <Carousel.Item key={e}>
                                            < img className='' src={`../upload/${e}`} alt="cars" />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </div>
                            <div className="col-md-6 col-sm-12 description-container p-5">
                                <div className="main-description">

                                    <h3>{scar.make} {scar.model}</h3>
                                    <hr />
                                    <p className="product-price my-2">Price Range: ${scar.sellingPriceRange}</p>
                                    <hr />
                                    <p className="product-title my-2 ">About this product</p>
                                    <p className="product-description mb-1">Car Number: {scar.registrationNumber}</p>
                                    <p className="product-description mb-1">Date of Manufacture: {scar.dateOfManufacturing.substring(0, 10)}</p>
                                    <p className="product-description mb-1">Miles Covered: {scar.miles}</p>
                                    
                                    {currentUser.id === scar.seller_id ? (<div className="cart mt-3 align-items-center">
                                        <hr />
                                        <Link to={`/updateCar/${scar.id}`} state={scar}><button className="btn btn-dark text-uppercase m-2 px-4">Update</button></Link>
                                        <button className="btn btn-danger text-uppercase mx-2 px-4" onClick={handleDelete}>Delete</button>
                                        <Link to={`/offerReceived/${scar.id}`} state={scar}><button className="btn btn-outline-dark text-uppercase m-1 px-2">Offer Received</button></Link>
                                    </div>) : (
                                        //bid form
                                        <form onSubmit={handleSubmit}>
                                            <div className="my-1 form-floating">
                                                <input type="text" value={values.bid} onChange={handleChange} className="form-control" name="bid" id="Bid" placeholder="Offer for Car" />
                                                <label htmlFor="Bid">Offer for car</label>
                                                {errors.bid ? <p className='form-error'>{errors.bid}</p> : null}
                                            </div>
                                            <div>
                                                {<button type="submit" className="btn btn-outline-dark w-50" >Place Offer</button>}
                                            </div>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div >
    )
}

export default SingleProduct