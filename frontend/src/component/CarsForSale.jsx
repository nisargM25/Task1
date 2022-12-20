import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth';
import "./Cars.scss"

const CarsForSale = () => {
    const { currentUser } = useContext(AuthContext);
    const [cars, setCars] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get(`http://10.0.3.98:9000/api/cars/`,{headers:{authorization:`Bearer ${currentUser.accessToken}`}});
                setCars(res.data);
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchProducts()
    }, [currentUser])
    // console.log(cars)

    return (
        <div className='dark'>

            <section className="dark">
                <div className="container py-4">
                    <h1 className="h1 text-center" id="pageHeaderTitle">Cars</h1>
                    {
                        cars.length > 0 ? (
                            cars.map(car => (
                                <article className="postcard dark blue" key={car.id}>
                                    < img className="postcard__img" src={`./upload/${car.images.split(",").splice(0, 1)}`} alt="ImageTitle" />
                                    <div className="postcard__text">
                                        <h1 className="postcard__title blue"><Link to={`/car/${car.id}`}>{car.make} {car.model}</Link></h1>
                                        <div className="postcard__subtitle small">
                                            <div>
                                                {car.dateOfManufacturing.substring(0, 10)}
                                            </div>
                                        </div>
                                        <div className="postcard__bar"></div>
                                        <div className="postcard__preview-txt">
                                            <p>Car Number: {car.registrationNumber}</p>
                                            <p>Miles Covered: {car.miles}</p>
                                            <p>Price Range: {car.sellingPriceRange}</p>
                                            <p></p>
                                        </div>
                                    </div>
                                </article>
                            ))) : (
                            <div>
                                <h1> No Car For Sale</h1>
                            </div>
                        )
                    }
                </div>
            </section>



        </div>

    )
}

export default CarsForSale