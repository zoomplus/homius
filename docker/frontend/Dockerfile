FROM node:16 as builder
WORKDIR /frontend
RUN npm install -g yarn

COPY ../frontend/package*.json ./
RUN yarn install

COPY ../frontend/ .

RUN yarn build