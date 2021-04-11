/////////////////////////////////////////////////////////////////////////////////////

// SEOL V2.0
// LAST UPDATED 02-MAR-21

// PART A: ACCOUNT INFORMATION
// PART B: ACCOUNT SPECIFIC REFERENCES
// PART C: PRODUCT SPECIFIC REFERENCES
// PART D: SPORTSEYE REFERENCES
// PART E: MENU LAYOUT

/////////////////////////////////////////////////////////////////////////////////////

// PART A: ACCOUNT INFORMATION

/////////////////////////////////////////////////////////////////////////////////////

// 1. LOGIN TITLES

// 1A. LOGIN SCHREEN
const ACCOUNT_NAME = "AUSTRALIAN SPORTS CAMPS"

// 1B. PRODUCT SELECTION PAGE
const SPLASH_APPS = [
  {
    name: 'SPORTSEYE OPERATOR - LITE',
    lede: '<p>A business intelligence service tailored for your organisation.</p>',
    action: 'ENTER',
    route: '/home',
    disabled: false
  },
  // {
  //   name: 'OPTION B',
  //   lede: '<p>Enabled.</p>',
  //   action: 'ENTER',
  //   route: '/home',
  //   disabled: false
  // }
]

// 1C. LOGIN SPLASH
const SPLASH = {
  lede: `

  ActiveXchange. Empowering data. Intelligent investment.`,
  head: "WELCOME TO SPORTSEYE",
  subhead: ACCOUNT_NAME,
  disclaimer: '<span><a href="https://activexchange.org/your-data-our-commitment" target="_blank">SportsEye Terms of Use</a><span>',
  action: "ENTER"
}

const AFFILIATE_LOGOS = [
  "",
]


// 2. MAP DETAILS

// 2A. MAPBOX ACCOUNT DETAILS
// // Mapbox Account: activexchange+cust
const MAPBOX_APIKEY = "pk.eyJ1IjoiYWN0aXZleGNoYW5nZS1jdXN0IiwiYSI6ImNrM292dnI2eDI1Z2MzaHBobWk4Z3Q2cnQifQ.Nx-qysX5Bjm33Zwux6H1dA"
// // Mapbox Studio Style: SE_HANDOVER_SEO
const MAPBOX_STYLE = "mapbox://styles/activexchange-cust/ckjc99yb2bo6f19lh4sfj01to"


// 2B. STARTING MAP VIEW

const MAP_START = {
  lat: -37.748453, lng: 145.101967, zoom: 9 //MELBOURNE
}

// 3. IMAGES

// 3A. MENU IMAGES
const PRIMARY_MENU_IMAGE = '/images/SportsEye_Swimming.jpg'


/////////////////////////////////////////////////////////////////////////////////////

// PART B: ACCOUNT SPECIFIC REFERENCES

/////////////////////////////////////////////////////////////////////////////////////

// TEMP
const EXAMPLE = `
`

// 1. POPUPS

const module_asc_sectionall_layers_site_popup_hover = `
<h4>{site_name}</h4>
<p>Total Members:</p>
<h4>{site_mem}</h4>
<p>Club Members:</p>
<!-- BUG -->{site_clubs}
`

const module_asc_sectionall_layers_area_popup_hover = `
<h4>{AREA_NAME}</h4>
<p>1. Total Members</p>
<h4>{seol_001_mem_all}</h4>
<p>2A. Member Age Group: 5 - 9</p>
<h4>{seol_001_cust_mem_5_9}</h4>
<p>2B. Member Age Group: 10 - 14</p>
<h4>{seol_001_cust_mem_10_14}</h4>
<p>2C. Member Age Group: 15 - 19</p>
<h4>{seol_001_cust_mem_15_19}</h4>
<p>3. Demand</p>
<h4>{seol_001_dem_all}</h4>
<p>4. Conversion</p>
<h4>{seol_001_mem_dem_cnv_all}%</h4>
`

