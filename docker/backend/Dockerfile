FROM node:16
WORKDIR /backend

COPY /home/exchanger/backend/package*.json ./
RUN yarn install

COPY /home/exchanger/backend/ .

EXPOSE 3000
CMD ["yarn", "start:prod"]