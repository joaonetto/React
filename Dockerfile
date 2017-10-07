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

# Install Babel
RUN yarn global add babel-cli@6.26.0

# Create a Volume
VOLUME /var/www/html

# Expose Port
EXPOSE 80

# Change WorkDir
WORKDIR /var/www/html

# Run Live-Server
CMD live-server --port=80 public
