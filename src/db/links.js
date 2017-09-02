import mongoose from "mongoose";

var linksSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },

  title: {
    type: String
  },

  body: {
    type: String
  }
}, {collection: 'pointers'});

var linksModel = mongoose.model('linksModel', linksSchema)

export default linksModel