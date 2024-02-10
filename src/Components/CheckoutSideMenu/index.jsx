import { XMarkIcon} from '@heroicons/react/24/solid'
import { useContext } from 'react';
import {ShoppingCartContext} from '../../Context'
import './styles.css'
const CheckoutSideMenu = ()=>{
    const contextCheckoutSideMenu = useContext(ShoppingCartContext)
    console.log({contextCheckoutSideMenu: contextCheckoutSideMenu.isCheckoutSideMenuOpen})
    
       
    return(
        <aside className= {` ${contextCheckoutSideMenu.isCheckoutSideMenuOpen ? 'flex':'hidden' } checkout-side-menu flex-col fixed top-20 border-solid border-2 right-0 border-transparent shadow-2xl rounded-lg bg-white`}>
            <section className='flex justify-between items-center p-6 '>
                <h2 className='  font-medium text-xl'>My Order</h2>
                <div >
                    <XMarkIcon 
                    onClick={()=> contextCheckoutSideMenu.closeCheckouSideMenu()}
                    className='h-6 w-6 text-red-500 cursor-pointer'></XMarkIcon>        

                </div>
                
            </section>
            
            
        </aside>
        
    );


}


export default CheckoutSideMenu