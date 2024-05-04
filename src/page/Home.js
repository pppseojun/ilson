import React from "react";
import Header from "../component/Header";
import "../style/Home.css";
import MainVideo1 from "../component/MainVideo1";

const HomePage = () => {
    return (
        <div>
            <Header />
            <div className="MV1">
                <MainVideo1 />
            </div>
        </div>
    );
};

export default HomePage;
