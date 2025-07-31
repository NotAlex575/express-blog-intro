const express = require('express');
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get('/', (req, res) => {
    console.log("Server del mio blog")
})

app.listen(port, () =>{
    console.log(`Server in ascolto sulla porta ${port}`);
})

const postList = [
    {
        titolo: "titolo1",
        contenuto: "questo è il primo contenuto che abbiamo nella array list",
        immagine: "1.jpg",
        tags: ["fiore", "arancione"]
    },
    {
        titolo: "titolo2",
        contenuto: "questo è il secondo contenuto che abbiamo nella array list",
        immagine: "2.jpg",
        tags: ["montagna", "neve"]
    },
    {
        titolo: "titolo3",
        contenuto: "questo è il terzo contenuto che abbiamo nella array list",
        immagine: "3.jpg",
        tags: ["faro", "mare", "luce"]
    },
    {
        titolo: "titolo4",
        contenuto: "questo è il quarto contenuto che abbiamo nella array list",
        immagine: "4.jpg",
        tags: ["onde", "mare", "luce", "montagna"]
    },
    {
        titolo: "titolo5",
        contenuto: "questo è il quinto contenuto che abbiamo nella array list",
        immagine: "5.jpg",
        tags: ["cuore", "mare", "luce", "arancione"]
    }
]
