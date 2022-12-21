import axios from 'axios';
import {  useEffect, useState } from 'react';
import {  useLocation } from 'react-router-dom';

import './SingleProduct.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
        <div className='Dark d-flex' style={{ height: "calc(100vh - 56px)" }}>
            <div className="container  my-auto mx-auto">
                <div className="row  justify-content-center">
                    <div className="col-md-5 p-5">
                        <div className="card">
                            {car.map(scar => (
                                <div className="row" key={scar.id}>
                                    <div className="col-md-12">
                                        <div className="p-1 container300">
                                            {/* <div className="text-center p-3 container300">
                                                <img id="expandedImg" className='m-auto ' src={`../upload/${scar.images.split(",").splice(0, 1)}`} alt='main' />
                                            </div>
                                            <hr /> */}
                                            <Carousel infiniteLoop={true} showIndicators={false} showStatus={false} swipeable={true} showThumbs={false} showArrows={true} stopOnHover={true}>
                                            {Array.from(scar.images.split(",")).map((e) => (<div key={e}>
                                                    {< img className='container300img' src={`../upload/${e}`} alt="cars"/>}
                                                </div>
                                                ))}
                                            </Carousel>
                                            {/* <div className='UpdateImg justify-content-center' >
                                                {Array.from(scar.images.split(",")).map((e) => (<span key={e}>
                                                    {< img className='img-thumbnail' src={`../upload/${e}`} alt="cars" width={"100%"} onClick={myFunction(this)} />}
                                                </span>
                                                ))}
                                            </div> */}
                                            {/* <div className="thumbnail text-center"> <img onClick={change_image(this)} alt='sec' src="https://i.imgur.com/Rx7uKd0.jpg" width="70" /> <img onClick={change_image(this)} src="https://i.imgur.com/Dhebu4F.jpg" alt='sec' width="70" /> </div> */}
                                        </div>
                                    </div>

                                    <div className="col-md-12 text-center">
                                        <div className="product p-5">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-flex align-items-center"> <i className="fa fa-long-arrow-left"></i>  </div> <i className="fa fa-shopping-cart text-muted"></i>
                                            </div>
                                            <div className="about mt-3 mb-2">
                                                <h2 className="text-uppercase"><strong>{scar.make} {scar.model}</strong></h2>
                                            </div>
                                            <p className="about">Car Number: {scar.registrationNumber}</p>
                                            <p className="about">Date of Manufacture: {scar.dateOfManufacturing.substring(0, 10)} </p>
                                            <p className="about">Miles Covered: {scar.miles}</p>
                                            <p className="about">Price Range: {scar.sellingPriceRange}</p>
                                            
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}


export default Detail