# stage1 as builder
FROM node:10-alpine as builder

# copy the package.json to install dependencies
# COPY package.json ./

# Install the dependencies and make the folder
# RUN npm install && mkdir /admin-ui && mv ./node_modules ./admin-ui

# WORKDIR /admin-ui

# COPY . .

# Build the project and copy the files
# RUN npm run build


FROM nginx:alpine

#!/bin/sh

#COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
# RUN rm -rf /usr/share/nginx/html/*

# Copy from the stage1
#COPY from stage1 /admin-ui/out /usr/share/nginx/html

EXPOSE 3000 

ENTRYPOINT ["nginx", "-g", "daemon off;"]
