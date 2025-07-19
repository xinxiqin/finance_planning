

import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const calculateSSBenefits = (PIA, expectedDeathAge) => {
  const FRA = 67;
  const results = [];

  for (let startAge = 62; startAge <= 70; startAge++) {
    let adjustedPIA = PIA;

    if (startAge < FRA) {
      const monthsEarly = (FRA - startAge) * 12;
      if (monthsEarly <= 36) {
        adjustedPIA *= (1 - 0.00667 * monthsEarly);
      } else {
        adjustedPIA *= (1 - 0.00667 * 36 - 0.005 * (monthsEarly - 36));
      }
    } else if (startAge > FRA) {
      const monthsLate = (startAge - FRA) * 12;
      adjustedPIA *= (1 + 0.00667 * (monthsLate));
    }

    const yearsToReceive = Math.max(0, expectedDeathAge - startAge);
    const annualBenefit = adjustedPIA * 12;
    const totalBenefit = annualBenefit * yearsToReceive;

    results.push({
      startAge,
      annualBenefit: Number(annualBenefit.toFixed(2)),
      totalBenefit: Number(totalBenefit.toFixed(2)),
    });
  }

  return results;
};

function SSClaimCalculator() {
  const [PIA, setPIA] = useState(2000);
  const [expectedDeathAge, setExpectedDeathAge] = useState(85);

  const data = calculateSSBenefits(Number(PIA), Number(expectedDeathAge));

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Social Security Benefit Estimator</h2>

      <div className="mb-4">
        <label className="block">PIA ($): </label>
        <input
          type="number"
          value={PIA}
          onChange={(e) => setPIA(e.target.value)}
          className="border rounded p-1"
        />
      </div>
      <div className="mb-4">
        <label className="block">Expected Death Age: </label>
        <input
          type="number"
          value={expectedDeathAge}
          onChange={(e) => setExpectedDeathAge(e.target.value)}
          className="border rounded p-1"
        />
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="startAge" label={{ value: 'Start Age', position: 'insideBottomRight', offset: -5 }} />
          <YAxis label={{ value: 'Amount ($)', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="annualBenefit" stroke="#8884d8" name="Annual Benefit" />
          <Line type="monotone" dataKey="totalBenefit" stroke="#82ca9d" name="Total Lifetime Benefit" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SSClaimCalculator;
