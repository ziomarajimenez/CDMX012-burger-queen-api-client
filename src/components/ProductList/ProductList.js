import { useState, useEffect } from "react";
import './ProductList.css';

export const ProductList = () => {
    const [ products, setProducts ] = useState();

    useEffect(() => {
        fetch('http://localhost:3333/products')
            .then((response) => {
                return response.json()
            })
            .then((prod) => {
                setProducts(prod);
            })
    }, [])

    const drinks = products?.filter(prod => prod.type === 'beverage')
    const meals = products?.filter(prod => prod.type === 'meal' || prod.type === 'side dish' || prod.type === 'burger');

    //console.log(products)

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
                                <td>opt</td>
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
                                <td>opt</td>
                            </tr>
                        );
                    }) }
                </tbody>
            </table>
        </div>
    )
}
