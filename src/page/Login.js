import React from "react";
import "../style/Login.css";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPage = () => {
    const navigate = useNavigate();
    const navigationToJoin = () => {
        navigate("/join");
    };
    const navigateToCancel = () => {
        navigate(-1);
    };

    return (
        <div className="bgdiv">
            <div className="background">
                <div className="LoginSection">
                    <div className="loginText">로그인</div>
                    <Form>
                        <Form.Group
                            className="idInput"
                            controlId="formBasicEmail"
                        >
                            <Form.Control placeholder="아이디" />
                            <Form.Text className="text-muted"></Form.Text>
                        </Form.Group>

                        <Form.Group
                            className="pwInput"
                            controlId="formBasicPassword"
                        >
                            <Form.Control
                                type="password"
                                placeholder="비밀번호"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                        >
                            <Form.Check type="checkbox" label="아이디 저장" />
                        </Form.Group>
                        <div className="btnSection">
                            <Button
                                variant="primary"
                                type="submit"
                                className="submitBtn"
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
    );
};

export default LoginPage;
