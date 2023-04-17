FROM node:alpine
WORKDIR D:\react_project\my-app\my-app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
CMD ["npm", "run", "start"]