FROM node:20.9.0
LABEL maintainer="Rafael Mauro"

WORKDIR /usr/src/app/

COPY package*.json ./

RUN npm install

COPY . . 

RUN npm run build

USER node

CMD ["npm", "run", "start"]
