FROM node:lts as dependencies
WORKDIR /app
RUN yarn install -g @nestjs/cli
COPY package.json yarn.lock ./
RUN yarn install

COPY . .
#RUN yarn prisma generate

RUN yarn build

CMD ["node" , 'dist/main.js']