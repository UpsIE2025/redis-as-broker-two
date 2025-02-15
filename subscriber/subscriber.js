const Redis = require("ioredis");
const redis = new Redis(process.env.REDIS_URL);

const channel = "notificaciones";

redis.subscribe(channel, (err, count) => {
    if (err) {
        console.error("Error en la suscripción:", err);
    } else {
        console.log(`📡 Suscrito al canal "${channel}"`);
    }
});

redis.on("message", (channel, message) => {
    console.log(`📥 Recibido en ${channel}: ${message}`);
});
