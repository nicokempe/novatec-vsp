# Base image for development
FROM node:20.3.1-bullseye-slim@sha256:57ae74ffd7253c71b6e896ae585184d26446ba10e689a02921a1852d24d82d74 AS production

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
