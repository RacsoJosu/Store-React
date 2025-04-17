import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

import './styles.css'
import React from 'react'
const ProductDetails = () => {
  const contextShoppingProduct = useContext(ShoppingCartContext)
  const product = contextShoppingProduct?.productInf
  let src = ''

  if (product?.images && product.images.length > 0) {
    src = product.images[0]
  }

  return (
    <aside
      className={` ${contextShoppingProduct?.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed border-solid border-2 right-0 border-transparent shadow-2xl rounded-lg bg-white`}
    >
      <section className="flex justify-between items-center p-6 ">
        <h2 className="  font-medium text-xl">Detail</h2>
        <div className="">
          <XMarkIcon
            onClick={() => contextShoppingProduct?.closeProductDetail()}
            className="h-6 w-6 text-red-500 cursor-pointer"
          ></XMarkIcon>
        </div>
      </section>
      <figure className="mx-4">
        <img src={src} alt={product?.title} className="w-full h-full rounded" />
      </figure>

      <p className="m-4 flex flex-col ">
        <span className=" font-bold text-2xl ">${product?.price}</span>
        <span className=" font-bold mt-2">{product?.title}</span>
        <span className=" font-light">{product?.description}</span>
      </p>
    </aside>
  )
}

export default ProductDetails
