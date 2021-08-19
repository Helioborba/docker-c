FROM node:alpine as main
WORKDIR "/client"
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=main  /client/build /usr/share/nginx/html 
