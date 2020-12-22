import paypal from 'paypal-rest-sdk'
import paypalConfig from '../../config/paypal.json'

import { products } from '../../data/products.json'

paypal.configure(paypalConfig);

var globalProductSelected

class PaymentController {

    async buy(req, res) {
        const productId = parseInt(req.query.id);

        const product = products.filter((item) => item.id === productId)[0]

        const createPaymentJson = ({ carrinho, valor, descricao }) => ({
            "intent": "sale",
            "payer": { "payment_method": "paypal" },
            "redirect_urls": { "return_url": "http://localhost:3333/success", "cancel_url": "http://localhost:3333/cancel" },
            "transactions": [{
                "item_list": { "items": carrinho },
                "amount": valor,
                "description": descricao
            }]
        });

        const carrinho = [{
            "name": product.titulo,
            "sku": product.id,
            "price": product.preco,
            "currency": "BRL",
            "quantity": 1
        }];
        const valor = { "currency": "BRL", "total": product.preco };
        const descricao = product.descricao;
        const create_payment_json = createPaymentJson({ carrinho, valor, descricao });

        globalProductSelected = product;

        paypal.payment.create(create_payment_json, function(error, payment) {
            if (error) console.log(error);
            else {
                payment.links.forEach((link) => {
                    if (link.rel === 'approval_url') {
                        return res.json({ link: link.href })
                    };
                });
            }
        });
    }

    async success(req, res) {
        const payerId = req.query.PayerID;
        const paymentId = req.query.paymentId;
        const valor = {
            "currency": "BRL",
            "total": globalProductSelected.preco.toFixed(2) // SEM DB
        };

        const executePaymentJson = ({ payerId, valor }) => ({
            "payer_id": payerId,
            "transactions": [{
                "amount": valor
            }]
        });

        const execute_payment_json = executePaymentJson({ payerId, valor });

        paypal.payment.execute(paymentId, execute_payment_json, (error, payment) => {
            if (error) {

            } else {
                res.send({ success: payment })
            }
        });
    }

    async cancel(req, res) {
        res.send({ cancel: true });
    }

}

export default new PaymentController()