import express from 'express'
import graphqlHTTP from 'express-graphql'
import mongoose from 'mongoose'
import linksSchema from './graphql/schema'

var app = express()

app.use('/api/v1', graphqlHTTP(req => ({
    linksSchema,
    pretty: true
})))

mongoose.connect('localhost://pointer-dev/pointers')

const server = app.listen(8080, () => {
    console.log('Listening at port ', server.address().port)
})