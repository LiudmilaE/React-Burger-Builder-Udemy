import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    ingredients: null,
    totalPrice: 4.0,
    error: false,
    building: false,
}

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 1.0,
    meat: 1.3,
    bacon: 1.0,
}

const addIngredient = (state, action) => {
    const updatedIngredient = {[action.ingredient]: state.ingredients[action.ingredient] + 1};
    const updatedState = {
        ingredients:  updateObject(state.ingredients, updatedIngredient),
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredient],
        building: true,
    }
    return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
    const updatedIngr = {[action.ingredient]: state.ingredients[action.ingredient] + 1};
    const updatedSt = {
        ingredients:  updateObject(state.ingredients, updatedIngr),
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredient],
        building: true,
    }
    return updateObject(state, updatedSt);
};

const setIngredients = (state, action) => {
    return updateObject(state, {
        ingredients: {
        salad: action.ingredients.salad,
        bacon: action.ingredients.bacon,
        cheese: action.ingredients.cheese,
        meat: action.ingredients.meat
        },
        totalPrice: 4,
        error: false,
        building: false
    });
};

const fetchIngredientsFailed = (state, action) => {
    return updateObject(state, { error: true }) 
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredient( state, action );   
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient( state, action );
        case actionTypes.SET_INGREDIENTS: return setIngredients( state, action );   
        case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed( state, action );
        default: return state;
    }
};

export default reducer;