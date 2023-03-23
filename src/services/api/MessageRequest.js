import axios from 'axios'
import endPoints from './endPoints'

const addMessageRequest = async (message) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json'
    }
  }

  const response = await axios.post(endPoints.messages.addMessage, message, config)

  return response.data
}

export { addMessageRequest }
