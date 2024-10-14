import React, { useState } from "react";

import { updateProfile } from "../api/auth";

const Profile = ({ user, setUser }) => {
  const [nickname, setNickname] = useState(user?.nickname || "");

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateProfile({ nickname });
      setUser({ ...user, nickname: response.nickname });
      alert("프로필 업댓 완!");
    } catch (e) {
      alert("나야 error 404 ... 츄라이 어게인");
    }
  };

  return (
    <div>
      <div>
        <h1>프로필 수정</h1>
        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <label>닉네임</label>
            <input
              onChange={handleNicknameChange}
              className="ml-2 border border-[#ffffff]] rounded-[6px]"
            />
          </div>
          <button type="submit">프로필 업데이트</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
