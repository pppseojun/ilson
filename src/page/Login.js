import React, { useState, useEffect } from "react";
import "../style/Login.css";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../component/Header";
// import { json } from "body-parser";

function LoginPage(porps) {
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [mode, setMode] = useState("");

    const navigationToJoin = () => {
        navigate("/join");
    };
    const navigateToCancel = () => {
        navigate(-1);
    };

    useEffect(() => {
        fetch("http://localhost:3000/login")
            .then((res) => res.json)
            .then((json) => {
                if (json.isLogin === "True") {
                    setMode("WELCOME");
                } else {
                    setMode("LOGIN");
                }
            });
    }, []);

    return (
        <div>
            <Header />
            <div className="bgdiv">
                <div className="background">
                    <div className="LoginSection">
                        <div className="loginText">로그인</div>
                        <Form>
                            <Form.Group
                                className="idInput"
                                controlId="formBasicEmail"
                            >
                                <Form.Control
                                    placeholder="아이디"
                                    type="text"
                                    onChange={(event) => {
                                        setId(event.target.value);
                                    }}
                                />
                            </Form.Group>

                            <Form.Group
                                className="pwInput"
                                controlId="formBasicPassword"
                            >
                                <Form.Control
                                    type="password"
                                    placeholder="비밀번호"
                                    onChange={(event) => {
                                        setPassword(event.target.value);
                                    }}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicCheckbox"
                            >
                                <Form.Check
                                    type="checkbox"
                                    label="아이디 저장"
                                />
                            </Form.Group>
                            <div className="logBtnSection">
                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="submitBtn"
                                    onClick={() => {
                                        const userData = {
                                            userId: id,
                                            userPassword: password,
                                        };
                                        fetch("http://localhost:3000/login", {
                                            //auth주소에서 받을 예정
                                            method: "post", //method:통신방법
                                            headers: {
                                                //headers:API응답에 대한 정보를 담음
                                                "content-type":
                                                    "application/json",
                                            },
                                            body: JSON.stringify(userData), //userData라는 객체를 보냄
                                        })
                                            .then((res) => res.json())
                                            .then((json) => {
                                                if (json.isLogin === "True") {
                                                    porps.setMode("WELCOME");
                                                } else {
                                                    alert(json.isLogin);
                                                }
                                            });
                                    }}
                                >
                                    확인
                                </Button>
                                <Button
                                    variant="danger"
                                    className="cancelBtn"
                                    onClick={navigateToCancel}
                                >
                                    취소
                                </Button>
                            </div>
                        </Form>
                        <Button
                            variant="outline-dark"
                            onClick={navigationToJoin}
                            className="joinPage"
                        >
                            회원가입
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
