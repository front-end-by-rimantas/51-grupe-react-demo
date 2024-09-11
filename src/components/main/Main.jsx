import { useState } from "react";
import { Product } from "../products/Product";
import productStyle from '../products/Product.module.css';
import mainStyle from './Main.module.css';

const mainInlineStyle = {
    backgroundColor: 'green',
};

const productList = [
    { key: 21, name: 'Agurkas', price: 5, amount: 100 },
    { key: 22, name: 'Pomidoras', price: 7, amount: 10 },
    { key: 23, name: 'Baklazanas', price: 17, amount: 0 },
    { key: 24, name: 'Svogunas', price: 3.14, amount: 4 },
    { key: 25, name: 'Bulve', price: 0.01, amount: 1000 },
    { key: 26, name: 'Batonas', price: 0.99, amount: 0 },
    { key: 27, name: 'Kalafioras', price: 9000, amount: 1 },
];

const initialProductsState = {};

for (const product of productList) {
    initialProductsState[product.name] = 0;
}

export function Main() {
    const [productsState, setProductsState] = useState(initialProductsState);
    let totalCount = 0;
    let totalPrice = 0;

    for (const key in productsState) {
        totalCount += productsState[key];
    }

    for (const product of productList) {
        totalPrice += product.price * productsState[product.name];
    }

    function updateProductCount(productName, newCount) {
        setProductsState({
            ...productsState,
            [productName]: newCount,
        });
    }

    return (
        <main style={mainInlineStyle}>
            <h1 className={mainStyle.title}>Zuikio parduotuve</h1>
            <ul>
                <li className={productStyle.product}>
                    <p>Img</p>
                    <p>Pavadinimas</p>
                    <p>Kiekis</p>
                    <p>Vieneto kaina</p>
                    <p>Kaina</p>
                </li>
                {
                    productList
                        .filter(product => product.amount > 0)
                        .map(product => <Product {...product} key={product.key} updateProductCount={updateProductCount} />)
                }
                <li className={productStyle.product}>
                    <p></p>
                    <p>Total:</p>
                    <p>{totalCount} vnt</p>
                    <p></p>
                    <p>{totalPrice.toFixed(2)} eur</p>
                </li>
            </ul>
        </main>
    );
}