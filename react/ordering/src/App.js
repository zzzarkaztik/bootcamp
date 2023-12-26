import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "jquery/dist/jquery.js";
import "./js/order_now.js";
import Navbar from "./Components/Navbar";
import Order from "./Components/Order";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <div className="d-flex justify-content-center align-items-center my-5 py-5">
              <div className="text-center">
                <h1>Welcome to Oso Resto</h1>
                <button className="btn btn-primary" id="order_now">
                  Order Now!
                </button>
              </div>
            </div>
            <Footer />
          </>
        }
      ></Route>
      <Route
        path="/order"
        element={
          <>
            <Navbar />
            <Order />
            <Footer />
          </>
        }
      ></Route>
    </Routes>
  );
}

export default App;
