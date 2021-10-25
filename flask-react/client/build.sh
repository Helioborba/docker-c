#!/bin/bash
docker stop $(docker ps -q)
docker build -t "borba/node-app:latest" -f ./Dockerfile.dev .