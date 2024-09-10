import { Product } from "../products/Product";

export function Main() {
    const mainStyle = {
        backgroundColor: 'green',
    };

    const productList = [
        { key: 21, name: 'Agurkas', price: 5, amount: 100 },
        { key: 22, name: 'Pomidoras', price: 7, amount: 100 },
        { key: 23, name: 'Baklazanas', price: 17, amount: 0 },
        { key: 24, name: 'Svogunas', price: 3.14, amount: 100 },
        { key: 25, name: 'Bulve', price: 0.01, amount: 100 },
        { key: 26, name: 'Batonas', price: 0.99, amount: 0 },
        { key: 27, name: 'Kalafioras', price: 9000, amount: 100 },
    ];

    return (
        <main style={mainStyle}>
            <h1>Zuikio parduotuve</h1>
            <ul>
                {productList
                    .filter(product => product.amount > 0)
                    // eslint-disable-next-line react/jsx-key
                    .map(product => <Product {...product} />)}
            </ul>
        </main>
    );
}