const axios = require('axios');
const cheerio = require('cheerio');

exports.handler = async () => {
  try {
    const response = await axios.get('https://tariffe.segugio.it/indice-psv-gas/', {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' },
      timeout: 5000
    });
    const $ = cheerio.load(response.data);
    let psvValue = "";
    
    $('p, strong, span, td').each((i, el) => {
      const t = $(el).text();
      if (t.includes('0,') && t.includes('€/Smc')) {
        const m = t.match(/(\d+,\d{4,5})/);
        if (m) psvValue = m[0];
      }
    });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ 
        value: psvValue ? psvValue + " €/Smc" : "0,45312 €/Smc", 
        date: "Gennaio 2026" 
      })
    };
  } catch (err) {
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ value: "0,45312 €/Smc", date: "Gennaio 2026 (Dato stimato)" })
    };
  }
};