const express = require("express")
const app = express()

const PORT = 4000
const HOST = "127.0.0.1"

app.listen(PORT, HOST, () => {
    console.log(`server is running on ${HOST}:${PORT}`)
})

