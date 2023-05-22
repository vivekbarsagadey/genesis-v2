<<<<<<< .mine
FROM node:lts
WORKDIR /app
RUN yarn add @nestjs/cli
COPY package.json yarn.lock ./
RUN yarn install

COPY . .
#RUN yarn prisma generate

RUN yarn build

CMD ["node" , 'dist/main.js']













=======
FROM node:lts as dependencies
WORKDIR /app
COPY package.json ./
RUN yarn install --frozen-lockfile


FROM node:lts as builder
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN yarn build


FROM node:lts as runner
WORKDIR /app
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
# COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]
>>>>>>> .theirs
