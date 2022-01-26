const fetch = require('cross-fetch');
const Profile = require('../models/Profile');

module.exports = class ProfileService {
  static async create({ name }) {
    const response = await fetch(
      'https://futuramaapi.herokuapp.com/api/quotes/1'
    );

    const parsedResponse = await response.json();
    const { quote } = parsedResponse[0];

    const profile = await Profile.insert({ name, quote });

    return profile;
  }
};
