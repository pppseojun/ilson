import React from "react";
import Header from "../component/Header";
import Card from "../component/Card";
import "../style/Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
    var SliderSetting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true
    };

    return (
        <div>
            <Header />
            <div className="MainSec1">
                <video muted autoPlay loop>
                    <source src="img/ilson_main_video.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="MainSec2">
                <h2>일손이 필요한 곳</h2>
                <div className="ffpCard">
                    <Slider {...SliderSetting} className="slider">
                        <div>
                            <Card />
                        </div>
                        <div>
                            <Card />
                        </div>
                        <div>
                            <Card />
                        </div>
                        <div>
                            <Card />
                        </div>
                    </Slider>
                </div>
            </div>
            <div className="MainSec3">
                <img
                    src="img/ilson_main_background.png"
                    className="mainbg"
                ></img>
            </div>
        </div>
    );
};

export default HomePage;
