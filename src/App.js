import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import TopNavbar from "./components/TopNavbar";

function App() {
  return (
    <div className=" w-screen min-h-screen ">
      <TopNavbar></TopNavbar>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
