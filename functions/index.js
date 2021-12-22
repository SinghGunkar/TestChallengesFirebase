const functions = require("firebase-functions")
const admin = require("firebase-admin")
admin.initializeApp(functions.config().firebase)

exports.fireBaseAPI = functions
    .region("us-central1")
    .https.onRequest((request, response) => {
        switch (request.method) {
            case "POST":
                console.log(request)
                response.send("Post request received")
            case "GET":
                console.log(request)
                response.send("Get request received")
        }
    })

// exports.onUserCreated = functions.firestore.document((snap, context) => {
//     const newValue = snap.data()

//     console.log(newValue)
// })
