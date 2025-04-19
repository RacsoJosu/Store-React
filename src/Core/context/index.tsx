import { createContext, useState, useEffect } from 'react'
import { Order, Product } from '../../types'

interface IContextShoppingCart {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>

  isProductDetailOpen: boolean
  openProductDetail: () => void
  closeProductDetail: () => void

  isCheckoutSideMenuOpen: boolean
  openCheckouSideMenu: () => void
  closeCheckouSideMenu: () => void
  setIsCheckouSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>

  productInf: Partial<Product>
  setProductInf: React.Dispatch<React.SetStateAction<Partial<Product>>>

  cartProducts: Product[]
  setCartProducts: React.Dispatch<React.SetStateAction<Product[]>>

  order: Order[]
  setOrder: React.Dispatch<React.SetStateAction<Order[]>>

  items: Product[]
  setItems: React.Dispatch<React.SetStateAction<Product[]>>

  searchItems: Product[]
  setSearchItems: React.Dispatch<React.SetStateAction<Product[]>>

  searchValue: string
  setSearchValue: React.Dispatch<React.SetStateAction<string>>

  onSearch: () => void
  isSearch: boolean
  setIsSearch: React.Dispatch<React.SetStateAction<boolean>>
}

export const ShoppingCartContext = createContext<IContextShoppingCart | null>(
  null
)

// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[]
}) => {
  // shopping cart - incremento de los productos
  const [count, setCount] = useState(0)
  // shopping cart - abrir y cerrar el detalle de los productos
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // checkout side menu - abrir y cerrar
  const [isCheckoutSideMenuOpen, setIsCheckouSideMenuOpen] = useState(false)
  const openCheckouSideMenu = () => setIsCheckouSideMenuOpen(true)
  const closeCheckouSideMenu = () => setIsCheckouSideMenuOpen(false)

  // Product Detail - mostrar productos
  const [productInf, setProductInf] = useState({})
  // shopping cart - agregar producto al carrito de compras
  const [cartProducts, setCartProducts] = useState<Product[]>([])

  // ordenes
  const [order, setOrder] = useState<Order[]>([])

  // productos
  const [items, setItems] = useState<Product[]>([])
  const [searchItems, setSearchItems] = useState<Product[]>([])
  // buscador
  const [searchValue, setSearchValue] = useState('')
  const [isSearch, setIsSearch] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(import.meta.env.VITE_API_URL)
      const data = await response.json()

      if (data) {
        setItems(data)
      }

      return data
    }

    getData()
  }, [])

  const onSearch = () => {
    const searchedData = items.filter(item =>
      item.title.toLowerCase().includes(searchValue.toLocaleLowerCase())
    )
    setSearchItems([...searchedData])
    setIsSearch(true)
  }

  return (
    <ShoppingCartContext.Provider
      value={{
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
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
