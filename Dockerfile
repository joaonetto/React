FROM ubuntu:latest

# Install Primary Packages
RUN apt-get update
RUN apt-get install -y curl sudo

# Install Node.JS
RUN curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
RUN sudo apt-get install -y nodejs