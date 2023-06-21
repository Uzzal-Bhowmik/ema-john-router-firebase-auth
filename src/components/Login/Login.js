import React from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='vh-100 d-flex justify-content-center align-items-center'>
            <div className="form-container">
                <h4 className='form-title'>Login</h4>

                <form className='form'>
                    <div className="form-control-bundle">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" className='form-control' required />
                    </div>

                    <div className="form-control-bundle">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" className='form-control' required />
                    </div>

                    <input type="submit" value="Login" className='form-submit-btn' />
                    <p className='text-center pt-2 new-user'>New to Ema-John?
                        <Link to="/register" className='new-user-link'>Create New Account</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;