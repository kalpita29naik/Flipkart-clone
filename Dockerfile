#use Node.js as the base image
FROM node:22.4.0

#set the working directory
WORKDIR /app

#copy the package.json file
COPY package.json package-lock.json ./

#install the dependencies
RUN npm install

#copy the rest of the files
COPY . .

#expose the port
EXPOSE 3000

#start the app
CMD ["node" , "server.js"]