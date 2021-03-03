import Send from '../infra/clientHTTP'
import { superHeroKey } from '../config/env'

export const findByName = async (name) => {
  const request = {
    url: `https://superheroapi.com/api/${superHeroKey}/search/${name}`,
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }
  try {
    const { status, data } = await Send(request)
    if (status != 200) {
      console.error('Server blocked')
    } else {
      return data.results
    }
  } catch (err) {
    console.log(err)
  }
}
