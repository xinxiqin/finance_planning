import React, { useEffect, useState } from "react";
import Papa from "papaparse";

const TaxBracketTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Papa.parse("/tax_bracket.csv", {
      header: true,
      download: true,
      complete: (results) => {
        const cleanedData = results.data.filter(row => row.year); // remove blank rows
        setData(cleanedData);
      }
    });
  }, []);

  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
  };

  const cellStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left"
  };

  const headerStyle = {
    ...cellStyle,
    backgroundColor: "#f2f2f2",
    fontWeight: "bold"
  };

  return (
    <div>
      <h2>Tax Brackets</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={headerStyle}>Year</th>
            <th style={headerStyle}>Status</th>
            <th style={headerStyle}>Taxable Income</th>
            <th style={headerStyle}>Tax Rate</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              <td style={cellStyle}>{row.year}</td>
              <td style={cellStyle}>{row.file_status}</td>
              <td style={cellStyle}> {row.taxable_income? Number(row.taxable_income).toLocaleString(): ''}</td>
              
              <td style={cellStyle}>{row.tax_rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaxBracketTable;
