FROM node:lts
WORKDIR /app
RUN yarn add @nestjs/cli
COPY package.json yarn.lock ./
RUN yarn install

COPY . .
#RUN yarn prisma generate

RUN yarn build

CMD ["node" , 'dist/main.js']