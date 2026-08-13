FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --omit=dev || npm install --omit=dev

# Copy all source files
COPY . .

# Environment setup
ENV NODE_ENV=production
ENV PORT=3000

# Expose standard container port
EXPOSE 3000

# Start command
CMD ["npm", "start"]
