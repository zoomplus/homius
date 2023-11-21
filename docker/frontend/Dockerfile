FROM node:16 as builder
RUN mkdir frontend
WORKDIR /frontend

COPY ./frontend .
RUN yarn install
RUN yarn build