import { PlusCircleIcon  } from '@heroicons/react/24/solid'
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"


// eslint-disable-next-line react/prop-types
const Card = ({title, customKey,category, price, img, description})=>{
    // lectura del estado global
    
    const context = useContext(ShoppingCartContext);
    const categoryName = category.name
    // eslint-disable-next-line no-unused-vars
    const showProduct= (event,productDetail)=>{
        // productInf,
        // setProductInf
        event.stopPropagation()
        context.openProductDetail()
        context.closeCheckouSideMenu()
        context.setProductInf(productDetail)
        
    }

    // funcion para retener la informacion de los productos

    const addProductsToCart= (event,dataProduct)=>{
        console.log(event)
        event.stopPropagation()
        context.openCheckouSideMenu()
        context.closeProductDetail()
        context.setCartProducts([...context.cartProducts, dataProduct])
        context.setCount(context.count + 1);
        console.log({cart:context.cartProducts})
    }
    return (
        <div 
         onClick={(e)=> showProduct(e,{title, customKey, price, img,categoryName, description})}
         key={customKey} className=" bg-white cursor-pointer w-56 h-60 rounded-lg ">

            <figure className=" relative mb-3 w-full h-4/5">
                <span className=" absolute bottom-0 left-0 bg-white/60 rounded-lg text-xs m-2 px-3 py-0.5">{categoryName}</span>
                <img  className='w-full rounded-lg h-full object-cover'src={img} alt={title} />
                
                <div className=" absolute top-0 right-0 flex justify-center items-center bg-white m-2 rounded-full p-1" onClick={(event)=>addProductsToCart(event, {title, customKey, price, img,categoryName, description})}> 
                    
                    <PlusCircleIcon className="h-6 w-6 text-green-500"></PlusCircleIcon>

                </div>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{title}</span>
                <span className='text-lg font-semibold'>${price}</span>
            </p>
        </div>

    )
}

export default Card