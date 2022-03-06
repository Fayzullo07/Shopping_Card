import {useContext} from 'react';
import {ShopContext} from '../context'

function BasketItem(props) {
    const {id, name, price, quantity } = props;

    const {incrementQuantity, decrementQuantity, removeFromBasket} = useContext(ShopContext); 

    return(
        <li className="collection-item" id={id}>
            {name} x {quantity} = {quantity * price}<b>$</b>
            
            
            <span className="secondary-content">
                <a className="waves-effect waves-light btn-small btnq" onClick={() => incrementQuantity(id)}><i className="material-icons left">exposure_plus_1</i>Add</a>
                <a className="waves-effect waves-light btn-small btnq" style={{marginLeft: 10}} onClick={() => decrementQuantity(id)} ><i className="material-icons left">exposure_neg_1</i>Remove</a>
                <a className="waves-effect waves-light btn-small btnq" style={{marginLeft: 10}} onClick={() => removeFromBasket(id)} ><i className="material-icons left basket_delete">delete_forever</i>Delete</a>
            </span>
        </li>
    )
}

export default BasketItem;