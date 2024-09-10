import { useState } from 'react';
import './Product.css';

/* eslint-disable react/prop-types */
export function Product({ name, price, amount }) {
    const [count, setCount] = useState(0);

    function addOne() {
        if (amount > count) {
            setCount(count + 1);
        }
    }

    function removeOne() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <li>
            <img src="#" alt="Produktas" />
            <p>{name} (likutis: {amount - count})</p>
            <div>
                <button onClick={removeOne} type='button'>-</button>
                <span>{count}</span>
                <button onClick={addOne} type='button'>+</button>
            </div>
            <p className='price'>{price.toFixed(2)} eur</p>
            <p>{(count * price).toFixed(2)} eur</p>
        </li>
    );
}