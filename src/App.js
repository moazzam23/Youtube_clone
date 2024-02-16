
import { BrowserRouter as Router , Route , Routes} from "react-router-dom"
import Home from "./Pages/Home";
import "./App.css";
import { SidebarProvider } from "./Context/Sidebar";
import Shorts from "./Pages/Shorts";
import Subcritpion from "./Pages/Subcritpion";

function App() {
  return (
    <>
     <SidebarProvider>
    <Router>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/shorts"  element={<Shorts/>}/>
        <Route path="/subscription"  element={<Subcritpion/>}/>
      </Routes>
    </Router>
    </SidebarProvider>
  </>
  );
}

export default App;
