import React from "react";
import Header from "../component/Header";
import "../style/Home.css";

const HomePage = () => {
    return (
        <div>
            <Header />
            <div className="MV1">
                <video muted autoPlay loop>
                    <source src="img/ilson_main_video.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    );
};

export default HomePage;
