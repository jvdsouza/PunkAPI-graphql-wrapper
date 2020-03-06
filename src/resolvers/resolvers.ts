import { ObjectID } from 'mongodb';

import { Beer } from '../graphql-codegen-typings';
import { mongoDbProvider } from '../mongodb.provider';

import PunkAPI from '../datasources/punkAPI/PunkApiClass';

const punkAPI = new PunkAPI();

export const resolvers = {
    Query: {
        beer: (_:any, { id }:any, { dataSources }:any) => {
            return dataSources.PunkAPI.getBeerByID(id);
        }
    }
};