import style from './Login.module.scss';
import { useState } from 'react';
import { adminData } from '../../state/users';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const [authState, setAuthState] = useState({
        username: '',
        password: '',
    });

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(authState)

        if (authState.username === adminData.username && authState.password === adminData.password) {
            localStorage.setItem('auth', 'true');
            navigate('/profile');
        } else {
            setError(prev => !prev);
        }
    };

    return (
        <div className={style.login}>
            <h1 className={style.title}>Форма авторизации</h1>
            {error ? <p>Неверный логин или пароль</p> : null}
            <form onSubmit={handleLogin}>
                <div className={style.formItem}>
                    <label htmlFor="username">Логин:</label>
                    <input
                        type="text"
                        id="username"
                        value={authState.username}
                        onChange={(e) => setAuthState({...authState, username: e.target.value})}
                    />
                </div>
                <div className={style.formItem}>
                    <label htmlFor="password">Пароль:</label>
                    <input
                        type="password"
                        id="password"
                        value={authState.password}
                        onChange={(e) => setAuthState({...authState, password: e.target.value})}
                    />
                </div>
                <button className={style.button} type="submit">Войти</button>
            </form>
        </div>
    );
};

export default Login;
