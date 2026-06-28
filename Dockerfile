FROM node:20-alpine

WORKDIR /app

# No dependencies to install — copy the app and run.
COPY package.json ./
COPY server.js ./
COPY public ./public

ENV PORT=8080
EXPOSE 8080

CMD ["node", "server.js"]
