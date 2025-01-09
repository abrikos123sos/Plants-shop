import { combineReducers } from "redux";
import assortmentRedusers from "./assortment/assortment";
import categoryRedusers from './action/category';


const rootReducer = combineReducers({
    assort: assortmentRedusers,
    category: categoryRedusers
})

export default rootReducer;