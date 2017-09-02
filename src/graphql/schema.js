import {
    GraphQLObjectType,
    GraphQLSchema
} from 'graphql'

import mutations from 'mutations'
import queries from './queries'

const linksSchema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: queries
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: mutations
    })
})

export default linksSchema
