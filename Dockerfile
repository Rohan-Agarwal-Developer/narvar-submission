FROM node:16

# Create app directory
WORKDIR /usr/src/narvar

COPY package*.json ./

# Install all the packages
RUN npm install

# Bundle app source
COPY . .

# Open the port
EXPOSE 5000

# Run the server command
CMD [ "node", "index.js" ]