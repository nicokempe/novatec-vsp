# Base image for development
FROM node:16.17.0-bullseye-slim@sha256:59812c19504546fc66b0b26722bf0754ee48b74f9abc5ed9c3f251fc45d86099 AS production

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
