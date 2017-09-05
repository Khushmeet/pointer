import { GraphQLList, GraphQLID, GraphQLNonNull } from "graphql";

import linksType from "./types";
import linksModel from "../db/links";

const singleLink = {
  type: linksType,
  description: "Detail of one link",
  args: {
    id: {
      name: "id",
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (root, params, options) => {
    return linksModel.findById(params.id, (res, err) => {
      return res;
    });
  }
};

const allLinks = {
  type: new GraphQLList(linksType),
  description: "List of all the links",
  args: {},
  resolve: (root, params, options) => {
    return linksModel.find({}, (res, err) => {
      return res;
    });
  }
};

export default { singleLink, allLinks };
