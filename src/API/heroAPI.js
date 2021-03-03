import Send from '../infra/clientHTTP'
import { superHeroKey } from '../config/env'

export const findByName = async (name) => {
  const request = {
    url: `https://superheroapi.com/api/1763087293841652/ProdutosCategoria/${name}`,
    method: 'GET',
  }
  const { status, data } = await Send(request)
  if (status != 200) {
    console.error('Server blocked')
  } else {
    return data.results
  }
}
