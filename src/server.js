import express from 'express'
import cors from 'cors'
const PORT = process.env.PORT || 5000

let users = [
    {userId: 1, username: "salim", age: 14, contact: "998332342323"},
    {userId: 2, username: "abror", age: 20, contact: "998332300323"},
    {userId: 3, username: "bobir", age: 17, contact: "998332342356"},
    {userId: 4, username: "nodir", age: 14, contact: "998332342233"},
]



const app = express()

app.use(cors())

app.get('/users', (req, res) => res.status(200).json(users))



app.listen(PORT, () => console.log('server run'))