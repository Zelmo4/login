const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})
const users = {}
function login() {
    rl.question(" Enter your username: ", (username) => {
        rl.question(" Enter your password: ", (password) => {
            if (users[username] == password) {
                console.log(" welcom back " + username)
            } else {
                console.log("Invali username or password")

            }
            //here
            showMenu()
        })
    })
}
function register() {
    rl.question(" Enter your username: ", (username) => {
    rl.question("Enter your password: ", (password)=>{
        users[username]=password;
        console.log(" Register success")
        showMenu()
    })
    })
}
function showMenu(){
    console.log("\n1. Login ")
    console.log("2. Register ")
    console.log("3. Exit ")
    rl.question(" Enter your menu: ",(menu) => {
        if (menu == "1"){
            login()
        }
        if (menu == "2"){
            register()
        }
        if (menu == "3"){
            rl.close()
        }
        
    
    })
}
showMenu()