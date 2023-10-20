# Base image for development
FROM node:21.0.0-bullseye-slim@sha256:88a078274bf1597a7aba91c1159275fb568835a72ce75ef72c4dff086eb4b79c AS production

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
