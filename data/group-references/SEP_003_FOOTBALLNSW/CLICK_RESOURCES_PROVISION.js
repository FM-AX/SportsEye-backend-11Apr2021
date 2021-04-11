module.exports = `


<div class="data-popup">

	<h3>{AREA_NAME}</h3>
	<div class="row-table five">
	
		<div class="table-headings">
			
			<h3 class="table-column-heading">
				FACILITIES
			</h3>

			<h3 class="table-column-heading">
				CAPACITY
			</h3>

			<h3 class="table-column-heading">
				TOTAL PARTICIPATION
			</h3>
			
			<h3 class="table-column-heading">
				TOTAL DEMAND
			</h3>
			
			<h3 class="table-column-heading">
				TOTAL POPULATION
			</h3>
			
			
		</div>
		
		<div class="table-row">
			
			<div class="table-row-cell">
				{AREA_FACL_COUNT}
			</div>
			
			<div class="table-row-cell">
				{AREA_FACL_ASSET_COUNT}
			</div>

			<div class="table-row-cell">
				{AREA_MEM_ALL}

			</div>
			
			<div class="table-row-cell">
				{AREA_DEM_ALL}
			</div>
			
			<div class="table-row-cell">
				{AREA_POP}
			</div>
			
		</div>
		
			
		</div><!-- end of table -->

	</div><!-- end of popup -->


<div class="data-popup">

	<h3>FACILITY CAPACITY PROVISION RATIO</h3>
	<div class="row-table four">
	
		<div class="table-headings">
			
			<h3 class="table-column-heading">
				
			</h3>
			
			<h3 class="table-column-heading">
				PARTICIPATION RATIO
			</h3>
			
			<h3 class="table-column-heading">
				DEMAND RATIO
			</h3>
			
			<h3 class="table-column-heading">
				POPULATION RATIO
			</h3>
			
			
		</div>
		
		<div class="table-row">
			
			<div class="table-row-heading">
				{AREA_NAME}
			</div>
			
			<div class="table-row-cell">
				{AREA_PROV_MEM}

			</div>
			
			<div class="table-row-cell">
				{AREA_PROV_DEM}
			</div>
			
			<div class="table-row-cell">
				{AREA_PROV_POP}
			</div>
			
		</div>

		<div class="table-row">
			
			<div class="table-row-heading">
				STATE
			</div>
			
			<div class="table-row-cell">
				{AREA_PROV_MEM_STATE}
			</div>
			
			<div class="table-row-cell">
				{AREA_PROV_DEM_STATE}
			</div>
			
			<div class="table-row-cell">
				{AREA_PROV_POP_STATE}
			</div>
			
		</div>
		
		<div class="table-row">
			
			<div class="table-row-heading">
				METRO
			</div>
			
			<div class="table-row-cell">
				{AREA_PROV_MEM_MET}
			</div>
			
			<div class="table-row-cell">
				{AREA_PROV_DEM_MET}
			</div>
			
			<div class="table-row-cell">
				{AREA_PROV_POP_MET}
			</div>
			
		</div>
		
		<div class="table-row">
			
			<div class="table-row-heading">
				REGION
			</div>
			
			<div class="table-row-cell">
				{AREA_PROV_MEM_REG}
			</div>
			
			<div class="table-row-cell">
				{AREA_PROV_DEM_REG}
			</div>
			
			<div class="table-row-cell">
				{AREA_PROV_POP_REG}
			</div>
			
		</div>

			
		</div><!-- end of table -->

	</div><!-- end of popup -->

`
