# Use an official Node.js image as the base image
FROM node:20.11.1-bullseye-slim

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining source code to the working directory
COPY . .

# Build the React application
RUN npm run build

# Expose port 3000 to the outside world
EXPOSE 3000

# Run the application when the container starts
CMD ["npm", "start"]
