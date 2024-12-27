import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import productStore from './store/productStore.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Loader from './Loader.jsx';
import HomePage from './HomePage.jsx'
import NotFound from './NotFound.jsx'
import ErrorElement from './ErrorElement.jsx'

const CartPage = lazy(() => import('./CartPage.jsx'))
const ProductDetails = lazy(() => import('./ProductDetails.jsx'))
const OrderPage = lazy(() => import('./OrderPage.jsx'))
const MyOrders = lazy(() => import('./MyOrders.jsx'))

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <Suspense fallback={<Loader />}>
        <ErrorElement />
      </Suspense>
    ),
    children: [
      {path: "/", element: <HomePage />},
      {path: "/cart", element: <Suspense fallback={<Loader />}><CartPage /></Suspense>},
      {path: "/product", element: <Suspense fallback={<Loader />}><NotFound /></Suspense>},
      {path: "/product/:id", element: <Suspense fallback={<Loader />}><ProductDetails /></Suspense>},
      {path: "/order", element: <Suspense fallback={<Loader />}><OrderPage /></Suspense>},
      {path: "/orders-list", element: <Suspense fallback={<Loader />}><MyOrders /></Suspense>}
    ],
  },  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={productStore}>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router}/>
      </Suspense>
    </Provider>
  </StrictMode>
)
