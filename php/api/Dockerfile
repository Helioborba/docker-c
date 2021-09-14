#
FROM node:16.5.0-alpine3.11

# Aqui vai se localizar a área de trabalho
WORKDIR "/api" 

# Primeiro é copiado o package json para não ser sempre rebaixado
COPY ./package.json ./
RUN npm install
COPY ./ ./

CMD ["npm","run","start"]
