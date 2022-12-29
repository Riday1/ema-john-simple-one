
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Order from './components/Order/Order';
import Shop from './components/Shop/Shop';
import Main from './Layouts/Main';
import { productsAndCartLoader } from './Loaders/ProductAndCartLoaders';




function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Shop></Shop>,
          loader: () => fetch('products.json')
        },
        {
          path: '/order',
          element: <Order></Order>,
          loader: productsAndCartLoader
        },
        { path: '/inventory', element: <Inventory></Inventory> },
        { path: 'about', element: <About></About> }
      ]
    },
    { path: '*', element: <div>error page</div> }
  ])
  return (
    <div >

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
