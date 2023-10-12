# Base image for development
FROM node:20.8.0-bullseye-slim@sha256:3948235dedc00cadb7c8a7c8536818f3c788a8c80c175a4b2726944d9e5dc534 AS production

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
