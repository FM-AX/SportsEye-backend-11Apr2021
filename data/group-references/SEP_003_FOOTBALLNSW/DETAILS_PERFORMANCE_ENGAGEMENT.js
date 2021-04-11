module.exports = `
<div class="locker-room">
<h3>PARTICIPATION</h3>
<h3>1A. PARTICIPATION (SITE)</h3>
<p>Count of ‘main season’ participants linked to a site through a club.</p>
<h3>1B. PARTICIPATION COUNT</h3>
<p>Count of ‘main season’ participants within an area based on geocoding.</p>
<h3>1C. PARTICIPATION RATE</h3>
<p>Rate of ‘main season’ participants compared to the current population of an area.</p>
<h3>1D. PARTICIPATION CHANGE</h3>
<p>Change in ‘main season’ participants from last season.</p>
<h3>1E. SUMMER PARTICIPATION</h3>
<p>Count of ‘other participants’ (secondary season or special programs) in an area based on geocoding.</p>
<h3>DEMAND</h3>
<h3>2A. DEMAND</h3>
<p>Demand layers have been calculated by ActiveXchange’s Data Science Team by undertaking the following steps</p>
<ol>
<li>The location of members in respect to their home facilities has been mapped and a drive time decay curve has been created for each sport/ program. This shows the relative extent that people are less likely to participate at a facility the further away they live from that facility.</li>
<li>The drive time decay factor has then be reversed and applied back to the member count in each location. This adjusts the member numbers as if drive time was not a factor. This provides normalised member counts by area.</li>
<li>These members have then been distributed across Experian’s Mosaic 49 demographic lifestyle segments (provided a count per segment) aligned with the base segment profile of each meshblock area. This count was then divided by the total NSW population segment count to provide a conversion rate per segment per sport/ program.</li>
<li>For each sport/ program this conversion rate was then applied to the whole NSW population, based on the overall demographic lifestyle segment profile of suburbs. This provides a relative indication of the maximum demand per area per sport/ program.</li>
</ol>
<p>This approach matches the resident profile of suburbs (and LGAs) with demand for specific programs and sports, acting as a match maker for growing active communities.</p>
<h3>2B. DEMAND RATE</h3>
<p>The rate of calculated demand compared to the population of an area.</p>
<h3>2C. DEMAND CONVERSION</h3>
<p>The rate of participants compared to calculated demand in an area.</p>
<h3>2D. DEMAND DIFFERENCE</h3>
<p>The difference between the participant count and demand calculation.</p>
<h3>DROP OUT RISK</h3>
<h3>3. FACILITY CLUB DROP OUT RISK</h3>
<p>Risk of drop out.</p>
</div> <!-- END OF TABLE -->

`












