import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, getSavedCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    useEffect(()=>{
        const savedCart = getSavedCart();
        let storedCart = [];
        for(const id in savedCart){
            const foundProduct = products.find(product => product.id === id)
            if(foundProduct){
                const savedQuantity = savedCart[id];
                foundProduct.quantity = savedQuantity;
                storedCart.push(foundProduct)
            }
            setCart(storedCart)
        }
    },[products])

    const addToCart = (selectedProduct) =>{
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id)
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product eventHandler={addToCart} key={product.id} products={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart product={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;