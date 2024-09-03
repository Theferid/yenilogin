function signup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    alert(Kayıt başarılı! Kullanıcı Adı: ${username});
    // Burada kayıt işlemlerini gerçekleştirebilirsiniz
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    alert(Giriş başarılı! Kullanıcı Adı: ${username});
    // Burada giriş işlemlerini gerçekleştirebilirsiniz
}
