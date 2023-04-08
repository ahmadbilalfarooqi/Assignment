// inviting guest for dinner
const guest = ["Waheed", "Afzal", "Ahmed", "Ikram"];

let txt = "";

guest.forEach(myFunction);
console.log(txt);
console.log(guest);
console.log(guest.length); // how many guest i am inviting for dinner 


function myFunction(value:any) {

	txt += value + " I would like you invite to dinner \n";
};


export{}