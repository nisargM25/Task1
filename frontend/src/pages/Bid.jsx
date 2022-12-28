import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../component/Cars.scss';
import { AuthContext } from '../context/auth';

const Bid = () => {
    const { currentUser } = useContext(AuthContext);
    const location = useLocation();
    const [details, setDetails] = useState([])
    const state = location.state;
    const id = location.pathname.split("/")[2];
    
    console.log(details);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get(`http://10.0.3.98:9000/api/cars/bid/${id}`,{ headers: { authorization: `Bearer ${currentUser.accessToken}` } });
                setDetails(res.data);
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchProducts()
    }, [currentUser.accessToken,id])


    // console.log(id);
    return (
        <div className='dark' style={{ height: "100vh" }}>
            <div className="container my-5">
            <h2 className='text-center'>Offers for {state.make} {state.model}</h2>
                <div className="card details-card p-3">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Mobile</th>
                                <th scope="col">Offer</th>
                                <th scope="col">Date And Time</th>
                            </tr>
                        </thead>
                        <tbody>
                        {details.map(detail => (
                        <tr key={detail.offerID}>
                                <td> {detail.userName} </td>
                                <td> {detail.userEmail} </td>
                                <td> {detail.userContact} </td>
                                <td> {detail.offerByUser} </td>
                                <td> {detail.bidDateTime.substring(0, 10)} {detail.bidDateTime.substring(11, 22) } </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Bid