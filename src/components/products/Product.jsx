import './Product.css';

/* eslint-disable react/prop-types */
export function Product({ name, price, amount }) {
    return (
        <li>
            <img src="#" alt="Produktas" />
            <p>{name} (likutis: {amount})</p>
            <p className='price'>{price.toFixed(2)} eur</p>
        </li>
    );
}