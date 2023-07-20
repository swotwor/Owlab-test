# Owlab-test

Пррект создан с помощью yarn и vite. Установленые дополнительные библиотеки react-router-dom и sass.

Реализовано приложение, которое умеет показывать следующие страницы:
/ - главная
/login - страница ввода логина и пароля
/news - страница с новостями (любая однотипная информация)
/profile - страница с произвольным текстом, недоступная без авторизации

Если пользователь кликает на страницу “профиля” и он не “авторизован” - то его перекинет на страницу авторизации /login

Данные для авторизации:
username: Admin
password: 12345 

Если введены другие данные, то показывается сообщения:
Имя пользователя или пароль введены неверно
Если введены корректные данные, то перебрасит на страницу /profile
Информацию об авторизации пользователя храню в localStorage.

Проект задеплоен на площадку Netlify - https://main--harmonious-chaja-b8cb20.netlify.app
