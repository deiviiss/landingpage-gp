import { useContext, createContext } from 'react'
import { addMessageRequest } from '../services/api/MessageRequest'

// container context
const MessageContext = createContext()

// use message context
export const useMessage = () => {
  const context = useContext(MessageContext)
  return context
}

// propagate context
export const ProviderMessage = ({ children }) => {
  const addMessage = async (message) => {
    const rta = await addMessageRequest(message)
    return rta
  }

  // context component
  return (
    <MessageContext.Provider value={{

      addMessage

    }}
    >
      {children}
    </MessageContext.Provider>
  )
}
