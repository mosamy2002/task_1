FROM node:14-alpine
WORKDIR /task_1
COPY app.js package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD node app.js