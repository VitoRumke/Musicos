document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector(".login-form");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const email = loginForm.email.value.trim();
        const password = loginForm.password.value.trim();

        if (!email || !password) {
            alert("");
            return;
        }

        if (!validateEmail(email)) {
            alert("Insira um Email valido");
            return;
        }

        if (email === "musician@example.com" && password === "123456") {
            alert("Redirecionando");
            window.location.href = "index.html";
        } else {
            alert("Senha ou Email invalido, tente novamente");
        }
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
