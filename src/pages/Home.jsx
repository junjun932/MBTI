import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1>이게 최종 찐 막 MBTI 테스트</h1>
      <p>아묻따 선택 ㄱ ㄱ</p>
      <Link to="/src/pages/Login.jsx">로그인하기</Link>
    </div>
  );
};

export default Home;
