const express = require('express');
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get('/', (req, res) => {
    console.log("Server del mio blog")
})


const postList = [
    {
        titolo: "titolo1",
        contenuto: "questo è il primo contenuto che abbiamo nella array list",
        immagine: "fiore.jpg",
        tags: ["fiore", "arancione"]
    },
    {
        titolo: "titolo2",
        contenuto: "questo è il secondo contenuto che abbiamo nella array list",
        immagine: "montagna.jpg",
        tags: ["montagna", "neve"]
    },
    {
        titolo: "titolo3",
        contenuto: "questo è il terzo contenuto che abbiamo nella array list",
        immagine: "faro.jpg",
        tags: ["faro", "mare", "luce"]
    },
    {
        titolo: "titolo4",
        contenuto: "questo è il quarto contenuto che abbiamo nella array list",
        immagine: "onda.jpg",
        tags: ["onde", "mare", "luce", "montagna"]
    },
    {
        titolo: "titolo5",
        contenuto: "questo è il quinto contenuto che abbiamo nella array list",
        immagine: "cuore.jpg",
        tags: ["cuore", "mare", "luce", "arancione"]
    }
]

app.get("/bacheca", (req,res) =>{
    res.json(postList);
})

app.listen(port, () =>{
    console.log(`Server in ascolto sulla porta ${port}`);
})