import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import { useState } from "react";
import { useEffect } from "react";
import ProductDetails from "../../Components/ProductDetails";

function Home() {
  const [items, setItems] = useState(null);

  useEffect(()=>{
    


    const getData = async ()=>{
      const response = await fetch('https://api.escuelajs.co/api/v1/products')
      const data = await response.json()
      setItems(data)
      return data
    }
    getData();
  }, [])


  return (
    <Layout>
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
