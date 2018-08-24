FROM node:8

WORKDIR /chatbot-ayd

ADD . /chatbot-ayd

RUN npm install pm2 -g

RUN npm install

EXPOSE 8080

CMD ["pm2-runtime", "npm run -- start"]
