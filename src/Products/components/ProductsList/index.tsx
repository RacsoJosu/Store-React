import Card from '@/Core/components/Card'
import ProductDetails from '@/Products/components/ProductDetails'
import { Fragment } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import { Product } from '@/types'

interface IContextRoute {
  items: Product[]
}
function ListProducts() {
  let { items } = useOutletContext<IContextRoute>()
  const params = useParams()
  console.log({ params, items })
  if (params?.category) {
    items = items.filter(item =>
      item.category.name
        .toLowerCase()
        .includes(params?.category?.toLocaleLowerCase() || '')
    )
  }

  return (
    <Fragment>
      {items && items?.length > 0 ? (
        <section className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-10">
          {items?.map(item => (
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
          ))}
        </section>
      ) : (
        <div>
          <p className="text-[2rem] mt-[2rem] font-bold text-wrap text-center">
            Lo siento no hay elementos que conicidan con la categoria :C{' '}
          </p>
        </div>
      )}

      <ProductDetails />
    </Fragment>
  )
}

export default ListProducts
