const { RESTDataSource } = require('apollo-datasource-rest');

class PunkAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.punkapi.com/v2/';
    }

    public async getBeerByID(id:number) {
        const response = await this.get(`beers/${id}`);
        const reducedBeer = this.beerReducer(response);
        return reducedBeer;
    }

    public async getRandomBeer() {
        const response = await this.get(`beers/random`);
        const reducedBeer = this.beerReducer(response);
        return reducedBeer;
    }

    private beerReducer(response:object) {
        return response;
    }
}

export default PunkAPI;