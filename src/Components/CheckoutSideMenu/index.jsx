import { XMarkIcon} from '@heroicons/react/24/solid'
import { useContext } from 'react';
import {Link} from 'react-router-dom'
import {ShoppingCartContext} from '../../Context'
import OrderCard from '../OrderCard'
import './styles.css'
import { sumPrecios } from '../../utils/sumPrices';
import { getDate } from '../../utils/getDateHours';
const CheckoutSideMenu = ()=>{
    const contextCheckoutSideMenu = useContext(ShoppingCartContext)
    const data= contextCheckoutSideMenu.cartProducts;
    
    const onDelete = (event, id)=>{
        event.stopPropagation()
        const newData =  data.filter((product) => product.customKey != id);
        contextCheckoutSideMenu.setCartProducts([...newData])
        contextCheckoutSideMenu.setCount(contextCheckoutSideMenu.count - 1);
    }

    const handleCheckout = ()=>{
        const orderToAdd = {
            id: +new Date(),
            date: getDate(),
            products: contextCheckoutSideMenu.cartProducts,
            totalProducts: contextCheckoutSideMenu.cartProducts.length,
            totalPrice: sumPrecios(contextCheckoutSideMenu.cartProducts),
          };
      
        contextCheckoutSideMenu.setOrder([...contextCheckoutSideMenu.order, orderToAdd]);
        contextCheckoutSideMenu.setCartProducts([]);
        contextCheckoutSideMenu.setCount(0);

        
        
      
    }
   
       
    return(
        <aside className= {` ${contextCheckoutSideMenu.isCheckoutSideMenuOpen ? 'flex':'hidden' }   checkout-side-menu flex-col gap-3 fixed top-20 border-solid border-2 right-0 border-transparent shadow-2xl rounded-lg bg-white `}>

            
            <section className='flex justify-between items-center p-6 '>
                <h2 className='  font-medium text-xl'>My Order</h2>
                <div >
                    <XMarkIcon 
                    onClick={()=> contextCheckoutSideMenu.closeCheckouSideMenu()}
                    className='h-6 w-6 text-red-500 cursor-pointer'></XMarkIcon>        

                </div>
                
            </section>

            <section className='h-full w-full  '>
                <div className=' w-100 flex items-center justify-center my-[1rem] px-[2rem]  '>
                    <Link to={"/my-orders/last"}>
                        <button onClick={handleCheckout} className='transition duration-500 ease-in-out bg-blue-400 text-[#fff] text-lg font-bold py-2 px-4 rounded-lg hover:bg-blue-900'>Checkout</button>
                    </Link>
                </div>
                <div className='flex items-center justify-between px-[2rem] border-b-2 border-slate-300'>
                    <p className='text-lg font-light '>Total: </p>
                    <span className='text-xl font-bold '>${sumPrecios(data)}</span>

                </div>
                <div className='overflow-y-scroll h-full w-full px-[1.5rem]'>
                    {data?.map((product)=>{
                        return <OrderCard key={product.customKey} id={product.customKey} title={product.title} price={product.price} imageUrl={product.img} onDelete={onDelete}/>

                    })}
                </div>


            </section>

           
            
            
        </aside>
        
    );


}


export default CheckoutSideMenu