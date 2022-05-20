import React, { useState } from 'react';
import './ProductBox.css';

export const ProductBox = (props) => {
    const [quantity, setQuantity] = useState(0);
    if(quantity !== 0) {
        props.array.push({
            qty: quantity,
            product: props.product
        })
    };
    const filtered = props.array.filter((value, index, self) => {
        return self.findIndex(p => p.product === value.product) === index;
    })
    console.log(filtered);

    return (
        <div className='productContainer'>
            <div>
                <p className='product'>{props.product}</p>
            </div>
            <div className='quantityContainer'>
                <button className='setQuantity' onClick={() => 
                    quantity === 0 ? quantity === 0 : setQuantity(quantity - 1)
                }>-</button>
                <div className='quantity'>
                    <p>{quantity}</p>
                </div>
                <button className='setQuantity' onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
        </div>
    );
}