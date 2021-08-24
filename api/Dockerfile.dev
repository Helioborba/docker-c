#
FROM node:16.5.0-alpine3.11

# WORK FOLDER
WORKDIR "/api" 

# Copy first the package json, else it will rerun ALL the install's, bad idea nonetheless.
COPY ./package.json ./
RUN npm install
COPY ./ ./

CMD ["npm","run","start"]
#CMD ["npm","run","start"]