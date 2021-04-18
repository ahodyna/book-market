let btnSubmit = document.getElementById('loginBtn');
btnSubmit.addEventListener('click', () => {
    let login = document.getElementById('loginField').value;
    let password = document.getElementById('passwordField').value;
    doLogin(login,password)
})


function doLogin(login, password) {
    fetch('/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ login: login, password: password })
    })
        .then(resp => resp.json())
        .then(json => {
            console.log('browser set cookie', json)
            document.cookie = `Authentication=${json.token}`
            document.location = '/'
        })
}