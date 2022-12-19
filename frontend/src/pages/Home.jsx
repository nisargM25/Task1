import CarsForSale from "../component/CarsForSale"
import '../component/Cars.scss'
import { useLocation } from "react-router-dom";
import CarsByUser from "../component/CarsByUser";


const Home = () => {
    const state = useLocation().state;

    return (
        <div className='Dark' style={{ height: "calc(100vh - 56px)" }}>
            {state ? <CarsByUser /> : <CarsForSale />}
        </div>
    )
}

export default Home