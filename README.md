# redis-as-broker-two
Redis as a Broker Group 2

Curl del endpoint de prueba:

curl --location 'http://localhost:3001/publish/${mensaje-a-publicar}'

El mensaje a publicar esta en el path del endpoint: 
Ejemplo: http://localhost:3001/publish/Hola-redis


1. Clonar el repositorio y navegar al directorio
git clone <https://github.com/UpsIE2025/redis-as-broker-two.git>
`cd redis-as-broker-two`

2. Levantar los contenedores
Ejecuta el siguiente comando para construir y ejecutar los servicios:
`docker-compose up -d --build`

✅ Levanta un contenedor de Redis para la gestión de mensajes.
✅ Levanta redis-commander para inspeccionar datos en Redis a través de un navegador (http://localhost:8081).
✅ Construye y levanta los servicios publisher y subscriber, conectándolos a Redis.

3. Verificar los contenedores en ejecución
Para ver los contenedores en funcionamiento:
`docker ps`

4. Probar el servicio
Puedes enviar un mensaje de prueba ejecutando:
`curl --location 'http://localhost:3001/publish/Hola-redis'`

5. Detener y eliminar los contenedores
`docker-compose down`