import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.js";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Grades from "./Components/Grades";
import Triangle from "./Components/Triangle";
import Election from "./Components/Election";
import Shop from "./Components/Shop";
import Counter from "./Components/Counter";
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
      />

      <Route
        path="/about"
        element={
          <>
            <Navbar />
            <About />
            <Footer />
          </>
        }
      />
      <Route
        path="/grades"
        element={
          <>
            <Navbar />
            <Grades score={60} total={100} />
            <Footer />
          </>
        }
      />
      <Route
        path="/shop"
        element={
          <>
            <Navbar />
            <Shop />
            <Footer />
          </>
        }
      />
      <Route
        path="/counter"
        element={
          <>
            <Navbar />
            <Counter />
            <Footer />
          </>
        }
      />
      <Route
        path="/triangle"
        element={
          <>
            <Navbar />
            <Triangle />
            <Footer />
          </>
        }
      />
      <Route
        path="/election"
        element={
          <>
            <Election />
          </>
        }
      />
    </Routes>
  );
}

export default App;
