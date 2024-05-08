import { createContext, useState, useEffect } from 'react';

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

    // ordenes 
    const [order, setOrder] = useState([]);

    // productos 
    const [items, setItems] = useState([]);
    const [searchItems, setSearchItems] = useState([]);
    // buscador 
    const [searchValue, setSearchValue ] = useState("")
    const [isSearch, setIsSearch ] = useState(false)
    
    
    useEffect(()=>{
    


        const getData = async ()=>{
          const response = await fetch('https://api.escuelajs.co/api/v1/products')
          const data = await response.json()
         
          setItems(data)
          return data;
        
        }

        getData();

        
      }, [])

      const onSearch = ()=>{
        const searchedData = items.filter((item)=> item.title.toLowerCase().includes(searchValue.toLocaleLowerCase())   )
        setSearchItems([...searchedData])
        setIsSearch(true)
    
      }

   
      

    

    

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
            closeCheckouSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchItems,
            setSearchItems,
            searchValue,
            setSearchValue,
            onSearch,
            isSearch,
            setIsSearch,


         } }>
            {children}
        </ShoppingCartContext.Provider>
    )
}