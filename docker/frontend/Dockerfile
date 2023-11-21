FROM node:16 as builder
RUN mkdir frontend
WORKDIR /frontend

COPY ./frontend .
RUN yarn install
RUN yarn build

# Используем минимальный образ Nginx для production
FROM nginx:latest
# Копируем собранные файлы React приложения
COPY --from=builder /frontend/build /usr/share/nginx/html
# Копируем кастомный конфиг Nginx
COPY ./docker/frontend/default.conf /etc/nginx/conf.d/default.conf
# Определяем порт
EXPOSE 80
# Команда для запуска Nginx
CMD ["nginx", "-g", "daemon off;"]