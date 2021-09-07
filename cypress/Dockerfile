FROM cypress/included:8.3.1
COPY test /test
WORKDIR /test
RUN npm install
ENTRYPOINT [ "cypress" ]
