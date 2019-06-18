const { ApolloServer } = require("apollo-server-express");
const bodyParserGraphql = require("body-parser-graphql");
const app = require("express")();
const schema = require("./graphql/schema.js");
const cors = require("cors");

app.use(bodyParserGraphql.graphql());
app.use(cors());

const server = new ApolloServer({ schema });


server.applyMiddleware({
  app,
  path: "/graphql"
});

const serverInfo = { port: 4009 };
app.listen(serverInfo, () =>
  console.log(
    `🚀 Servidor rodando Graphql em http://localhost:${serverInfo.port}${
      server.graphqlPath
    }`
  )
);