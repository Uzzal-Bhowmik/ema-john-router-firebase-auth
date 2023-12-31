import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogout = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.error(error));
  };

  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up</Link>
        {user && (
          <span className="text-white" style={{ marginLeft: "10px" }}>
            {user.email}{" "}
            <button
              onClick={handleLogout}
              style={{
                backgroundColor: "#ff9900",
                color: "white",
                marginLeft: "8px",
              }}
            >
              {" "}
              Log out
            </button>
          </span>
        )}
      </div>
    </nav>
  );
};

export default Header;
