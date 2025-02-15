const Redis = require("ioredis");
const redis = new Redis("redis://192.10.10.1:6379");

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
