FROM node:19

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Production only:
# RUN npm ci --only=production

# Bundle source code inside Docker image
COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]
