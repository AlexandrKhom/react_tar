import {
    INC_CUS,
    INC,
    RESET,
    DEC,
    INC2,
    DEC2,
    RESET2,
    INC_CUS2,
    ON_USERS_LOAD,
    ON_ADD_TO_BAD,
    ON_REMOVE_FROM_BAD,
    START_PRODUCTS_LOADING,
    END_PRODUCTS_LOADING,
    SET_PRODUCTS,
    ADD_WISHLIST,
    REMOVE_WISHLIST,
    ADD_PRODUCT, REMOVE_PRODUCT
} from "../action-types";

const incCusAction = (payload) => ({type: INC_CUS, payload})
const incAction = () => ({type: INC})
const decAction = () => ({type: DEC})
const resAction = () => ({type: RESET})

const incCusAction2 = (payload) => ({type: INC_CUS2, payload})
const incAction2 = () => ({type: INC2})
const decAction2 = () => ({type: DEC2})
const resAction2 = () => ({type: RESET2})

const onUsers = (payload) => ({type: ON_USERS_LOAD, payload});
const onAddToBad = (payload) => ({type: ON_ADD_TO_BAD, payload});
const onRemoveFromBad = (payload) => ({type: ON_REMOVE_FROM_BAD, payload});

const startProductsLoading = () => ({type: START_PRODUCTS_LOADING});
const endProductsLoading = () => ({type: END_PRODUCTS_LOADING});
const setProducts = (payload) => ({type: SET_PRODUCTS, payload})






export const On_ADD_PRODUCT = (id) => ({type: ADD_PRODUCT , payload: id})
export const On_REMOVE_PRODUCT = (id) => ({type: REMOVE_PRODUCT , payload: id})

export const toggleItemInCart = (id) => (dispatch, getState) => {
    // console.log(getState(), id)
    const {cart: {productsInCart}} = getState()
    const alreadyExists = !!productsInCart.find(el => el === id)
    dispatch(alreadyExists ? On_REMOVE_PRODUCT(id) : On_ADD_PRODUCT(id))
}


export const On_ADD_WISHLIST = (id) => ({type: ADD_WISHLIST , payload: id})
export const On_REMOVE_WISHLIST = (id) => ({type: REMOVE_WISHLIST , payload: id})

export const toggleItemInWishlist = (id) => (dispatch, getState) => {
    // console.log(getState(), id)
    const {wishlist: {productsInWishlist}} = getState()
    const alreadyExists = !!productsInWishlist.find(el => el === id)
    dispatch(alreadyExists ? On_REMOVE_WISHLIST(id) : On_ADD_WISHLIST(id))
}



export {
    incCusAction,
    incAction,
    decAction,
    resAction,
    incCusAction2,
    incAction2,
    decAction2,
    resAction2,
    onUsers,
    onAddToBad,
    onRemoveFromBad,
    startProductsLoading,
    endProductsLoading,
    setProducts
}
