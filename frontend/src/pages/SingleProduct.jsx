import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth';
import './SingleProduct.scss'

const SingleProduct = () => {
    const { currentUser } = useContext(AuthContext);
    const [car, setCar] = useState([])
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const navigate=useNavigate();
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get(`http://10.0.3.98:9000/api/cars/${id}`);
                setCar(res.data);
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchProducts()
    }, [id])
    const handleDelete = async ()=>{
        try {
          await axios.delete(`http://10.0.3.98:9000/api/cars/${id}`);
          navigate("/")
        } catch (err) {
          console.log(err);
        }
      }
    return (
        <div className='Dark d-flex' style={{ height: "calc(100vh - 56px)" }}>
            <div className="container  my-auto mx-auto">
                <div className="row  justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            {car.map(scar => (
                               
                                <div className="row" key={scar.id}>
                                        <div className="col-md-12">
                                            <div className="p-1">
                                                <div className="text-center p-3">
                                                    <img id="" className='m-auto container300' src={`../upload/${scar.images.split(",").splice(0, 1)}`} alt='main' />
                                                </div>
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
                                                {currentUser.id === scar.seller_id && <div className="cart mt-3 align-items-center"> 
                                                <button className="btn btn-dark text-uppercase mx-2 px-4">Update</button>
                                                <button className="btn btn-danger text-uppercase mx-2 px-4" onClick={handleDelete}>Delete</button>
                                                </div>}
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
// function change_image(image) {
//     image.src="https://i.imgur.com/Dhebu4F.jpg";
//     let container = document.getElementById("main-image");
//     container.src = image.src;
// }
// document.addEventListener("DOMContentLoaded", function (event) {
// });

export default SingleProduct