import renderChat from './chat/chat.js'
import { createChatBotMessage } from './utils.js'

const rootEl = document.querySelector(".vanilla-chatbot");

const renderChatbot = (rootEl, config, messagePaser, actionProvider) => {
    const chat = renderChat(config)

    rootEl.appendChild(chat)
}

const config = {
    botName: "Chatbot in VanillaJS",
    initialMessage: [createChatBotMessage(`Hello World`)]
}
renderChatbot(rootEl, config)