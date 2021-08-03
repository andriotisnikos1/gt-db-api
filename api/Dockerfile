FROM node:15-alpine

WORKDIR /api

COPY package.json /api/

RUN npm i

COPY . .

CMD [ "npm", "start" ]
