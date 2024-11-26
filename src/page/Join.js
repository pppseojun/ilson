import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "../style/Join.css";
// import { json } from "body-parser";

function JoinPage(props) {
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const navigateTologin = () => {
        navigate(-1);
    };

    return (
        <div className="bgdiv">
            <div className="background">
                <div className="LoginSection">
                    <div className="loginText">회원가입</div>
                    <Form>
                        <Form.Group
                            className="signinSection"
                            controlId="formbasicId"
                        >
                            <Form.Control
                                className="signId"
                                placeholder="아이디"
                                type="text"
                                onChange={(event) => {
                                    setId(event.target.value);
                                }}
                            />
                            <Form.Control
                                className="signPw"
                                placeholder="비밀번호"
                                type="password"
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                            />
                            <Form.Control
                                className="signPw2"
                                placeholder="비밀번호 확인"
                                type="password"
                                onChange={(event) => {
                                    setPassword2(event.target.value);
                                }}
                            />
                        </Form.Group>

                        <div className="btnSection">
                            <Button
                                variant="primary"
                                type="submit"
                                className="submitSignBtn"
                                onClick={() => {
                                    const userData = {
                                        userId: id,
                                        userPassword: password,
                                        userPassword2: password2,
                                    };
                                    fetch("http://localhost:3000/join", {
                                        //join주소에서 받을 예정
                                        method: "post", //method : 통신방법
                                        headers: {
                                            //headers: API 응답에 대한 정보를 담음
                                            "content-type": "application/json",
                                        },
                                        body: JSON.stringify(userData), //userData라는 객체를 보냄
                                    })
                                        .then((res) => res.json())
                                        .then((json) => {
                                            if (json.isSuccess === "True") {
                                                alert(
                                                    "회원가입이 완료 되었습니다."
                                                );
                                                props.setMode("LOGIN");
                                            } else {
                                                alert(json.isSuccess);
                                            }
                                        });
                                }}
                            >
                                확인
                            </Button>
                            <Button
                                variant="danger"
                                className="cancelSignBtn"
                                onClick={navigateTologin}
                            >
                                취소
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default JoinPage;
