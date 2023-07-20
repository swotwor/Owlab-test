import style from './Profile.module.scss'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const isAuth = Boolean(localStorage.getItem('auth'));
    
    useEffect(() => {
        if (!isAuth) {
            navigate('/login');
        }
    }, []);

    return (
        <div className={style.profile}>
            <h1>Поздравляю, Вы в системе.</h1>
        </div>
    );
};

export default Profile;
