# Dockerfile for a Node.js service

# Use Node.js version 14 as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy dependency files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Start the Node.js application
CMD ["npm", "start"]
