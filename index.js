let http = require("http")

let express = require("express")

let app = express()

app.set("view engine", "ejs")

let obj = [
    {
        id: 1,
        name: "jenish",
        status: "completed",
        date: "21-2-2024"
    },
    {
        id: 2,
        name: "jigar",
        status: "Incompleted",
        date: "22-2-2024"
    },
    {
        id: 3,
        name: "harsh",
        status: "completed",
        date: "21-2-2023"
    }
]

app.get('/', (req, res) => {
    return res.render("form", { obj })
})



http.createServer(app).listen(8000)