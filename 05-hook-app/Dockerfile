# Usar una imagen oficial de Node
FROM node:20-alpine

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de la aplicación
COPY . .

# Exponer el puerto de Vite
EXPOSE 5173

# Comando para iniciar Vite en el contenedor
CMD ["npm", "run", "dev", "--", "--host"]
