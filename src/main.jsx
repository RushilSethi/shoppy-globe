import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import productStore from './store/productStore.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './HomePage.jsx'
import CartPage from './CartPage.jsx'
import ProductDetails from './ProductDetails.jsx'
import NotFound from './NotFound.jsx'
import ErrorElement from './ErrorElement.jsx'
import OrderPage from './OrderPage.jsx'
import MyOrders from './MyOrders.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {path: "/", element: <HomePage />},
      {path: "/cart", element: <CartPage />},
      {path: "/product", element: <NotFound />},
      {path: "/product/:id", element: <ProductDetails />},
      {path: "/order", element: <OrderPage />},
      {path: "/orders-list", element: <MyOrders />}
    ],
  },  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={productStore}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
