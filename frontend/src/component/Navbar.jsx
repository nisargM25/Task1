import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../context/auth";


const Navbar = () => {
    const { currentUser } = useContext(AuthContext); 
    const logout=()=>{
        localStorage.clear();
        window.location.reload()
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'><img className="img-fluid mx-2 navbarBrand" src="https://www.autodap.parts/img/logo-top.svg" alt=""/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                                <Link className="nav-link" to='/'>Cars</Link>
                            </li> */}
                            <li className="nav-item ">
                                <Link className="nav-link" to='/'>Home</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to='/sellcar'>Sell Car</Link>
                            </li>


                        </ul>
                        <div className="d-flex me-5">
                            {/* <span class="navbar-text">
                                Nisarg
                            </span> */}
                            <ul className="navbar-nav me-5 mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <strong>{currentUser.name}</strong> 
                                    </Link>
                                    
                                    <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item " to="/profile" >View Profile</Link></li>
                                        {/* <li><Link className="dropdown-item " >Another action</Link></li> */}
                                        <li><hr className="dropdown-divider " /></li>
                                        <li><Link className="dropdown-item " onClick={logout}>Logout</Link></li>
                                    </ul>
                                </li>
                            </ul>
                            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar