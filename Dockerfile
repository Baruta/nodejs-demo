FROM index.tenxcloud.com/tenxcloud/nodejs:4.4.4
MAINTAINER TenxCloud Team <service@tenxcloud.com>

# Add files to the image
ADD . /app
WORKDIR /app

# Expose the container port
EXPOSE 5000

CMD node app.js
