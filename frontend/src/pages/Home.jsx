import CarsForSale from "../component/CarsForSale"
import '../component/Cars.scss'
// import { AuthContext } from "../context/auth";
// import { useContext } from "react";
// import { useLocation } from "react-router-dom";
// import CarsByUser from "../component/CarsByUser";


const Home = () => {
    // const state = useLocation().state;
    // const { currentUser } = useContext(AuthContext);

    return (
        <div className='Dark' style={{ height: "100vh" }}>
            { <CarsForSale />}
           {/* <CarsForSale /> */}
        </div>
    )
}

export default Home