// auth.js

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Хеширование пароля
    var hashedPassword = sha256(password); // Пример использования библиотеки sha256
    console.log(hashedPassword);

    if (username === "KYKYHA" && hashedPassword === "f4f32bb7cb8f4e18c5eee67f0cee06dfa3e08e85a3a9f124e994f37e8f03f1f8") {
        // Если логин и пароль верные, перенаправляем пользователя на другую страницу
        window.location.href = "secured_page.html";
    } else {
        // Если логин или пароль неверные, выводим сообщение об ошибке
        alert("Неправильный логин или пароль!");
    }
});
