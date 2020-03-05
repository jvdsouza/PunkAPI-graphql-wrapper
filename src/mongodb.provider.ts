import {
    Collection, 
    Db, 
    MongoClient, 
    ObjectID
} from 'mongodb';
import { environment } from './environment';

export class MongoDbProvider {
    private database?: Db;
    private mongoClient: MongoClient;

    constructor(url:string) {
        this.mongoClient = new MongoClient(url, { useUnifiedTopology: true });
    }

    /**
     * Connect to MongoDB.
     * @async
     * @param databaseName - Database name.
     */
    async connectAsync(databaseName:string): Promise<void> {
        await this.mongoClient.connect();
        this.database = this.mongoClient.db(databaseName);
    }

    /**
     * Close the database and its underlying connections.
     */
    async closeAsync():Promise<void> {
        await this.mongoClient.close();
    }

    /**
     * Fetch a specific collection.
     * @private
     * @param collectionName - Collection name.
     * @returns The collection instance.
     */
    private getCollection(collectionName:string):Collection {
        let collection:Collection;

        if(!this.database) {
            throw new Error('Database is undefined');
        }

        collection = this.database.collection(collectionName); 
        
        if(!collection) {
            throw new Error(`${collectionName} is undefined or not found`);
        }

        return collection;
    }
}

export const mongoDbProvider = new MongoDbProvider(environment.mongoDB.url);

/**
 * Add mock users if `users` collection is empty
 * TODO: Remove in production
 */
export async function addMockUsersAsync(): Promise<void> {
    // const usersCount = await mongoDbProvider.usersCollection.countDocuments();
    // if (usersCount === 0) {
    //     await mongoDbProvider.getCollection('users').insertMany([
    //         {
    //             _id: new ObjectID('0123456789abcdef01234567'),
    //             firstName: 'Test',
    //             lastName: 'User 1',
    //             email: 'test.user1@test.com',
    //           },
    //           {
    //             _id: new ObjectID('fedcba987654321098765432'),
    //             firstName: 'Test',
    //             lastName: 'User 2',
    //             email: 'test.user2@test.com',
    //             following: [new ObjectID('0123456789abcdef01234567')],
    //           },
    //     ])
    // }
}