import style from './App.module.scss';
import Main from './pages/main/Main';
import News from './pages/news/News';
import Login from './pages/login/Login';
import Header from './components/header/Header';
import Profile from './pages/profile/Profile';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className={style.wrapper}>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/news" element={<News />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>
    );
}

export default App;
