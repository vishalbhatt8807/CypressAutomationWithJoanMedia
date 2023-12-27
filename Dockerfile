#BASE Image either alipne or from https://github.com/cypress-io/cypress-docker-images/tree/master/browsers
FROM cypress/included:12.3.0
#Create a folder where the project will run
RUN mkdir /my-cypress-project
#We make it workdirectory
WORKDIR /my-cypress-project
#Lets copy the essentials files that we MUST use to run our script.
COPY ./package.json .
COPY ./cypress.config.js .
COPY ./cypress ./cypress
#Install the cypress dependencies in the work directory
RUN npm install
RUN cypress install
#Executable command in the container will use [EXEC FORM]
ENTRYPOINT ["npx","cypress","run"]
#With the CMD in the case,we can specify more parameters to the last entrypoint.
CMD [""]
