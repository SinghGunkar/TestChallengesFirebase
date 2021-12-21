import axios from "axios"

let apiString = "https://testing-website-v3-backend.herokuapp.com/"

const inputValidationAPI = axios.create({
    baseURL: apiString,
    headers: {
        "Content-Type": "application/json"
    }
})

export default inputValidationAPI
