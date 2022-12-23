import CarsForSale from "../component/CarsForSale"
import React from 'react';
import '../component/Cars.scss'
// const LazyCarForSale=React.lazy(()=>import("../component/CarsForSale"))



const Home = () => {

    return (
        <div className='dark' style={{ height: "100vh" }}>
            {/* {<LazyCarForSale />} */}
            <CarsForSale/>
        </div>
    )
}

export default Home