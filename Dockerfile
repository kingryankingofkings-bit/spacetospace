# Stage 1: Build the React frontend
FROM node:18-alpine AS frontend-builder

WORKDIR /app/frontend

# Copy frontend dependencies
COPY frontend/package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the frontend source code
COPY frontend/ ./

# Build the frontend (Vite)
RUN npm run build

# Stage 2: Build the Node.js backend and serve the app
FROM node:18-alpine

WORKDIR /app

# Install backend dependencies
COPY backend/package*.json ./backend/
RUN cd backend && npm ci --production

# Copy backend source code
COPY backend/ ./backend/

# Copy the built frontend from the previous stage
# The backend express server in index.js looks for '../frontend/dist'
COPY --from=frontend-builder /app/frontend/dist ./frontend/dist

# Expose the port Cloud Run uses
EXPOSE 8080

# Cloud Run sets the PORT environment variable to 8080 automatically.
# We set it here as a default fallback.
ENV PORT=8080

WORKDIR /app/backend

# Start the game server
CMD ["node", "index.js"]