const COMPETITOR_POPUP = `
<h4>{site_name}</h4>
<p>Company: <b>{site_category_code}</b></p>
<p>Program: <b>{program}</b></p>
<p>Location Type: <b>{location_type}</b></p>
<p>Duration - Hours: <b>{duration_hours}</b></p>
<p>Duration - Days: <b>{duration_days}</b></p>
<p>Description: <b>{description}</b></p>
<p>Price: <b>{price}</b></p>
<p>Price / Day: <b>{price_day}</b></p>
<p>Comment: <b>{comment}</b></p>
`


// 2. DASHBOARDS

// 3. LAYER TEXT

const MODULE_SUMMARY_ALL_LOCTIONS = `
<p>Select layers below to display on the map.</p>
<p><a href="https://datastudio.google.com/reporting/f1ca2015-f92b-4958-906f-bb3956ad57f4/page/2iAAC" target="_blank" style="text-decoration: underline !important;font-weight:bold;"> Click here </a> to see the Top Aggregated Unmet Demand Locations </p>
`

const SITE_MEM_ALL_TEXT = `
<b>Colour: Category</b><br>
Purple: Members at Site<br>Black: No Members at Site<br><br>
<b>Size: Total Members</b>

`
const AREA_MEM_ALL_TEXT = `
<b>Colour: Total Members</b>
`
const AREA_MEM_5_9_TEXT = `
<b>Colour: Total Members Aged 5 to 9</b>
`
const AREA_MEM_10_14_TEXT = `
<b>Colour: Total Members Aged 10 to 14</b>
`
const AREA_MEM_15_19_TEXT = `
<b>Colour: Total Members Aged 15 to 19</b>
`
const AREA_DEM_ALL_TEXT = `
<b>Colour: Total Demand</b>
`
const AREA_DEM_CNV_ALL_TEXT = `
<b>Colour: Conversion %</b><br>
Total Members / Total Demand
`
const AREA_UNMT_DEM_AGG_TEXT = `
<b>Colour: Aggregated Unmet Demand</b>
`
const TOP_SEGMENTS_TEXT = `
<p>Top demographic lifestyle segments, ranked according to the percentage of the overall sport profile.</p>

<style>
ul{
    float:left;
    clear:right;
    padding:15px;
}
li {
    float:left;
    clear:left;
}
</style>
<ul class="ul">
   <h5>METRO</h5>
  <li>A02: <b>1.03%</b></li>
  <li>A01: <b>0.81%</b></li>
  <li>A03: <b>0.80%</b></li>
  <li>A04: <b>0.60%</b></li>
  <li>C11: <b>0.48%</b></li>
</ul>
<ul class="ul">
<h5>RURAL</h5>
   <li>A04: <b>0.66%</b></li>
  <li>A02: <b>0.35%</b></li>
  <li>G25: <b>0.27%</b></li>
  <li>E20: <b>0.20%</b></li>
  <li>M48: <b>0.19%</b></li>
</ul>

<br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<p>Full details on all 49 possible segments, which are provided by ActiveXchange’s profiling partner Experian, can be found <a style="font-weight: bold;" href="https://activexchange.org/segments" target="_blank">here<a>.</p>


`


const COMP_DELIVERY_TEXT = `
<b>Colour: Category</b><br>
Blue: Sports Camps Australia<br>
Green: KidzPhyz<br>
Light Blue: Coerver<br>
Orange: Boost Sports<br>
Pink : Motv8sports<br>
Purple: Dynamic Footy Skills
`
const COMP_TEXT = `
<b>Competitor Location</b>
`

const CX_FAM_CHILD_TEXT = `
<b>Colour: Total Families with Children under 15</b>
`
const AREA_DEMOGRAPHICS_POPUP = `
<h3>{AREA_NAME}</h3>
<p>1. FAMILIES WITH CHILDREN UNDER 15 (AREA)</p>
<h4>{CX_FAM_CHILD}</h4>
`


// 4. DOCUMENTS




