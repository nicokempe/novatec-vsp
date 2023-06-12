# Base image for development
FROM node:20.3.0-bullseye-slim@sha256:f52e0eb0f31863051b56d76d191b283c2b49ac084762eddfeb1afb54791b250b AS production

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
