import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1>MBTI TEST </h1>
      <p>너 설마 T야 ? 솔직하게 답해주thㅔ요</p>
      <Link to="/login">로그인하기</Link>
    </div>
  );
};

export default Home;
