import React from "react";
import "../style/component/Card.css";

function Card() {
    return (
        <div className="cardBox">
            <img
                src="img/building.jpg"
                className="cardImage"
                alt="이미지"
            ></img>
            <h2>이름 및 제목</h2>
            <p>간단한 설명 및 간단한 경력</p>
        </div>
    );
}

export default Card;
