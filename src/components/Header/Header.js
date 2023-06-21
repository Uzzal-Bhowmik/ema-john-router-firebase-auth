import React from 'react';
import "./Header.css";
import logo from "../../images/Logo.png";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <div className='nav-content'>
                    <div>
                        <img src={logo} alt="logo" width="80%" />
                    </div>

                    <div className='nav-links'>
                        <Link to="/">Shop</Link>
                        <Link to="/orders">Orders</Link>
                        <Link to="/inventory">Manage Inventory</Link>
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;