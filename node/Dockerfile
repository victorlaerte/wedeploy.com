FROM node:8.2.1

# Create app directories
ENV WEDEPLOY_ELECTRIC_DIRECTORY=/electric
ENV WEDEPLOY_MAGNET_DIRECTORY=/magnet

RUN mkdir -p $WEDEPLOY_ELECTRIC_DIRECTORY
RUN mkdir -p $WEDEPLOY_MAGNET_DIRECTORY

# Install Java
ENV LANG=C.UTF-8
RUN set -ex && \
    echo 'deb http://deb.debian.org/debian jessie-backports main' \
      > /etc/apt/sources.list.d/jessie-backports.list && \
    apt update -y && \
    apt install -t \
      jessie-backports \
      openjdk-8-jre-headless \
      ca-certificates-java -y

# Install Magnet
WORKDIR $WEDEPLOY_MAGNET_DIRECTORY

ADD ./magnet/package.json $WEDEPLOY_MAGNET_DIRECTORY
ADD ./magnet/package-lock.json $WEDEPLOY_MAGNET_DIRECTORY
RUN npm install
ADD ./magnet $WEDEPLOY_MAGNET_DIRECTORY

# Install and run Electric
WORKDIR $WEDEPLOY_ELECTRIC_DIRECTORY

ADD ./electric/package.json $WEDEPLOY_ELECTRIC_DIRECTORY
ADD ./electric/package-lock.json $WEDEPLOY_ELECTRIC_DIRECTORY
RUN npm install
ADD ./electric $WEDEPLOY_ELECTRIC_DIRECTORY
RUN npm run build
RUN mv $WEDEPLOY_ELECTRIC_DIRECTORY/dist $WEDEPLOY_MAGNET_DIRECTORY/electric

# Run Magnet
WORKDIR $WEDEPLOY_MAGNET_DIRECTORY
RUN npm run build

# Clean up
RUN apt-get purge --auto-remove \
      openjdk-8-jre-headless \
      ca-certificates-java -y

EXPOSE 3001

CMD [ "npm", "start" ]
