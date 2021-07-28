import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.challonge.com/v2/',
    headers: {
        "Content-type": "application/vnd.api+json",
        "Accept": "application/json",
        "Authorization-Type": "v1",
        // "Authorization": process.env.REACT_APP_CHALLONGE_API_KEY
        "Authorization": "PHEXXUKU5ZN4tBPwdtCIWiRw2cXYt1Owocqucx3x"
    }
})

export default instance