import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildConrols/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 1.0,
    meat: 1.3,
    bacon: 1.0,
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            bacon: 0,
            salad: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4.0,
        purchasable: false,
        purchasing: false,
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
        .map(ingKey => {
            return ingredients[ingKey];
        })
        .reduce((sum, el) => {
            return sum + el;
        }, 0);
        this.setState({purchasable: sum > 0})
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        //alert("You continue!");
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: "Liudmyla Iefremova",
                address: {
                    street: "Some street 1",
                    zipCode: '01300',
                    country: 'Ukraine'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount +1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const newPrice = INGREDIENT_PRICES[type] + this.state.totalPrice;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(!oldCount) return;
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    render () {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <React.Fragment>
                <Modal 
                    show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                        price={this.state.totalPrice.toFixed(2)}
                        ingredients={this.state.ingredients}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}/>
                </Modal>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls 
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disabledInfo} 
                        purchasable={this.state.purchasable}
                        price={this.state.totalPrice} 
                        ordered={this.purchaseHandler}/>
            </React.Fragment>
        )
    }
}

export default BurgerBuilder;