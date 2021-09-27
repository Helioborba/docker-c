# sempre a mais atualizada
FROM node:alpine 

# Criação de usuario para operações por erro causado com o .cache do node_modules
# ARG USER_ID=1000
# ARG GROUP_ID=1000

# RUN addgroup -g ${GROUP_ID} mygroup \
#  && adduser -D myuser -u ${USER_ID} -g myuser -G mygroup -s /bin/sh -h / || :

# RUN addgroup -g ${GROUP_ID} mygroup \
#     && adduser -D myuser -u ${USER_ID} -g myuser -G mygroup -s /bin/sh -h / 

WORKDIR /app

COPY ./package.json .

RUN npm install

COPY --chown=1000:1000 ./ ./

CMD ["npm","run","start"]