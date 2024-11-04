FROM node:14

WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies inside the container
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the service port
EXPOSE 4003

# Start the service
CMD ["npm", "start"]
