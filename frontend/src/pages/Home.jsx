import CarsForSale from "../component/CarsForSale"
import React from 'react';
import '../component/Cars.scss';

const Home = () => {

    return (
        <div className='dark' style={{ minHeight: "calc(100vh - 65px)" }}>
        
            <CarsForSale/>
            
        </div>
    )
}

export default Home