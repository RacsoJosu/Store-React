import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '@context/index'

import './styles.css'
import { createPortal } from 'react-dom'

const ProductDetails = () => {
  const contextShoppingProduct = useContext(ShoppingCartContext)
  const product = contextShoppingProduct?.productInf
  let src = ''

  if (product?.images && product.images.length > 0) {
    src = product.images[0]
  }

  return createPortal(
    <div
      className={`absolute top-0 w-full h-full ${contextShoppingProduct?.isProductDetailOpen ? 'bg-white/50 flex' : 'hidden'} overflow-hidden  flex-row-reverse `}
    >
      <aside
        className={` ${contextShoppingProduct?.isProductDetailOpen ? 'flex' : 'hidden'} overflow-y-scroll flex flex-col border-solid border-2 max-w-auto w-[300px] h-full  border-transparent shadow-2xl rounded-lg bg-white`}
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
        <figure className="mx-4 w-auto">
          <img
            src={src}
            alt={product?.title}
            className="w-full h-full rounded"
          />
        </figure>

        <p className="m-4 w-auto flex flex-col ">
          <span className=" font-bold text-2xl ">${product?.price}</span>
          <span className=" font-bold mt-2">{product?.title}</span>
          <span className=" font-light">{product?.description}</span>
        </p>
      </aside>
    </div>,
    document.getElementById('modal')!
  )
}

export default ProductDetails
