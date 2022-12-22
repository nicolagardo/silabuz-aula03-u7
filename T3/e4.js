const l = [
    {
        nombre: "Marcelo",
        edad: 20,
        email: "prueba1@mail.com",
    },
    {
        nombre: "Jorge",
        edad: 25,
        email: "prueba2@mail.com",
    },
    {
        nombre: "José",
        edad: 30,
        email: "prueb3@mail.com",
    },
    {
        nombre: "Marco",
        edad: 32,
        email: "prueba4@mail.com",
    },
    ];
    let ul = document.createElement("ul");

    const listaFiltrada = l.filter(e => e.nombre[0] != "M");

    const list = listaFiltrada.map(e => {
        console.log(e);
        // Creamos el texto nombre
        let ulNombre = document.createTextNode(e.nombre);
        ul.appendChild(ulNombre);
        let ulSub = document.createElement("ul");
        let li = document.createElement("li");
        // creamos el texto edad
        let liEdad = document.createTextNode(e.edad);
        let li2 = document.createElement("li");
        //creamos el texto email
        let liEmail = document.createTextNode(e.email);

        li2.appendChild(liEmail)
        li.appendChild(liEdad);

        ulSub.appendChild(li);
        ulSub.appendChild(li2);

        ul.appendChild(ulSub);

    })

    document.body.appendChild(ul);


    const repo = 'https://github.com/nicolagardo/silabuz-aula03-u7'