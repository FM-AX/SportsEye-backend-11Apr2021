//V1.3

module.exports = `
<p><b>
All source information, member records and facility/ club data, has been provided by the respective State Sport Association. Data from the preceding year has been used so the model remains up to date, reflecting participation trends. Data is then always anonymised and insights are aggregated. The estimated demand layers have been calculated by ActiveXchange’s Data Science Team by undertaking the following steps:
</b></p>
<ol>
	<li>
		The location of members in respect to their home facilities has been mapped and a drive time decay curve has been created for each sport/ program. This shows the relative extent that people are less likely to participate at a facility the further away they live from that facility.
	</li>
	<li>
		The drive time decay factor has then be reversed and applied back to the member count in each location. This adjusts the member numbers as if drive time was not a factor. This provides normalised member counts by area.
	</li>
	<li>
		These members have then been distributed across Experian’s Mosaic 49 demographic lifestyle segments (provided a count per segment) aligned with the base segment profile of each meshblock area. This count was then divided by the total SA population segment count to provide a conversion rate per segment per sport/ program.
	</li>
	<li>
		For each sport/ program this conversion rate was then applied to the whole SA population, based on the overall demographic lifestyle segment profile of suburbs. This provides a relative indication of the maximum demand per area per sport/ program.
	</li>
</ol>
<p><b>
This approach matches the resident profile of suburbs with demand for specific programs and sports, acting as a match maker for growing active communities.
</b></p>
<p><b>
For further information on ActiveXchange data modelling please contact <a href="mailto:intelligence@ActiveXchange.org?Subject=Canterbury%20Segmentation" target="_top">intelligence@ActiveXchange.org<a/>
</b></p>
`
