import React, { Component } from 'react';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    //this can be a functional component
    componentWillUpdate() {
        console.log('[OrderSummary] willUpdate');
    }

    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(ingKey => {
            return (
            <li key={ingKey}>
                <span style={{textTransform: 'capitalize'}}>
                {ingKey}</span>: {this.props.ingredients[ingKey]}
            </li>)
        });
        return (
            <React.Fragment>
                <h3>Your order</h3>
                <p>A delicious burger with following ingredients: </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </React.Fragment>
        )
    } 
};

export default OrderSummary;