import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import CheckOut from "./pages/CheckOutPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  { path: "/checkout", element: <CheckOut /> },
]);

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
