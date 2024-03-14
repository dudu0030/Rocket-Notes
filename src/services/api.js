import axios from 'axios'

export const api = axios.create({
    baseURL: "https://rocketnotes-api-97pc.onrender.com"
})

