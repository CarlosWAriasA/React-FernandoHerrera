# Usar la imagen oficial de Node.js 20
FROM node:20-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Exponer el puerto 5173 (puerto por defecto de Vite dev)
EXPOSE 5173

# Comando para ejecutar en modo desarrollo
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]