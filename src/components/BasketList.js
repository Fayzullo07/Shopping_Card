import BasketItem from "./BasketItem";
import {useContext} from 'react';
import {ShopContext} from '../context';

function BasketList() {
    const {order = [], handlBasketShow = Function.prototype } = useContext(ShopContext);

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0)

    return (
        <div className="bsk">
            <ul className="collection basket_list">
            <li className="collection-item active">
                Basket
            </li>
            {order.length ? order.map(item => {
                return(
                    <BasketItem key={item.id} {...item}/>
                )
            }):(
                <li className="collection-item">Basket is empty</li>
            )}

            <li className="collection-item active">
                Total Cost: {totalPrice} <b>$</b>
            </li>
            <i className="material-icons basket_close" onClick={handlBasketShow}>close</i>
        </ul>
        </div>
        
    )
}

export default BasketList;