# Base image for development
FROM node:20.4.0-bullseye-slim@sha256:efc09b6c3a307f8315b53cfea8189d6394a191ea825bdc8c40aa8424525390b7 AS production

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
