import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.js";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
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
            <div>
              <h1 className="display-1">REACT</h1>
              <p>Hello, Arvs!</p>
            </div>
            <Footer />
          </>
        }
      ></Route>

      <Route
        path="/about"
        element={
          <>
            <Navbar />
            <About />
            <Footer />
          </>
        }
      ></Route>
    </Routes>
  );
}

export default App;
