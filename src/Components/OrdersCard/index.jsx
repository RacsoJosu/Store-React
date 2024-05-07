
import { CalendarDaysIcon, ChevronRightIcon, ShoppingBagIcon} from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function OrdersCard({ id,totalPrice, totalProducts, date}) {
    
  return (
    <div className=' flex justify-between items-center  gap-10    w-full '>
        <div className='flex flex-col items-start justify-center gap-2'>

          <p className=' flex gap-2 text-wrap text-left font-normal font-lg'>
              <span className='font-sm font-light'><CalendarDaysIcon height={20}/></span><span className=''>{date}</span>
          </p>
          <p className='flex font-lg font-normal text-wrap gap-2'><span className=' font-md font-light'><ShoppingBagIcon height={20}/></span><span>{totalProducts} Productos</span></p>

        </div>
        
        
        <div className='flex gap-4 items-center justify-center'>

          <p className='flex text-[2rem] font-bold justify-between'><span>${totalPrice}</span>
          
          </p>
          <Link to={`/my-orders/${id}`}>
                    <ChevronRightIcon height={20} color="#000"/>
                  
          </Link>

        
        
        

        </div>
    </div>
  )
}

export default OrdersCard