FROM node:12
WORKDIR /JP
COPY package*.json ./
COPY . .
EXPOSE 3000

CMD [ "npm", “run”, "dev" ]