import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID
} from 'graphql'

const linksType = new GraphQLObjectType({
    name: 'links',
    fields: {
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },

        url: {
            type: new GraphQLNonNull(GraphQLString)
        },

        title: {
            type: GraphQLString
        },

        body: {
            type: GraphQLString
        }
    }
})

export default linksType