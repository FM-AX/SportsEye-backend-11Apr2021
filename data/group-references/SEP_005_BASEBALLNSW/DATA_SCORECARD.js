module.exports = `
<h3>AX DATA QUALITY SCORECARD</h3>

<div class="standard-popup">


<div class="scorecard">
	
	<h3>INPUT DATA: MEMBER TYPES NAME STANDARDS</h3>

	<div class="kpis">
	
		<h3 class="kpi-heading">
			QUALITY RATING
		</h3>
		
		<div class="kpi-list">
		
			<div class="status green"></div>
			<div class="kpi-single">
				Completeness
			</div>
			
			<div class="status green"></div>
			<div class="kpi-single">
				Standardisation
			</div>
			
			<div class="status green"></div>
			<div class="kpi-single">
				Database linkages
			</div>
			
		</div>
		
	</div>


	<div class="action-table">
	
		<div class="table-headings">
			
			<h3 class="table-column-heading">
				IMPLICATIONS
			</h3>
			
			<h3 class="table-column-heading">
				RECOMMENDATIONS
			</h3>
			
		</div>
		
		<div class="table-row">
			
			<div class="table-row-cell">
				Difficult to identify trends and align with demand projections.
			</div>
			
			<div class="table-row-cell">
				1. Apply standards and client sign offs on alignment.
				<br>2. Client integrates drop down standards into own system.
			</div>
			
		</div>
		
	</div>

</div>

<div class="scorecard">
	
	<h3>INPUT DATA: MEMBER ADDRESSES, AGE AND GENDER</h3>

	<div class="kpis">
	
		<h3 class="kpi-heading">
			QUALITY RATING
		</h3>
		
		<div class="kpi-list">
		
			<div class="status red"></div>
			<div class="kpi-single">
				Completeness
			</div>
			
			<div class="status green"></div>
			<div class="kpi-single">
				Standardisation
			</div>
			
			<div class="status green"></div>
			<div class="kpi-single">
				Database linkages
			</div>
			
		</div>
		
	</div>


	<div class="action-table">
	
		<div class="table-headings">
			
			<h3 class="table-column-heading">
				IMPLICATIONS
			</h3>
			
			<h3 class="table-column-heading">
				RECOMMENDATIONS
			</h3>
			
		</div>
		
		<div class="table-row">
			
			<div class="table-row-cell">
				Demand/ conversion accuracy.
			</div>
			
			<div class="table-row-cell">
				1. Mandatory field.
				<br>2. Validated input.
				<br>3. Less than 5 % bad address for Members (majority of them being Blank/Null Values, non-Australian address).
				<br>4. 45 members with no age.
				<br>5. 55 members in the age category 0 to 4, which are excluded on the dashboard data.
			</div>
			
		</div>
		
	</div>

</div>

<div class="scorecard">
	
	<h3>INPUT DATA: UNIQUE IDENTIFIERS<br>
	(THROUGH ALL DATABASES - MEMBERS, ACTIVITY, TEAM, CLUB, SITE)</h3>

	<div class="kpis">
	
		<h3 class="kpi-heading">
			INPUT DATA
		</h3>
		
		<div class="kpi-list">
		
			<div class="status green"></div>
			<div class="kpi-single">
				Completeness
			</div>
			
			<div class="status green"></div>
			<div class="kpi-single">
				Standardisation
			</div>
			
			<div class="status red"></div>
			<div class="kpi-single">
				Database linkages
			</div>
		
			
		</div>
		
	</div>


	<div class="action-table">
	
		<div class="table-headings">
			
			<h3 class="table-column-heading">
				IMPLICATIONS
			</h3>
			
			<h3 class="table-column-heading">
				RECOMMENDATIONS
			</h3>
			
		</div>
		
		<div class="table-row">
			
			<div class="table-row-cell">
				Unable to create a single entity view - impacts predications and communications.
			</div>
			
			<div class="table-row-cell">
				1. Standard unique IDs in all related tables (database setup).
				<br>2. Club names on facility file matched mostly with club names on inventory file.
				<br>3. 96 members could not be linked to any facility (5 clubs in member file not in the facility inventory data).
			</div>
			
		</div>
		
	</div>

</div>

<div class="scorecard">
	
	<h3>INPUT DATA: ACTIVITY NAMING STANDARDS</h3>

	<div class="kpis">
	
		<h3 class="kpi-heading">
			INPUT DATA
		</h3>
		
		<div class="kpi-list">
		
			<div class="status green"></div>
			<div class="kpi-single">
				Completeness
			</div>
			
			<div class="status green"></div>
			<div class="kpi-single">
				Standardisation
			</div>
			
			<div class="status green"></div>
			<div class="kpi-single">
				Database linkages
			</div>
		
			
		</div>
		
	</div>


	<div class="action-table">
	
		<div class="table-headings">
			
			<h3 class="table-column-heading">
				IMPLICATIONS
			</h3>
			
			<h3 class="table-column-heading">
				RECOMMENDATIONS
			</h3>
			
		</div>
		
		<div class="table-row">
			
			<div class="table-row-cell">
				Data processing time and consistency.
			</div>
			
			<div class="table-row-cell">
				1. Apply standards and client sign offs on alignment.
				<br>2. Client integrates drop down standards into own system.
			</div>
			
		</div>
		
	</div>

</div>

<div class="scorecard">
	
	<h3>INPUT DATA: FACILITY AUDIT</h3>

	<div class="kpis">
	
		<h3 class="kpi-heading">
			INPUT DATA
		</h3>
		
		<div class="kpi-list">
		
			<div class="status green"></div>
			<div class="kpi-single">
				Completeness
			</div>
			
			<div class="status green"></div>
			<div class="kpi-single">
				Standardisation
			</div>
			
			<div class="status green"></div>
			<div class="kpi-single">
				Database linkages
			</div>
		
			
		</div>
		
	</div>


	<div class="action-table">
	
		<div class="table-headings">
			
			<h3 class="table-column-heading">
				IMPLICATIONS
			</h3>
			
			<h3 class="table-column-heading">
				RECOMMENDATIONS
			</h3>
			
		</div>
		
		<div class="table-row">
			
			<div class="table-row-cell">
				Can’t match attendance at sites with site audit.
			</div>
			
			<div class="table-row-cell">
				1. Transfer naming conventions between databases.
				<br>2. Incorrect audit details reduce the accuracy of the modelling.
			</div>
			
		</div>
		
	</div>

</div>


`
