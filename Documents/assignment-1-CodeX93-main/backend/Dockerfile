FROM --platform=linux/amd64 node:19

WORKDIR /app/backend
COPY package*.json ./app/backend
COPY . .




ENV NODE_ENV production

EXPOSE 3001

CMD ["node", "index.js"]