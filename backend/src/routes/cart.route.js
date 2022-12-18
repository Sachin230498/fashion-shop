const express = require('express');
const Cart = require('../module/cart.model');
const { Auth }= require('../middlewares/userAuth.middleware');
const Product = require('../module/product.module');
const app = express.Router();

app.get('/', Auth, async (req, res) => {
    const id = req.userId;
    try {
        const cart = await Cart.find({ userId: id }).populate('productId')
        res.status(200).send({ data: cart });
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});

app.post('/', Auth, async (req, res) => {
    const id = req.userId;
    
   try{
    let cartItem = await Cart.findOne({ userId: id, productId: req.body.productId });
     if (cartItem) {
        
        cartItem.quantity = cartItem.quantity + req.body.quantity;
        cartItem = await cartItem.save().then(() => { return cartItem.populate('productId')});
        return res.status(201).send(cartItem)
    }
    else {
        const cart = new Cart(req.body);
        cart.userId = id;
        cartItem = await cart.save().then(() => { return cart.populate('productId')});
    res.status(200).send({ message: "Cart updated successfully" ,cartItem});
    }
   }catch(e){
    return res.status(404).send(e.message)
   }
   
   

});

app.put('/:id', Auth, async (req, res) => {
    const id = req.userId;
    try {
        const cart = await Cart.findOneAndUpdate({ userId: id, _id: req.params.id }, req.body, { new: true }).populate('productId');
        res.status(200).send({ data: cart });
    }
    catch (error) {
        res.status(400).send(error);
    }
});


app.delete('/:id', Auth, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).send({ message: "Item deleted from cart successfully" });
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = app;