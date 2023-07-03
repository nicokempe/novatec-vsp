# Base image for development
FROM node:20.3.1-bullseye-slim@sha256:115459129ed17d1c8c4a7911e7a3756c8e49b9d89e3eac48f34249578c9971ef AS production

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
