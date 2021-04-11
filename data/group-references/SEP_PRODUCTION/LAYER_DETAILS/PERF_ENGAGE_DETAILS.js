// V1.2 

module.exports = `
<div class="locker-room">
<h3>PARTICIPATION</h3>

<p>Participation figure focus on the ‘main season’ of the sport. For sports that have main competitions in winter, this will be members active in winter. Clicking on geographic areas will display a 5 year age and gender breakdown for participant numbers and rates along with benchmark comparisons.</p>

<h3>1A. PARTICIPATION (SITE)</h3>
<p>Count of ‘main season’ participants linked to a site through a club.</p>

<h3>1B. PARTICIPATION COUNT</h3>
<p>Count of ‘main season’ participants within an area based on geocoding. Geocoding is based on the members home address which is then attached to an SA1 which can be aggregated up to suburbs (SA2), LGA’s, government regions and sport specific regions.

It shows the total number of participants in a given area. Areas with a high number have darker shading.</p>

<h3>1C. PARTICIPATION RATE</h3>
<p>Rate of ‘main season’ participants compared to the current population of an area. 

This compares population data to the member participation for a given region. Areas with a high participation rate have darker shading.</p>

<h3>1D. PARTICIPATION CHANGE</h3>
<p>Change in ‘main season’ participants from last season.</p>

<h3>1E. SUMMER PARTICIPATION</h3>
<p>Count of ‘other participants’ (secondary season or special programs) in an area based on geocoding.</p>

<h3>DEMAND</h3>

<h3>2A. DEMAND</h3>
<p>Demand layers have been calculated by ActiveXchange’s Data Science Team by undertaking the following steps:</p>
<ol>
<li>The location of members in respect to their home facilities has been mapped and a drive time decay curve has been created for each sport/ program. This shows the relative extent that people are less likely to participate at a facility the further away they live from that facility.</li>
<li>The drive time decay factor has then be reversed and applied back to the member count in each location. This adjusts the member numbers as if drive time was not a factor. This provides normalised member counts by area.</li>
<li>These members have then been distributed across Experian’s Mosaic 49 demographic lifestyle segments (provided a count per segment) aligned with the base segment profile of each meshblock area. This count was then divided by the total NSW population segment count to provide a conversion rate per segment per sport/ program.</li>
<li>For each sport/ program this conversion rate was then applied to the whole NSW population, based on the overall demographic lifestyle segment profile of suburbs. This provides a relative indication of the maximum demand per area per sport/ program.</li>
</ol>
<p>This approach matches the resident profile of suburbs (and LGAs) with demand for specific programs and sports, acting as a match maker for growing active communities.</p>

<h3>2B. DEMAND RATE</h3>
<p>The rate of calculated demand compared to the population of an area. This highlights areas that have high demand relative to the population in the area.</p>

<h3>2C. DEMAND CONVERSION</h3>
<p>The rate of participants compared to calculated demand in an area. This shows area that are performing well in regard to converting demand into membership (high conversion are darker areas) and those that are not performing as well (lighter areas).</p>

<h3>2D. DEMAND DIFFERENCE</h3>
<p>The difference between the participant count and demand calculation. This shows the relative potential of membership growth for each area. Areas shaded darker have a greater number of people that are not members but fit the profile of potential members.</p>

<h3>DROP OUT RISK</h3>

<h3>3. FACILITY CLUB DROP OUT RISK</h3>
<p>Subject to the data provided by the administration organisation, a risk of drop out (member cancellation) model has been created based on 3+ years data. This uses factors such as participation in different programs, cost of membership and the likely segment profile of individuals at clubs/ facilities (average lifetime).

The layer shows the facilities (and associated clubs) by their average risk of drop out. This helps organisations provide proactive retention support to locations (a service that ActiveXchange’s activeCAMPAIGNS can assist with).</p>

</div> <!-- END OF TABLE -->

`












