import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import "../style/Header.css";

const Header = () => {
    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate("/login");
    };

    return (
        <div className="header">
            <div className="headerMain">
                <img className="mainLogo" src="img/ilsonLogo.png"></img>
                <div>일손</div>
            </div>

            <Nav />
            <div className="LoginBtn" onClick={navigateToLogin}>
                로그인/회원가입
            </div>
        </div>
    );
};

export default Header;
