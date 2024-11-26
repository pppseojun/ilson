import React from "react";
import Header from "../component/Header";
import "../style/Home.css";
import Card from "../component/Card";

const HomePage = () => {
    return (
        <div>
            <Header />
            <div className="MV1">
                <video muted autoPlay loop>
                    <source src="img/ilson_main_video.mp4" type="video/mp4" />
                </video>
                <img
                    src="img/ilson_main_background.png"
                    className="mainbg"
                ></img>
            </div>
            <div className="ffpCard">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default HomePage;
