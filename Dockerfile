FROM node:18-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci --only=production

COPY . .

EXPOSE 4173

CMD ["npm", "run", "dev"]
