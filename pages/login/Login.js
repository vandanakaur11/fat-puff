import classes from "./Login.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { login, register } from "../../src/redux/actions/authActions";
import { CircularProgress } from "@mui/material";

const Login = () => {
  const route = useRouter();
  // login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // register

  const [username, setUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [RegLoading, setRegLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) route.push("/account/AccountPage");
  }, []);

  const handleLogin = async () => {
    setLoading(true);
    const payload = {
      email,
      password,
    };
    const response = await login(payload);
    setLoading(false);
    if (response) route.push("/account/AccountPage");
  };
  const handleRegister = async () => {
    setRegLoading(true);
    const payload = {
      username,
      email: registerEmail,
      password: registerPassword,
    };
    const response = await register(payload);
    setRegLoading(false);
  };
  return (
    <div>
      <h1 className={classes.loginHeading}>My Account</h1>
      <div className={classes.loginWrapper}>
        <div className={classes.loginContent}>
          <div className={classes.usernameWrapper}>
            <div className={classes.inputText}>Username or Email Address</div>
            <div>
              <input
                className={classes.logininput}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className={classes.passwordWrapper}>
            <div className={classes.inputText}>Password</div>
            <div>
              <input
                type="password"
                className={classes.logininput}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className={classes.checkboxWrapper}>
            <div>
              <input type="checkbox" />
            </div>
            <div className={classes.checkboxText}>Remember Me</div>
          </div>
          <div
            className={classes.loginBtn}
            // onClick={() => route.push("/account/AccountPage")}
            onClick={handleLogin}
          >
            {loading ? <CircularProgress color="warning" size={30} /> : "Login"}
          </div>
          <div className={classes.loginQuestion} onClick={() => {}}>
            <span>Lost your Password?</span>
          </div>
        </div>
        <div className={classes.registerContent}>
          <div className={classes.usernameWrapper}>
            <div className={classes.inputText}>Username</div>
            <div>
              <input
                className={classes.logininput}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className={classes.passwordWrapper}>
            <div className={classes.inputText}>Email Address</div>
            <div>
              <input
                className={classes.logininput}
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
              />
            </div>
          </div>
          <div className={classes.passwordWrapper}>
            <div className={classes.inputText}>Password</div>
            <div>
              <input
                type="password"
                className={classes.logininput}
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
              />
            </div>
          </div>
          <div className={classes.checkboxWrapper}>
            <div>
              <input type="checkbox" />
            </div>
            <div className={classes.checkboxText}>
              Subscribe to our newsletter
            </div>
          </div>
          <div className={classes.loginQuestion}>
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <span className={classes.loginQuestionPolicy}>privacy policy</span>.
          </div>
          <div className={classes.loginBtn} onClick={handleRegister}>
            {RegLoading ? (
              <CircularProgress color="warning" size={25} />
            ) : (
              "Register"
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
