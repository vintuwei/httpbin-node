FROM alpine:3.4

# File Author / Maintainer
LABEL authors="Vincent Tuwei <vintuwei@gmail.com>"

# Update & install required packages
RUN apk add --update nodejs bash git

# Install app dependencies
COPY package.json /www/package.json
RUN cd /www; npm install

# Copy app source
COPY . /www

# Set work directory to /www
WORKDIR /www

# set your port
ENV PORT 9000

# expose the port to outside world
EXPOSE  9000

# start command as per package.json
CMD ["npm", "start"]
