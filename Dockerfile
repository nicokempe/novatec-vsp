# Base image for development
FROM node:21.1.0-bullseye-slim@sha256:caa20b1d12bfda5fe3fb4078eb4b0a95665daadae335066490c058cf7ff3e341 AS production

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
