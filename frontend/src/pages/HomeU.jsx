import CarForSeller from "../component/CarForSeller"
import '../component/Cars.scss'
import { useLocation } from "react-router-dom";
import CarsByUser from "../component/CarsByUser";


const HomeU = () => {
    const state = useLocation().state;
    

    return (
        <div className='Dark' style={{ height: "100vh " }}>
            {state ? <CarsByUser /> : <CarForSeller/>}
          
        </div>
    )
}

export default HomeU