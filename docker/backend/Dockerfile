FROM node:16
RUN mkdir backend
WORKDIR /backend

COPY ../../backend .
RUN yarn install

EXPOSE 3000
CMD ["yarn", "start:prod"]