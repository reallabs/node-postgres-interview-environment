FROM node:18

# Using https://nodejs.org/en/docs/guides/nodejs-docker-webapp

# Create app directory
WORKDIR /usr/src/app
RUN npm install -g nodemon
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "run", "start" ]