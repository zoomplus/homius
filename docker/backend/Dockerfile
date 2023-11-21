FROM node:16
WORKDIR /backend
RUN npm install -g yarn

COPY ../backend/package*.json ./
RUN yarn install

COPY ../backend/ .

EXPOSE 3000
CMD ["yarn", "start:prod"]