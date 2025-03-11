// import Products from "./pages/ProductPages";

import { Route, Router, Routes } from "react-router";
import Home from "./pages/Home";
import Products from "./pages/ProductPages";
import Header from "./components/Header";
import SingUp from "./pages/Signup";
import Login from "./pages/Login";
import Order from "./components/Order";
import PurchaseTable from "./pages/purchase";


function App() {
  
  return (
    <>
      
        <Header/>
        <Routes> {/* Wrap Route components in Routes */}
          <Route path="/" element={<Home />} /> {/* Define the route for Home component */}
          <Route path="/products" element={<Products />} /> {/* Define the route for Products component */}
          {/* <Route path="/about" element={<About />} /> */}
        {/* Define the route for About component */}
        <Route path="/singUp" element={<SingUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/order/:id" element={<Order />} />
        <Route path="/purchase" element={<PurchaseTable />} />

        {/* <Route path="/login" element={<Login />} /> */}
            {/* Future routes can be added here */}
          </Routes>
      
    </>
  );
}
export default App;