/////////////////////////////////////////////////////////////////////////////////////

// PART C: PRODUCT SPECIFIC REFERENCES

/////////////////////////////////////////////////////////////////////////////////////


// MODULE - MEMBER DEMAND
const module_mem_name = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/module_name')
const module_mem_submodule1_name = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule1_name')
const module_mem_submodule1_section1_heading = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule1_section1_heading')
const module_mem_submodule1_section1_layer1_legendText = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule1_section1_layer1_legendText')
const module_mem_submodule1_section1_text = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule1_section1_text')
const module_mem_submodule1_section2_heading = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule1_section2_heading')
const module_mem_submodule1_section2_layer1_legendText = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule1_section2_layer1_legendText')
const module_mem_submodule1_section2_layer2_legendText = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule1_section2_layer2_legendText')
const module_mem_submodule1_section2_text = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule1_section2_text')
const module_mem_submodule1_section3_heading = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule1_section3_heading')
const module_mem_submodule1_section3_layer1_legendText = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule1_section3_layer1_legendText')
const module_mem_submodule1_section3_layer2_legendText = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule1_section3_layer2_legendText')
const module_mem_submodule1_section3_text = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule1_section3_text')
const module_mem_submodule1_section4_heading = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule1_section4_heading')
const module_mem_submodule1_section4_layer1_legendText = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule1_section4_layer1_legendText')
const module_mem_submodule1_section4_layer2_legendText = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule1_section4_layer2_legendText')
const module_mem_submodule1_section4_text = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule1_section4_text')
const module_mem_submodule1_section_layer_details_documentHtml = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule1_section_layer_details_documentHtml')
const module_mem_submodule1_summary = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule1_summary')



/////////////////////////////////////////////////////////////////////////////////////

// PART D: SPORTSEYE REFERENCES

/////////////////////////////////////////////////////////////////////////////////////


// LAYER DETAILS
const module_se_section_layer_details_heading = require('../group-references/SE_PRODUCT/SE_MODULES/module_se_section_layer_details_heading')

