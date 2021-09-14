# Ecosistema de containers com Docker-compose
## Overview

Este repositório contém formas de hospedar websites/webapp's utilizando o Travis CI para testes e deploy na Heroku por meio de containers (Docker).
As versões contidas até o momento são : Node (React Client), PHP.
Todas as versões contêm uma Compose file para recriar no ambiente de desenvolvimento o mesmo sistema contido na cloud; também existem Dockerfiles individuais (.dev) de produção contidas.

## Features

1. Node-React : Esta versão contém o node como servidor (API) e o client é o react, com nginx para as chamadas. (Note: Até o momento só existem simulações básicas no sistema e simples de customizar)
    - <a href="https://docker-n.herokuapp.com/">Link de demonstração</a>

2. PHP/Apache : Esta versão contém o php (sem frameworks) rodando no apache com o nginx para chamadas diretas ao servidor; no momento há apenas um site de exemplo.

## Planned Features

- Suporte para o Flask
- Suporte deploy na AWS
- Trocar a imagem PHP por uma mais compacta

## Docker Images
# As imagens utilizadas variam entre Alpine e Debian.

- Node-React : A API e o Client utilizam a mesma Imagem do Alpine (node:16.5.0-alpine3.11), o nginx utiliza a original que é baseada em alpine (nginx:latest).
  - <a href='https://hub.docker.com/layers/node/library/node/16.5.0-alpine3.11/images/sha256-707e82e59cfa4559f86dfa53d09649bf6fcfe8620eba2ad9030ab7790e3507b2?context=explore'>Imagem Node/React</a>
  - <a href='https://hub.docker.com/layers/nginx/library/nginx/latest/images/sha256-0b5b438edb8be60c445a89a4c9043681ea16ef1cfcc0e9c168c059d76fb8e04e?context=explore'>Latest do nginx</a>
- PHP/Apache : A imagem do PHP/Apache roda em Debian já contendo os dois (php:7.4-apache), o nginx utiliza a original que é baseada em alpine (nginx:latest).
  - <a href='https://hub.docker.com/layers/php/library/php/7.4.23-apache/images/sha256-5c6c6677fb465d4c0d267aa48d664847e87dbe5370c60caad522a4b841704907?context=explore'>Imagem PHP/Apache</a>
  - <a href='https://hub.docker.com/layers/nginx/library/nginx/latest/images/sha256-0b5b438edb8be60c445a89a4c9043681ea16ef1cfcc0e9c168c059d76fb8e04e?context=explore'>Latest do nginx</a>

## Deployment

É possível utilizar no momento apenas a Heroku para deploy, outros serviços em cloud estarão disponíveis em Branchs.
As informações e instruções de deploy para cada versão estão localizadas nas páginas abaixo:
- [Heroku](/docs/deployment/heroku.md)

## Production

Para iniciar a produção utilizando os templates é recomendado ler a documentação abaixo para cada caso:
- [Compose](/docs/production/compose.md)
- [.Dev-dockerfiles](/docs/production/dockdev.md)

## Additional Information

O nginx está sendo empregado como reverse proxy e belt balancer para as chamadas do servidor/client.
A imagem do PHP já contém o Apache e é um pouco pesada por conter a imagem feita com o Debian.

