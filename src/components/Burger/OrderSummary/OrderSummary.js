import React from 'react';

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
            <p>Continue to Checkout?</p>
        </React.Fragment>
    )
};

export default orderSummary;