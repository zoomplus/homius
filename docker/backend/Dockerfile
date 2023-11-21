FROM node:16
WORKDIR /backend

COPY ../backend/package.json ./
RUN yarn install

COPY ../backend/ .

EXPOSE 3000
CMD ["yarn", "start:prod"]