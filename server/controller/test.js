
const axios = require('axios')
class ApiData {
  async home(req, res) {
    //console.log('-----------');
    try {
      const response = await axios(
        `https://www.numbeo.com/api/cities?api_key=${process.env.API_KEY_NUM}`
      );
      
      const result = response.data.cities.map((el) => ({
        id: el.city_id,
        city: el.city,
      }));
      res.json(result);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  }
}

module.exports = new ApiData();

// "city_id": 1,

// "city": "Abelessa",
// Object.entries
/// https://www.numbeo.com/api/cities?api_key=omjk9aakst2wko
// `https://www.numbeo.com/api/cities?api_key=${API_KEY_NUM}`
