import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './SingleProduct.scss'

import { Carousel } from 'react-bootstrap';

const Detail = () => {

    const [car, setCar] = useState([])
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get(`http://10.0.3.98:9000/api/cars/detail/${id}`);
                setCar(res.data);
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchProducts()
    }, [id])

    return (
        <div className='dark d-flex' style={{ height: "100vh" }}>
            <div className="container my-5">
                <div className="card details-card p-0">
                    {car.map(scar => (
                        <div className="row" key={scar.id}>
                            <div className="col-md-6 col-sm-12 p-5">
                                <Carousel>
                                    {Array.from(scar.images.split(",")).map((e) => (
                                        <Carousel.Item key={e} >
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

                                    <div className="my-1">
                                        <input type="text" className="form-control" name="bid" id="Bid" disabled placeholder="Bid for Car" />
                                        {<p className='form-error'>Login required for placing bid</p>}
                                    </div>
                                    <div>
                                        <Link to="/login"><button type="submit" className="btn btn-outline-dark w-50" >Login</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div >
    )
}


export default Detail