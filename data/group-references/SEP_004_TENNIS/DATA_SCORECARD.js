//V1.1 change in line with AX supplied

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
			
			<div class="status red"></div>
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
				<br>3. The subscription types in member data didn’t provide clear distinction between member types.
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
				Demand/ conversion accuracy.
			</div>
			
			<div class="table-row-cell">
				1. Mandatory field.
				<br>2. Validated input.
				<br>3. Less than 10 % bad address for Members (Majority of them being Blank/Null Values).
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
				<br>2. Club names on facility file were not exact matches for club names linked to members.
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
			
			<div class="status red"></div>
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
