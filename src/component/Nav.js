import React from "react";
import "../style/Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <div className="navBar">
                <Link className="navbarMenu" to={"/ilsonIntro"}>
                    일손 소개
                </Link>
                <Link className="navbarMenu" to={"/"}>
                    일손 찾기
                </Link>
                <Link className="navbarMenu" to={"/"}>
                    일자리 찾기
                </Link>
                <Link className="navbarMenu" to={"/"}>
                    FAQ
                </Link>
            </div>
        </div>
    );
};

export default Nav;
