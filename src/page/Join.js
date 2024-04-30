import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const JoinPage = () => {
    const navigate = useNavigate();
    const navigateTologin = () => {
        navigate(-1);
    };

    return (
        <div className="bgdiv">
            <div className="background">
                <div className="LoginSection">
                    <div className="loginText">회원가입</div>
                    <form className="inputSction">
                        <div>
                            아이디 <input></input>
                        </div>
                        <div>
                            이메일 <input type="email"></input>
                        </div>
                        <div>
                            비밀번호<input type="password"></input>
                        </div>
                        <div>
                            비밀번호 확인<input type="password"></input>
                        </div>
                        <div className="btnSection">
                            <Button variant="success">확인</Button>
                            <Button variant="danger" onClick={navigateTologin}>
                                취소
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JoinPage;
