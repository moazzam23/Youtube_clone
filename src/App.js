
import { BrowserRouter as Router , Route , Routes} from "react-router-dom"
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import "./App.css";
import { SidebarProvider } from "./Context/Sidebar";

function App() {
  return (
    <>
     <SidebarProvider>
    <Router>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/shorts"  element={<Login/>}/>
        <Route path="/signup"  element={<Signup/>}/>
      </Routes>
    </Router>
    </SidebarProvider>
  </>
  );
}

export default App;
