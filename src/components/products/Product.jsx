import { useState } from 'react';
import style from './Product.module.css';

/* eslint-disable react/prop-types */
export function Product({ name, price, amount, updateProductCount }) {
    const [count, setCount] = useState(0);

    function addOne() {
        if (amount > count) {
            setCount(count + 1);
            updateProductCount(name, count + 1);
        }
    }

    function removeOne() {
        if (count > 0) {
            setCount(count - 1);
            updateProductCount(name, count - 1);
        }
    }

    return (
        <li className={style.product}>
            <img className={style.img} src="#" alt="Produktas" />
            <p className={style.title}>{name} (likutis: {amount - count})</p>
            <div className={style.actions}>
                <button className={style.btn} onClick={removeOne} type='button'>-</button>
                <span className={style.count}>{count}</span>
                <button className={style.btn} onClick={addOne} type='button'>+</button>
            </div>
            <p className={style.price}>{price.toFixed(2)} eur</p>
            <p className={style.price}>{(count * price).toFixed(2)} eur</p>
        </li>
    );
}