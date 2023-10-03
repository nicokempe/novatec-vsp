# Base image for development
FROM node:20.8.0-bullseye-slim@sha256:ae31e40fdecf15751ee23055b60717e2ce6e03acc4ee7ffd8f87e76813d8010f AS production

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
