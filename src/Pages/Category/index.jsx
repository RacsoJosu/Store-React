import Layout from "../../Components/Layout"
import Card from "../../Components/Card"

import ProductDetails from "../../Components/ProductDetails";
import { useContext } from "react";
import { useParams} from "react-router-dom"
import { ShoppingCartContext } from "../../Context";

function Category() {
  const context = useContext(ShoppingCartContext);
  const params = useParams()
  const items = context.items.filter((item)=>  item.category.name.toLowerCase().includes(params.category.toLocaleLowerCase())  )
  

 

  


  return (
    <Layout>
      <div className="my-10">
        <h1 className="text-center font-bold text-2xl mb-4">{params.category} products</h1>

      </div>
      {items.length > 0 ? <section className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-10">
        { items?.map((item)=>(
          // eslint-disable-next-line react/jsx-key
          <Card description={item.description} title={item.title} key={item.id} customKey={item.id} category={item.category} price={item.price} img = {item.images[0]}></Card>
        ))
        }

      </section>: <div><p className="text-[2rem] mt-[2rem] font-bold text-wrap text-center">Lo siento no hay elementos que conicidan con la categoria :C </p></div>}

      <ProductDetails/>
           
    </Layout>
      
      
      
    
  )
}

export default Category
