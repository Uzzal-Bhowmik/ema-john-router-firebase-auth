import React from 'react';
import "./Product.css";
import cartIcon from '../../images/cart.png';

const Product = (props) => {
    const {img, name, price, seller, ratings} = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <p id='title'>{name}</p>
            <p id='price'>Price: ${price}</p>

            <div className='seller-and-ratting'>
                <p>Manufacturer: {seller}</p>
                <p>Ratting: {ratings} stars</p>
            </div>

            <button id='addToCartBtn' onClick={()=> handleAddToCart(props.product)}>
                <p>Add to Cart</p>
                <img src={cartIcon} alt=""/>
            </button>
        </div>
    );
};

export default Product;