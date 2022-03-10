if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const Events = require("./controllers/events");
const Bot = require("./services/telegram");
const ChatBot = require("./controllers/chatbot");

Events.on("telegram_message", ChatBot);

Events.on("chatbot_message", ({ from, text }) => {
  Bot.sendMessage(from, text);
});
