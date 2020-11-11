import Send from '../infra/clientHTTP'
import { superHeroKey } from '../config/env'

export const findByName = async (name) => {
    console.log(superHeroKey)
    const request = {
        url: `https://superheroapi.com/api/${superHeroKey}/search/${name}`,
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


