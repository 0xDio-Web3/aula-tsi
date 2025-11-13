FROM node:18

WORKDIR /usr/src/app

COPY app.js .

CMD ["node", "app.js"]