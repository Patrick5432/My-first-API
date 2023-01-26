const express = require("express");
const {request, response} = require("express");
const aboutme = require("./about_me");
const pageContacts = require("./contact");
const main = require("./main");
const shop = require("./shop");
const app = express();



app.get('/', (request, response) => {
    response.send(main)
})



app.get('/shop', (request, response) => {
    response.send(shop)
})



app.get('/contact', (request, response) => {
    response.send(pageContacts)
})



app.get('/aboutme', (request, response) => {
    response.send(aboutme)
})












app.listen(8000, () => {
    console.log("Сервер запущен на порту 8000")
})