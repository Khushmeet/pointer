import express from 'express'
import graphqlHTTP from 'express-graphql'
import mongoose from 'mongoose'
import linksSchema from './graphql/schema'

var app = express()

app.use('/api/v1', graphqlHTTP(req => ({
    schema: linksSchema,
    graphiql: true,
    pretty: true
})))

mongoose.connect('mongodb://localhost/pointer-dev')

const server = app.listen(8080, () => {
    console.log('Listening at port ', server.address().port)
})