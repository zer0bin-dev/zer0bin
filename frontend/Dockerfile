FROM node:16-alpine3.14

WORKDIR /var/www/frontend

COPY package.json ./
RUN yarn
COPY . .

RUN yarn build
