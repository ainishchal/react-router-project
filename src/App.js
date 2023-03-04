import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SingleProduct from "./pages/SingleProduct";
import Products from "./pages/Products";
import Header from "./components/Header";
import Posts from "./pages/Posts";
import Error from "./pages/Error";
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
import MainLayout from "./pages/MainLayout";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
         <Routes>
          <Route path="/" element={<MainLayout/>}>

          <Route index element={<Home />}/>
          <Route path="about" element={<About/>}/>
          <Route path="products" element={<Products />}/>
          <Route path="products/:productId" element={<SingleProduct />}/>
          <Route path="posts" element={<Posts/>}/>
          <Route path="*" element={<Error />}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
