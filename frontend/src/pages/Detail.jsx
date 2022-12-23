import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './SingleProduct.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
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
                                    <p className="product-price">Price Range: {scar.sellingPriceRange}</p>
                                    <hr />
                                    <p className="product-title mt-3 mb-3">About this product</p>
                                    <p className="product-description mb-2">Car Number: {scar.registrationNumber}</p>
                                    <p className="product-description mb-2">Date of Manufacture: {scar.dateOfManufacturing.substring(0, 10)}</p>
                                    <p className="product-description mb-2">Miles Covered: {scar.miles}</p>
                                   
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