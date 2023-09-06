# Base image for development
FROM node:20.6.0-bullseye-slim@sha256:36d587c8542eafc209a8419b1b8ba3225b002b6d15e75bd094c78ca6cd605ec3 AS production

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
