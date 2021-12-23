const functions = require("firebase-functions")
const admin = require("firebase-admin")

admin.initializeApp(functions.config().firebase)

exports.onUserCreated = functions.auth.user().onCreate(user => {
    const uid = user.uid
    const createdAt = user.metadata.creationTime
    const createdAtUtctime = Date(createdAt)
    const email = user.email

    console.log(user)

    return admin
        .firestore()
        .collection(`users`)
        .doc(uid)
        .set({ createdAtUtcTime: createdAtUtctime, userEmail: email })
        .then(() => {
            console.log("Cloud function ran")
        })
        .catch(err => {
            console.log("Cloud function had error", err)
        })
})

exports.getData = functions.https.onRequest(async (req, res) => {
    var dataToSendBack = []
    var db = admin.firestore()
    db.collection("users")
        .get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                dataToSendBack = dataToSendBack.concat(doc.data())
            })
            res.send(dataToSendBack)
            return ""
        })
        .catch(reason => {
            res.send(reason)
        })
})
