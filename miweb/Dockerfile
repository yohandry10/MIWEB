# Etapa 1: Construcción de la aplicación React
FROM node:16-alpine AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias
COPY ./package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY ./ ./

# Construye la aplicación para producción
RUN npm run build

# Etapa 2: Servir la aplicación con Nginx
FROM nginx:alpine

# Elimina la configuración por defecto de Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia los archivos construidos desde la etapa anterior
COPY --from=build /app/build /usr/share/nginx/html

# Copia el archivo de configuración personalizado para Nginx
COPY miweb/nginx.conf /etc/nginx/conf.d/


# Expone el puerto 80 para acceder a la aplicación
EXPOSE 80

# Inicia Nginx cuando se ejecute el contenedor
CMD ["nginx", "-g", "daemon off;"]
