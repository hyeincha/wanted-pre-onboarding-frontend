import { useNavigate } from "react-router-dom";
import { signUp } from "../../api/request";
import useInput from "../../hooks/useInput";
import styles from "./Login.module.css";

function Join() {
  const navigate = useNavigate();
  const [email, emailHandler] = useInput();
  const [password, passwordHandler] = useInput();

  const signUpHandler = async () => {
    const res = await signUp({ email, password });
    if (res.status === 201) {
      localStorage.setItem("accesstoken", `Bearer ${res.data.access_token}`);
      alert("회원가입이 완료되었습니다.");
      navigate("/todo");
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.loginbox}>
        <div className={styles.logo}>WELCOME to simpletodo!</div>
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
            onClick={signUpHandler}
            disabled={!email.includes("@") || password.length < 8}
          >
            회원가입
          </button>
          <div className={styles.joinYet}>
            <p>이미 가입하셨나요?</p>
            <p onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
              로그인 ＞
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Join;
