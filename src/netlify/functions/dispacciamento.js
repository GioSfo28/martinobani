const axios = require('axios');
const pdfParse = require('pdf-parse');

exports.handler = async () => {
  try {
    const response = await axios.get('https://www.servizioelettriconazionale.it/content/dam/sen/tariffa-base1.pdf', { 
      responseType: 'arraybuffer',
      headers: { 'User-Agent': 'Mozilla/5.0' },
      timeout: 8000
    });
    const data = await pdfParse(response.data);
    const match = data.text.match(/(\d+,\d{5,6})\s*€\s*\/\s*kWh/i);

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ 
        value: match ? match[1] + " €/kWh" : "0,01402 €/kWh", 
        period: "Gennaio-Marzo 2026" 
      })
    };
  } catch (err) {
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ value: "0,01402 €/kWh", period: "Trimestre Corrente" })
    };
  }
};