import {useContext} from "react"
import {ShoppingCartContext} from '../../Context'
import OrderCard from '../../Components/OrderCard'
import Layout from "../../Components/Layout"
import { Link, useParams } from "react-router-dom";
import { ChevronLeftIcon} from '@heroicons/react/24/solid'
function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const data = context.order;
  const params = useParams();
  
  const onDelete = (event, id)=>{
    event.stopPropagation()
    const newData =  data.filter((product) => product.customKey != id);
    context.setCartProducts([...newData])
    context.setCount(context.count - 1);
}

  const order = Number(params.id) ?  data.filter((order)=> order.id == params.id)[0] : data.slice(-1)[0]; 


    return (
      

        <Layout>
          <div className="flex items-center px-[2rem] py-[1rem] flex-col gap-3  shadow-lg rounded-lg border-slate-200 border-[2px]">
          <div className="flex content-left justify-between px-[1.3rem]  w-full ">

            <Link to="/my-orders">
                  <ChevronLeftIcon height={20} color="#000"/>
                
                </Link>
              <h1>MyOrder</h1>

          </div>
            <div className='overflow-y-scroll h-full w-full px-[1.3rem]'>
              {order?.products?.map((product)=>{
                        return <OrderCard key={product.customKey} id={product.customKey} title={product.title} price={product.price} imageUrl={product.img} onDelete={onDelete}/>

                    })}

            </div>

          </div>
        </Layout>
        
        
      
    )
  }
  
  export default MyOrder
  