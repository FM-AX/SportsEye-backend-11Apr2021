module.exports = `

<h3>{AREA_NAME}</h3>

<div class="data-popup">

	<div class="row-table three">
	
		<div class="table-headings">
			
			<h3 class="table-column-heading">
				
			</h3>
			
			<h3 class="table-column-heading">
				TOTAL PARTICIPANTS
			</h3>
			
<!--		<h3 class="table-column-heading">
				14 AND UNDER
			</h3>
			
			<h3 class="table-column-heading">
				15 AND OVER
			</h3>
			
-->			<h3 class="table-column-heading">
				SUMMER
			</h3>
			
			
		</div>
		
		<div class="table-row">
			
			<div class="table-row-heading">
				1B. PARTICIPATION
			</div>

			<div class="table-row-cell">
				{AREA_MEM_ALL}
			</div>			

<!--		<div class="table-row-cell">
				{AREA_MEM_GRPC}
			</div>
			
			<div class="table-row-cell">
				{AREA_MEM_GRPD}
			</div>
			
-->			<div class="table-row-cell">
				{AREA_MEM_GRPB}
			</div>
			
			
		</div>

		
		<div class="table-row">
			
			<div class="table-row-heading">
				2A. DEMAND
			</div>
			
			<div class="table-row-cell">
				{AREA_DEM_ALL}
			</div>
			
<!--		<div class="table-row-cell">
				{AREA_DEM_GRPC}
			</div>
			
			<div class="table-row-cell">
				{AREA_DEM_GRPD}
			</div>
			
-->			<div class="table-row-cell">
				{AREA_DEM_GRPB}
			</div>
			
			
		</div>
		
		<div class="table-row">
			
			<div class="table-row-heading">
				2B. DEMAND CONVERSION
			</div>
			
			<div class="table-row-cell">
				{AREA_DEM_CNV_ALL} %
			</div>
			
<!--		<div class="table-row-cell">
				{AREA_DEM_CNV_GRPC} %
			</div>
			
			<div class="table-row-cell">
				{AREA_DEM_CNV_GRPD} %
			</div>
			
-->			<div class="table-row-cell">
				{AREA_DEM_CNV_GRPB} %
			</div>
			
			
		</div>

		<div class="table-row">
			
			<div class="table-row-heading">
				2C. DEMAND DIFFERENCE
			</div>
			
			<div class="table-row-cell">
				{AREA_DEM_DIF_ALL}
			</div>
			
<!--		<div class="table-row-cell">
				{AREA_DEM_DIF_GRPC}
			</div>
			
			<div class="table-row-cell">
				{AREA_DEM_DIF_GRPD}
			</div>
			
-->			<div class="table-row-cell">
				{AREA_DEM_DIF_GRPB}
			</div>
			
			
		</div>
		
		<div class="table-row">
			
			<div class="table-row-heading">
				3B. UNMET DEMAND
			</div>
			
			<div class="table-row-cell">
				{AREA_UNMT_DEM_ALL}
			</div>
			
<!-- 		<div class="table-row-cell">
				-
			</div>
			
			<div class="table-row-cell">
				-
			</div> 
			
-->			<div class="table-row-cell">
				-
			</div>
			
			
		</div>
		

	</div><!-- end of table -->
<!-- 	<p>NOTES</p> -->
<!-- end of section -->
</div> <!-- END OF DATA TABLE -->

`
