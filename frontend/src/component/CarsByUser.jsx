import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth';
import "./Cars.scss"


const CarsByUser = () => {
    const { currentUser } = useContext(AuthContext);
    const [cars, setCars] = useState([]);
    const [page, setPage] = useState(1);
    const [flag, setFlag] = useState(1);
    const limit = 10;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get(`http://10.0.3.98:9000/api/cars/user?page=${page}&limit=${limit}`, { headers: { authorization: `Bearer ${currentUser.accessToken}` } });
                const data = await res.data
                setCars(pre => [...pre, ...data]);
                if (JSON.stringify(data) === "[]") {
                    setFlag(0);
                }
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchProducts()
    }, [currentUser, page])

    useEffect(() => {
        const handleScroll = (e) => {
            const scrollHeight = e.target.documentElement.scrollHeight;
            const currentHeight = e.target.documentElement.scrollTop + window.innerHeight;
            if (currentHeight + 1 >= scrollHeight) {
                if (flag === 1) {
                    setPage(page + 1)
                }
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    })

    return (
        <div className='dark'>
            <section className="dark">
                <div className="container py-4">
                    <div className="packages-content">
                        <div className="row">
                            {
                                cars.length > 0 ? (
                                    cars.map(car => (
                                        <div className="col-md-4 col-sm-6" key={car.id}>
                                            <div className="single-package-item light">
                                                <div className='ShopPage'>
                                                    <img src={`./upload/${car.images.split(",").splice(0, 1)}`} alt="imag-eplace" />
                                                </div>
                                                <div className="single-package-item-txt">
                                                    <h3><Link to={`/car/${car.id}`}>{car.make}<br />{car.model}</Link><br /> <span >${car.sellingPriceRange}</span></h3>
                                                    <div className="packages-para">
                                                        <p>
                                                            <>
                                                                <i className="fa fa-angle-right"></i> Number: {car.registrationNumber}
                                                            </>
                                                        </p>
                                                        <p>
                                                            <i className="fa fa-angle-right"></i> Miles Covered: {car.miles}
                                                        </p>
                                                        <p>
                                                            <>
                                                                <i className="fa fa-angle-right"></i> Date: {car.dateOfManufacturing.substring(0, 10)}
                                                            </>
                                                        </p>

                                                    </div>
                                                    <div className="packages-review">

                                                    </div>
                                                    {/* <div className="about-btn">
                                                        <button className="btn btn-outline-dark">
                                                            book now
                                                        </button>
                                                    </div> */}
                                                </div>
                                            </div>

                                        </div>
                                        // <article className="postcard dark blue" key={car.id}>
                                        //     < img className="postcard__img" src={`./upload/${car.images.split(",").splice(0, 1)}`} alt="ImageTitle" />
                                        //     <div className="postcard__text">
                                        //         <h1 className="postcard__title blue"><Link to={`/car/${car.id}`}>{car.make} {car.model}</Link></h1>
                                        //         <div className="postcard__subtitle small">
                                        //             <div>
                                        //                 {car.dateOfManufacturing.substring(0, 10)}
                                        //             </div>
                                        //         </div>
                                        //         <div className="postcard__bar"></div>
                                        //         <div className="postcard__preview-txt">
                                        //             <p>Car Number: {car.registrationNumber}</p>
                                        //             <p>Miles Covered: {car.miles}</p>
                                        //             <p>Price Range: ${car.sellingPriceRange}</p>
                                        //             <p></p>
                                        //         </div>
                                        //     </div>
                                        // </article>
                                    ))) : (
                                    <div>
                                        <h1> No Car For Sale</h1>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>



        </div>

    )
}

export default CarsByUser