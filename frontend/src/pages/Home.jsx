import CarsForSale from "../component/CarsForSale"
import '../component/Cars.scss'


const Home = () => {
    return (
        <div className='Dark' style={{ height: "calc(100vh - 56px)" }}>
               <CarsForSale />
        </div>
    )
}

export default Home