import Layout from "../../Components/Layout"
import Card from "../../Components/Card"

import ProductDetails from "../../Components/ProductDetails";
import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../../Context";
import Search from "../../Components/Search";

function Home() {
  const context = useContext(ShoppingCartContext);
  const items = ()=>{
    if(context.isSearch && context.searchValue != "" ){
      return context.searchItems

    } else{
      
      return context.items
    } 
  
  };

  useEffect(() => {
    if (context.searchValue === "") {
      context.setSearchItems([])
      context.setIsSearch(false);
    }
  }, [context, context.searchValue]);
 

  


  return (
    <Layout>
      <div className="my-10">
        <h1 className="text-center font-bold text-2xl mb-4">Exclusive Products</h1>
        <Search/>

      </div>
      {items().length > 0 ? <section className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-10">
        { items()?.map((item)=>(
          // eslint-disable-next-line react/jsx-key
          <Card description={item.description} title={item.title} key={item.id} customKey={item.id} category={item.category} price={item.price} img = {item.images[0]}></Card>
        ))
        }

      </section>: <div><p className="text-[2rem] mt-[2rem] font-bold text-wrap text-center">Lo siento no hay elementos que conicidan con la busqueda :C </p></div>}

      <ProductDetails/>
           
    </Layout>
      
      
      
    
  )
}

export default Home
