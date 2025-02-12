import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import styles from "./Login.module.scss";
import {TOAST_STATUS, triggerToast} from "../../components/toast/CustomeToast";
import {setCookie, setLocalStorageItem} from "../../utils/localDataStoringMgmt";
import {loginUserRequest} from "../../store/actions/authActions";

const Login = () => {
    const dispatch = useDispatch();
    const {loginLoading, loginResponse} = useSelector((state) => state.loginUser);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        if (!email || !password) {
            triggerToast(TOAST_STATUS.warn, "Please enter both email and password.");
            return;
        }
        dispatch(loginUserRequest({email, password}));
        console.log(process.env.REACT_APP_BACKEND_BASE_URL);
    };

    useEffect(() => {
        if (loginResponse?.success != null) {
            triggerToast(
                loginResponse.success ? TOAST_STATUS.success : TOAST_STATUS.error,
                loginResponse.message
            );

            if (loginResponse?.success === true) {
                setCookie("userEmail", loginResponse.data.email);
                setCookie("fullName", loginResponse.data.fullName);

                setLocalStorageItem("authToken", "Bearer " + loginResponse.data.authToken);
            }
        }
    }, [loginResponse]);

    return (
        <div className={styles.loginContainer}>
            <form onSubmit={handleLogin} className={styles.loginForm}>
                <h2 className={styles.formTitle}>Login</h2>

                <div className={styles.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="password">Password</label>
                    <div className={styles.passwordWrapper}>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            className={styles.passwordToggle}
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                </div>

                <button type="submit" className={styles.submitBtn} disabled={loginLoading}>
                    {loginLoading ? "Logging in..." : "Sign In"}
                </button>
            </form>
        </div>
    );
};

export default Login;
