FROM node:latest
RUN mkdir -p /app/config /app/src
WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install
CMD [ "npm", "run", "start" ]