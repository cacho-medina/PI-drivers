import { Routes, Route } from "react-router-dom";
//styles
import "./App.css";
//pages
import Home from "./pages/Home/Home";
import Inicio from "./pages/Inicio/Inicio";
import Detail from "./pages/Detail/Detail";
import Form from "./components/form/Form";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Inicio></Inicio>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/detail" element={<Detail />}></Route>
                <Route path="/form" element={<Form />}></Route>
            </Routes>
        </div>
    );
}

export default App;
