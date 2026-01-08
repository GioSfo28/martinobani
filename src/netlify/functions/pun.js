const axios = require('axios');
const cheerio = require('cheerio');

exports.handler = async () => {
  try {
    const response = await axios.get('https://luce-gas.it/guida/mercato/andamento-prezzo/energia-elettrica', {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' },
      timeout: 5000
    });
    const $ = cheerio.load(response.data);
    const text = $('body').text();
    const match = text.match(/(\d+,\d{3,4})/);

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ 
        value: match ? match[0] + " €/kWh" : "0,129 €/kWh", 
        date: "Gennaio 2026" 
      })
    };
  } catch (err) {
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ value: "0,129 €/kWh", date: "Gennaio 2026 (Dato stimato)" })
    };
  }
};