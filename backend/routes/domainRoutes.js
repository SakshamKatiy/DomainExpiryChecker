const express = require('express');
const { fetchWhoisData } = require('../controllers/domainController');
const router = express.Router();

router.post('/domain', async (req, res) => {
  const domains = req.body.domains;

  if (!domains || domains.length === 0) {
    return res.status(400).json({ error: 'Please provide a list of domain names.' });
  }

  const results = [];
  try {
    for (const domain of domains) {
      const data = await fetchWhoisData(domain);
      const whoisRecord = data.WhoisRecord || {};
      const creation_date = whoisRecord.createdDateNormalized || 'Unknown';
      const expiry_date = whoisRecord.expiresDateNormalized || 'Unknown';
      const registrar = whoisRecord.registrarName || 'Unknown';
      const status = whoisRecord.status || 'Unknown';

      const daysLeft =
        expiry_date !== 'Unknown'
          ? Math.ceil((new Date(expiry_date) - new Date()) / (1000 * 60 * 60 * 24))
          : 'Unknown';

      results.push({
        domain,
        registration_status: status,
        creation_date,
        expiry_date,
        days_left: daysLeft,
        registrar,
      });
    }

    res.json({ data: results });
  } catch (error) {
    console.error('Error fetching domain data:', error.message);
    res.status(500).json({ error: 'Unable to fetch domain information' });
  }
});

module.exports = router;
