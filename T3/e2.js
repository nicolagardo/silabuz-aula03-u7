const names = ["Marcelo","Jorge","José","Linder", "Pepe", "Messi", "Di Maria"];

let ul = document.createElement("ul")


names.forEach((e)=>{
    let li = document.createElement("li");
    let txt = document.createTextNode(e);

    li.appendChild(txt);
    ul.appendChild(li)
});

document.body.appendChild(ul);