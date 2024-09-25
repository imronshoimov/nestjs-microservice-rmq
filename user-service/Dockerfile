# User Service Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application port (even if not directly exposed, this is for inter-container communication)
EXPOSE 3001

# Start the application
CMD ["npm", "run", "start"]