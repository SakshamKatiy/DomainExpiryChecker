const axios = require('axios');

// Function to fetch WHOIS data for a single domain
const fetchWhoisData = async (domain) => {
  try {
    const response = await axios.get(`https://www.whoisxmlapi.com/whoisserver/WhoisService`, {
      params: {
        apiKey: process.env.WHOIS_XML_API_KEY,
        domainName: domain,
        outputFormat: 'JSON',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching WHOIS data');
  }
};

module.exports = { fetchWhoisData };