// MODULE - COMMUNITY PROFILE
const module_cp_module_cp_submodule4_summary = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/module_cp_submodule4_summary')
const module_cp_module_name = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/module_name')
const module_cp_submodule1_name = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule1_name')
const module_cp_submodule1_section1_heading = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule1_section1_heading')
const module_cp_submodule1_section1_layer1_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule1_section1_layer1_legendText')
const module_cp_submodule1_section1_text = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule1_section1_text')
const module_cp_submodule1_section2_heading = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule1_section2_heading')
const module_cp_submodule1_section2_layer1_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule1_section2_layer1_legendText')
const module_cp_submodule1_section2_text = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule1_section2_text')
const module_cp_submodule1_section3_heading = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule1_section3_heading')
const module_cp_submodule1_section3_layer1_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule1_section3_layer1_legendText')
const module_cp_submodule1_section3_text = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule1_section3_text')
const module_cp_submodule1_section4_heading = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule1_section4_heading')
const module_cp_submodule1_section4_layer1_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule1_section4_layer1_legendText')
const module_cp_submodule1_section4_text = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule1_section4_text')
const module_cp_submodule1_section5_heading = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule1_section5_heading')
const module_cp_submodule1_section5_layer1_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule1_section5_layer1_legendText')
const module_cp_submodule1_section5_layer2_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule1_section5_layer2_legendText')
const module_cp_submodule1_section5_text = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule1_section5_text')
const module_cp_submodule1_section6_heading = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule1_section6_heading')
const module_cp_submodule1_section6_layer1_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule1_section6_layer1_legendText')
const module_cp_submodule1_section6_layer2_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule1_section6_layer2_legendText')
const module_cp_submodule1_section6_layer3_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule1_section6_layer3_legendText')
const module_cp_submodule1_section6_text = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule1_section6_text')
const module_cp_submodule1_sectiondetails_documentHtml = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule1_sectiondetails_documentHtml')
const module_cp_submodule1_sectionmaps_area_layers_popup_click = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule1_sectionmaps_area_layers_popup_click')
const module_cp_submodule1_sectionmaps_area_layers_popup_hover = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule1_sectionmaps_area_layers_popup_hover')
const module_cp_submodule1_summary = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule1_summary')
const module_cp_submodule2_name = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule2_name')
const module_cp_submodule2_section1_heading = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule2_section1_heading')
const module_cp_submodule2_section1_layer1_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule2_section1_layer1_legendText')
const module_cp_submodule2_section1_text = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule2_section1_text')
const module_cp_submodule2_sectiondetails_documentHtml = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule2_sectiondetails_documentHtml')
const module_cp_submodule2_sectionmaps_area_layers_popup_hover = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule2_sectionmaps_area_layers_popup_hover')
const module_cp_submodule2_summary = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule2_summary')
const module_cp_submodule3_name = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_name')
const module_cp_submodule3_section1_heading = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section1_heading')
const module_cp_submodule3_section1_layer1_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section1_layer1_legendText')
const module_cp_submodule3_section1_text = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section1_text')
const module_cp_submodule3_section2_heading = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section2_heading')
const module_cp_submodule3_section2_layer1_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section2_layer1_legendText')
const module_cp_submodule3_section2_layer2_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section2_layer2_legendText')
const module_cp_submodule3_section2_layer3_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section2_layer3_legendText')
const module_cp_submodule3_section2_text = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section2_text')
const module_cp_submodule3_section3_heading = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section3_heading')
const module_cp_submodule3_section3_layer1_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section3_layer1_legendText')
const module_cp_submodule3_section3_layer2_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section3_layer2_legendText')
const module_cp_submodule3_section3_layer3_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section3_layer3_legendText')
const module_cp_submodule3_section3_text = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section3_text')
const module_cp_submodule3_section4_heading = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section4_heading')
const module_cp_submodule3_section4_layer1_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section4_layer1_legendText')
const module_cp_submodule3_section4_layer2_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section4_layer2_legendText')
const module_cp_submodule3_section4_layer3_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section4_layer3_legendText')
const module_cp_submodule3_section4_text = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section4_text')
const module_cp_submodule3_section5_heading = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section5_heading')
const module_cp_submodule3_section5_layer1_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section5_layer1_legendText')
const module_cp_submodule3_section5_layer2_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section5_layer2_legendText')
const module_cp_submodule3_section5_layer3_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section5_layer3_legendText')
const module_cp_submodule3_section5_text = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section5_text')
const module_cp_submodule3_section6_heading = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section6_heading')
const module_cp_submodule3_section6_layer1_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section6_layer1_legendText')
const module_cp_submodule3_section6_layer2_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section6_layer2_legendText')
const module_cp_submodule3_section6_layer3_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section6_layer3_legendText')
const module_cp_submodule3_section6_text = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section6_text')
const module_cp_submodule3_sectiondetails_documentHtml = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_sectiondetails_documentHtml')
const module_cp_submodule3_sectionmaps_area_layers_popup_hover = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_sectionmaps_area_layers_popup_hover')
const module_cp_submodule3_summary = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_summary')
const module_cp_submodule4_name = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule4_name')
const module_cp_submodule4_section1_heading = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule4_section1_heading')
const module_cp_submodule4_section1_layer1_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule4_section1_layer1_legendText')
const module_cp_submodule4_section1_layer2_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule4_section1_layer2_legendText')
const module_cp_submodule4_section1_layer3_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule4_section1_layer3_legendText')
const module_cp_submodule4_section1_layer4_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule4_section1_layer4_legendText')
const module_cp_submodule4_section1_layer5_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule4_section1_layer5_legendText')
const module_cp_submodule4_section1_text = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule4_section1_text')
const module_cp_submodule4_section2_heading = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule4_section2_heading')
const module_cp_submodule4_section2_layer1_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule4_section2_layer1_legendText')
const module_cp_submodule4_section2_layer2_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule4_section2_layer2_legendText')
const module_cp_submodule4_section2_text = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule4_section2_text')
const module_cp_submodule4_section3_heading = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule4_section3_heading')
const module_cp_submodule4_section3_layer1_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule4_section3_layer1_legendText')
const module_cp_submodule4_section3_layer2_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule4_section3_layer2_legendText')
const module_cp_submodule4_section3_text = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule4_section3_text')
const module_cp_submodule4_section4_heading = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule4_section4_heading')
const module_cp_submodule4_section4_text = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule4_section4_text')
const module_cp_submodule4_sectiondetails_documentHtml = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule4_sectiondetails_documentHtml')
const module_cp_submodule4_sectionmaps_site_layers_popup_hover = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule4_sectionmaps_site_layers_popup_hover')
const module_cp_submodule4_summary = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule4_summary')
const module_cp_submodule5_name = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule5_name')
const module_cp_submodule5_section1_heading = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule5_section1_heading')
const module_cp_submodule5_section1_layer1_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule5_section1_layer1_legendText')
const module_cp_submodule5_section1_layer2_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule5_section1_layer2_legendText')
const module_cp_submodule5_section1_layer3_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule5_section1_layer3_legendText')
const module_cp_submodule5_section1_layer4_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule5_section1_layer4_legendText')
const module_cp_submodule5_section1_layer5_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule5_section1_layer5_legendText')
const module_cp_submodule5_section1_text = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule5_section1_text')
const module_cp_submodule5_section2_heading = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule5_section2_heading')
const module_cp_submodule5_section2_layer1_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule5_section2_layer1_legendText')
const module_cp_submodule5_section2_layer2_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule5_section2_layer2_legendText')
const module_cp_submodule5_section2_text = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule5_section2_text')
const module_cp_submodule5_section3_heading = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule5_section3_heading')
const module_cp_submodule5_section3_layer1_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule5_section3_layer1_legendText')
const module_cp_submodule5_section3_layer2_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule5_section3_layer2_legendText')
const module_cp_submodule5_section3_text = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule5_section3_text')
const module_cp_submodule5_section4_heading = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule5_section4_heading')
const module_cp_submodule5_section4_text = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule5_section4_text')
const module_cp_submodule5_sectiondetails_documentHtml = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule5_sectiondetails_documentHtml')
const module_cp_submodule5_sectionmaps_site_layers_popup_hover = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule5_sectionmaps_site_layers_popup_hover')
const module_cp_submodule5_summary = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule5_summary')


