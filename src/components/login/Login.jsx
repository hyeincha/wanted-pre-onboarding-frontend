import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../api/request";
import useInput from "../../hooks/useInput";
import styles from "./Login.module.css";

function Login() {
  const navigate = useNavigate();
  const [email, emailHandler] = useInput();
  const [password, passwordHandler] = useInput();

  useEffect(() => {
    if (localStorage.getItem("accesstoken")) navigate("/todo");
  }, [navigate]);

  const loginHandler = async () => {
    const res = await signIn({ email, password });
    if (res.status === 200) {
      localStorage.setItem("accesstoken", `Bearer ${res.data.access_token}`);
      alert("로그인 되었습니다.");
      navigate("/todo");
      window.location.reload();
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.loginbox}>
        <div className={styles.logo}>LOGIN simpletodo!</div>
        <div className={styles.inputbox}>
          <input
            className={styles.input}
            placeholder="이메일을 입력하세요."
            title="email"
            value={email}
            onChange={emailHandler}
          ></input>
          <input
            className={styles.input}
            placeholder="비밀번호 입력 (8자 이상)"
            title="password"
            type="password"
            value={password}
            onChange={passwordHandler}
          ></input>
          <button
            className={styles.loginBtn}
            onClick={loginHandler}
            disabled={!email.includes("@") || password.length < 8}
          >
            로그인
          </button>
          <div className={styles.joinYet}>
            <p>아직 회원이 아니세요?</p>
            <p onClick={() => navigate("/join")} style={{ cursor: "pointer" }}>
              회원가입 ＞
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
