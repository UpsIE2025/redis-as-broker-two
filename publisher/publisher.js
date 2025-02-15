const Redis = require('ioredis');
const redis = new Redis(process.env.REDIS_URL);

const channel = 'my_channel';

setInterval(() => {
  const message = `Mensaje enviado a Redis a las ${new Date().toISOString()}`;
  redis.publish(channel, message)
    .then(() => {
      console.log(`Mensaje publicado: ${message}`);
    })
    .catch(err => {
      console.error('Error al publicar mensaje:', err);
    });
}, 5000);  // Publica un mensaje cada 5 segundos
