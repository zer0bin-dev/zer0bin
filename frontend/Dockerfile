FROM node:lts-alpine

WORKDIR /var/www/frontend

COPY package.json ./
RUN npm install
COPY . .

RUN npm run build
