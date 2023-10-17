# Base image for development
FROM node:20.8.1-bullseye-slim@sha256:d9730e4dd0f0ca135d2407592646252880089cd9ea2405f54da9c076e3fd8ce7 AS production

# Create app directory
WORKDIR /app

# Copy package and package-lock
COPY package*.json ./

# Install production dependencies only
RUN npm ci

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Expose port 8080
EXPOSE 8080

# Run the app
CMD ["npm", "run", "serve"]
