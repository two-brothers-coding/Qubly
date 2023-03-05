import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
        <Outlet />
      <Footer />
    </div>
  );
}

export default App;
