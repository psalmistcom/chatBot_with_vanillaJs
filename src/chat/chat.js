const renderChat = (config) => {
    const chatContainer = document.createElement("div")
    chatContainer.classList.add("vanilla-chatbot-kit-chat-container")
    
    const innerContainer = document.createElement("div")
    innerContainer.classList.add("vanilla-chatbot-kit-chat-inner-container")
    innerContainer.appendChild(createHeaders(config))
    innerContainer.appendChild(createMessageContainer())

    chatContainer.appendChild(innerContainer)

    return chatContainer
}
const createHeaders = (config) =>{
    const header = document.createElement("div");
    header.textContent = `${config.botName}`
    header.classList.add("vanilla-chatbot-kit-chat-header")

    return header;
}

const createMessageContainer = () =>{
    const container = document.createElement("div")
    container.classList.add("vanilla-chatbot-kit-chat-message-container")

    return container;
}

export default renderChat; 