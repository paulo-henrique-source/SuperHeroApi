import Send from './clientHTTP'
import { superHeroKey } from '../config/env'

export const findByName = async (name = 'batman') => {
    const request = {
        url: `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/${superHeroKey}/search/${name}`,
        method: 'GET'
    }
    const { status, data } = await Send(request)
    if (status != 200) {
        console.error("ERRO NULO")
    } else {
        console.log(data)
        return data.results
    }
}
