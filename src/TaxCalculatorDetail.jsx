import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

function TaxCalculatorDetail() {
  const [brackets, setBrackets] = useState([]);
  const [year, setYear] = useState('');
  const [status, setStatus] = useState('');
  const [income, setIncome] = useState('');
  const [taxDue, setTaxDue] = useState(null);

  // 1) Load and parse CSV once
  useEffect(() => {
    Papa.parse('/tax_brackets.csv', {
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: (results) => {
        // Convert numeric fields
        const data = results.data.map((d) => ({
          year: d.year,
          file_status: d.file_status.trim(),
          taxable_income: parseFloat(d.taxable_income),
          tax_rate: parseFloat(d.tax_rate),
        }));
        setBrackets(data);
      },
    });
  }, []);

  // 3) Progressive tax calculation
  const calculateTax = () => {
    const userIncome = parseFloat(income);
    if (isNaN(userIncome)) {
      setTaxDue('–');
      return;
    }

    // Filter & sort the brackets for the chosen year/status
    const tier = brackets
      .filter((b) => b.year === year && b.file_status === status)
      .sort((a, b) => a.taxable_income - b.taxable_income);

    let remaining = userIncome;
    let totalTax = 0;

    for (let i = 0; i < tier.length; i++) {
      const { taxable_income: threshold, tax_rate: rate } = tier[i];
      const nextThreshold =
        i + 1 < tier.length ? tier[i + 1].taxable_income : Infinity;

      if (remaining > threshold) {
        const amountInThisBracket = Math.min(remaining, nextThreshold) - threshold;
        totalTax += amountInThisBracket * rate;
      } else {
        break;
      }
    }

    setTaxDue(totalTax);
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h2>Federal Tax Calculator</h2>

      <div style={{ marginBottom: 12 }}>
        <label>
          Year:{' '}
          <input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="e.g. 2024"
          />
        </label>
      </div>

      <div style={{ marginBottom: 12 }}>
        <label>
          Filing status:{' '}
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            placeholder="e.g. single"
          />
        </label>
      </div>

      <div style={{ marginBottom: 12 }}>
        <label>
          Taxable income:{' '}
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            placeholder="e.g. 85000"
          />
        </label>
      </div>

      <button onClick={calculateTax}>Calculate Tax</button>

      {taxDue !== null && (
        <div style={{ marginTop: 16, fontSize: 18 }}>
          <strong>Tax Due:</strong>{' '}
          {typeof taxDue === 'number'
            ? '$' + taxDue.toLocaleString(undefined, { maximumFractionDigits: 2 })
            : taxDue}
        </div>
      )}
    </div>
  );
}

export default TaxCalculatorDetail;