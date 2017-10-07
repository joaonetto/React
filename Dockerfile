FROM ubuntu:latest

# Install Primary Packages
RUN apt-get update
RUN apt-get install -y curl sudo

# Install Node.JS
RUN curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
RUN sudo apt-get install -y nodejs

# Install Yarn
RUN npm install -g yarn

# Install Live-Server
RUN yarn global add live-server

# Create a Volume
VOLUME /var/www/html

# Expose Port
EXPOSE 80
