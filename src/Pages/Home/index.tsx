import ProductDetails from '@/Products/components/ProductDetails'
import { Fragment, useContext, useEffect } from 'react'
import { ShoppingCartContext } from '@/Core/context/index'
import Search from '@/Products/components/Search'
import { Outlet, useParams } from 'react-router-dom'

function Home() {
  const context = useContext(ShoppingCartContext)
  const params = useParams()

  const getItems = () => {
    if (context?.isSearch && context?.searchValue != '') {
      return context?.searchItems
    } else {
      return context?.items
    }
  }

  const items = getItems()
  useEffect(() => {
    if (context?.searchValue === '') {
      context?.setSearchItems([])
      context?.setIsSearch(false)
    }
  }, [context?.searchValue])

  return (
    <Fragment>
      <div className=" w-full flex justify-center flex-col gap-4 items-center">
        <h1 className="text-center font-bold text-2xl">
          {params.category || 'Exclusive'} products
        </h1>
        <Search />
      </div>
      <Outlet context={{ items }} />

      <ProductDetails />
    </Fragment>
  )
}

export default Home
