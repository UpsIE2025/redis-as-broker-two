require("dotenv").config();
const { createClient } = require("redis");

const redisClient = createClient({ url: process.env.REDIS_URL });

redisClient.connect()
  .then(() => console.log("📥 Suscriptor conectado a Redis"))
  .catch(err => console.error("Error en Redis:", err));

async function subscribe() {
  await redisClient.subscribe("test-channel", (message) => {
    console.log(`📩 Mensaje recibido: ${message}`);
  });
}

subscribe();
