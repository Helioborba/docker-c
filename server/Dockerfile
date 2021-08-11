#
FROM node:16.5.0-alpine3.11

# WORK FOLDER
WORKDIR "/server" 

# Copy first the package json, else it will rerun ALL the installs, bad idea
COPY ./package.json ./
RUN npm install
COPY ./ ./

CMD ["npm","run","start"]