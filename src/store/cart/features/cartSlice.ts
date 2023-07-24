import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../../models/interfaces/api/product.interface";
import { IProduct } from "../../../models/interfaces/api/product.interface"
import { RootState } from "../../config.reducer";

export interface CartState {
    cartItems: CartItem[]
}

const initialState: CartState = {
    cartItems: [],
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<IProduct>) => {
            const item = state.cartItems.find(
                (el) => el.product.id === action.payload.id
            )
            if (item) item.quantity;
            else {
                state.cartItems.push({
                    product: action.payload,
                    quantity: 1
                })
            }
        },
        decrement: (state, action: PayloadAction<IProduct>) => {
            const item = state.cartItems.find(
                (el) => el.product.id === action.payload.id
            )
            if (item) {
                item.quantity--;
                if (item.quantity === 0) {
                    state.cartItems = state.cartItems.filter(
                        el => el.product.id !== action.payload.id
                    )
                }
            }
        },
        remove: (state, action: PayloadAction<IProduct>) => {
            const item = state.cartItems.find(
                (el) => el.product.id === action.payload.id
            )
            if (item) {
                state.cartItems = state.cartItems.filter(
                    el => el.product.id !== action.payload.id
                )

            }
        }
    }
})

const cartItems = (state: RootState) => state.cart.cartItems;
export const totalCartItemSelector = createSelector([cartItems],
    (cartItems) => cartItems.reduce((total: number, curr: CartItem) =>
        (total += curr.quantity), 0));

export const TotalPriceSelector = createSelector(
    [cartItems],
    (cartItems) =>
        cartItems.reduce(
            (total: number, curr: CartItem) =>
                (total += curr.quantity * parseInt(curr.product.price)),
            0
        )
);

export const productQuantitySelector = createSelector([
    cartItems, (cartItems, productId: string) => productId],
    (cartItems, productId) => cartItems.find((el) =>
        el.product.id === productId)?.quantity
)

export const { decrement, remove, increment } = cartSlice.actions;
export default cartSlice.reducer;