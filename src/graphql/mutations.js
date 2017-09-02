import { GraphQLNonNull, GraphQLString, GraphQLInputObjectType } from 'graphql'
import GraphQLJSON from 'graphql-type-json';
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
            name: 'input',
            type: new GraphQLNonNull(urlString)
        }
    },
    resolve: async (root, params, options) => {
        const newDoc = new linksModel(params.input)
        const doc = await newDoc.save()
        if (!doc) {
            throw new Error('Error adding new link')
        }
        return params.input
    }
}

const deleteLink = {
    type: GraphQLJSON,
    description: 'Delete link from the database',
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: async (root, params, options) => {
        linksModel.findOneAndRemove({ _id: params.id }, (res, err) => {
            if (err)
                return err
            return res
        })
    }
}

export default {addNewLink, deleteLink}