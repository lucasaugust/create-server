const express = require('express')
const app = express()


app.get('/contact', (req, res) => {
    res.send(`
    <h1>Contact</h1>

    <form action="/contact" method="POST">
        <label for="email">E-mail:</label>
        <input type="email" name="email" id="email">
        <label for="msg">Message:</label>
        <textarea name="msg" id="msg"></textarea>
        <input type="submit" value="Enviar">
    </form>

    `)
})

app.post('/contact', (req, res) => {
    res.send('<h1>Data sent successfully</h1>')
})

app.listen(3001, () => {
    console.log('Server: http://localhost:3001')
    console.log('To shut down the server: (ctrl + c)')
})