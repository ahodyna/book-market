const usersDB = [
    {
        "login": "admin",
        "password": "123",
        "role": "ADMIN"
    }
]

export default {
    loginAdmin: function (login, password) {
        const exsitedUser = usersDB.find( user => user.login === login && user.password === password)
        console.log('exsitedUser', exsitedUser)

        if(exsitedUser != null){
            const token = 'tok' + (Math.ceil(Math.random() * 1000000))
            exsitedUser.token = token;
            console.log('exsitedUser', exsitedUser)
            return exsitedUser
        } else{
            return null
        }
    },
    authorizeAdmin: function(token) {
        return usersDB.find(user => user.token != undefined && user.token === token)
    }
}