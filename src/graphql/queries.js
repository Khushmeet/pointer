import {
    GraphQLList,
    GraphQLID,
    GraphQLNonNull
} from 'graphql'

import Types from 'mongoose'
import linksType from './types'
import getProjection from './get_projection'
import linksModel from '../db/links'

var singleLinks = {
    type: linksType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params, options) {
        const projection = getProjection(options.fieldAST[0]);
        return linksModel.findById(params.id).select(projection).exec()
    }
}

var allLinks = {
    type: new GraphQLList(linksType),
    args: {},
    resolve(root, params, options) {
        const projection = getProjection(options.fieldAST[0]);
        return linksModel.find().select(getProjection).exec()
    }
}

export default {singleLinks, allLinks}