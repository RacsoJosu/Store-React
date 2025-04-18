import { PlusCircleIcon, CheckCircleIcon } from '@heroicons/react/24/solid'
import { SyntheticEvent, useContext } from 'react'
import { ShoppingCartContext } from '@context/index'
import { Product } from '@/types'

type CardPropsType = Omit<Product, 'images'> & {
  img: string
  categoryName?: string
}

// eslint-disable-next-line react/prop-types
const Card = ({
  title,
  id,
  category,
  price,
  img,
  description,
}: CardPropsType) => {
  // lectura del estado global

  const context = useContext(ShoppingCartContext)
  const categoryName = category.name
  // eslint-disable-next-line no-unused-vars
  const showProduct = (
    event: SyntheticEvent<HTMLDivElement, Event>,
    productDetail: Omit<CardPropsType, 'category'>
  ) => {
    // productInf,
    // setProductInf
    event.stopPropagation()
    context?.openProductDetail()
    context?.closeCheckouSideMenu()
    context?.setProductInf({ ...productDetail, images: [productDetail.img] })
  }

  // funcion para retener la informacion de los productos

  const addProductsToCart = (
    event: React.SyntheticEvent<HTMLDivElement, Event>,
    dataProduct: CardPropsType
  ) => {
    event.stopPropagation()
    context?.closeProductDetail()

    const product = context?.cartProducts.filter(
      product => product.id === dataProduct.id
    )

    if (product?.length === 0) {
      context?.setCartProducts([
        ...context.cartProducts,
        { ...dataProduct, images: [dataProduct.img] },
      ])
      context?.setCount(context.count + 1)
    }
    context?.openCheckouSideMenu()
  }

  const renderIcon = () => {
    const including = context?.cartProducts.filter(product => product.id === id)
    if (including?.length === 0) {
      return (
        <div
          className=" absolute top-0 right-0 flex justify-center items-center bg-white m-2 rounded-full p-1"
          onClick={event =>
            addProductsToCart(event, {
              title,
              id,
              price,
              img,
              categoryName,
              description,
              category,
            })
          }
        >
          <PlusCircleIcon className="h-6 w-6 text-green-500"></PlusCircleIcon>
        </div>
      )
    } else {
      return (
        <div
          className=" absolute top-0 right-0 flex justify-center items-center bg-white m-2 rounded-full p-1"
          onClick={event =>
            addProductsToCart(event, {
              title,
              id,
              price,
              img,
              categoryName,
              description,
              category,
            })
          }
        >
          <CheckCircleIcon className="h-6 w-6 text-blue-500"></CheckCircleIcon>
        </div>
      )
    }
  }
  return (
    <div
      onClick={e =>
        showProduct(e, {
          title,
          id,
          price,
          img,
          categoryName,
          description,
        })
      }
      key={id}
      className=" bg-white cursor-pointer w-56 h-60 rounded-lg "
    >
      <figure className=" relative mb-3 w-full h-4/5">
        <span className=" absolute bottom-0 left-0 bg-white/60 rounded-lg text-xs m-2 px-3 py-0.5">
          {categoryName}
        </span>
        <img
          className="w-full rounded-lg h-full object-cover"
          src={img}
          alt={title}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null
            currentTarget.src = 'image_path_here'
          }}
        />
        {renderIcon()}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{title}</span>
        <span className="text-lg font-semibold">${price}</span>
      </p>
    </div>
  )
}

export default Card
