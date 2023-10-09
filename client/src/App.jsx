import { Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home/Home";

function App() {
    return (
        <>
            <Routes>
                <Route path="/home" element={<Home></Home>}></Route>
            </Routes>
        </>
    );
}

export default App;
