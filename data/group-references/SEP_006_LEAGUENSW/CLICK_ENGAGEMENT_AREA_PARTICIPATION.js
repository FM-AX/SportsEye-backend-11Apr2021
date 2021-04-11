module.exports = `
<h3>{AREA_NAME}</h3>

<div class="data-popup">


	<h3>1C-D. PARTICIPATION RATES AND CHANGE</h3>
	<div class="row-table">
	
		<div class="table-headings">
			
			<h3 class="table-column-heading">
				AGE
			</h3>
			
			<h3 class="table-column-heading">
				MALE MEMBERS
			</h3>
			
			<h3 class="table-column-heading">
				FEMALE MEMBERS
			</h3>
			
			<h3 class="table-column-heading">
				TOTAL POP.
			</h3>
			
			<h3 class="table-column-heading">
				PARTICIPATION
			</h3>
			
			<h3 class="table-column-heading">
				MEMBER CHANGE*
			</h3>
			
		</div>
		
		<div class="table-row">
			
			<div class="table-row-heading">
				5-9
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_0509_M}
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_0509_F}
			</div>
			
			<div class="table-row-cell">
				{COMB_0509}
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_0509_PCNT}%
			</div>
			
			<div class="table-row-cell">
				{COMB_CHNG_0509}
			</div>
			
		</div>
		
		<div class="table-row">
			
			<div class="table-row-heading">
				10-14
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_1014_M}
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_1014_F}
			</div>
			
			<div class="table-row-cell">
				{COMB_1014}
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_1014_PCNT}%
			</div>
			
			<div class="table-row-cell">
				{COMB_CHNG_1014}
			</div>
			
		</div>
		
		<div class="table-row">
			
			<div class="table-row-heading">
				15-19
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_1519_M}
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_1519_F}
			</div>
			
			<div class="table-row-cell">
				{COMB_1519}
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_1519_PCNT}%
			</div>
			
			<div class="table-row-cell">
				{COMB_CHNG_1519}
			</div>
			
		</div>
		
		<div class="table-row">
			
			<div class="table-row-heading">
				20-29
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_2029_M}
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_2029_F}
			</div>
			
			<div class="table-row-cell">
				{COMB_2029}
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_2029_PCNT}%
			</div>
			
			<div class="table-row-cell">
				{COMB_CHNG_2029}
			</div>
			
		</div>
		
		<div class="table-row">
			
			<div class="table-row-heading">
				30-39
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_3039_M}
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_3039_F}
			</div>
			
			<div class="table-row-cell">
				{COMB_3039}
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_3039_PCNT}%
			</div>
			
			<div class="table-row-cell">
				{COMB_CHNG_3039}
			</div>
			
		</div>

		<div class="table-row">
			
			<div class="table-row-heading">
				40-49
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_4049_M}
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_4049_F}
			</div>
			
			<div class="table-row-cell">
				{COMB_4049}
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_4049_PCNT}%
			</div>
			
			<div class="table-row-cell">
				{COMB_CHNG_4049}
			</div>
			
		</div>

		<div class="table-row">
			
			<div class="table-row-heading">
				50-59
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_5059_M}
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_5059_F}
			</div>
			
			<div class="table-row-cell">
				{COMB_5059}
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_5059_PCNT}%
			</div>
			
			<div class="table-row-cell">
				{COMB_CHNG_5059}
			</div>
			
		</div>

		<div class="table-row">
			
			<div class="table-row-heading">
				60+
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_6099_M}
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_6099_F}
			</div>
			
			<div class="table-row-cell">
				{COMB_6099}
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_6099_PCNT}%
			</div>
			
			<div class="table-row-cell">
				{COMB_CHNG_6099}
			</div>
			
		</div>

		<div class="table-row">
			
			<div class="table-row-heading">
				TOTAL
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_M}
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_F}
			</div>
			
			<div class="table-row-cell">
				{AREA_POP}
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_PCNT}%
			</div>
			
			<div class="table-row-cell">
				{COMB_CHNG}
			</div>
			
		</div>

	</div><!-- end of table -->
	<p>Member Change based on difference between 2019 and 2017 Total Members.</p>

	<h3>BENCHMARKS</h3>
	<div class="row-table">
	
		<div class="table-headings">
			
			<h3 class="table-column-heading">
				AGE
			</h3>
			
			<h3 class="table-column-heading">
				MEMBERS
			</h3>
			
			<h3 class="table-column-heading">
				PARTICIPATION RATE
			</h3>
			
			<h3 class="table-column-heading">
				METRO PARTICIPATION
			</h3>
			
			<h3 class="table-column-heading">
				REGIONAL PARTICIPATION
			</h3>
			
			<h3 class="table-column-heading">
				STATE PARTICIPATION
			</h3>
			
		</div>
		
		<div class="table-row">
			
			<div class="table-row-heading">
				5-9
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_0509}
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_0509_PCNT}%
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_0509_PCNT_MET}%
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_0509_PCNT_REG}%
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_0509_PCNT_STATE}%
			</div>
			
		</div>
		
		<div class="table-row">
			
			<div class="table-row-heading">
				10-14
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_1014}
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_1014_PCNT}%
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_1014_PCNT_MET}%
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_1014_PCNT_REG}%
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_1014_PCNT_STATE}%
			</div>
			
		</div>
		
		<div class="table-row">
			
			<div class="table-row-heading">
				15-19
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_1519}
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_1519_PCNT}%
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_1519_PCNT_MET}%
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_1519_PCNT_REG}%
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_1519_PCNT_STATE}%
			</div>
			
		</div>
		
		<div class="table-row">
			
			<div class="table-row-heading">
				20-29
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_2029}
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_2029_PCNT}%
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_2029_PCNT_MET}%
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_2029_PCNT_REG}%
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_2029_PCNT_STATE}%
			</div>
			
		</div>
		
		<div class="table-row">
			
			<div class="table-row-heading">
				30-39
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_3039}
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_3039_PCNT}%
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_3039_PCNT_MET}%
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_3039_PCNT_REG}%
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_3039_PCNT_STATE}%
			</div>
			
		</div>

		<div class="table-row">
			
			<div class="table-row-heading">
				40-49
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_4049}
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_4049_PCNT}%
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_4049_PCNT_MET}%
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_4049_PCNT_REG}%
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_4049_PCNT_STATE}%
			</div>
			
		</div>

		<div class="table-row">
			
			<div class="table-row-heading">
				50-59
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_5059}
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_5059_PCNT}%
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_5059_PCNT_MET}%
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_5059_PCNT_REG}%
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_5059_PCNT_STATE}%
			</div>
			
		</div>

		<div class="table-row">
			
			<div class="table-row-heading">
				60+
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_6099}
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_6099_PCNT}%
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_6099_PCNT_MET}%
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_6099_PCNT_REG}%
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_6099_PCNT_STATE}%
			</div>
			
		</div>

		<div class="table-row">
			
			<div class="table-row-heading">
				TOTAL
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT}
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_PCNT}%
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_PCNT_MET}%
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_PCNT_REG}%
			</div>
			
			<div class="table-row-cell">
				{COMB_PRT_PCNT_STATE}%
			</div>
			
		</div>
	</div><!-- end of table -->
<!-- end of section -->
</div> <!-- END OF DATA TABLE -->

`
