FROM node:16 as builder
WORKDIR /frontend

COPY /home/exchanger/frontend/package*.json ./
RUN yarn install

COPY /home/exchanger/frontend/ .

RUN yarn build