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

    // shopping cart - mostrar productos
    const [productInf, setProductInf] =useState({});


    return (
        <ShoppingCartContext.Provider value={ {
            count, 
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productInf,
            setProductInf

         } }>
            {children}
        </ShoppingCartContext.Provider>
    )
}