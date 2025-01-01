# Stage 1: Build the application
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN yarn build

# Stage 2: Serve the application using the Next.js server
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the build output from the previous stage
COPY --from=build /app ./

# Install production dependencies
RUN yarn install --production

# Expose port 3000
EXPOSE 3000

# Start the Next.js application
CMD ["yarn", "start"]
