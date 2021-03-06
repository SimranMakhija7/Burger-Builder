import React from 'react';

import Aux from '../../../hoc/Auxiliary'
import Button from '../../UI/Button/Button'
const OrderSummary = (props)=>{
    const ingredientSummary=Object.keys(props.ingredients)
                            .map(igKey=>{
                                return (<li key={igKey}>
                                    <span style={{textTransform:'capitalize'}}>
                                    {igKey}
                                    </span> : 
                                    {props.ingredients[igKey]}
                                </li>);
                            })
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>Your ordered burger will contain:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: {props.total.toFixed(2)}</strong></p>
            <p>Continue to Order?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
)
}

export default OrderSummary;