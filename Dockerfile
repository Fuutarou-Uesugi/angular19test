# Usa una imagen oficial de Node.js como etapa de compilación
FROM node:18 AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos necesarios para instalar dependencias
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código fuente
COPY . .

# Compila la aplicación Angular
RUN npm run build

# Usa una imagen ligera de Nginx para servir los archivos estáticos
FROM nginx:stable-alpine

COPY default.conf /etc/nginx/conf.d/default.conf

# Copia los archivos generados en la etapa anterior al directorio de contenido de Nginx
COPY --from=build /app/dist/angular19/browser /usr/share/nginx/html

COPY --from=build /app/dist/angular19/browser/es-PE/index.html /usr/share/nginx/html/index.html

COPY --from=build /app/dist/angular19/browser/es-PE/404.html /usr/share/nginx/html/404.html

# Expone el puerto que Nginx usará
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]

