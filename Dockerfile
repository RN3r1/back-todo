FROM node
RUN mkdir -p /app
COPY . /app
RUN rm -rf ./node_modules
WORKDIR /app
EXPOSE 5000
RUN npm install

CMD [ "node", "index.js" ]