const renderChat = (config) => {
    const chatContainer = document.createElement("div")
    chatContainer.classList.add("vanilla-chatbot-kit-chat-container")
    
    const innerContainer = document.createElement("div")
    innerContainer.classList.add("vanilla-chatbot-kit-chat-inner-container")
    innerContainer.appendChild(createHeaders(config))
    innerContainer.appendChild(createMessageContainer())
    innerContainer.appendChild(createForm())

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

const createForm = () => {
    const container = document.createElement("div")
    container.classList.add("vanilla-chatbot-kit-chat-input-container")

    const form = document.createElement("form")
    form.classList.add("vanilla-chatbot-kit-chat-input-form");
    
    const input = document.createElement("input");
    input.classList.add("vanilla-chatbot-kit-chat-input")
    input.placeholder = "Write your message here";

    const btn = document.createElement("button");
    btn.classList.add("vanilla-chatbot-kit-chat-btn-send")

    const img = document.createElement("img");
    img.src = "/assets/images/paper-plane.svg";
    img.alt = "send icon"
    img.classList.add("vanilla-chatbot-kit-chat-btn-send-icon")

    btn.appendChild(img)
    form.appendChild(input)
    form.appendChild(btn)
    container.appendChild(form)

    return container
}

export default renderChat; 