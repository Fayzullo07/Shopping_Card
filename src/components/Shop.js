import { useEffect, useContext } from 'react';
import {API_KEY, API_URL} from '../config';
import { ShopContext } from '../context';
import BasketList from './BasketList';
import Cart from './Cart';
import GoodList from './GoodList';
import Loader from './Loader';

function Shop() {
    const {setGoods, loading, order, isBasketShow} = useContext(ShopContext);
    useEffect(() => {
        fetch(API_URL, {
            headers: {
                'Authorization': API_KEY
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setGoods(data.featured);
            })
    }, []);
    return (
        <div className="container content">
            <Cart quantity={order.length}/>
            {loading ? <Loader/> : <GoodList/>}
            {isBasketShow && <BasketList/>}
        </div>
    )
}

export default Shop;