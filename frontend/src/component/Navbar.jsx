import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../context/auth";


const Navbar = () => {
    const { currentUser } = useContext(AuthContext);
    const logout = () => {
        localStorage.clear();
        window.location.reload()
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>
                        <img className="img-fluid mx-2 navbarBrand" src="http://10.0.3.98:3000/images/logo.png" alt="" />
                    </Link>
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
                            {currentUser && <li className="nav-item ">
                                <Link className="nav-link" to='/sellcar'>Sell Car</Link>
                            </li>}
                            {currentUser && <li className="nav-item ">
                                <Link className="nav-link" to='/' state={currentUser.id}>My Car</Link>
                            </li>}

                        </ul>
                        <div className="d-flex me-5">
                            {
                                currentUser ? (<ul className="navbar-nav me-5 mb-2 mb-lg-0">
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
                                </ul>) : (<Link to="/login"><button className="btn btn-outline-dark" type="submit">Login</button></Link>)
                            }
                            {/* <span class="navbar-text">
                                Nisarg
                            </span> */}

                            {/*  */}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar