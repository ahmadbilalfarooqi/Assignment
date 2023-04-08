// make an array and check admin user
let userName = ['mubeen', 'admin', 'akram', 'furqan', 'laiba'];


for (let i = 0; i <= userName.length; i++) {
    if (userName[i] == 'admin') {
        console.log('Hello admin, would you like to see stuts report')
    } else {
        console.log(userName[i] + ' thank you for login')
    }

}
// check list of username is not empty
if(userName != null){
    console.log('list is not empty')
}

// remove the username from list
while(userName.length){
    userName.pop();
}
if (userName.length == 0){
    console.log(userName)
    console.log('we need more user to add')
}