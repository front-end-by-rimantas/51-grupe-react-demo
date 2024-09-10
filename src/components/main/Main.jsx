import { useState } from "react";
import { Product } from "../products/Product";

const mainStyle = {
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

    function updateProductCount(productName, newCount) {
        // neteisinga, bet i "tema"
        // productsState[productName] = newCount;
    }

    return (
        <main style={mainStyle}>
            <h1>Zuikio parduotuve</h1>
            <ul>
                <li>
                    <p>Img</p>
                    <p>Pavadinimas</p>
                    <p>Kiekis</p>
                    <p>Vieneto kaina</p>
                    <p>Kaina</p>
                </li>
                {
                    productList
                        .filter(product => product.amount > 0)
                        .map(product => <Product {...product} key={product.key} />)
                }
                <li>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p>Total:</p>
                    <p>0 eur</p>
                </li>
            </ul>
        </main>
    );
}