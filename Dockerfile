FROM nginx:latest
COPY css /usr/share/nginx/html/css
COPY html /usr/share/nginx/html/html
COPY img /usr/share/nginx/html/img
COPY js /usr/share/nginx/html/js
