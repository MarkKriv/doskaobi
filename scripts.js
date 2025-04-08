document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');

    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Сохранение данных пользователя (возможно, в JSON-файл или базу данных)
            console.log('Регистрация:', { username, email, password });
            alert('Регистрация успешна!');
            window.location.href = 'login.html';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Проверка данных пользователя (возможно, из JSON-файла или базы данных)
            console.log('Авторизация:', { username, password });
            alert('Авторизация успешна!');
            window.location.href = 'dashboard.html';
        });
    }
});