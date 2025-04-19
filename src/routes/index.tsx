import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '@pages/Home/index'
import MyAccount from '@pages/MyAccount/index'
import MyOrder from '@pages/MyOrder/index'
import MyOrders from '@pages/MyOrders/index'
import NotFound from '@pages/NotFound/index'
import Signin from '@pages/Signin/index'
// import Navbar from '@/Core/components/Navbar'
import '../App.css'
import { ShoppingCartProvider } from '@/core/context/index'
import ProductsList from '@/products/components/ProductsList'
import Layout from '@/core/components/Layout'

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
        children: [{ path: ':category?', element: <ProductsList /> }],
      },
      {
        path: '/my-orders',
        children: [
          { index: true, element: <MyOrders /> },
          { path: '/my-orders/last', element: <MyOrder /> },
          { path: '/my-orders/:id', element: <MyOrder /> },
        ],
      },
      { path: '/my-account', element: <MyAccount /> },
      { path: '/my-order', element: <MyOrder /> },

      { path: '/sign-in', element: <Signin /> },
    ],
  },
  { path: '/*', element: <NotFound /> },
]

const router = createBrowserRouter(routes, {
  future: {
    v7_fetcherPersist: true,
    v7_relativeSplatPath: true,
  },
})

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
      </ShoppingCartProvider>
    </>
  )
}

export default App
