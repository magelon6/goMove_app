const axios = require("axios");

class ApiData {

  async home(req, res) {
    try {
      const response = await axios(
        `https://www.numbeo.com/api/cities?api_key=${process.env.API_KEY_NUM}`
      );

      const newResult = response.data.cities.filter(
        (el) =>
          el.city !== "Karaganda (Qaraghandy)" && el.city !== "Buon Ma Thuot"
      );

      const result = newResult.map((el) => ({
        id: el.city_id,
        city: el.city,
        country: el.country,
      }));
      res.json(result);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  }

  async price(req, res) {
    try {
      const { city, country } = req.body;

      const response = await axios(
        `https://www.numbeo.com//api/city_prices?api_key=${process.env.API_KEY_NUM}&city=${city}&country=${country}`
      );

      const currency = await axios(
        `https://www.numbeo.com/api/currency_exchange_rates?api_key=${process.env.API_KEY_NUM}`
      );

      const usd = currency.data.exchange_rates.find(
        (el) => el.currency === response.data.currency
      );
      const result = response.data.prices.map((el) => ({
        id: el.item_id,
        name: el.item_name,
        price: (el.average_price / usd.one_usd_to_currency),
      }));

      res.json(result);
    } catch (err) {
      console.log(err);
      res.sendStatus(400);
    }
  }



}

module.exports = new ApiData();
