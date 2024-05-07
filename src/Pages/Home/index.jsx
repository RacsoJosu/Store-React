import Layout from "../../Components/Layout"
import Card from "../../Components/Card"

import ProductDetails from "../../Components/ProductDetails";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Search from "../../Components/Search";

function Home() {
  const context = useContext(ShoppingCartContext);
  const items = context.items;
 

  


  return (
    <Layout>
      <div className="my-10">
        <Search/>

      </div>
      <section className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-10">
        {items?.map((item)=>(
          // eslint-disable-next-line react/jsx-key
          <Card description={item.description} title={item.title} key={item.id} customKey={item.id} category={item.category} price={item.price} img = {item.images[0]}></Card>
        ))
        }

      </section>

      <ProductDetails/>
           
    </Layout>
      
      
      
    
  )
}

export default Home
