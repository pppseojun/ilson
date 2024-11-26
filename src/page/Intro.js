import React from "react";
import Header from "../component/Header";
import "../style/Intro.css";

const IntroPage = () => {
    return (
        <div>
            <Header />
            <div className="introMain"></div>
            <div className="mainTitle">
                다른 시선으로 구인 시스템 일손이 시작합니다.
            </div>
        </div>
    );
};

export default IntroPage;
