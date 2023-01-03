import CarForSeller from "../component/CarForSeller"
import '../component/Cars.scss'
import { useLocation } from "react-router-dom";
import CarsByUser from "../component/CarsByUser";


const HomeU = () => {
    const state = useLocation().state;
    

    return (
        <div className='dark' style={{ height: "calc(100vh - 65px) " }}>
            {state ? <CarsByUser /> : <CarForSeller/>}
          
        </div>
    )
}

export default HomeU