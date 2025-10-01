# Imagen base oficial de Node.js (ligera)
FROM node:20-slim

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia solo los archivos de dependencias primero (mejor caché)
COPY package*.json ./

# Instala dependencias
RUN npm install --omit=dev

# Copia el resto del código
COPY . .

# Expone el puerto (igual que en tu app)
EXPOSE 8080

# Comando para correr tu app
CMD ["node", "server.js"]
