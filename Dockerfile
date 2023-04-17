FROM node:14-alpine
WORKDIR /students
COPY app.js package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD node app.js