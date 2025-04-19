import { Fragment, useContext } from 'react'

import { ShoppingCartContext } from '@/core/context/index'
import OrdersCard from '@/orders/components/OrdersCard'

function MyOrders() {
  const context = useContext(ShoppingCartContext)

  const orders = context?.order

  return (
    <Fragment>
      <div className="flex items-center px-[2rem] flex-col gap-3   ">
        <div className="flex items-center justify-center   w-80 ">
          <h1>MyOrders</h1>
        </div>
        <div className="flex gap-4 flex-col flex-wrap">
          {orders?.map((order, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg px-[2rem] my-2 py-[2rem] border-slate-200 border-[2px]"
            >
              <OrdersCard
                id={order?.id}
                date={order?.date}
                totalPrice={order?.totalPrice}
                totalProducts={order?.totalProducts}
              />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  )
}

export default MyOrders
