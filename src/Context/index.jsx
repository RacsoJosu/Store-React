import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext()

// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({children})=>{
    // shopping cart - incremento de los productos
    const [count, setCount]= useState(0);
    // shopping cart - abrir y cerrar el detalle de los productos
    const [isProductDetailOpen, setIsProductDetailOpen]= useState(false);
    const openProductDetail = ()=> setIsProductDetailOpen(true);
    const closeProductDetail = ()=> setIsProductDetailOpen(false);
    
    // checkout side menu - abrir y cerrar 
    const [isCheckoutSideMenuOpen, setIsCheckouSideMenuOpen]= useState(false);
    const openCheckouSideMenu = ()=> setIsCheckouSideMenuOpen(true);
    const closeCheckouSideMenu = ()=> setIsCheckouSideMenuOpen(false);

    // Product Detail - mostrar productos
    const [productInf, setProductInf] =useState({});
    // shopping cart - agregar producto al carrito de compras
    const [cartProducts, setCartProducts] = useState([])

    return (
        <ShoppingCartContext.Provider value={ {
            count, 
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productInf,
            setProductInf,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen, 
            setIsCheckouSideMenuOpen,
            openCheckouSideMenu,
            closeCheckouSideMenu

         } }>
            {children}
        </ShoppingCartContext.Provider>
    )
}