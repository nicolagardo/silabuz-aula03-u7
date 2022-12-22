let lista = [1,3,5,2,7,5,5,8,4,8,4,8,4]
let num = prompt("ingrese num")
var num2 = parseInt(num)
var cont = 0

for (let i = 0; i < lista.length; i++){
    if (lista[i] == num2){
        cont += 1
    }
}
console.log(cont);
alert(cont)