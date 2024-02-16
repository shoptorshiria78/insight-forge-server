const express = require('express');
const RegisterData = require("../../models/Registration")
const router = express.Router();
const verifyToken = require('../../middleware/verifyToken');
const SSLCommerzPayment = require('sslcommerz-lts');
const HackathonData = require('../../models/HackathonCreate');
const { ObjectId } = require('mongodb');


const store_id = process.env.STORE_ID
const store_passwd = process.env.STORE_PASSWD
const is_live = false
const tran_id = new ObjectId().toString()

router.post('/register', async (req, res) => {
   
        const id = req.body.id
        const hackathon = await HackathonData.findById(id)
        const order = req.body

        const data = {
            total_amount: hackathon.totalPrice,
            currency: order.currency,
            tran_id: tran_id, // use unique tran_id for each api call
            success_url: `http://localhost:5000/paymentSuccess/${tran_id}`,
            fail_url: 'http://localhost:3030/fail',
            cancel_url: 'http://localhost:3030/cancel',
            ipn_url: 'http://localhost:3030/ipn',
            shipping_method: 'Courier',
            product_name: order.title,
            product_category: hackathon.category,
            product_profile: 'general',
            cus_name: order.name,
            cus_email: order.email,
            cus_add1: order.address,
            cus_add2: 'Dhaka',
            cus_city: 'Dhaka',
            cus_state: 'Dhaka',
            cus_postcode: '1000',
            cus_country: 'Bangladesh',
            cus_phone: order.phone,
            cus_fax: '01711111111',
            ship_name: 'Customer Name',
            ship_add1: 'Dhaka',
            ship_add2: 'Dhaka',
            ship_city: 'Dhaka',
            ship_state: 'Dhaka',
            ship_postcode: 1000,
            ship_country: 'Bangladesh',
        };

        // console.log(data)
        const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
        sslcz.init(data).then(apiResponse => {
            // Redirect the user to payment gateway
            let GatewayPageURL = apiResponse.GatewayPageURL
            res.send({ url: GatewayPageURL })

            const registeredHackathon = {
                order,
                paidStatus: false,
                transactionId: tran_id
            }
            const instance = new RegisterData(registeredHackathon);
            const savedInstance = instance.save();
            console.log('savedInstance', savedInstance)
            console.log('Redirecting to: ', GatewayPageURL)

        });

        router.post('/paymentSuccess/:transId', async(req, res)=>{
            console.log(req.params.transId);
            const query = req.params.transId

            const result = await RegisterData.updateOne({transactionId: req.params.transId},
                {
                    $set:{
                        paidStatus: true
                    },

            },)
            if(result.modifiedCount === 1){
                res.redirect(`https://insight-forge-psi.vercel.app/paymentSuccess/${query}`)
            }
        })

})

router.get('/allPayment', async(req, res) =>{
    const result = await RegisterData.find()
     console.log(result)
    res.send(result)
})

router.delete('/allPaymentDelete/:id', async (req, res) => {

    try {
       
        const result = await RegisterData.deleteOne({_id:req.params.id});
        res.send(result);
    }
    catch(error){
        console.error('Error deleting data:', error.message);
    }

})







module.exports = router