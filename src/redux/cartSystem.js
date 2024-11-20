import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    cart: [],
    quantity: 0
}

const cartSystem = createSlice({
    name : "cart",
    initialState,
    reducers: {
        AddCart: (state, action)=> {
            const find = state.cart.findIndex(item=>item.id===action.payload.id)
            if(find>=0){
                state.cart[find].quantity +=1;
                toast.success('Product Already Added, Quantity Increased')
            }
            else {
            const tempVar = {...action.payload, quantity:1}
            state.cart.push(tempVar)
            toast.success('Product Added to Cart Successfully!')
        }
        }
    }
})

export const {AddCart} = cartSystem.actions;
export default cartSystem.reducer;