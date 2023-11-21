FROM node:16 as builder
WORKDIR /frontend
COPY ../frontend/package*.json ./
RUN yarn install

COPY ../frontend .

RUN yarn build