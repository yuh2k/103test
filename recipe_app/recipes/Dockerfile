FROM node:20.11-bullseye

WORKDIR /recipes

COPY package.json /recipes/package.json
COPY package-lock.json /recipes/package-lock.json  

RUN npm install

COPY public/ /recipes/public
COPY src/ /recipes/src

EXPOSE 3000

CMD ["npm", "start"]

