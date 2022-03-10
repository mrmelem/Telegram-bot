const Events = require("./events");

module.exports = (message) => {
  Events.emit("chatbot_message", { from: message.chat.id, text: "Olá!" });
};
