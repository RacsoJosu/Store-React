import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import Signin from '../Signin'
import Navbar from '../../Components/Navbar'
import '../../App.css'

import { ShoppingCartProvider } from '../../Context'
const AppRoutes = ()=>{
  let routes = useRoutes(
    [
    {path:'/',element:<Home/>},
    {path:'/my-account',element:<MyAccount/>},
    {path:'/my-order',element:<MyOrder/>},
    {path:'/my-orders',element:<MyOrders/>},
    {path:'/sign-in',element:<Signin/>},
    {path:'/*',element:<NotFound/>},
  ]
    )

  return routes

}

function App() {
  
  return (
    <>
      <div>
        <ShoppingCartProvider>
          <BrowserRouter>
            <Navbar/>
            <AppRoutes/>
          </BrowserRouter>
        </ShoppingCartProvider>        
      </div>
      
    </>
  )
}

export default App