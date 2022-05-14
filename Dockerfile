FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install yarn
RUN npm install

COPY . .

CMD [ "yarn", "build", "--no-clean" ]
