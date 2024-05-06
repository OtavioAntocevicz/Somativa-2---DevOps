FROM node:14
WORKDIR /home/node/app
COPY . .
RUN npm i
RUN npm run build
CMD ["npm", "run", "serve"]