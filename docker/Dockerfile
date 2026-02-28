# Dockerfile
FROM nginx:latest
COPY app/index.html /usr/share/nginx/html/index.html
COPY app/style.css /usr/share/nginx/html/style.css
COPY app/script.js /usr/share/nginx/html/script.js
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]