import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Shop from './components/Shop/Shop';
import Main from './layout/Main';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import { productAndCartLoader } from './loaders/productsAndCartLoader';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';

function App() {


  const router = createBrowserRouter([

    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          loader: () => fetch("/products.json"),
          element: <Shop />
        },
        {
          path: "/orders",
          loader: productAndCartLoader,
          element: <Orders />
        },
        {
          path: "/inventory",
          element: <Inventory />
        },
        {
          path: "/place-order",
          element: <PlaceOrder />
        }
      ]

    },

    {
      path: "*",
      element: <div>404, Page Not Found!</div>
    }

  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
