FROM node:latest
EXPOSE 8080
RUN mkdir -p /app/public /app/src
WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install
CMD ["npm", "start"]