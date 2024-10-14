import { Link, useNavigate } from "react-router-dom";

import { useEffect } from "react";

// Props 로 꼭 children 만 받을 필요는 없답니다.
const Layout = ({ user, setUser, children }) => {
  const navigate = useNavigate();

  // 이곳에서 로그인 하지 않은 사용자를 login 페이지로 보내줄 거에요.
  useEffect(() => {}, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
    navigate("/");
  };

  return (
    <div>
      <header className="py-4 px-3">
        <nav className="flex justify-between">
          <Link to="/">홈</Link>
          <div className="space-x-4">
            {user ? (
              <div className="flex gap-2 items-center">
                <Link to="/profile">프로필</Link>
                <div>{user.nickname} 님</div>
                <button onClick={handleLogout}>로그아웃</button>
              </div>
            ) : (
              <Link to="/login">로그인</Link>
            )}
          </div>
        </nav>
      </header>
      <main className="container mx-auto pt-10 main">{children}</main>
    </div>
  );
};

export default Layout;
