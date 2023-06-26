import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Dentists from "./Pages/Dentist/Dentist";
import Contacto from "./Pages/Contacto/Contacto";
import Favs from "./Pages/Favs/Favs";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import ThemeContextProvider from "./Context/ThemeContextProvider";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dentist/:id" element={<Dentists />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="*" element={<div>ESTA PÁGINA NO EXITE</div>} />
        </Routes>
        <Footer />
      </ThemeContextProvider>
    </>
  );
}

export default App;
