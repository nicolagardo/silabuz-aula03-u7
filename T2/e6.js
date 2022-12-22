lista = [15,20,50,80,40,60]
//var num = lista.pop()

let num = prompt("Ingreser el número a eliminar")

const i = lista.indexOf(parseInt(num))
lista.splice(i, 1)
console.log(lista)
alert(lista)
