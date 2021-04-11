module.exports = `

<h1>2016 LGA: {AREA_NAME}</h1>

<div class="data-popup">
	<h3>AGE COMPOSITION</h3>

	<div class="row-table four">

		<div class="table-headings">

			<h3 class="table-column-heading">
				AGE
			</h3>

			<h3 class="table-column-heading">
				TOTAL
			</h3>

			<h3 class="table-column-heading">
				FEMALE
			</h3>

			<h3 class="table-column-heading">
				MALE
			</h3>


		</div><!-- end of row -->

		<div class="table-row">

			<div class="table-row-heading">
				0-4
			</div>

			<div class="table-row-cell">{Age_0_4_yr_P}</div>
			<div class="table-row-cell">{Age_0_4_yr_F}</div>
			<div class="table-row-cell">{Age_0_4_yr_M}</div>


		</div><!-- end of row -->

		<div class="table-row">

			<div class="table-row-heading">
				5-14
			</div>

			<div class="table-row-cell">{Age_5_14_yr_P}</div>
			<div class="table-row-cell">{Age_5_14_yr_F}</div>
			<div class="table-row-cell">{Age_5_14_yr_M}</div>


		</div><!-- end of row -->

		<div class="table-row">

			<div class="table-row-heading">
				15-19
			</div>

			<div class="table-row-cell">{Age_15_19_yr_P}</div>
			<div class="table-row-cell">{Age_15_19_yr_F}</div>
			<div class="table-row-cell">{Age_15_19_yr_M}</div>


		</div><!-- end of row -->

		<div class="table-row">

			<div class="table-row-heading">
				20-24
			</div>

			<div class="table-row-cell">{Age_20_24_yr_P}</div>
			<div class="table-row-cell">{Age_20_24_yr_F}</div>
			<div class="table-row-cell">{Age_20_24_yr_M}</div>

		</div><!-- end of row -->

		<div class="table-row">

			<div class="table-row-heading">
				25-34
			</div>

				<div class="table-row-cell">{Age_25_34_yr_P}</div>
				<div class="table-row-cell">{Age_25_34_yr_F}</div>
				<div class="table-row-cell">{Age_25_34_yr_M}</div>


		</div><!-- end of row -->

		<div class="table-row">

			<div class="table-row-heading">
				35-44
			</div>

				<div class="table-row-cell">{Age_35_44_yr_P}</div>
				<div class="table-row-cell">{Age_35_44_yr_F}</div>
				<div class="table-row-cell">{Age_35_44_yr_M}</div>


		</div><!-- end of row -->

		<div class="table-row">

			<div class="table-row-heading">
				45-54
			</div>

				<div class="table-row-cell">{Age_45_54_yr_P}</div>
				<div class="table-row-cell">{Age_45_54_yr_F}</div>
				<div class="table-row-cell">{Age_45_54_yr_M}</div>


		</div><!-- end of row -->


		<div class="table-row">

			<div class="table-row-heading">
				55-64
			</div>

				<div class="table-row-cell">{Age_55_64_yr_P}</div>
				<div class="table-row-cell">{Age_55_64_yr_F}</div>
				<div class="table-row-cell">{Age_55_64_yr_M}</div>


		</div><!-- end of row -->

		<div class="table-row">

			<div class="table-row-heading">
				65-74
			</div>

				<div class="table-row-cell">{Age_65_74_yr_P}</div>
				<div class="table-row-cell">{Age_65_74_yr_F}</div>
				<div class="table-row-cell">{Age_65_74_yr_M}</div>


		</div><!-- end of row -->

		<div class="table-row">

			<div class="table-row-heading">
				75-84
			</div>

				<div class="table-row-cell">{Age_75_84_yr_P}</div>
				<div class="table-row-cell">{Age_75_84_yr_F}</div>
				<div class="table-row-cell">{Age_75_84_yr_M}</div>


		</div><!-- end of row -->


		<div class="table-row">

			<div class="table-row-heading">
				85 and over
			</div>

				<div class="table-row-cell">{Age_85ov_P}</div>
				<div class="table-row-cell">{Age_85ov_F}</div>
				<div class="table-row-cell">{Age_85ov_M}</div>


		</div><!-- end of row -->


		<div class="table-row">

			<div class="table-row-heading">
				<b>TOTAL</b>
			</div>

			<div class="table-row-cell"><b>{Tot_P_P}</b></div>
			<div class="table-row-cell"><b>{Tot_P_F}</b></div>
			<div class="table-row-cell"><b>{Tot_P_M}</b></div>


		</div><!-- end of row -->

	</div><!-- end of table -->
</div><!-- end of popup -->



<div class="data-popup">
	<h3>INDIGENOUS POPULATION</h3>

	<div class="row-table four">

		<div class="table-headings">

			<h3 class="table-column-heading">

			</h3>

			<h3 class="table-column-heading">
				TOTAL
			</h3>

			<h3 class="table-column-heading">
				FEMALE
			</h3>

			<h3 class="table-column-heading">
				MALE
			</h3>


		</div><!-- end of row -->

		<div class="table-row">

			<div class="table-row-heading">
				Aboriginal
			</div>

			<div class="table-row-cell">{Indigenous_psns_Aboriginal_P}</div>
			<div class="table-row-cell">{Indigenous_psns_Aboriginal_F}</div>
			<div class="table-row-cell">{Indigenous_psns_Aboriginal_M}</div>


		</div><!-- end of row -->

		<div class="table-row">

			<div class="table-row-heading">
				Torres Straight Islander
			</div>

			<div class="table-row-cell">{Indig_psns_Torres_Strait_Is_P}</div>
			<div class="table-row-cell">{Indig_psns_Torres_Strait_Is_F}</div>
			<div class="table-row-cell">{Indig_psns_Torres_Strait_Is_M}</div>


		</div><!-- end of row -->

		<div class="table-row">

			<div class="table-row-heading">
				Aboriginal & Torres Straight Islander
			</div>

			<div class="table-row-cell">{Indig_Bth_Abor_Torres_St_Is_P}</div>
			<div class="table-row-cell">{Indig_Bth_Abor_Torres_St_Is_F}</div>
			<div class="table-row-cell">{Indig_Bth_Abor_Torres_St_Is_M}</div>


		</div><!-- end of row -->

		<div class="table-row">

			<div class="table-row-heading">
				<b>TOTAL INDIGENOUS</b>
			</div>

			<div class="table-row-cell">{Indigenous_P_Tot_P}</div>
			<div class="table-row-cell">{Indigenous_P_Tot_F}</div>
			<div class="table-row-cell">{Indigenous_P_Tot_M}</div>


		</div><!-- end of row -->

	</div><!-- end of table -->
</div><!-- end of popup -->


<div class="data-popup">
	<h3>ETHNICITY</h3>

	<div class="row-table four">

		<div class="table-headings">

			<h3 class="table-column-heading">

			</h3>

			<h3 class="table-column-heading">
				TOTAL
			</h3>

			<h3 class="table-column-heading">
				FEMALE
			</h3>

			<h3 class="table-column-heading">
				MALE
			</h3>


		</div><!-- end of row -->

		<div class="table-row">

			<div class="table-row-heading">
				Birthplace: Australia
			</div>

			<div class="table-row-cell">{Birthplace_Australia_P}</div>
			<div class="table-row-cell">{Birthplace_Australia_F}</div>
			<div class="table-row-cell">{Birthplace_Australia_M}</div>


		</div><!-- end of row -->

		<div class="table-row">

			<div class="table-row-heading">
				Birthplace: Elsewhere
			</div>

			<div class="table-row-cell">{Birthplace_Elsewhere_P}</div>
			<div class="table-row-cell">{Birthplace_Elsewhere_F}</div>
			<div class="table-row-cell">{Birthplace_Elsewhere_M}</div>


		</div><!-- end of row -->

		<div class="table-row">

			<div class="table-row-heading">
				Language spoken at home: English only
			</div>

			<div class="table-row-cell">{Lang_spoken_home_Eng_only_P}</div>
			<div class="table-row-cell">{Lang_spoken_home_Eng_only_F}</div>
			<div class="table-row-cell">{Lang_spoken_home_Eng_only_M}</div>


		</div><!-- end of row -->

		<div class="table-row">

			<div class="table-row-heading">
				Language spoken at home: Other Language
			</div>

			<div class="table-row-cell">{Lang_spoken_home_Oth_Lang_P}</div>
			<div class="table-row-cell">{Lang_spoken_home_Oth_Lang_F}</div>
			<div class="table-row-cell">{Lang_spoken_home_Oth_Lang_M}</div>


		</div><!-- end of row -->

		<div class="table-row">

			<div class="table-row-heading">
				Australian Citizen
			</div>

			<div class="table-row-cell">{Australian_citizen_P}</div>
			<div class="table-row-cell">{Australian_citizen_F}</div>
			<div class="table-row-cell">{Australian_citizen_M}</div>


		</div><!-- end of row -->

	</div><!-- end of table -->
</div><!-- end of popup -->




<div class="data-popup">
	<h3>EDUCATION</h3>

	<div class="row-table four">

		<div class="table-headings">

			<h3 class="table-column-heading">
				Education Level
			</h3>

			<h3 class="table-column-heading">
				TOTAL
			</h3>

			<h3 class="table-column-heading">
				FEMALE
			</h3>

			<h3 class="table-column-heading">
				MALE
			</h3>


		</div><!-- end of row -->

		<div class="table-row">

			<div class="table-row-heading">
				Attending Education Institution: Age 0-4
			</div>

			<div class="table-row-cell">{Age_psns_att_educ_inst_0_4_P}</div>
			<div class="table-row-cell">{Age_psns_att_educ_inst_0_4_F}</div>
			<div class="table-row-cell">{Age_psns_att_educ_inst_0_4_M}</div>


		</div><!-- end of row -->

		<div class="table-row">

			<div class="table-row-heading">
				Attending Education Institution: Age 5-14
			</div>

			<div class="table-row-cell">{Age_psns_att_educ_inst_5_14_P}</div>
			<div class="table-row-cell">{Age_psns_att_educ_inst_5_14_F}</div>
			<div class="table-row-cell">{Age_psns_att_educ_inst_5_14_M}</div>


		</div><!-- end of row -->

		<div class="table-row">

			<div class="table-row-heading">
				Attending Education Institution: Age 15-19
			</div>

			<div class="table-row-cell">{Age_psns_att_edu_inst_15_19_P}</div>
			<div class="table-row-cell">{Age_psns_att_edu_inst_15_19_F}</div>
			<div class="table-row-cell">{Age_psns_att_edu_inst_15_19_M}</div>


		</div><!-- end of row -->

		<div class="table-row">

			<div class="table-row-heading">
				Attending Education Institution: Age 20-24
			</div>

			<div class="table-row-cell">{Age_psns_att_edu_inst_20_24_P}</div>
			<div class="table-row-cell">{Age_psns_att_edu_inst_20_24_F}</div>
			<div class="table-row-cell">{Age_psns_att_edu_inst_20_24_M}</div>


		</div><!-- end of row -->

		<div class="table-row">

			<div class="table-row-heading">
				Attending Education Institution: Age 25 and over
			</div>

			<div class="table-row-cell">{Age_psns_att_edu_inst_25_ov_P}</div>
			<div class="table-row-cell">{Age_psns_att_edu_inst_25_ov_F}</div>
			<div class="table-row-cell">{Age_psns_att_edu_inst_25_ov_M}</div>


		</div><!-- end of row -->

		<div class="table-row">

			<div class="table-row-heading">
				Did not go to school
			</div>

			<div class="table-row-cell">{High_yr_schl_comp_D_n_g_sch_P}</div>
			<div class="table-row-cell">{High_yr_schl_comp_D_n_g_sch_F}</div>
			<div class="table-row-cell">{High_yr_schl_comp_D_n_g_sch_M}</div>


		</div><!-- end of row -->

		<div class="table-row">

			<div class="table-row-heading">
				Highest School Year Completed: Year 8 or Below
			</div>

			<div class="table-row-cell">{High_yr_schl_comp_Yr_8_belw_P}</div>
			<div class="table-row-cell">{High_yr_schl_comp_Yr_8_belw_F}</div>
			<div class="table-row-cell">{High_yr_schl_comp_Yr_8_belw_M}</div>


		</div><!-- end of row -->

		<div class="table-row">

			<div class="table-row-heading">
				Highest School Year Completed: Year 9 Equivalent
			</div>

			<div class="table-row-cell">{High_yr_schl_comp_Yr_9_eq_P}</div>
			<div class="table-row-cell">{High_yr_schl_comp_Yr_9_eq_F}</div>
			<div class="table-row-cell">{High_yr_schl_comp_Yr_9_eq_M}</div>


		</div><!-- end of row -->

		<div class="table-row">

			<div class="table-row-heading">
				Highest School Year Completed: Year 10 Equivalent
			</div>

			<div class="table-row-cell">{High_yr_schl_comp_Yr_10_eq_P}</div>
			<div class="table-row-cell">{High_yr_schl_comp_Yr_10_eq_F}</div>
			<div class="table-row-cell">{High_yr_schl_comp_Yr_10_eq_M}</div>


		</div><!-- end of row -->

		<div class="table-row">

			<div class="table-row-heading">
				Highest School Year Completed: Year 11 Equivalent
			</div>

			<div class="table-row-cell">{High_yr_schl_comp_Yr_11_eq_P}</div>
			<div class="table-row-cell">{High_yr_schl_comp_Yr_11_eq_F}</div>
			<div class="table-row-cell">{High_yr_schl_comp_Yr_11_eq_M}</div>


		</div><!-- end of row -->

		<div class="table-row">

			<div class="table-row-heading">
				Highest School Year Completed: Year 12 Equivalent
			</div>

			<div class="table-row-cell">{High_yr_schl_comp_Yr_12_eq_P}</div>
			<div class="table-row-cell">{High_yr_schl_comp_Yr_12_eq_F}</div>
			<div class="table-row-cell">{High_yr_schl_comp_Yr_12_eq_M}</div>


		</div><!-- end of row -->

	</div><!-- end of table -->
</div><!-- end of popup -->




<div class="data-popup">
	<h3>CENSUS NIGHT</h3>

	<div class="row-table four">

		<div class="table-headings">

			<h3 class="table-column-heading">
				PERSONS COUNTED
			</h3>

			<h3 class="table-column-heading">
				TOTAL
			</h3>

			<h3 class="table-column-heading">
				FEMALE
			</h3>

			<h3 class="table-column-heading">
				MALE
			</h3>


		</div><!-- end of row -->

		<div class="table-row">

			<div class="table-row-heading">
				In Occupied Private Dwellings
			</div>

			<div class="table-row-cell">{Count_psns_occ_priv_dwgs_P}</div>
			<div class="table-row-cell">{Count_psns_occ_priv_dwgs_F}</div>
			<div class="table-row-cell">{Count_psns_occ_priv_dwgs_M}</div>


		</div><!-- end of row -->

		<div class="table-row">

			<div class="table-row-heading">
				In Other Dwellings
			</div>

			<div class="table-row-cell">{Count_Persons_other_dwgs_P}</div>
			<div class="table-row-cell">{Count_Persons_other_dwgs_F}</div>
			<div class="table-row-cell">{Count_Persons_other_dwgs_M}</div>


		</div><!-- end of row -->

		<div class="table-row">

			<div class="table-row-heading">
				At Home
			</div>

			<div class="table-row-cell">{Counted_Census_Night_home_P}</div>
			<div class="table-row-cell">{Counted_Census_Night_home_F}</div>
			<div class="table-row-cell">{Counted_Census_Night_home_M}</div>


		</div><!-- end of row -->

		<div class="table-row">

			<div class="table-row-heading">
				Elsewhere in Australia
			</div>

			<div class="table-row-cell">{Count_Census_Nt_Ewhere_Aust_P}</div>
			<div class="table-row-cell">{Count_Census_Nt_Ewhere_Aust_F}</div>
			<div class="table-row-cell">{Count_Census_Nt_Ewhere_Aust_M}</div>


		</div><!-- end of row -->

	</div><!-- end of table -->
</div><!-- end of popup -->



`
