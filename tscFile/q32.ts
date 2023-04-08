


let current_user = ['ahmad', 'hafiz', 'asim', 'bilal', 'mubeen', 'imran',];
let new_user =    ['sultan', 'bhatti', 'asim', 'farhan', 'waseem', 'imran', 'mubeen'];
let match = [];
for (let i = 0; i < current_user.length; i++){
    for (let j = 0; j < new_user.length; j++){
        
        if (current_user[i] == new_user[j]){
        match.push(current_user[i]);
        }
        
    }
    
}
console.log(match, 'match persons');
