#!/bin/bash
docker run -it -p 7000:3000 -v /app/node_modules -v $(pwd):/app borba/node-app