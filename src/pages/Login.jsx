import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { getUserProfile, login } from "../api/auth";

import AuthForm from "../components/AuthForm";

const Login = ({ setUser }) => {
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      const loginData = await login(formData);

      localStorage.setItem("accessToken", loginData.accessToken);

      const userProfile = await getUserProfile(loginData.accessToken);

      setUser(userProfile); //로그인이 된 시점
      navigate("/");
    } catch (error) {
      alert("로그인에 실패. 츄라이어겐.");
    }
  };

  return (
    <div>
      <div>
        <h1>로그인</h1>
        <AuthForm mode="login" onSubmit={handleLogin} />
        <div>
          <p>
            u have no 계정 ?<Link to="/signup">회원가입</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
