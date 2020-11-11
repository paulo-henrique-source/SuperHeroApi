import axios from 'axios'

const Send = async (request) => {
  try {
    const { status, data } = await axios.request(request)

    return { status, data }
  } catch (error) {
    console.error(error)
  }
}

export default Send;
