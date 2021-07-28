import React from 'react'
import axios from './axios/AxiosInstance'

function Main() {

    const getTournaments = () => {
        return axios.get('/tournaments.json?page=1&per_page=25', {data:null})
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    getTournaments()

    return (
        <div>

        </div>
    )
}

export default Main
