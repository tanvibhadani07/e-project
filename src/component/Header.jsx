import React from 'react'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { RiBlueskyFill } from "react-icons/ri";
import { CiHome } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

const Header = () => {

    const cartData = useSelector((state) => state.cart.cartData);

    return (

        <div className="body">

            <nav className="navbar  navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">

                <div className="container  container-fluid">
                    <Link to='/' className="navbar-brand fw-bold" ><RiBlueskyFill className='hion' /> MY MART</Link >

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>



                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to=""><CiSearch className='iconfix' /></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/"><  CiHome className='iconfix' /></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/profile"><CiUser className='iconfix' /></Link>
                            </li>
                            <li className="nav-item position-relative">
                                <Link to="/cart" className="nav-link d-flex  position-relative"  >
                                    <CiShoppingCart className="iconfix" style={{ position: "relative", top: "2px" }} />

                                    {cartData?.length > 0 && (
                                        <span className="position-absolute badge rounded-pill bg-danger"
                                            style={{
                                                top: "2px",
                                                right: "-8px",
                                                fontSize: "10px"
                                            }}   >
                                            {cartData.length}
                                        </span>
                                    )}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;