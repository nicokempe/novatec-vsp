# Base image for development
FROM node:20.6.1-bullseye-slim@sha256:ee905d8492c443aebe41f4cc525ebabefef757df43556c444be67391cc031cba AS production

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
