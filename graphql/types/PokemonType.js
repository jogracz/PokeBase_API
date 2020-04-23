// GraphQl Types
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = require('graphql');

// Pokemon Type
const PokemonType = new GraphQLObjectType({
  name: 'Pokemon',
  fields: () => ({
    id: {type: GraphQLInt},
    name: {type: GraphQLString}
  })
})

module.exports = PokemonType;