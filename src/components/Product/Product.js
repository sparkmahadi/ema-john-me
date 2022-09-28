import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({products, eventHandler}) => {
    const {category, img, name, price, ratings, ratingsCount, shipping} = products;
    return (
        <div className='product'>
            <img onError={({target }) => { target.onerror = null; // prevents looping
                                                target.src="currently_not_available.jpg";
                                                }}
                src={img} alt="" />
            <div className="product-info">
                <h3>Product Name: {name}</h3>
                <h4>Price: {price}</h4>
                <p>Category: {category}</p>
                <p>Shipping Charge: ${shipping}</p>
                <div className='extra-info'>
                    <p>Ratings: {ratings} Stars</p>
                    <p>Rating Count: {ratingsCount}</p>
                </div>
            </div>
                <button onClick={()=>eventHandler(products)} className='btn-cart'><span style={{marginRight:'5px'}}>Add to Cart</span> <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
                
        </div>
    );
};

export default Product;