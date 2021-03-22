import {GET_ITEMS, ADD_ITEM, DELETE_ITEM} from '../actions/types'
// images
import sachet_water from '../../images/sachet-water.png'

const initialState = {
    products:  [
        {
            id: 1,
            image: sachet_water,
            value: "Just water Pack (12 Pieces )",
            price: 1000
        },
        {
            id: 2,
            image: sachet_water,
            value: "Be Refreshed and cooled bottled water",
            price: 1500
        },
        {
            id: 3,
            image: sachet_water,
            value: "Afrities water Tank",
            price: 2500
        },
        {
            id: 4,
            image: sachet_water,
            value: "Just water Pack (12 Pieces )",
            price: 1000
        },
        {
            id: 5,
            image: sachet_water,
            value: "Just water Pack (12 Pieces )",
            price: 1000
        },
        {
            id: 6,
            image: sachet_water,
            value: "Be Refreshed and cooled bottled water",
            price: 1500
        },
        {
            id: 7,
            image: sachet_water,
            value: "Afrities water Tank",
            price: 2500
        },
        {
            id: 8,
            image: sachet_water,
            value: "Just water Pack (12 Pieces )",
            price: 1000
        },
    ]
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_ITEMS:
            return{
                ...state
            }
        case DELETE_ITEM:
            return {
                ...state,
                products: state.products.filter(item => item.id !== action.payload)
            }
        default:
            return state
    }
}