//LAYER ICONS
const AREA_ICON = '/images/icons/land.svg'
const POINT_ICON = '/images/icons/pin.svg'
const PEOPLE_ICON = '/images/icons/people.svg'
const DOCUMENT_ICON = '/images/icons/document.svg'
const DASHBOARD_ICON = '/images/icons/dashboard.svg'
const QUESTION_ICON = '/images/icons/question-mark.svg'
const AUDIT_ICON = '/images/icons/audit.svg'



/////////////////////////////////////////////////////////////////////////////////////

// PART E: MENU LAYOUT

/////////////////////////////////////////////////////////////////////////////////////


const CATEGORIES = [
  {
    id: 'module_mem',
    name: 'SITE & AREA PERFORMANCE',
    collapsible: true,
    type: 'CODE_VIEWER',
    CODES: [
      {
        name: 'ASC CAMPS',
        id: 'asc_camps',
        image: PRIMARY_MENU_IMAGE,
        summary: MODULE_SUMMARY_ALL_LOCTIONS,
        sections: [
          {
            heading: '1. TOTAL MEMBERS',
            text: AREA_MEM_ALL_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'seol_001_mem_all_SA2',
                legendText: 'Total Members in SA2 Area',
                hover: module_asc_sectionall_layers_area_popup_hover,
                // click: ,
              },
              {
                id: 'seol_001_mem_all_LGA',
                name: 'LGA',
                legendText: 'Total Members in LGA Area',
                hover: module_asc_sectionall_layers_area_popup_hover,
                // click: ,
              },
            ]
          },//END OF SECTION
          {
            heading: '2A. MEMBER AGE GROUP: 5 - 9',
            text: AREA_MEM_5_9_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'seol_001_cust_mem_5_9_SA2',
                legendText: 'Total Persons Aged 5 - 9 in SA2 Area',
                hover: module_asc_sectionall_layers_area_popup_hover,
                // click: ,
              },
              {
                name: 'LGA',
                id: 'seol_001_cust_mem_5_9_LGA',
                legendText: 'Total Persons Aged 5 - 9 in LGA Area',
                hover: module_asc_sectionall_layers_area_popup_hover,
                // click: ,
              },
            ]
          },//END OF SECTION
          {
            heading: '2B. MEMBER AGE GROUP: 10 - 14',
            text: AREA_MEM_10_14_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'seol_001_cust_mem_10_14_SA2',
                legendText: 'Total Persons Aged 10 - 14 in SA2 Area',
                hover: module_asc_sectionall_layers_area_popup_hover,
                // click: ,
              },
              {
                name: 'LGA',
                id: 'seol_001_cust_mem_10_14_LGA',
                legendText: 'Total Persons Aged 10 - 14 in LGA Area',
                hover: module_asc_sectionall_layers_area_popup_hover,
                // click: ,
              },
            ]
          },//END OF SECTION
          {
            heading: '2C. MEMBER AGE GROUP: 15 - 19',
            text: AREA_MEM_15_19_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'seol_001_cust_mem_15_19_SA2',
                legendText: 'Total Persons Aged 15 - 19 in SA2 Area',
                hover: module_asc_sectionall_layers_area_popup_hover,
                // click: ,
              },
              {
                name: 'LGA',
                id: 'seol_001_cust_mem_15_19_LGA',
                legendText: 'Total Persons Aged 15 - 19 in LGA Area',
                hover: module_asc_sectionall_layers_area_popup_hover,
                // click: ,
              },
            ]
          },//END OF SECTION
          {
            heading: '3. DEMAND',
            text: AREA_DEM_ALL_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'seol_001_dem_all_SA2',
                legendText: 'Total Demand in SA2 Area',
                hover: module_asc_sectionall_layers_area_popup_hover,
                // click: ,
              },
              {
                id: 'seol_001_dem_all_LGA',
                name: 'LGA',
                legendText: 'Total Demand in LGA Area',
                hover: module_asc_sectionall_layers_area_popup_hover,
                // click: ,
              },
            ]
          },//END OF SECTION
          {
            heading: '4. CONVERSION',
            text: AREA_DEM_CNV_ALL_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'seol_001_mem_dem_cnv_all_SA2',
                legendText: 'Total Demand Conversion (%) in SA2 Area',
                hover: module_asc_sectionall_layers_area_popup_hover,
                // click: ,
              },
              {
                id: 'seol_001_mem_dem_cnv_all_LGA',
                name: 'LGA',
                legendText: 'Total Demand Conversion (%) in LGA Area',
                hover: module_asc_sectionall_layers_area_popup_hover,
                // click: ,
              },
            ]
          },//END OF SECTION
          {
            heading: '5. CAMP NAMES',
            text: SITE_MEM_ALL_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'seol_001_mem_SITE',
                legendText: 'Total Members at Site',
                hover: module_asc_sectionall_layers_site_popup_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: '6. AGGREGATED UNMET DEMAND',
            text: AREA_UNMT_DEM_AGG_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'seol_001_unmtdem_agg_SA1',
                legendText: 'Aggregated Unmet Demand in SA1 Area',
                hover: '<H4>{AREA_NAME}</h4><p>Aggregated Unmet Demand:</p><h4>{seol_001_unmtdem_agg}</h4>',
              },
            ]
          },//END OF SECTION
          {
              heading: '7. TOP SEGMENTS',
              text: TOP_SEGMENTS_TEXT,
              icon: '/images/icons/people.svg',
          },//END OF SECTION
        ]
      },//END OF SUB-MODULE
    ]
  },//END OF MODULE
  {
    id: 'area_context', // COMMUNITY PROFILE
    name: 'AREA CONTEXT',
    // name: module_cp_module_name,
    collapsible: true,
    type: 'CODE_VIEWER',
    CODES: [
      {
        name: 'SCHOOLS', // AREA INFO AUS
        id: 'schools',
        image: PRIMARY_MENU_IMAGE,
        summary: '<p>Select layers below to display on the map.</p>',
        sections: [
          {
            heading: module_cp_submodule4_section1_heading,
            text: module_cp_submodule4_section1_text,
            icon: POINT_ICON,
            layers: [
              {
                name: 'ALL',
                id: 'AUS_SCHL_ROLL',
                legendText: module_cp_submodule4_section1_layer1_legendText,
                hover: module_cp_submodule4_sectionmaps_site_layers_popup_hover,
              },
              {
                name: 'PRIMARY',
                id: 'AUS_SCHL_ROLL_LVL_PRIM',
                legendText: module_cp_submodule4_section1_layer2_legendText,
                hover: module_cp_submodule4_sectionmaps_site_layers_popup_hover,
              },
              {
                name: 'COMBINED',
                id: 'AUS_SCHL_ROLL_LVL_COMB',
                legendText: module_cp_submodule4_section1_layer3_legendText,
                hover: module_cp_submodule4_sectionmaps_site_layers_popup_hover,
              },
              {
                name: 'SECONDARY',
                id: 'AUS_SCHL_ROLL_LVL_SECN',
                legendText: module_cp_submodule4_section1_layer4_legendText,
                hover: module_cp_submodule4_sectionmaps_site_layers_popup_hover,
              },
              {
                name: 'SPECIAL',
                id: 'AUS_SCHL_ROLL_LVL_SPEC',
                legendText: module_cp_submodule4_section1_layer5_legendText,
                hover: module_cp_submodule4_sectionmaps_site_layers_popup_hover,
              },
            ]
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
      {
        name: 'COMPETITORS', 
        id: 'competitors',
        image: PRIMARY_MENU_IMAGE,
        summary: '<p>Select layers below to display on the map.</p>',
        sections: [
          {
            heading: '1. ALL COMPETITOR DELIVERY LOCATIONS',
            text: COMP_DELIVERY_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'seol_001_comp_SITE',
                legendText: 'Competitor Delivery Locations (Colour: Category)',
                hover: COMPETITOR_POPUP,
              },
            ]
          },//END OF SECTION
          {
            heading: '2. SPORTS CAMPS AUSTRALIA',
            text: COMP_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'seol_001_comp_sca_SITE',
                legendText: 'Sports Camps Australia Locations',
                hover: COMPETITOR_POPUP,
              },
            ]
          },//END OF SECTION
          {
            heading: '3. KIDZPHYZ',
            text: COMP_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'seol_001_comp_kidz_SITE',
                legendText: 'KidzPhyz Locations',
                hover: COMPETITOR_POPUP,
              },
            ]
          },//END OF SECTION
          {
            heading: '4. COERVER',
            text: COMP_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'seol_001_comp_coer_SITE',
                legendText: 'Coerver Locations',
                hover: COMPETITOR_POPUP,
              },
            ]
          },//END OF SECTION
          {
            heading: '5. BOOST SPORTS',
            text: COMP_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'seol_001_comp_boos_SITE',
                legendText: 'Boost Sports Locations',
                hover: COMPETITOR_POPUP,
              },
            ]
          },//END OF SECTION
          {
            heading: '6. MOTIV8SPORTS',
            text: COMP_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'seol_001_comp_moti_SITE',
                legendText: 'Motiv8sports Locations',
                hover: COMPETITOR_POPUP,
              },
            ]
          },//END OF SECTION
          {
            heading: '7. DYNAMIC FOOTY SKILLS',
            text: COMP_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'seol_001_comp_dyna_SITE',
                legendText: 'Dynamic Footy Skills Locations',
                hover: COMPETITOR_POPUP,
              },
            ]
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
      {
        name: 'DEMOGRAPHICS', // CENSUS KEY INDICATORS AUS
        id: 'demographics',
        image: PRIMARY_MENU_IMAGE,
        summary: '<p>Select layers below to display on the map.</p>',
        sections: [
            {
            heading: '1. FAMILIES WITH CHILDREN',
            text: CX_FAM_CHILD_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'seol_001_cust_families_SA2',
                legendText: 'Total Families with Children in SA2 Area',
                hover: '<h4>{AREA_NAME}</h4><p>Families with children:</p><h4>{seol_001_cust_families}</h4>',
              },
              {
                name: 'LGA',
                id: 'seol_001_cust_families_LGA',
                legendText: 'Total Families with Children in LGA Area',
                hover: '<h4>{AREA_NAME}</h4><p>Families with children:</p><h4>{seol_001_cust_families}</h4>',
              },
            ]
          },//END OF SECTION
          {
            heading: '2. DEPRIVATION',
            text: module_cp_submodule1_section5_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'LGA',
                id: 'cp_cen_dep_LGA',
                legendText: module_cp_submodule1_section5_layer1_legendText,
                // click: module_cp_submodule1_sectionmaps_area_layers_popup_click,
                hover: '<h4>{AREA_NAME}</h4><p>Deprivation Decile:</p><h4>{cp_cen_dep}</h4>',
              },
              {
                name: 'SA1',
                id: 'cp_cen_dep_SA1',
                legendText: module_cp_submodule1_section5_layer2_legendText,
                // click: AREA_COMMUNITY_POPUP,
                hover: '<h4>{AREA_NAME}</h4><p>Deprivation Decile:</p><h4>{cp_cen_dep}</h4>',
              },
            ]
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
      {
        name: 'AREA INFO', // AREA INFO AUS
        id: 'area_info',
        image: PRIMARY_MENU_IMAGE,
        summary: '<p>Select layers below to display on the map.</p>',
        sections: [
          {
            heading: '1. AREA BOUNDARIES',
            text: module_cp_submodule4_section2_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'cp_bndry_SA2',
                legendText: module_cp_submodule4_section2_layer1_legendText,
                // click: '<p>{AREA_NAME}<p>',
                // hover: '<p>{AREA_NAME}<p>',
              },
              {
                name: 'LGA',
                id: 'cp_bndry_LGA',
                legendText: module_cp_submodule4_section2_layer2_legendText,
                // click: '<p>{AREA_NAME}<p>',
                // hover: '<p>{AREA_NAME}<p>',
              },
            ]
          },//END OF SECTION
          {
            heading: '2. AREA LABELS',
            text: module_cp_submodule4_section3_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'cp_label_SA2',
                legendText: module_cp_submodule4_section3_layer1_legendText,
                // click: '<p>{AREA_NAME}<p>',
                // hover: '<p>{AREA_NAME}<p>',
              },
              {
                name: 'LGA',
                id: 'cp_label_LGA',
                legendText: module_cp_submodule4_section3_layer2_legendText,
                // click: '<p>{AREA_NAME}<p>',
                // hover: '<p>{AREA_NAME}<p>',
              },
            ]
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
    ]
  }, //END OF MODULE
]

module.exports = {
  CATEGORIES,
  SPLASH,
  SPLASH_APPS,
  AFFILIATE_LOGOS,
  MAPBOX_STYLE,
  MAPBOX_APIKEY,
  MAP_START
}
