FROM node:16-alpine
WORKDIR /usr/src/ifAthenB
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3003
CMD ["node","dist/main.js"]