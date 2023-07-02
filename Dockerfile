# Base image for development
FROM node:20.3.1-bullseye-slim@sha256:00873eee0d287619672ccd368f32fa191ba43837f08d8d2dd8573b1311ed5273 AS production

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
