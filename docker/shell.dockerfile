FROM node:16
WORKDIR /usr/src/app/shell
COPY shell/package*.json ./

RUN npm install
COPY shell/ .
EXPOSE 9000
CMD ["npm", "run", "dev"]