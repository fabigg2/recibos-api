const  swaggerUi = require('swagger-ui-express');
const  swaggerJsdoc = require('swagger-jsdoc');

const openapiSpecification = swaggerJsdoc(
    {
        definition: {
          openapi: '3.0.0',
          info: {
            version: '1.0',
            title: 'Receipt Manager',
          },
          servers:[ {url:`http://localhost:${process.env.PORT}/api`}]
        },
        apis : ['./src/routes/*.js', './src/models/*.js']  // files containing annotations as above
      }
);

const  swaggerServe = swaggerUi.serve;
const swaggerSetup  = swaggerUi.setup(openapiSpecification);

module.exports = {swaggerServe, swaggerSetup}