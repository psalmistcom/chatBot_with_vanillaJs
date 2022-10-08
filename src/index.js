import renderChat from './chat/chat.js'

const rootEl = document.querySelector(".vanilla-chatbot");

const renderChatbot = (rootEl, config, messagePaser, actionProvider) => {
    const chat = renderChat(config)

    rootEl.appendChild(chat)
}

const config = {
    botName: "Chatbot in VanillaJS",
}
renderChatbot(rootEl, config)