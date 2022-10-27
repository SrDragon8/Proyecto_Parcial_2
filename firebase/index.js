var firebase = require('firebase-admin')
var serviceAccount = require("../key.json")



module.exports = firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount)
})

const db = firebase.firestore()
const shop = db.collection('Cerditos')

module.exports = {
    db
}