function test() {
    var a = ['admin'];
    var login = document.getElementById('login').value;
    var password = document.getElementById('password').value;

    if (login.trim() == "" || password.trim() == "") {
        let error = document.getElementById("erreur");
        error.innerHTML = "<strong>veuillez saisir tous les champs</strong>";

    }
    else if (login !== a['0'] || password !== a['0']) {
        let error = document.getElementById("erreur");
        error.innerHTML = "<strong>indentifiant incorrect</strong>";
    }
    else if (login == a['0'] && password == a['0']) {
        location.href = "Accueil.html"
    } else {
        location.href = "index.html"
    }
}
