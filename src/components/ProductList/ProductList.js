//import { useState, useEffect } from "react";
import './ProductList.css';
import { ModifyProduct } from '../ModifyProduct/ModifyProduct';

export const ProductList = ({products, handleUpdateProd}) => {
    const drinks = products?.filter(prod => prod.type === 'beverage')
    const meals = products?.filter(prod => prod.type === 'meal' || prod.type === 'side dish' || prod.type === 'burger');

    return (
        <div className="table-wrapper products-table">
            <table className="beverages-table">
                <thead>
                    <tr>
                        <th>Beverages</th>
                        <th>Opt</th>
                    </tr>
                </thead>
                <tbody>
                    { drinks?.map(prod => {
                        return (
                            <tr key={prod.id}>
                                <td>{prod.name}</td>
                                <td> <ModifyProduct
                                name={prod.name}
                                price={prod.price}
                                type={prod.type}
                                menu={prod.menu}
                                handleUpdateProd={handleUpdateProd}
                                /> </td>
                            </tr>
                        );
                    }) }
                </tbody>
            </table>

            <table className="meals-table">
                <thead>
                    <tr>
                        <th>Meals</th>
                        <th>Opt</th>
                    </tr>
                </thead>
                <tbody>
                    { meals?.map(prod => {
                        return (
                            <tr key={prod.id}>
                                <td>{prod.name}</td>
                                <td> <ModifyProduct id={prod.id}
                                name={prod.name}
                                price={prod.price}
                                type={prod.type}
                                menu={prod.menu}
                                handleUpdateProd={handleUpdateProd}
                                /> </td>
                            </tr>
                        );
                    }) }
                </tbody>
            </table>
        </div>
    )
}
