import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import CheckoutSideMenu from '../CheckoutSideMenu'
import { useContext } from 'react'
import { ShoppingCartContext } from '@/Context'

// eslint-disable-next-line react/prop-types
const Layout = () => {
  const context = useContext(ShoppingCartContext)
  return (
    <div className="h-screen">
      <CheckoutSideMenu />
      <div className="flex flex-col h-full  ">
        <Navbar />
        <main
          className={`${context?.isProductDetailOpen ? 'overflow-hidden' : ''} flex flex-col gap-8 items-center h-full overflow-scroll`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
