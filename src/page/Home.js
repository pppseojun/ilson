import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/Home.css";

const HomePage = () => {
    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate("/login");
    };

    return (
        <div className="header">
            <img className="mainLogo" src="img/ilsonLogo.png"></img>
            <div>일손</div>
            <div className="LoginBtn" onClick={navigateToLogin}>
                로그인/회원가입 입니다
            </div>
        </div>
    );
};

export default HomePage;
