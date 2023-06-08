import { useRoutes, BrowserRouter } from "react-router-dom";
import { ContextProvider } from "../../Context";
import { Home } from "../Home";
import { MyAccount } from "../MyAccount";
import { MyOrder } from "../MyOrder";
import { MyOrders } from "../MyOrders";
import { NotFound } from "../NotFound";
import { SignIn } from "../SignIn";
import { NavBar } from "../../Components/NavBar";
import "./App.css";

const AppRoutes = () => {
  const routes = useRoutes([
    {path: "/", element: <Home />,},
    {path: "/my-account", element: <MyAccount/>},
    {path: "/my-order", element: <MyOrder/>},
    {path: "/my-orders", element: <MyOrders/>},    
    {path: "/sign-in", element: <SignIn/>},
    {path: "/*", element: <NotFound/>}
  ]);
  return routes;
};

const App = () => {
  return (
    <ContextProvider>
    <BrowserRouter>
      <AppRoutes />
      <NavBar/>
    </BrowserRouter>
    </ContextProvider>

  );
};

export default App;
