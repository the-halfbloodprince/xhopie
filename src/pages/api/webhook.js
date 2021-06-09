import { buffer } from 'micro'
import * as admin from 'firebase-admin'

//Secure a connection to firebase from the backend
const serviceAccount = require('../../../permissions.json')

const app = !admin.apps.length ?
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    })
    :
    admin.app()

// console.log(app)

//Establish a connection to stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const endpointSecret = process.env.STRIPE_SIGNING_SECRET

const fulfilOrder = async (session) => {
    return app
            .firestore()
            .collection("users")
            .doc(session.metadata.email)
            .collection("orders")
            .doc(session.id)
            .set({
                amount: session.amount_total / 100,
                amount_shipping: session.total_details.amount_shipping / 100,
                images: JSON.parse(session.metadata.images),
                timestamp: admin.firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                console.log(`SUCCESS! Order ${session.id} has been fulfilled`)
            })
}

export default async (req, res) => {
    if (req.method === 'POST') {
        const reqBuffer = await buffer(req)
        const payload = reqBuffer.toString()
        const sig = req.headers["stripe-signature"]

        let event

        // console.log(req)
        // console.log('..............................................................................................................')
        // console.log(reqBuffer)
        // console.log('..............................................................................................................')
        // console.log(payload)
        // console.log('..............................................................................................................')
        // console.log(sig)

        try {
            event = stripe.webhooks.constructEvent(payload, sig, endpointSecret)
            // console.log(event)
            // console.log('...............................................................................................................')
        } catch (error) {
            console.log(error.message)
            return res.status(400).send(`Webhook Error: \n ${error.message}`)
        }

        if (event.type === 'checkout.session.completed') {
            const session = event.data.object
            // console.log(session)
            return fulfilOrder(session)
                                    .then(() => res.status(200))
                                    .catch((err) => res.status(400).send(`Webhook Error: ${err.message}`))
        }
    }
}

export const config = {
    api: {
        bodyParser: false,
        externalResolver: true
    }
}