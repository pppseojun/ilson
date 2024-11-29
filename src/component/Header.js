import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "./Nav";
import "../style/component/Header.css";

const Header = () => {
    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate("/login");
    };

    const [scrollPosition, setScrollPosition] = useState(0);

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };

    useEffect(() => {
        window.addEventListener("scroll", updateScroll);
        return () => {
            window.removeEventListener("scroll", updateScroll);
        };
    }, []);

    return (
        <div className={`header ${scrollPosition > 50 ? "scrolled" : ""}`}>
            <Link to="/" className="headerMain">
                <img
                    className="mainLogo"
                    src="img/ilsonLogo.png"
                    alt="메인로고"
                ></img>
                <div className="mainText">일손</div>
            </Link>

            <Nav />
            <div className="LoginBtn" onClick={navigateToLogin}>
                로그인/회원가입
            </div>
        </div>
    );
};

export default Header;
