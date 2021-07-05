import './App.css';
import React, {useEffect, useMemo} from "react";
import {useSelector, useDispatch} from "react-redux";
import {
    incAction,
    incCusAction,
    resAction,
    decAction,
    incCusAction2,
    incAction2,
    resAction2,
    decAction2,
    onUsers,
    onAddToBad,
    onRemoveFromBad, toggleItemInWishlist, toggleItemInCart
} from "./redux/action-creators";
import {store} from "./redux";
import {setProducts, startProductsLoading, endProductsLoading} from "./redux/action-creators";


const Header = () => {
    const {products} = useSelector(store => store.products)
    const {productsInCart} = useSelector(store => store.cart)
    const {productsInWishlist} = useSelector(store => store.wishlist)


    const calcCartSum = useMemo(() => {
        return products
            .filter(el => productsInCart.includes(el.id))
            .reduce((acc, el) => acc += el.price, 0)
    }, [products, productsInCart])

    const calcWishSum = useMemo(() => {
        return products
            .filter(el => productsInWishlist.includes(el.id))
            .reduce((acc, el) => acc += el.price, 0)
    }, [products, productsInWishlist])

    return (
        <header style={{position: 'fixed'}}>
            <div>
                <span>wishlist: {productsInWishlist.length} ($ {calcWishSum})</span>
                <span>cart: {productsInCart.length} ($ {calcCartSum})</span>
            </div>
        </header>
    )
}

const ProductLIst = () => {
    const {products, isLoading} = useSelector(store => store.products)
    const {productsInCart} = useSelector(store => store.cart)
    const {productsInWishlist} = useSelector(store => store.wishlist)
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        try {
            dispatch(startProductsLoading());
            const resp = await fetch('https://fakestoreapi.com/products');
            const data = await resp.json();
            dispatch(setProducts(data));
        } catch (e) {
            console.error(e)
        } finally {
            dispatch(endProductsLoading())
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (<div style={{display: 'flex', flexWrap: 'wrap'}}>

        {isLoading && (<h1>LOADING......</h1>)}

        {!isLoading && !!products.length && products.map(el => (
            <div key={el.id} style={{width: '40%', margin: '10px auto', border: '2px solid blue'}}>
                <h2>{el.price}$</h2>
                <h2>{el.title}</h2>
                {/*<h2>{el.description}</h2>*/}
                <button
                    style={{backgroundColor: productsInWishlist.includes(el.id) ? `blueviolet` : ``}}
                    onClick={()=> dispatch(toggleItemInWishlist(el.id))}>add to wish</button>
                <button
                    style={{backgroundColor: productsInCart.includes(el.id) ? `green` : ``}}
                    onClick={()=> dispatch(toggleItemInCart(el.id))}>add to cart</button>
                <img style={{width: '60%'}} src={el.image}/>
            </div>
        ))}
    </div>)
}

// const PhotoLIst = () => {
//     const dispatch = useDispatch()
//     const users = useSelector(({userReducer: {users}}) => users);
//     const badEmployees = useSelector(({userReducer: {badEmployees}}) => badEmployees);
//
//     const fetchPhotos = async () => {
//         const resp = await fetch('https://dummyapi.io/data/api/user?limit=10',{
//             headers: {'app-id': 'lTE5abbDxdjGplutvTuc'}
//         });
//         const data = await resp.json();
//         console.log(data)
//         dispatch(onUsers(data.data))
//     }
//     useEffect(()=> {
//         if (!users.lenght) {
//             fetchPhotos()
//         }
//     }, [])
//
//     return (<div>
//         <h1>Photolist</h1>
//         <div>
//             {users.map(el => (
//                 <img onClick={() => {
//                     const alreadyInList = badEmployees.includes(el.id)
//                     dispatch(alreadyInList ? onRemoveFromBad(el.id) : onAddToBad(el.id))
//                 }}
//                     style={{height: 100, weight: 100,
//                         filter: badEmployees.includes(el.id) ? 'blur(3px)' : ''}}
//                     key={el.id} src={el.picture} alt={el.firstName}/>
//             ))}
//         </div>
//     </div>
//     )
// }


function App() {

    // const count1 = useSelector(({count1: {count}}) => {
    //     return count
    // })
    // const count2 = useSelector(({count2: {count}}) => {
    //     return count
    // })

    const {count1, count2} = useSelector(({count1, count2}) => ({
        count1: count1.count,
        count2: count2.count
    }))

    const dispatch = useDispatch()

    return (
        <div className="App">
            {/*<button onClick={() => dispatch(incCusAction(100))}>INC100</button>*/}
            {/*<button onClick={() => dispatch(incAction())}>INC</button>*/}
            {/*<button onClick={() => dispatch(decAction())}>DEC</button>*/}
            {/*<button onClick={() => dispatch(resAction())}>RESET</button>*/}
            {/*<hr/>*/}
            {/*<button onClick={() => dispatch(incCusAction2(100))}>INC100</button>*/}
            {/*<button onClick={() => dispatch(incAction2())}>INC</button>*/}
            {/*<button onClick={() => dispatch(decAction2())}>DEC</button>*/}
            {/*<button onClick={() => dispatch(resAction2())}>RESET</button>*/}
            {/*<hr/>*/}
            {/*<h1>first = {count1}</h1>*/}
            {/*<h1>second = {count2}</h1>*/}
            {/*{!!(count1 % 2) && <PhotoLIst/>}*/}
            <Header/>
            <ProductLIst/>
        </div>
    );
}

export default App;
