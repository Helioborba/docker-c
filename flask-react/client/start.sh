#!/bin/bash
docker run -it -p 7000:3000 -v /client/node_modules -v $(pwd):/client borba/node-app