# Use a base image with Node.js installed for the build stage
FROM node:14 as build-stage

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code into the container
COPY . .

# Build the React application in production mode
RUN npm run build

# Use a lightweight base image for the production stage
FROM nginx:stable-alpine as production-stage

# Install Node.js and npm inside the container
RUN apk add --no-cache nodejs npm

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Copy the built files from the build stage to the nginx directory
COPY --from=build-stage /app/build .

# Install the 'serve' package globally
RUN npm install -g serve

# Set the command to serve the static files
CMD ["serve", "-s", "."]
