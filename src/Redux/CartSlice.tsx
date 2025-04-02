import { createSlice } from "@reduxjs/toolkit";
import type {PayloadAction} from '@reduxjs/toolkit'
export interface CartItem {
    id : string
    name:string
    qty:number
    prize:number
    image:string
}
interface CartState{
    items :  CartItem[]
}
const  initialState : CartState ={
items: []
}
export const CartSlice = createSlice({
    name:'Cart',
    initialState,
    reducers:{
        addItem:(state , action: PayloadAction<CartItem>)=>{
            const existingItem = state.items.find(item=> item.id === action.payload.id)
            if(existingItem){
                existingItem.qty =action.payload.qty
            }else{

                state.items.push(action.payload)
            }
        },
        removeItem:(state, action: PayloadAction<string>)=>{
            state.items =state.items.filter(item=> item.id !== action.payload)
        },
        updateQty: (state, action: PayloadAction<{id: string, qty: number}>) => {
            return {
              ...state,
              items: state.items.map(item => 
                item.id === action.payload.id 
                  ? { ...item, qty: action.payload.qty } 
                  : item
              )
            };
          },
     
            clearCart:(state )=>{
                state.items =[]
            }
        
    }
})
export const {addItem, removeItem, updateQty, clearCart}= CartSlice.actions
export default CartSlice.reducer