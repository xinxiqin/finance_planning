function IRAStrategy() {
  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <h2 className="text-xl font-bold mb-4">IRA/401K Distribution Considerations</h2>
      <h3 className="text-xl font-bold mb-4">Tax Brackets</h3>
      <ul>
        <li>10%: Up to $9,950</li>
        <li>12%: $9,951 to $40,525</li>
        <li>22%: $40,526 to $86,375</li>
        <li>24%: $86,376 to $164,925</li>
        <li>32%: $164,926 to $209,425</li>
        <li>35%: $209,426 to $523,600</li>
        <li>37%: Over $523,600</li>
      </ul>
      <h3 className="text-xl font-bold mb-4">Understand RMDs</h3>
      <p>Required Minimum Distributions (RMDs) must be taken from traditional IRAs and 401(k)s starting at age 72.
        Required Minimum Distributions (RMDs) from retirement accounts are calculated by dividing the prior year-end 
        fair market value of the account by a life expectancy factor published by the IRS. This factor is determined 
        based on the account holder's age (or the age of the beneficiary for inherited accounts) 
        and the applicable IRS life expectancy table.
      </p>

      <div style={{ height: '600px' }}>
        <img src="/pics/uniform_lifetime_table.png" alt="uniform lifetime table" width="600" />
        
      </div>


    </div>
  );
}
export default IRAStrategy;

