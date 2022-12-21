FROM node:14

# Install MySQL
RUN apt-get update && apt-get install -y mariadb-client
# Set the working directory
WORKDIR /middleware

# Copy the package.json file
COPY package.json /middleware

# Install the dependencies
RUN npm install

# Copy the application code
COPY . .

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
