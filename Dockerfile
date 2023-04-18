FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /genesis-v2
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
RUN chown -R node /genesis-v2/src/app
USER node
CMD ["npm", "start"]
