const functions = require("firebase-functions")
const admin = require("firebase-admin")
admin.initializeApp(functions.config().firebase)

exports.onUserCreated = functions.auth.user().onCreate(user => {
    const uid = user.uid
    const createdAt = user.metadata.creationTime
    const createdAtUtctime = Date(createdAt)

    return admin
        .firestore()
        .collection(`users`)
        .doc(uid)
        .set({ createdAtUtctime: createdAtUtctime })
        .then(() => {
            console.log("Cloud function ran")
        })
        .catch(err => {
            console.log("Cloud function had error", err)
        })
})
