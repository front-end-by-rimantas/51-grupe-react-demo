import { useState, useEffect } from 'react';
import style from './Product.module.css';

/* eslint-disable react/prop-types */
export function Product({ name, price, amount, updateProductCount }) {
    const [count, setCount] = useState(0);

    // pasileidzia kas kart, kai yra perpiesiamas komponentas
    // useEffect(() => {
    //     console.log(11111111111);
    // });

    // pasileidzia tik pirma karta piesiant komponenta
    // useEffect(() => {
    //     console.log(222222222222);
    // }, []);

    // pasileidzia kai pasikeicia nuroddytu kintamuju reiksmes
    useEffect(() => {
        updateProductCount(name, count);
    }, [count]);

    function addOne() {
        if (amount > count) {
            setCount(pre => pre + 1);
        }
    }

    function removeOne() {
        if (count > 0) {
            setCount(pre => pre - 1);
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