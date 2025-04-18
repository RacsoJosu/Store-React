import Card from '@/Core/components/Card'
import ProductDetails from '@/Products/components/ProductDetails'
import { Fragment, useContext, useEffect } from 'react'
import { ShoppingCartContext } from '@context/index'
import Search from '@/Products/components/Search'

function Home() {
  const context = useContext(ShoppingCartContext)

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
        <h1 className="text-center font-bold mt-6 text-2xl">
          Exclusive Products
        </h1>
        <Search />
      </div>
      {items && items?.length > 0 ? (
        <section className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-10">
          {items?.map(item => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Card
                description={item.description}
                title={item.title}
                key={item.id}
                id={item.id}
                category={item.category}
                price={item.price}
                img={item.images[0]}
              ></Card>
            )
          })}
        </section>
      ) : (
        <div>
          <p className="text-[2rem] mt-[2rem] font-bold text-wrap text-center">
            Lo siento no hay elementos que conicidan con la busqueda :C{' '}
          </p>
        </div>
      )}

      <ProductDetails />
    </Fragment>
  )
}

export default Home
