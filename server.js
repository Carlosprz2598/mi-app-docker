const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hola, soy Carlos. Bienvenido a mi aplicación desplegada en Docker y Render. Bueno, ya vámonos a desayunar. ¡Bye! ;)");
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});