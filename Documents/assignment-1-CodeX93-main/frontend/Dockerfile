FROM --platform=linux/amd64 node:19

WORKDIR /app/frontend
COPY package*.json ./app/frontend
COPY . .


RUN npm install node
RUN npm run build


ENV NODE_ENV production

EXPOSE 3000

CMD ["npx", "serve", "build"]