const bd = require('../database/db.js')
const user = require('../models/user')
const path = require('path');

const users = bd.Mongoose.model('esquemaUsers', user.UserSchema, 'users');

exports.home = ('/', async(req, res) =>{
    //res.sendFile(path.join(__dirname, '../html/index.html'));
    await Users.find({}).lean().exec(function (e, listaRegistros) {
        resposta.json(listaRegistros);
        resposta.end();
       
})
/*exports.produtos = ('/produtos/', async(req, res) =>{
    res.sendFile(path.join(__dirname, '../html/produtos.html'));
})
exports.conta = ('/conta/', async(req, res) =>{
    res.sendFile(path.join(__dirname, '../html/conta.html'));
})
exports.carrinho = ('/carrinho/', async(req, res) =>{
    res.sendFile(path.join(__dirname, '../html/carrinho.html'));
})
exports.sobre = ('/sobre/', async(req, res) =>{
    res.sendFile(path.join(__dirname, '../html/sobre.html'));
})*/