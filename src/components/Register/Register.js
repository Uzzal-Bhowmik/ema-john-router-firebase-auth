import React from 'react';
import "./Register.css";
import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <div className='vh-100 d-flex justify-content-center align-items-center'>
            <div className="form-container">
                <h4 className='form-title'>Sign Up</h4>

                <form className='form'>
                    <div className="form-control-bundle">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" className='form-control' required />
                    </div>

                    <div className="form-control-bundle">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" className='form-control' required />
                    </div>

                    <div className="form-control-bundle">
                        <label htmlFor="confirm">Confirm Password</label>
                        <input type="password" name="confirm" className='form-control' required />
                    </div>

                    <input type="submit" value="Sign Up" className='form-submit-btn' />
                    <p className='text-center pt-2 new-user'>Already have an account?
                        <Link to="/register" className='new-user-link'>Log In</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;