FROM node:16
WORKDIR /usr/src/app/react
COPY react-app/package*.json ./

RUN npm install
COPY react-app/ .
EXPOSE 9001
CMD ["npm", "run", "dev"]