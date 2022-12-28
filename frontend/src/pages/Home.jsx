import CarsForSale from "../component/CarsForSale"
import React from 'react';
import '../component/Cars.scss';

const Home = () => {

    return (
        <div className='dark' style={{ height: "100vh" }}>
        
            <CarsForSale/>
            
        </div>
    )
}

export default Home