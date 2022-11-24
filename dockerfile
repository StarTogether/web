FROM node:14
 
COPY package*.json ./
RUN yarn
 
COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start" ]