FROM node:16 as builder
RUN mkdir frontend
WORKDIR /frontend

COPY /home/exchanger/frontend/ .
RUN yarn install
RUN yarn build