require("dotenv").config();
const express = require("express");
const { createClient } = require("redis");

const app = express();
const PORT = process.env.PUBLISHER_PORT || 3001;
const redisClient = createClient({ url: process.env.REDIS_URL });

redisClient.connect()
  .then(() => console.log("📡 Publicador conectado a Redis"))
  .catch(err => console.error("Error al publica en Redis:", err));

app.get("/publish/:message", async (req, res) => {
  const { message } = req.params;
  await redisClient.publish("test-channel", message);
  res.send(`📢 Mensaje publicado: ${message}`);
});

app.listen(PORT, () => console.log(` Publicador en http://localhost:${PORT}`));
