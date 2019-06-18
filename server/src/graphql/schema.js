const graphql = require("graphql");
const { GraphQLSchema, GraphQLString, GraphQLObjectType, GraphQLInt } = graphql;

const carnaval = require("../core/services/calcCarnaval");

const dataCarnavalType = new GraphQLObjectType({
  name: "DataCarnaval",
  description:
    "Entidade responsável por retornar o dia em que o carnaval será naquele ano",
  fields: () => ({
    ano: { type: GraphQLInt },
    dtCarnaval: { type: GraphQLString }
  })
});

const query = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    carnaval: {
      type: dataCarnavalType,
      args: { ano: { type: GraphQLInt } },
      resolve(_, { ano }) {
        return carnaval(ano);
      }
    }
  }
});

module.exports = new GraphQLSchema({ query });
