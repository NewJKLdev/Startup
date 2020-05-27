FROM node:10
# Create app directory
WORKDIR /usr/src/app

COPY package*.json yarnlock ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 3000

CMD [ "npm", "yarn", "start" ]