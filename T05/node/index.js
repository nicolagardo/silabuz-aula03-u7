const express = require('express')

const app = express()

const port = 3000


app.get('/', (req, res) => {
    res.send("¡Hola, Mundo Silabuz de nuevo!")
})

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
    console.log(` http://127.0.0.1:${port}`);
})