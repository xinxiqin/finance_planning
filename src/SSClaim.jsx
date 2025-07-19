function SSClaim() {
  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <h2 className="text-xl font-bold mb-4">Social Security Claim Considerations</h2>
      <h3 className="text-xl font-bold mb-4">Consider at which age start to claim. 
        Claim earlier will result in more years of benefits, but lower monthly benefits.
        Claim later will result in higher monthly benefits, but fewer years of benefits.
        Refer to claim Calculator
        </h3>
      <ul>
        <li>Age 62: Early retirement, reduced benefits</li>
        <li>Age 67: Full retirement age, standard benefits</li>
        <li>Age 70: Delayed retirement, increased benefits</li>
      </ul>
      <h3 className="text-xl font-bold mb-4">Additional Considerations</h3>
      <ul>
        <li>Health status and life expectancy</li>
        <li>Financial needs and retirement savings</li>
        <li>Spousal benefits and family considerations</li>
      </ul>
    </div>
  );
}
export default SSClaim;

