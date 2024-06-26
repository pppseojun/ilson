import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import LoginPage from "./page/Login";
import JoinPage from "./page/Join";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/join" element={<JoinPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
