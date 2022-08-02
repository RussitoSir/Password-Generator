const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const funnyPasswords = ["Umom'sAhoe123", "HugeBallsSmallDick2'", "DickNose666", "Fat&LazySonOfaBiatch_11", "FuckMeFuckYou(L)", "Puto.el.que.lee", "Perro.primo420", "laRataQueSalta_8", "TetasAnchas12", "11Enanos&Yo", "Facu = ThaKing", "TengoSidaPalabra"]
let btnReturn = document.querySelector("#btn-return")
let btnReturn1 = document.querySelector("#btn-return1")

function getRandomCharacter() {
    let random = Math.floor(Math.random() * characters.length)
    return characters[random]
} 
function getRandomFunnyPassword() {
    let random1 = Math.floor(Math.random() * funnyPasswords.length)
    return funnyPasswords[random1]
} 

function generatePasswords() {
    let password = ""
    let password1 = ""
    for (i = 0; i < 15; i++) {
        password += getRandomCharacter()
        password1 += getRandomCharacter()
    }
    btnReturn.textContent = password
    btnReturn1.textContent = password1
}   

function generateFunnyPasswords() {
    let password = ""
    let password1 = ""
    for (i = 0; i < 1; i++) {
        password += getRandomFunnyPassword()
        password1 += getRandomFunnyPassword()
    }
    btnReturn.textContent = password
    btnReturn1.textContent = password1
}   
function copy(password1) {
    navigator.clipboard.writeText(password1)
}