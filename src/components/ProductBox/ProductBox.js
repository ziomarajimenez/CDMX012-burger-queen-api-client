import React, { useState } from 'react';
import './ProductBox.css';

export const ProductBox = (props) => {

    let initialQuantity = 0;

    for(let i = 0; i < props.orderProducts.length; i++){
        if(props.product === props.orderProducts[i].product && props.orderProducts[i].qty > 0){
            initialQuantity = props.orderProducts[i].qty;
        }
    }

    const [quantity, setQuantity] = useState(initialQuantity);

    const changeProductQuantity = (newQuantity) => {
        for(let i = 0; i < props.orderProducts.length; i++){
            if(props.product === props.orderProducts[i].product && newQuantity !== props.orderProducts[i].qty){
                props.orderProducts[i].qty = newQuantity;
            }
        }
    }

    const increment = () => {
        const newQuantity = quantity + 1;
        console.log(newQuantity);
        setQuantity(newQuantity);
        changeProductQuantity(newQuantity);
    }

    const decrement = () => {
        const newQuantity = quantity === 0 ? 0 : quantity - 1;
        setQuantity(newQuantity);
        changeProductQuantity(newQuantity);
    }

    const handleQuantity = (e) => {
        setQuantity(parseInt(e.target.value));
        changeProductQuantity(parseInt(e.target.value));
    }

    return (
        <div className='productContainer'>
            <p className='product'>{props.product}</p>
            <div className='quantityContainer'>
                <button className='setQuantity' onClick={() => decrement()}>-</button>
                <input className='quantity' type='number' onChange={handleQuantity} value={quantity}></input>
                <button className='setQuantity' onClick={() => increment()}>+</button>
            </div>
        </div >
    );
}