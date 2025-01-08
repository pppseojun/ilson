import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import LoginPage from "./page/Login";
import JoinPage from "./page/Join";
import IntroPage from "./page/Intro";
import FindPartnerPage from "./page/FindPartner";
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/join" element={<JoinPage />} />
                        <Route path="/ilsonIntro" element={<IntroPage />} />
                        <Route path="/findPartner" element={<FindPartnerPage />} />
                    </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
