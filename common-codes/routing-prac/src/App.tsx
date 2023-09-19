import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
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
      },
      {
        path: "/product-details/:productId",
        element: <ProductDetails />,
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
