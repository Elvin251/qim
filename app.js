// let reng = ["Mavi", "Yaşıl", "Qırmızı", "Narıncı", "Bənövşə", "Ağ", "Sarı"];
// console.log("1 ci secim :"+ reng[0])
// console.log("2 ci secim :"+ reng[1])
// console.log("3 ci secim :"+ reng[2])
// console.log("4 ci secim :"+ reng[3])
// console.log("5 ci secim :"+ reng[4])
// console.log("6 ci secim :"+ reng[5])
// console.log("7 ci secim :"+ reng[6])
// let arr = [];
// function add() {

//     let username = document.getElementById("username").value;
//     arr.push(username);
//     console.log(arr);
    
//     }
    let arr = [];
    let a="p";
function app() {

    let username = document.getElementById("array").value;
    a=document.getElementById("by").innerText;
if (a=="" ) {
    document.getElementById("by").innerText=(document.getElementById("array").value);
} else {
    document.getElementById("by").innerText=(a+ "," +document.getElementById("array").value);
}
    arr.push(username);
    console.log(arr);
 
    document.getElementById("array").value="";
    }
    
