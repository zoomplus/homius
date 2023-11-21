# Используем минимальный образ Nginx для production
FROM nginx:alpine

# Копируем собранные файлы React приложения
COPY --from=builder /frontend/build /usr/share/nginx/html

# Копируем кастомный конфиг Nginx
COPY ./default.conf /etc/nginx/conf.d/default.conf

# Определяем порт
EXPOSE 80

# Команда для запуска Nginx
CMD ["nginx", "-g", "daemon off;"]