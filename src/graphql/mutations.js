import { GraphQLNonNull, GraphQLString, GraphQLInputObjectType} from 'graphql'
import linksType from './types'
import linksModel from '../db/links'

import linksType from './types'
import linksModel from '../db/links'

const urlString = new GraphQLInputObjectType({
    name: 'url',
    type: linksType,
    fields: {
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

const addNewLink = {
    type: linksType,
    description: 'Add new link to the database',
    args: {
        input: {
            type: new GraphQLNonNull(urlString)
        }
    },
    resolve: (root, params, options) => {
        linksModel.save({ 'url': params.url, 'title': params.title, 'body': params.body }, (res, err) => {
            return res
        })
    }
}

export default addNewLink