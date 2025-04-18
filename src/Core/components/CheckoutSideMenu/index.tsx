import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '@context/index'
import OrderCard from '@/Orders/components/OrderCard'
import './styles.css'
import { sumPrecios } from '@/utils/sumPrices'
import { getDate } from '@/utils/getDateHours'
import { createPortal } from 'react-dom'

const CheckoutSideMenu = () => {
  const contextCheckoutSideMenu = useContext(ShoppingCartContext)
  const data = contextCheckoutSideMenu?.cartProducts

  const onDelete = (
    event: React.SyntheticEvent<HTMLDivElement, Event>,
    id: number
  ) => {
    event.stopPropagation()
    const newData = data?.filter(product => product.id != id)

    if (newData) {
      contextCheckoutSideMenu?.setCartProducts([...newData])
      contextCheckoutSideMenu?.setCount(contextCheckoutSideMenu?.count - 1)
    }
  }

  const handleCheckout = () => {
    if (contextCheckoutSideMenu?.cartProducts) {
      const orderToAdd = {
        id: +new Date(),
        date: getDate(),
        products: contextCheckoutSideMenu.cartProducts,
        totalProducts: contextCheckoutSideMenu.cartProducts.length,
        totalPrice: sumPrecios(contextCheckoutSideMenu.cartProducts),
      }

      contextCheckoutSideMenu?.setOrder([
        ...contextCheckoutSideMenu?.order,
        orderToAdd,
      ])
    }
    contextCheckoutSideMenu?.setCartProducts([])
    contextCheckoutSideMenu?.setCount(0)
  }

  return createPortal(
    <div
      className={`absolute top-0 w-full h-full  ${contextCheckoutSideMenu?.isCheckoutSideMenuOpen ? 'bg-white/50 flex' : 'hidden'} overflow-hidden  flex-row-reverse `}
    >
      <aside
        className={` ${contextCheckoutSideMenu?.isCheckoutSideMenuOpen ? 'flex' : 'hidden'}    flex flex-col border-solid border-2 max-w-auto w-[300px] h-full  border-transparent shadow-2xl rounded-lg bg-white `}
      >
        <section className="flex justify-between items-center p-6 ">
          <h2 className="  font-medium text-xl">My Order</h2>
          <div>
            <XMarkIcon
              onClick={() => contextCheckoutSideMenu?.closeCheckouSideMenu()}
              className="h-6 w-6 text-red-500 cursor-pointer"
            ></XMarkIcon>
          </div>
        </section>

        <section className="h-full w-full  ">
          <div className=" w-full flex items-center justify-center my-[1rem] px-[2rem]  ">
            <Link to={'/my-orders/last'}>
              <button
                onClick={handleCheckout}
                className="transition duration-500 ease-in-out bg-blue-400 text-[#fff] text-lg font-bold py-2 px-4 rounded-lg hover:bg-blue-900"
              >
                Checkout
              </button>
            </Link>
          </div>
          <div className="flex items-center justify-between px-[2rem] border-b-2 border-slate-300">
            <p className="text-lg font-light ">Total: </p>
            <span className="text-xl font-bold ">${sumPrecios(data)}</span>
          </div>
          <div className="overflow-y-scroll h-full w-full px-[1.5rem]">
            {data?.map(product => {
              return (
                <OrderCard
                  key={product?.id}
                  id={product?.id}
                  title={product?.title}
                  price={product?.price}
                  imageUrl={product?.images[0]}
                  onDelete={onDelete}
                />
              )
            })}
          </div>
        </section>
      </aside>
    </div>,
    document.getElementById('modal')!
  )
}

export default CheckoutSideMenu
