const router = require('express').Router();
const paypal = require('paypal-rest-sdk');
const paypalConfig = require('../config/paypal');

paypal.configure(paypalConfig);

const products = require('../config/products').products;

router.get('/', (req, res) => res.render('index', { products }));

router.post('/buy', (req, res) => {
    //Quando o cliente clicar para comprar
    res.send({ success: true });
})

router.get('/success', (req, res) => {
    //Quando o cliente pagar com sucesso
    res.send({ success: true });
})

router.get('/cancel', (req, res) => {
    //Quando o cliente cancelar a compra
    res.send({ success: true });
})

module.exports = router