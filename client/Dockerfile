# using basic Node image with alpine - a basic linux image
FROM node:alpine

ENV CI=true

# defining the initial workdir
WORKDIR /usr/app/posts

# moving the package.json to first create all packages dependencies
COPY ./package.json ./

# install all dependencies with yarn
RUN npx yarn

# moving the other project files to build
COPY ./ ./

# default command to be executed by the container
CMD [ "npx", "yarn", "start" ]