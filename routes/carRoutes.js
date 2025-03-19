const express = require('express')
const authmiddleware = require('../middlrware/authmiddleware')
const { addToCart, getCart, removeFromCart } = require('../controllers/cartControllers')

const cartrouter = express.Router()

cartrouter.post("/add",authmiddleware,addToCart)
cartrouter.get("/",authmiddleware,getCart)

cartrouter.post("/remove",authmiddleware,removeFromCart)

module.exports=cartrouter
