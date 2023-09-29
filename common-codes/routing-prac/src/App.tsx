import "./App.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Error } from "./components/Error";
import { Root } from "./pages/Root";
import { ProductDetails } from "./pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
        loader: async () => {
          let response = await fetch('https://real-time-emp-8518f-default-rtdb.firebaseio.com/cart.json');
          let data;
          try {
            if(response.ok) {
              data = await response.json();
            }
          } catch {
            // error
          }
          return data;
        }
      },
      {
        path: "/product-details",
        element: <Outlet />,
        children: [
          {
            path: ":productId",
            element: <ProductDetails />
          }
        ]
      },
    ],
  },
]);
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//       <Route path="/" element={<Home />} />
//       <Route path="/products" element={<Products />} />
//   </Route>
// )
// const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
