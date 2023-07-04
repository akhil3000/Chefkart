import { Route, Routes } from "react-router-dom";
import "./App.css";
import DishPage from "./Pages/DishPage";

import Home from "./Pages/Home";


export default function App() {


  return (
    <Routes class>
      <Route path="/" element = {<Home/>}/>
      <Route path="/dish/:id" element = {<DishPage/>} />
    </Routes>
  );
}
