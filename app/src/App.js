import Navbar from "./components/navbar";
import About from "./pages/about";
import Home from "./pages/home";
import Carta from "./pages/carta";
import Offers from "./pages/offers";
import Carrito from "./pages/carrito"
import { Route, Routes} from "react-router-dom";
import { ShoppingCartProvider } from "./context/shoppingCartContext";
import './styles/app.css'

function App() {
    
    return (
        <ShoppingCartProvider>
            <Navbar/>
            <div className="main-container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/carrito" element={<Carrito/>}></Route>
                    <Route path="/carta" element={<Carta/>}/>
                    <Route path="/offers" element={<Offers/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </div>
        </ShoppingCartProvider>
    )
}

export default App;