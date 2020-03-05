const { RESTDataSource } = require('apollo-datasource-rest');

class PunkAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.punkapi.com/v2/';
    }
}

export default PunkAPI;