import { Routes, Route } from "react-router-dom";
import './App.css'
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Footer from "./components/footer/Footer";

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
