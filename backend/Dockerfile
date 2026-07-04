FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install production dependencies
RUN npm ci --only=production

# Copy application source code
COPY . .

# Expose the container port used by Agones
EXPOSE 2567

# Start the application using PM2 runtime
CMD ["npx", "pm2-runtime", "ecosystem.config.js", "--env", "production"]
