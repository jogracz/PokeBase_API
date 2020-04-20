
// GraphQl Types
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = require('graphql');

// Gym Type
const GymType = new GraphQLObjectType({
  name: "Gym",
  fields: () => ({
    id: {type: GraphQLInt},
    name: {type: GraphQLString},
    badge: {type: GraphQLString}
  })
});

module.exports = GymType;