FROM nginx:latest

# Remove default Nginx page
RUN rm -rf /usr/share/nginx/html/*

# Copy app files
COPY app/* /usr/share/nginx/html/

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]