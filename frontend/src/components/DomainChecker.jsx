import React, { useState } from 'react';
import axios from 'axios';

const DomainChecker = () => {
  const [domains, setDomains] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const domainArray = domains.split(',').map((domain) => domain.trim());

    try {
      const response = await axios.post('http://localhost:5000/api/domain', {
        domains: domainArray,
      });

      setResult(response.data.data);
      setError(null);
    } catch (err) {
      setError('Error fetching domain information');
      setResult(null);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={domains}
          onChange={(e) => setDomains(e.target.value)}
          placeholder="Enter domains separated by commas"
        />
        <button type="submit">Check Domains</button>
      </form>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      {result && (
        <table border="1">
          <thead>
            <tr>
              <th>Domain</th>
              <th>Registration Status</th>
              <th>Creation Date</th>
              <th>Expiry Date</th>
              <th>Days Left</th>
              <th>Registrar</th>
            </tr>
          </thead>
          <tbody>
            {result.map((domainData, index) => (
              <tr key={index}>
                <td>{domainData.domain}</td>
                {/* Dynamically set the registration status */}
                <td>{domainData.registrationStatus === 'Inactive' ? 'Inactive' : 'Active'}</td>

                <td>{domainData.creation_date}</td>
                <td>{domainData.expiry_date}</td>
                <td>{domainData.days_left}</td>
                <td>{domainData.registrar}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DomainChecker;
