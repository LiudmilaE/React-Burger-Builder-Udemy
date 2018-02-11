import React from 'react';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingKey => {
            return (
            <li key={ingKey}>
                <span style={{textTransform: 'capitalize'}}>
                {ingKey}</span>: {props.ingredients[ingKey]}
            </li>)
        });
    return (
        <React.Fragment>
            <h3>Your order</h3>
            <p>A delicious burger with following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </React.Fragment>
    )
};

export default orderSummary;