import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Cars.scss";

const CarsForSale = () => {
    const [cars, setCars] = useState([]);
    const [page, setPage] = useState(1);
    const [flag, setFlag] = useState(1);
    const limit = 10;
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get(`http://10.0.3.98:9000/api/cars/?page=${page}&limit=${limit}`);
                const data = await res.data
                setCars(pre => [...pre, ...data]);
                
                if(JSON.stringify(data)==="[]"){
                    setFlag(0);
                }
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchProducts()
    }, [page])
    
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
                    <h1 className="h1 text-center" id="pageHeaderTitle">Cars</h1>

                    {
                        cars.length > 0 ? (
                            cars.map(car => (
                                <article className="postcard dark blue" key={car.id}>
                                    < img className="postcard__img" src={`./upload/${car.images.split(",").splice(0, 1)}`} alt="ImageTitle" />
                                    <div className="postcard__text">
                                        <h1 className="postcard__title blue"><Link to={`/carDetail/${car.id}`}>{car.make} {car.model}</Link></h1>
                                        <div className="postcard__subtitle small">
                                            <div>
                                                {car.dateOfManufacturing.substring(0, 10)}
                                            </div>
                                        </div>
                                        <div className="postcard__bar"></div>
                                        <div className="postcard__preview-txt">
                                            <p>Car Number: {car.registrationNumber}</p>
                                            <p>Miles Covered: {car.miles}</p>
                                            <p>Price Range: ${car.sellingPriceRange}</p>
                                            <p></p>
                                        </div>
                                    </div>
                                </article>
                            ))) : (
                            <div>
                                <h1> No More Car For Sale</h1>
                            </div>
                        )
                    }

                </div>
            </section>



        </div>

    )
}

export default CarsForSale