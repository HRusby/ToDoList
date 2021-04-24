ARG VERSION=latest
FROM node:${VERSION}
WORKDIR /todolist
# add node_modules bin to $PATH
ENV PATH /todolist/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm config set unsafe-perm true
RUN npm install
RUN npm install react-scripts@4.0.3 -g
COPY . ./

CMD ["npm", "start"]

### Docker Build ###
# docker build --network=host -t todolist-frontend-image .

### Docker Run ###
# docker run -it \
# -v ${PWD}:/todolist-frontend \
# -v /todolist/node_modules \
# -p 7001:3000 \
# -e CHOKIDAR_USEPOLLING=true \
# --name=todolist-frontend \
# todolist-frontend-image
