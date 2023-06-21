import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import "./OrderSummary.css";
import { Link, useNavigate } from 'react-router-dom';

const OrderSummary = (props) => {
    const { cart, inOrdersCompo, handleClearCart, children } = props;

    // calculating total price of selected items in cart

    let totalQuantity = 0, totalPrice = 0, totalShipping = 0, tax = 0, grandTotal = 0;

    for (const pd of cart) {
        totalQuantity += pd.quantity;

        totalPrice = totalPrice + (parseInt(pd.price) * pd.quantity);
        totalShipping = totalShipping + (parseInt(pd.shipping) * pd.quantity);
        tax = totalPrice * 0.1;
        grandTotal = totalPrice + totalShipping + tax;
    }

    const navigate = useNavigate();
    const handlePlaceOrder = () => {
        navigate("/place-order");
        handleClearCart();
    }

    return (
        <div className='cart-container'>
            <div className='order-sum'>
                <h1>Order Summary</h1>
                <div className='order-info'>
                    <p>Selected items: {totalQuantity}</p>
                    <p>Total Price: <span className="dollar-icon"><FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon></span>  {totalPrice}</p>
                    <p>Total Shipping Charge: <span className="dollar-icon"><FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon></span>{totalShipping}</p>
                    <p>Total Tax:<span className="dollar-icon"><FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon></span>{tax.toFixed(2)}</p>
                    <h4>Grand Total: <span className="dollar-icon"><FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon></span>{grandTotal.toFixed(2)} </h4>
                </div>

                {
                    inOrdersCompo && <div>
                        <button onClick={handleClearCart} className='clear-cart-btn'>Clear Cart</button>
                        <br />
                        <button className='place-order-btn' onClick={handlePlaceOrder}>
                            <Link to="/place-order">Place Order</Link>
                        </button>
                    </div>

                }
                {children}
            </div>
        </div>
    );
};

export default OrderSummary;