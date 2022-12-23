import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth';
import './SingleProduct.scss'

const SingleProduct = () => {
    const { currentUser } = useContext(AuthContext);
    const [car, setCar] = useState([])
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const navigate = useNavigate();
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
            await axios.delete(`http://10.0.3.98:9000/api/cars/${id}`, { headers: { authorization: `Bearer ${currentUser.accessToken}` } });
            navigate("/")
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className='dark d-flex' style={{ height: "100vh" }}>
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
                                    <p className="product-price">Price Range: {scar.sellingPriceRange}</p>
                                    <hr />
                                    <p className="product-title mt-4 mb-3">About this product</p>
                                    <p className="product-description mb-2">Car Number: {scar.registrationNumber}</p>
                                    <p className="product-description mb-2">Date of Manufacture: {scar.dateOfManufacturing.substring(0, 10)}</p>
                                    <p className="product-description mb-2">Miles Covered: {scar.miles}</p>
                                    {/* <p className="product-description mb-4">Price Range: {scar.sellingPriceRange}</p> */}
                                    {currentUser.id === scar.seller_id && <div className="cart mt-3 align-items-center">
                                        <hr />
                                        <Link to={`/updateCar/${scar.id}`} state={scar}><button className="btn btn-dark text-uppercase m-2 px-4">Update</button></Link>
                                        <button className="btn btn-danger text-uppercase mx-2 px-4" onClick={handleDelete}>Delete</button>
                                    </div>}
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