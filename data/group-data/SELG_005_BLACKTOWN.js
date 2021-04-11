/////////////////////////////////////////////////////////////////////////////////////

// SELG V2.0
// LAST UPDATED 03-NOV-20

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
const ACCOUNT_NAME = "BLACKTOWN CITY COUNCIL"

// 1B. PRODUCT SELECTION PAGE
const SPLASH_APPS = [
  {
    name: 'SPORTSEYE LOCAL GOVERNMENT',
    lede: '<p>Empowering data to shape a more informed, connected and active sector.</p>',
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
// // Mapbox Studio Style: SE_HANDOVER_SEC_NSW
const MAPBOX_STYLE = "mapbox://styles/activexchange-cust/ckh1lmtj60lz41aqjzhlwuaq4"


// 2B. STARTING MAP VIEW

const MAP_START = {
   lat: -33.746, lng: 150.980, zoom: 10 //BLACKTOWN
} 

// 3. IMAGES

// 3A. MENU IMAGES
const PRIMARY_MENU_IMAGE = '/images/SportsEye_Swimming.jpg'


/////////////////////////////////////////////////////////////////////////////////////

// PART B: ACCOUNT SPECIFIC REFERENCES

/////////////////////////////////////////////////////////////////////////////////////

// 1. POPUPS

const module_lap_area_popup_hover = `
<h4>{AREA_NAME}</h4>
<p>1. Members:</p>
<h4>{selg_005_mem}</h4>
<p>2. Demand:</p>
<h4>{selg_005_dem}</h4>
<p>3. Conversion</p>
<h4>{selg_005_mem_dem_cnv}%</h4>
`

// 2. DASHBOARDS


const module_lap_dashboard_leisure = `
<h1>LEISURE & AQUATICS</h1>
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/1aDPzXCobqhlrbEFO9rC37yYdgUkeTqs2/page/aX9BB" frameborder="0" style="border:0" allowfullscreen></iframe>
`

const module_lap_dashboard_aquatic = `
<h1>SWIM SCHOOL</h1>
`

const module_lap_dashboard_social = `
<h1>SOCIAL VALUE</h1>
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/1ho3-lpWPqcGoyzjGPGzfUNVWJDEkSc4I/page/28q8" frameborder="0" style="border:0" allowfullscreen></iframe>
`

const module_lap_dashboard_covid = `
<h1>COVID RECOVERY</h1>
`


const module_mem_dashboard_summary = `
<h1>SPORT SUMMARY DASHBOARD</h1>
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/e9f5300c-b3ab-4435-a8a0-565b7666b2b0/page/HbFMB" frameborder="0" style="border:0" allowfullscreen></iframe>
`

const module_mem_dashboard_performance = `
<h1>SPORT PERFORMANCE DASHBOARD</h1>
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/a4006efc-f728-432b-bc99-f1ff6f61a040/page/mZ1r" frameborder="0" style="border:0" allowfullscreen></iframe>
`

const module_mem_dashboard_wellbeing = `
<h1>HEALTH & WELLBEING DASHBOARD</h1>
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/6ec9ca7c-589f-43aa-8fd1-09d541ea6574/page/hzYJB" frameborder="0" style="border:0" allowfullscreen></iframe>
`

/////////////////////////////////////////////////////////////////////////////////////

// PART C: PRODUCT SPECIFIC REFERENCES

/////////////////////////////////////////////////////////////////////////////////////


// 1. POPUPS

// 2. DASHBOARDS

// 3. LAYER TEXT

const module_lap_module_name = require('../group-references/SELG_FILES/leisure_and_aquatics/module_name')
const module_lap_module_summary = require('../group-references/SELG_FILES/leisure_and_aquatics/submodule_summary')
const module_sport_module_name = require('../group-references/SELG_FILES/sports/module_name')
const module_sport_module_summary = require('../group-references/SELG_FILES/sports/submodule_summary')

const module_lap_mem_text = require('../group-references/SELG_FILES/leisure_and_aquatics/module_lap_mem_text')
const module_lap_dem_text = require('../group-references/SELG_FILES/leisure_and_aquatics/module_lap_dem_text')
const module_lap_cnv_text = require('../group-references/SELG_FILES/leisure_and_aquatics/module_lap_cnv_text')
const module_lap_unmtdem_text = require('../group-references/SELG_FILES/leisure_and_aquatics/module_lap_unmtdem_text')
const module_lap_future_text = require('../group-references/SELG_FILES/leisure_and_aquatics/module_lap_future_text')


// 4. DOCUMENTS

const module_lap_datatransfer_documentHtml = require('../group-references/SELG_FILES/leisure_and_aquatics/module_lap_datatransfer_documentHtml')



// DRAWS FROM SPORT NSW ACCOUNT:


// MODULE - STATE SPORT - SEC NSW MY MEMBERS SECTION


// 1. POPUPS

const module_mem_site_popup_hover = require('../group-references/SEC_FILES/SEC_004_NSW/my_members/site_popup_hover')

const module_mem_sec_004_comb_mem_area_popup_hover = require('../group-references/SEC_FILES/SEC_004_NSW/my_members/comb/area_mem_popup_hover')
const module_mem_sec_004_comb_dem_area_popup_hover = require('../group-references/SEC_FILES/SEC_004_NSW/my_members/comb/area_dem_popup_hover')
const module_mem_sec_004_comb_mem_dem_cnv_area_popup_hover = require('../group-references/SEC_FILES/SEC_004_NSW/my_members/comb/area_mem_dem_cnv_popup_hover')

const module_mem_sec_004_afl_area_popup_hover = require('../group-references/SEC_FILES/SEC_004_NSW/my_members/afl/area_popup_hover')
const module_mem_sec_004_athl_area_popup_hover = require('../group-references/SEC_FILES/SEC_004_NSW/my_members/athl/area_popup_hover')
const module_mem_sec_004_base_area_popup_hover = require('../group-references/SEC_FILES/SEC_004_NSW/my_members/base/area_popup_hover')
const module_mem_sec_004_bask_area_popup_hover = require('../group-references/SEC_FILES/SEC_004_NSW/my_members/bask/area_popup_hover')
const module_mem_sec_004_cycl_area_popup_hover = require('../group-references/SEC_FILES/SEC_004_NSW/my_members/cycl/area_popup_hover')
const module_mem_sec_004_foot_area_popup_hover = require('../group-references/SEC_FILES/SEC_004_NSW/my_members/foot/area_popup_hover')
const module_mem_sec_004_gymn_area_popup_hover = require('../group-references/SEC_FILES/SEC_004_NSW/my_members/gymn/area_popup_hover')
const module_mem_sec_004_hock_area_popup_hover = require('../group-references/SEC_FILES/SEC_004_NSW/my_members/hock/area_popup_hover')
const module_mem_sec_004_iceh_area_popup_hover = require('../group-references/SEC_FILES/SEC_004_NSW/my_members/iceh/area_popup_hover')
const module_mem_sec_004_ices_area_popup_hover = require('../group-references/SEC_FILES/SEC_004_NSW/my_members/ices/area_popup_hover')
const module_mem_sec_004_leag_area_popup_hover = require('../group-references/SEC_FILES/SEC_004_NSW/my_members/leag/area_popup_hover')
const module_mem_sec_004_litt_area_popup_hover = require('../group-references/SEC_FILES/SEC_004_NSW/my_members/litt/area_popup_hover')
const module_mem_sec_004_netb_area_popup_hover = require('../group-references/SEC_FILES/SEC_004_NSW/my_members/netb/area_popup_hover')
const module_mem_sec_004_pony_area_popup_hover = require('../group-references/SEC_FILES/SEC_004_NSW/my_members/pony/area_popup_hover')
const module_mem_sec_004_soft_area_popup_hover = require('../group-references/SEC_FILES/SEC_004_NSW/my_members/soft/area_popup_hover')
const module_mem_sec_004_swim_area_popup_hover = require('../group-references/SEC_FILES/SEC_004_NSW/my_members/swim/area_popup_hover')
const module_mem_sec_004_squa_area_popup_hover = require('../group-references/SEC_FILES/SEC_004_NSW/my_members/squa/area_popup_hover')
const module_mem_sec_004_tenn_area_popup_hover = require('../group-references/SEC_FILES/SEC_004_NSW/my_members/tenn/area_popup_hover')

// SPARES
const module_mem_sec_004_ax_15_area_popup_hover = require('../group-references/SEC_FILES/SEC_004_NSW/my_members/ax_15/area_popup_hover')
const module_mem_sec_004_ax_20_area_popup_hover = require('../group-references/SEC_FILES/SEC_004_NSW/my_members/ax_20/area_popup_hover')
const module_mem_sec_004_ax_21_area_popup_hover = require('../group-references/SEC_FILES/SEC_004_NSW/my_members/ax_21/area_popup_hover')

// 2. DASHBOARDS

// 3. LAYER TEXT
const module_mem_section1_text = require('../group-references/SEC_FILES/SEC_004_NSW/my_members/submodule_section1_text')
const module_mem_section2_text = require('../group-references/SEC_FILES/SEC_004_NSW/my_members/submodule_section2_text')
const module_mem_section3_text = require('../group-references/SEC_FILES/SEC_004_NSW/my_members/submodule_section3_text')
const module_mem_section4_text = require('../group-references/SEC_FILES/SEC_004_NSW/my_members/submodule_section4_text')



// 4. DOCUMENTS


/////////////////////////////////////////////////////////////////////////////////////

// PART D: SPORTSEYE REFERENCES

/////////////////////////////////////////////////////////////////////////////////////


// LAYER DETAILS
const module_se_section_layer_details_heading = require('../group-references/SE_PRODUCT/SE_MODULES/module_se_section_layer_details_heading')
const module_mem_combined_site_text = require('../group-references/SEC_FILES/SEC_004_NSW/my_members/module_mem_combined_site_text')


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

// MODULE - FEEDBACK
const module_feedback_summary = require('../group-references/SE_PRODUCT/SE_MODULES/module_feedback_summary')


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
    id: 'module_lap',
    name: module_lap_module_name,
    collapsible: true,
    type: 'CODE_VIEWER',
    CODES: [
      {
        name: '* MY MEMBERS AND SITES',
        id: 'module_lap_mem',
        image: PRIMARY_MENU_IMAGE,
        summary: module_lap_module_summary,
        sections: [
          {
            heading: '1. MEMBERS (AREA)',
            text: module_lap_mem_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'selg_005_mem_SA2',
                legendText: 'Total Members in SA2 Area',
                // click: module_lap_area_popup_hover,
                hover: module_lap_area_popup_hover,
              },
              {
                id: 'selg_005_mem_LGA',
                name: 'LGA',
                legendText: 'Total Members in LGA Area',
                // click: module_lap_area_popup_hover,
                hover: module_lap_area_popup_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: '2. DEMAND (AREA)',
            text: module_lap_dem_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'selg_005_dem_SA2',
                legendText: 'Total Demand in SA2 Area',
                // click: module_lap_area_popup_hover,
                hover: module_lap_area_popup_hover,
              },
              {
                id: 'selg_005_dem_LGA',
                name: 'LGA',
                legendText: 'Total Demand in LGA Area',
                // click: module_lap_area_popup_hover,
                hover: module_lap_area_popup_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: '3. CONVERSION (AREA)',
            text: module_lap_cnv_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'selg_005_mem_dem_cnv_SA2',
                legendText: 'Total Demand Conversion (%) in SA2 Area',
                // click: module_lap_area_popup_hover,
                hover: module_lap_area_popup_hover,
              },
              {
                id: 'selg_005_mem_dem_cnv_LGA',
                name: 'LGA',
                legendText: 'Total Demand Conversion (%) in LGA Area',
                // click: module_lap_area_popup_hover,
                hover: module_lap_area_popup_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: '4. SITES',
            text: '',
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'selg_005_SITE',
                legendText: 'My Sites',
                //click: SITE_ALL_POPUP,
                hover: '<h4>{site_name}</h4>',
              },
            ]
          },//END OF SECTION
          {
            heading: 'DATA TRANSFER',
            text: null,
            icon: QUESTION_ICON,
            documentHtml: module_lap_datatransfer_documentHtml,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
      {
        name: 'LEISURE AND AQUATICS DEMAND',
        id: 'module_lap_ladem',
        image: PRIMARY_MENU_IMAGE,
        summary: module_lap_module_summary,
        sections: [
          {
            heading: '1. DEMAND (AREA)',
            text: module_lap_dem_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'se_leisure_dem_SA1',
                legendText: 'Total Demand in SA1 Area',
                // click: AREA_ALL_POPUP,
                hover: '<p>{AREA_NAME}</p><p>Total Demand:</p><h4>{se_leisure_dem}</h4>',
              },
            ]
          },//END OF SECTION
          {
            heading: '2. PROJECTED UNMET DEMAND',
            text: module_lap_unmtdem_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'selg_005_unmtdem_SA1',
                legendText: 'Projected Unmet Demand in SA1 Area',
                hover: '<p>{AREA_NAME}<p><p>Unmet Demand:</p><h4>{selg_005_unmtdem}</h4>',
              },
            ]
          },//END OF SECTION
          {
            heading: '3. FUTURE CHANGE IN DEMAND (2036)',
            text: module_lap_future_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'selg_005_chngdem_SA1',
                legendText: 'Change in Demand in SA1 Area',
                hover: '<p>{AREA_NAME}<p><p>Change in Demand:</p><h4>{selg_005_chngdem}</h4>',
              },
            ]
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
      {
        name: 'DASHBOARDS',
        id: 'module_lap_dash',
        image: PRIMARY_MENU_IMAGE,
        summary: module_lap_module_summary,
        sections: [
          {
            heading: '1. LEISURE & AQUATICS',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_lap_dashboard_leisure,
          },//END OF SECTION
          {
            heading: '2. SWIM SCHOOL',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_lap_dashboard_aquatic,
          },//END OF SECTION
          {
            heading: '3. SOCIAL VALUE',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_lap_dashboard_social,
          },//END OF SECTION
          {
            heading: '4. COVID RECOVERY',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_lap_dashboard_covid,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
    ]
  }, //END OF MODULE
  {
    id: 'module_sports',
    name: module_sport_module_name,
    collapsible: true,
    type: 'CODE_VIEWER',
    CODES: [
      {
        name: 'DASHBOARDS',
        id: 'module_sports_dashboards',
        image: PRIMARY_MENU_IMAGE,
        summary: module_sport_module_summary,
        sections: [
          {
            heading: '1. SPORT SUMMARY',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_mem_dashboard_summary,
          },//END OF SECTION
          {
            heading: '2. SPORT PERFORMANCE',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_mem_dashboard_performance,
          },//END OF SECTION
          {
            heading: '3. HEALTH & WELLBEING',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_mem_dashboard_wellbeing,
          },//END OF SECTION
        ]
      },//END OF SUB-MODULE
      {
        name: 'COMBINED SPORTS',
        id: 'module_mem_comb',
        image: PRIMARY_MENU_IMAGE,
        summary: module_sport_module_summary,
        sections: [
          {
            heading: '1. MEMBERS (AREA)',
            text: module_mem_section1_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_comb_mem_SA2',
                legendText: 'Combined Sport Members in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_comb_mem_area_popup_hover
              },
              {
                id: 'sec_004_comb_mem_LGA',
                name: 'LGA',
                legendText: 'Combined Sport Members in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_comb_mem_area_popup_hover
              },
              {
                id: 'sec_004_comb_mem_REG',
                name: 'REGION',
                legendText: 'Combined Sport Members in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_comb_mem_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '2. DEMAND (AREA)',
            text: module_mem_section2_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_comb_dem_SA2',
                legendText: 'Combined Sport Demand in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_comb_dem_area_popup_hover
              },
              {
                id: 'sec_004_comb_dem_LGA',
                name: 'LGA',
                legendText: 'Combined Sport Demand in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_comb_dem_area_popup_hover
              },
              {
                id: 'sec_004_comb_dem_REG',
                name: 'REGION',
                legendText: 'Combined Sport Demand in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_comb_dem_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '3. CONVERSION (AREA)',
            text: module_mem_section3_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_comb_mem_dem_cnv_SA2',
                legendText: 'Combined Sport Demand Conversion (%) in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_comb_mem_dem_cnv_area_popup_hover
              },
              {
                id: 'sec_004_comb_mem_dem_cnv_LGA',
                name: 'LGA',
                legendText: 'Combined Sport Demand Conversion (%) in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_comb_mem_dem_cnv_area_popup_hover
              },
              {
                id: 'sec_004_comb_mem_dem_cnv_REG',
                name: 'REGION',
                legendText: 'Combined Sport Demand Conversion (%) in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_comb_mem_dem_cnv_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '4. CLUB SIZE (SITE)',
            text: module_mem_combined_site_text,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'sec_004_comb_SITE',
                legendText: 'Combined Sport Clubs and Members at Site (Colour: Category)',
                // click: TBC,
                hover: module_mem_site_popup_hover
              },
            ]
          },//END OF SECTION
        ]
      },//END OF SUB-MODULE
      {
        name: 'AUSTRALIAN FOOTBALL',
        id: 'module_mem_afl',
        image: PRIMARY_MENU_IMAGE,
        summary: module_sport_module_summary,
        sections: [
          {
            heading: '1. MEMBERS (AREA)',
            text: module_mem_section1_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_afl_mem_SA2',
                legendText: 'Australian Football Members in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_afl_area_popup_hover
              },
              {
                id: 'sec_004_afl_mem_LGA',
                name: 'LGA',
                legendText: 'Australian Football Members in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_afl_area_popup_hover
              },
              {
                id: 'sec_004_afl_mem_REG',
                name: 'REGION',
                legendText: 'Australian Football Members in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_afl_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '2. DEMAND (AREA)',
            text: module_mem_section2_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_afl_dem_SA2',
                legendText: 'Australian Football Demand in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_afl_area_popup_hover
              },
              {
                id: 'sec_004_afl_dem_LGA',
                name: 'LGA',
                legendText: 'Australian Football Demand in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_afl_area_popup_hover
              },
              {
                id: 'sec_004_afl_dem_REG',
                name: 'REGION',
                legendText: 'Australian Football Demand in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_afl_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '3. CONVERSION (AREA)',
            text: module_mem_section3_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_afl_mem_dem_cnv_SA2',
                legendText: 'Australian Football Demand Conversion (%) in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_afl_area_popup_hover
              },
              {
                id: 'sec_004_afl_mem_dem_cnv_LGA',
                name: 'LGA',
                legendText: 'Australian Football Demand Conversion (%) in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_afl_area_popup_hover
              },
              {
                id: 'sec_004_afl_mem_dem_cnv_REG',
                name: 'REGION',
                legendText: 'Australian Football Demand Conversion (%) in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_afl_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '4. CLUB SIZE (SITE)',
            text: module_mem_section4_text,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'sec_004_afl_SITE',
                legendText: 'Australian Football Clubs and Members at Site',
                // click: TBC,
                hover: module_mem_site_popup_hover
              },
            ]
          },//END OF SECTION
        ]
      },//END OF SUB-MODULE    
      {
        name: 'ATHLETICS',
        id: 'module_mem_athl',
        image: PRIMARY_MENU_IMAGE,
        summary: module_sport_module_summary,
        sections: [
          {
            heading: '1. MEMBERS (AREA)',
            text: module_mem_section1_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_athl_mem_SA2',
                legendText: 'Athletics Members in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_athl_area_popup_hover
              },
              {
                id: 'sec_004_athl_mem_LGA',
                name: 'LGA',
                legendText: 'Athletics Members in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_athl_area_popup_hover
              },
              {
                id: 'sec_004_athl_mem_REG',
                name: 'REGION',
                legendText: 'Athletics Members in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_athl_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '2. DEMAND (AREA)',
            text: module_mem_section2_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_athl_dem_SA2',
                legendText: 'Athletics Demand in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_athl_area_popup_hover
              },
              {
                id: 'sec_004_athl_dem_LGA',
                name: 'LGA',
                legendText: 'Athletics Demand in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_athl_area_popup_hover
              },
              {
                id: 'sec_004_athl_dem_REG',
                name: 'REGION',
                legendText: 'Athletics Demand in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_athl_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '3. CONVERSION (AREA)',
            text: module_mem_section3_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_athl_mem_dem_cnv_SA2',
                legendText: 'Athletics Demand Conversion (%) in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_athl_area_popup_hover
              },
              {
                id: 'sec_004_athl_mem_dem_cnv_LGA',
                name: 'LGA',
                legendText: 'Athletics Demand Conversion (%) in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_athl_area_popup_hover
              },
              {
                id: 'sec_004_athl_mem_dem_cnv_REG',
                name: 'REGION',
                legendText: 'Athletics Demand Conversion (%) in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_athl_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '4. CLUB SIZE (SITE)',
            text: module_mem_section4_text,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'sec_004_athl_SITE',
                legendText: 'Athletics Clubs and Members at Site',
                // click: TBC,
                hover: module_mem_site_popup_hover
              },
            ]
          },//END OF SECTION
        ]
      },//END OF SUB-MODULE
      {
        name: 'BASEBALL',
        id: 'module_mem_base',
        image: PRIMARY_MENU_IMAGE,
        summary: module_sport_module_summary,
        sections: [
          {
            heading: '1. MEMBERS (AREA)',
            text: module_mem_section1_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_base_mem_SA2',
                legendText: 'Baseball Members in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_base_area_popup_hover
              },
              {
                id: 'sec_004_base_mem_LGA',
                name: 'LGA',
                legendText: 'Baseball Members in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_base_area_popup_hover
              },
              {
                id: 'sec_004_base_mem_REG',
                name: 'REGION',
                legendText: 'Baseball Members in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_base_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '2. DEMAND (AREA)',
            text: module_mem_section2_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_base_dem_SA2',
                legendText: 'Baseball Demand in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_base_area_popup_hover
              },
              {
                id: 'sec_004_base_dem_LGA',
                name: 'LGA',
                legendText: 'Baseball Demand in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_base_area_popup_hover
              },
              {
                id: 'sec_004_base_dem_REG',
                name: 'REGION',
                legendText: 'Baseball Demand in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_base_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '3. CONVERSION (AREA)',
            text: module_mem_section3_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_base_mem_dem_cnv_SA2',
                legendText: 'Baseball Demand Conversion (%) in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_base_area_popup_hover
              },
              {
                id: 'sec_004_base_mem_dem_cnv_LGA',
                name: 'LGA',
                legendText: 'Baseball Demand Conversion (%) in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_base_area_popup_hover
              },
              {
                id: 'sec_004_base_mem_dem_cnv_REG',
                name: 'REGION',
                legendText: 'Baseball Demand Conversion (%) in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_base_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '4. CLUB SIZE (SITE)',
            text: module_mem_section4_text,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'sec_004_base_SITE',
                legendText: 'Baseball Clubs and Members at Site',
                // click: TBC,
                hover: module_mem_site_popup_hover
              },
            ]
          },//END OF SECTION
        ]
      },//END OF SUB-MODULE
      {
        name: 'BASKETBALL',
        id: 'module_mem_bask',
        image: PRIMARY_MENU_IMAGE,
        summary: module_sport_module_summary,
        sections: [
          {
            heading: '1. MEMBERS (AREA)',
            text: module_mem_section1_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_bask_mem_SA2',
                legendText: 'Basketball Members in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_bask_area_popup_hover
              },
              {
                id: 'sec_004_bask_mem_LGA',
                name: 'LGA',
                legendText: 'Basketball Members in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_bask_area_popup_hover
              },
              {
                id: 'sec_004_bask_mem_REG',
                name: 'REGION',
                legendText: 'Basketball Members in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_bask_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '2. DEMAND (AREA)',
            text: module_mem_section2_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_bask_dem_SA2',
                legendText: 'Basketball Demand in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_bask_area_popup_hover
              },
              {
                id: 'sec_004_bask_dem_LGA',
                name: 'LGA',
                legendText: 'Basketball Demand in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_bask_area_popup_hover
              },
              {
                id: 'sec_004_bask_dem_REG',
                name: 'REGION',
                legendText: 'Basketball Demand in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_bask_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '3. CONVERSION (AREA)',
            text: module_mem_section3_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_bask_mem_dem_cnv_SA2',
                legendText: 'Basketball Demand Conversion (%) in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_bask_area_popup_hover
              },
              {
                id: 'sec_004_bask_mem_dem_cnv_LGA',
                name: 'LGA',
                legendText: 'Basketball Demand Conversion (%) in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_bask_area_popup_hover
              },
              {
                id: 'sec_004_bask_mem_dem_cnv_REG',
                name: 'REGION',
                legendText: 'Basketball Demand Conversion (%) in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_bask_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '4. CLUB SIZE (SITE)',
            text: module_mem_section4_text,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'sec_004_bask_SITE',
                legendText: 'Basketball Clubs and Members at Site',
                // click: TBC,
                hover: module_mem_site_popup_hover
              },
            ]
          },//END OF SECTION
        ]
      },//END OF SUB-MODULE
      {
        name: 'CYCLING',
        id: 'module_mem_cycl',
        image: PRIMARY_MENU_IMAGE,
        summary: module_sport_module_summary,
        sections: [
          {
            heading: '1. MEMBERS (AREA)',
            text: module_mem_section1_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_cycl_mem_SA2',
                legendText: 'Cycling Members in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_cycl_area_popup_hover
              },
              {
                id: 'sec_004_cycl_mem_LGA',
                name: 'LGA',
                legendText: 'Cycling Members in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_cycl_area_popup_hover
              },
              {
                id: 'sec_004_cycl_mem_REG',
                name: 'REGION',
                legendText: 'Cycling Members in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_cycl_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '2. DEMAND (AREA)',
            text: module_mem_section2_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_cycl_dem_SA2',
                legendText: 'Cycling Demand in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_cycl_area_popup_hover
              },
              {
                id: 'sec_004_cycl_dem_LGA',
                name: 'LGA',
                legendText: 'Cycling Demand in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_cycl_area_popup_hover
              },
              {
                id: 'sec_004_cycl_dem_REG',
                name: 'REGION',
                legendText: 'Cycling Demand in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_cycl_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '3. CONVERSION (AREA)',
            text: module_mem_section3_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_cycl_mem_dem_cnv_SA2',
                legendText: 'Cycling Demand Conversion (%) in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_cycl_area_popup_hover
              },
              {
                id: 'sec_004_cycl_mem_dem_cnv_LGA',
                name: 'LGA',
                legendText: 'Cycling Demand Conversion (%) in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_cycl_area_popup_hover
              },
              {
                id: 'sec_004_cycl_mem_dem_cnv_REG',
                name: 'REGION',
                legendText: 'Cycling Demand Conversion (%) in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_cycl_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '4. CLUB SIZE (SITE)',
            text: module_mem_section4_text,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'sec_004_cycl_SITE',
                legendText: 'Cycling Clubs and Members at Site',
                // click: TBC,
                hover: module_mem_site_popup_hover
              },
            ]
          },//END OF SECTION
        ]
      },//END OF SUB-MODULE
      {
        name: 'FOOTBALL',
        id: 'module_mem_foot',
        image: PRIMARY_MENU_IMAGE,
        summary: module_sport_module_summary,
        sections: [
          {
            heading: '1. MEMBERS (AREA)',
            text: module_mem_section1_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_foot_mem_SA2',
                legendText: 'Football Members in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_foot_area_popup_hover
              },
              {
                id: 'sec_004_foot_mem_LGA',
                name: 'LGA',
                legendText: 'Football Members in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_foot_area_popup_hover
              },
              {
                id: 'sec_004_foot_mem_REG',
                name: 'REGION',
                legendText: 'Football Members in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_foot_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '2. DEMAND (AREA)',
            text: module_mem_section2_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_foot_dem_SA2',
                legendText: 'Football Demand in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_foot_area_popup_hover
              },
              {
                id: 'sec_004_foot_dem_LGA',
                name: 'LGA',
                legendText: 'Football Demand in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_foot_area_popup_hover
              },
              {
                id: 'sec_004_foot_dem_REG',
                name: 'REGION',
                legendText: 'Football Demand in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_foot_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '3. CONVERSION (AREA)',
            text: module_mem_section3_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_foot_mem_dem_cnv_SA2',
                legendText: 'Football Demand Conversion (%) in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_foot_area_popup_hover
              },
              {
                id: 'sec_004_foot_mem_dem_cnv_LGA',
                name: 'LGA',
                legendText: 'Football Demand Conversion (%) in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_foot_area_popup_hover
              },
              {
                id: 'sec_004_foot_mem_dem_cnv_REG',
                name: 'REGION',
                legendText: 'Football Demand Conversion (%) in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_foot_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '4. CLUB SIZE (SITE)',
            text: module_mem_section4_text,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'sec_004_foot_SITE',
                legendText: 'Football Clubs and Members at Site',
                // click: TBC,
                hover: module_mem_site_popup_hover
              },
            ]
          },//END OF SECTION
        ]
      },//END OF SUB-MODULE
      {
        name: 'GYMNASTICS',
        id: 'module_mem_gymn',
        image: PRIMARY_MENU_IMAGE,
        summary: module_sport_module_summary,
        sections: [
          {
            heading: '1. MEMBERS (AREA)',
            text: module_mem_section1_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_gymn_mem_SA2',
                legendText: 'Gymnastics Members in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_gymn_area_popup_hover
              },
              {
                id: 'sec_004_gymn_mem_LGA',
                name: 'LGA',
                legendText: 'Gymnastics Members in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_gymn_area_popup_hover
              },
              {
                id: 'sec_004_gymn_mem_REG',
                name: 'REGION',
                legendText: 'Gymnastics Members in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_gymn_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '2. DEMAND (AREA)',
            text: module_mem_section2_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_gymn_dem_SA2',
                legendText: 'Gymnastics Demand in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_gymn_area_popup_hover
              },
              {
                id: 'sec_004_gymn_dem_LGA',
                name: 'LGA',
                legendText: 'Gymnastics Demand in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_gymn_area_popup_hover
              },
              {
                id: 'sec_004_gymn_dem_REG',
                name: 'REGION',
                legendText: 'Gymnastics Demand in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_gymn_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '3. CONVERSION (AREA)',
            text: module_mem_section3_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_gymn_mem_dem_cnv_SA2',
                legendText: 'Gymnastics Demand Conversion (%) in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_gymn_area_popup_hover
              },
              {
                id: 'sec_004_gymn_mem_dem_cnv_LGA',
                name: 'LGA',
                legendText: 'Gymnastics Demand Conversion (%) in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_gymn_area_popup_hover
              },
              {
                id: 'sec_004_gymn_mem_dem_cnv_REG',
                name: 'REGION',
                legendText: 'Gymnastics Demand Conversion (%) in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_gymn_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '4. CLUB SIZE (SITE)',
            text: module_mem_section4_text,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'sec_004_gymn_SITE',
                legendText: 'Gymnastics Clubs and Members at Site',
                // click: TBC,
                hover: module_mem_site_popup_hover
              },
            ]
          },//END OF SECTION
        ]
      },//END OF SUB-MODULE
      {
        name: 'HOCKEY',
        id: 'module_mem_hock',
        image: PRIMARY_MENU_IMAGE,
        summary: module_sport_module_summary,
        sections: [
        {
            heading: '1. MEMBERS (AREA)',
            text: module_mem_section1_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_hock_mem_SA2',
                legendText: 'Hockey Members in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_hock_area_popup_hover
              },
              {
                id: 'sec_004_hock_mem_LGA',
                name: 'LGA',
                legendText: 'Hockey Members in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_hock_area_popup_hover
              },
              {
                id: 'sec_004_hock_mem_REG',
                name: 'REGION',
                legendText: 'Hockey Members in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_hock_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '2. DEMAND (AREA)',
            text: module_mem_section2_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_hock_dem_SA2',
                legendText: 'Hockey Demand in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_hock_area_popup_hover
              },
              {
                id: 'sec_004_hock_dem_LGA',
                name: 'LGA',
                legendText: 'Hockey Demand in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_hock_area_popup_hover
              },
              {
                id: 'sec_004_hock_dem_REG',
                name: 'REGION',
                legendText: 'Hockey Demand in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_hock_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '3. CONVERSION (AREA)',
            text: module_mem_section3_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_hock_mem_dem_cnv_SA2',
                legendText: 'Hockey Demand Conversion (%) in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_hock_area_popup_hover
              },
              {
                id: 'sec_004_hock_mem_dem_cnv_LGA',
                name: 'LGA',
                legendText: 'Hockey Demand Conversion (%) in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_hock_area_popup_hover
              },
              {
                id: 'sec_004_hock_mem_dem_cnv_REG',
                name: 'REGION',
                legendText: 'Hockey Demand Conversion (%) in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_hock_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '4. CLUB SIZE (SITE)',
            text: module_mem_section4_text,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'sec_004_hock_SITE',
                legendText: 'Hockey Clubs and Members at Site',
                // click: TBC,
                hover: module_mem_site_popup_hover
              },
            ]
          },//END OF SECTION
        ]
      },//END OF SUB-MODULE
      {
        name: 'ICE HOCKEY',
        id: 'module_mem_iceh',
        image: PRIMARY_MENU_IMAGE,
        summary: module_sport_module_summary,
        sections: [
          {
            heading: '1. MEMBERS (AREA)',
            text: module_mem_section1_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_iceh_mem_SA2',
                legendText: 'Ice Hockey Members in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_iceh_area_popup_hover
              },
              {
                id: 'sec_004_iceh_mem_LGA',
                name: 'LGA',
                legendText: 'Ice Hockey Members in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_iceh_area_popup_hover
              },
              {
                id: 'sec_004_iceh_mem_REG',
                name: 'REGION',
                legendText: 'Ice Hockey Members in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_iceh_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '2. DEMAND (AREA)',
            text: module_mem_section2_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_iceh_dem_SA2',
                legendText: 'Ice Hockey Demand in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_iceh_area_popup_hover
              },
              {
                id: 'sec_004_iceh_dem_LGA',
                name: 'LGA',
                legendText: 'Ice Hockey Demand in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_iceh_area_popup_hover
              },
              {
                id: 'sec_004_iceh_dem_REG',
                name: 'REGION',
                legendText: 'Ice Hockey Demand in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_iceh_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '3. CONVERSION (AREA)',
            text: module_mem_section3_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_iceh_mem_dem_cnv_SA2',
                legendText: 'Ice Hockey Demand Conversion (%) in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_iceh_area_popup_hover
              },
              {
                id: 'sec_004_iceh_mem_dem_cnv_LGA',
                name: 'LGA',
                legendText: 'Ice Hockey Demand Conversion (%) in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_iceh_area_popup_hover
              },
              {
                id: 'sec_004_iceh_mem_dem_cnv_REG',
                name: 'REGION',
                legendText: 'Ice Hockey Demand Conversion (%) in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_iceh_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '4. CLUB SIZE (SITE)',
            text: module_mem_section4_text,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'sec_004_iceh_SITE',
                legendText: 'Ice Hockey Clubs and Members at Site',
                // click: TBC,
                hover: module_mem_site_popup_hover
              },
            ]
          },//END OF SECTION
        ]
      },//END OF SUB-MODULE
      {
        name: 'ICE SKATING',
        id: 'module_mem_ices',
        image: PRIMARY_MENU_IMAGE,
        summary: module_sport_module_summary,
        sections: [
          {
            heading: '1. MEMBERS (AREA)',
            text: module_mem_section1_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_ices_mem_SA2',
                legendText: 'Ice Skating Members in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_ices_area_popup_hover
              },
              {
                id: 'sec_004_ices_mem_LGA',
                name: 'LGA',
                legendText: 'Ice Skating Members in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_ices_area_popup_hover
              },
              {
                id: 'sec_004_ices_mem_REG',
                name: 'REGION',
                legendText: 'Ice Skating Members in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_ices_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '2. DEMAND (AREA)',
            text: module_mem_section2_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_ices_dem_SA2',
                legendText: 'Ice Skating Demand in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_ices_area_popup_hover
              },
              {
                id: 'sec_004_ices_dem_LGA',
                name: 'LGA',
                legendText: 'Ice Skating Demand in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_ices_area_popup_hover
              },
              {
                id: 'sec_004_ices_dem_REG',
                name: 'REGION',
                legendText: 'Ice Skating Demand in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_ices_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '3. CONVERSION (AREA)',
            text: module_mem_section3_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_ices_mem_dem_cnv_SA2',
                legendText: 'Ice Skating Demand Conversion (%) in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_ices_area_popup_hover
              },
              {
                id: 'sec_004_ices_mem_dem_cnv_LGA',
                name: 'LGA',
                legendText: 'Ice Skating Demand Conversion (%) in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_ices_area_popup_hover
              },
              {
                id: 'sec_004_ices_mem_dem_cnv_REG',
                name: 'REGION',
                legendText: 'Ice Skating Demand Conversion (%) in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_ices_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '4. CLUB SIZE (SITE)',
            text: module_mem_section4_text,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'sec_004_ices_SITE',
                legendText: 'Ice Skating Clubs and Members at Site',
                // click: TBC,
                hover: module_mem_site_popup_hover
              },
            ]
          },//END OF SECTION
        ]
      },//END OF SUB-MODULE
      {
        name: 'NETBALL',
        id: 'module_mem_netb',
        image: PRIMARY_MENU_IMAGE,
        summary: module_sport_module_summary,
        sections: [
          {
            heading: '1. MEMBERS (AREA)',
            text: module_mem_section1_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_netb_mem_SA2',
                legendText: 'Netball Members in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_netb_area_popup_hover
              },
              {
                id: 'sec_004_netb_mem_LGA',
                name: 'LGA',
                legendText: 'Netball Members in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_netb_area_popup_hover
              },
              {
                id: 'sec_004_netb_mem_REG',
                name: 'REGION',
                legendText: 'Netball Members in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_netb_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '2. DEMAND (AREA)',
            text: module_mem_section2_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_netb_dem_SA2',
                legendText: 'Netball Demand in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_netb_area_popup_hover
              },
              {
                id: 'sec_004_netb_dem_LGA',
                name: 'LGA',
                legendText: 'Netball Demand in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_netb_area_popup_hover
              },
              {
                id: 'sec_004_netb_dem_REG',
                name: 'REGION',
                legendText: 'Netball Demand in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_netb_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '3. CONVERSION (AREA)',
            text: module_mem_section3_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_netb_mem_dem_cnv_SA2',
                legendText: 'Netball Demand Conversion (%) in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_netb_area_popup_hover
              },
              {
                id: 'sec_004_netb_mem_dem_cnv_LGA',
                name: 'LGA',
                legendText: 'Netball Demand Conversion (%) in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_netb_area_popup_hover
              },
              {
                id: 'sec_004_netb_mem_dem_cnv_REG',
                name: 'REGION',
                legendText: 'Netball Demand Conversion (%) in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_netb_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '4. CLUB SIZE (SITE)',
            text: module_mem_section4_text,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'sec_004_netb_SITE',
                legendText: 'Netball Clubs and Members at Site',
                // click: TBC,
                hover: module_mem_site_popup_hover
              },
            ]
          },//END OF SECTION
        ]
      },//END OF SUB-MODULE
      {
        name: 'PONY CLUB',
        id: 'module_mem_pony',
        image: PRIMARY_MENU_IMAGE,
        summary: module_sport_module_summary,
        sections: [
          {
            heading: '1. MEMBERS (AREA)',
            text: module_mem_section1_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_pony_mem_SA2',
                legendText: 'Pony Club Members in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_pony_area_popup_hover
              },
              {
                id: 'sec_004_pony_mem_LGA',
                name: 'LGA',
                legendText: 'Pony Club Members in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_pony_area_popup_hover
              },
              {
                id: 'sec_004_pony_mem_REG',
                name: 'REGION',
                legendText: 'Pony Club Members in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_pony_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '2. DEMAND (AREA)',
            text: module_mem_section2_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_pony_dem_SA2',
                legendText: 'Pony Club Demand in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_pony_area_popup_hover
              },
              {
                id: 'sec_004_pony_dem_LGA',
                name: 'LGA',
                legendText: 'Pony Club Demand in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_pony_area_popup_hover
              },
              {
                id: 'sec_004_pony_dem_REG',
                name: 'REGION',
                legendText: 'Pony Club Demand in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_pony_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '3. CONVERSION (AREA)',
            text: module_mem_section3_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_pony_mem_dem_cnv_SA2',
                legendText: 'Pony Club Demand Conversion (%) in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_pony_area_popup_hover
              },
              {
                id: 'sec_004_pony_mem_dem_cnv_LGA',
                name: 'LGA',
                legendText: 'Pony Club Demand Conversion (%) in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_pony_area_popup_hover
              },
              {
                id: 'sec_004_pony_mem_dem_cnv_REG',
                name: 'REGION',
                legendText: 'Pony Club Demand Conversion (%) in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_pony_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '4. CLUB SIZE (SITE)',
            text: module_mem_section4_text,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'sec_004_pony_SITE',
                legendText: 'Pony Club Clubs and Members at Site',
                // click: TBC,
                hover: module_mem_site_popup_hover
              },
            ]
          },//END OF SECTION
        ]
      },//END OF SUB-MODULE
      {
        name: 'RUGBY LEAGUE',
        id: 'module_mem_leag',
        image: PRIMARY_MENU_IMAGE,
        summary: module_sport_module_summary,
        sections: [
          {
            heading: '1. MEMBERS (AREA)',
            text: module_mem_section1_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_leag_mem_SA2',
                legendText: 'Rugby League Members in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_leag_area_popup_hover
              },
              {
                id: 'sec_004_leag_mem_LGA',
                name: 'LGA',
                legendText: 'Rugby League Members in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_leag_area_popup_hover
              },
              {
                id: 'sec_004_leag_mem_REG',
                name: 'REGION',
                legendText: 'Rugby League Members in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_leag_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '2. DEMAND (AREA)',
            text: module_mem_section2_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_leag_dem_SA2',
                legendText: 'Rugby League Demand in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_leag_area_popup_hover
              },
              {
                id: 'sec_004_leag_dem_LGA',
                name: 'LGA',
                legendText: 'Rugby League Demand in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_leag_area_popup_hover
              },
              {
                id: 'sec_004_leag_dem_REG',
                name: 'REGION',
                legendText: 'Rugby League Demand in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_leag_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '3. CONVERSION (AREA)',
            text: module_mem_section3_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_leag_mem_dem_cnv_SA2',
                legendText: 'Rugby League Demand Conversion (%) in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_leag_area_popup_hover
              },
              {
                id: 'sec_004_leag_mem_dem_cnv_LGA',
                name: 'LGA',
                legendText: 'Rugby League Demand Conversion (%) in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_leag_area_popup_hover
              },
              {
                id: 'sec_004_leag_mem_dem_cnv_REG',
                name: 'REGION',
                legendText: 'Rugby League Demand Conversion (%) in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_leag_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '4. CLUB SIZE (SITE)',
            text: module_mem_section4_text,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'sec_004_leag_SITE',
                legendText: 'Rugby League Clubs and Members at Site',
                // click: TBC,
                hover: module_mem_site_popup_hover
              },
            ]
          },//END OF SECTION
        ]
      },//END OF SUB-MODULE
      {
        name: 'SQUASH',
        id: 'module_mem_squa',
        image: PRIMARY_MENU_IMAGE,
        summary: module_sport_module_summary,
        sections: [
          {
            heading: '1. MEMBERS (AREA)',
            text: module_mem_section1_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_squa_mem_SA2',
                legendText: 'Squash Members in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_squa_area_popup_hover
              },
              {
                id: 'sec_004_squa_mem_LGA',
                name: 'LGA',
                legendText: 'Squash Members in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_squa_area_popup_hover
              },
              {
                id: 'sec_004_squa_mem_REG',
                name: 'REGION',
                legendText: 'Squash Members in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_squa_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '2. DEMAND (AREA)',
            text: module_mem_section2_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_squa_dem_SA2',
                legendText: 'Squash Demand in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_squa_area_popup_hover
              },
              {
                id: 'sec_004_squa_dem_LGA',
                name: 'LGA',
                legendText: 'Squash Demand in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_squa_area_popup_hover
              },
              {
                id: 'sec_004_squa_dem_REG',
                name: 'REGION',
                legendText: 'Squash Demand in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_squa_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '3. CONVERSION (AREA)',
            text: module_mem_section3_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_squa_mem_dem_cnv_SA2',
                legendText: 'Squash Demand Conversion (%) in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_squa_area_popup_hover
              },
              {
                id: 'sec_004_squa_mem_dem_cnv_LGA',
                name: 'LGA',
                legendText: 'Squash Demand Conversion (%) in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_squa_area_popup_hover
              },
              {
                id: 'sec_004_squa_mem_dem_cnv_REG',
                name: 'REGION',
                legendText: 'Squash Demand Conversion (%) in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_squa_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '4. CLUB SIZE (SITE)',
            text: module_mem_section4_text,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'sec_004_squa_SITE',
                legendText: 'Squash Clubs and Members at Site',
                // click: TBC,
                hover: module_mem_site_popup_hover
              },
            ]
          },//END OF SECTION
        ]
      },//END OF SUB-MODULE
      {
        name: 'SWIMMING',
        id: 'module_mem_swim',
        image: PRIMARY_MENU_IMAGE,
        summary: module_sport_module_summary,
        sections: [
          {
            heading: '1. MEMBERS (AREA)',
            text: module_mem_section1_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_swim_mem_SA2',
                legendText: 'Swimming Members in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_swim_area_popup_hover
              },
              {
                id: 'sec_004_swim_mem_LGA',
                name: 'LGA',
                legendText: 'Swimming Members in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_swim_area_popup_hover
              },
              {
                id: 'sec_004_swim_mem_REG',
                name: 'REGION',
                legendText: 'Swimming Members in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_swim_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '2. DEMAND (AREA)',
            text: module_mem_section2_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_swim_dem_SA2',
                legendText: 'Swimming Demand in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_swim_area_popup_hover
              },
              {
                id: 'sec_004_swim_dem_LGA',
                name: 'LGA',
                legendText: 'Swimming Demand in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_swim_area_popup_hover
              },
              {
                id: 'sec_004_swim_dem_REG',
                name: 'REGION',
                legendText: 'Swimming Demand in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_swim_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '3. CONVERSION (AREA)',
            text: module_mem_section3_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_swim_mem_dem_cnv_SA2',
                legendText: 'Swimming Demand Conversion (%) in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_swim_area_popup_hover
              },
              {
                id: 'sec_004_swim_mem_dem_cnv_LGA',
                name: 'LGA',
                legendText: 'Swimming Demand Conversion (%) in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_swim_area_popup_hover
              },
              {
                id: 'sec_004_swim_mem_dem_cnv_REG',
                name: 'REGION',
                legendText: 'Swimming Demand Conversion (%) in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_swim_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '4. CLUB SIZE (SITE)',
            text: module_mem_section4_text,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'sec_004_swim_SITE',
                legendText: 'Swimming Clubs and Members at Site',
                // click: TBC,
                hover: module_mem_site_popup_hover
              },
            ]
          },//END OF SECTION
        ]
      },//END OF SUB-MODULE
      {
        name: 'SOFTBALL',
        id: 'module_mem_soft',
        image: PRIMARY_MENU_IMAGE,
        summary: module_sport_module_summary,
        sections: [
          {
            heading: '1. MEMBERS (AREA)',
            text: module_mem_section1_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_soft_mem_SA2',
                legendText: 'Softball Members in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_soft_area_popup_hover
              },
              {
                id: 'sec_004_soft_mem_LGA',
                name: 'LGA',
                legendText: 'Softball Members in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_soft_area_popup_hover
              },
              {
                id: 'sec_004_soft_mem_REG',
                name: 'REGION',
                legendText: 'Softball Members in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_soft_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '2. DEMAND (AREA)',
            text: module_mem_section2_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_soft_dem_SA2',
                legendText: 'Softball Demand in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_soft_area_popup_hover
              },
              {
                id: 'sec_004_soft_dem_LGA',
                name: 'LGA',
                legendText: 'Softball Demand in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_soft_area_popup_hover
              },
              {
                id: 'sec_004_soft_dem_REG',
                name: 'REGION',
                legendText: 'Softball Demand in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_soft_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '3. CONVERSION (AREA)',
            text: module_mem_section3_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_soft_mem_dem_cnv_SA2',
                legendText: 'Softball Demand Conversion (%) in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_soft_area_popup_hover
              },
              {
                id: 'sec_004_soft_mem_dem_cnv_LGA',
                name: 'LGA',
                legendText: 'Softball Demand Conversion (%) in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_soft_area_popup_hover
              },
              {
                id: 'sec_004_soft_mem_dem_cnv_REG',
                name: 'REGION',
                legendText: 'Softball Demand Conversion (%) in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_soft_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '4. CLUB SIZE (SITE)',
            text: module_mem_section4_text,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'sec_004_soft_SITE',
                legendText: 'Softball Clubs and Members at Site',
                // click: TBC,
                hover: module_mem_site_popup_hover
              },
            ]
          },//END OF SECTION
        ]
      },//END OF SUB-MODULE
      {
        name: 'TENNIS',
        id: 'module_mem_tenn',
        image: PRIMARY_MENU_IMAGE,
        summary: module_sport_module_summary,
        sections: [
          {
            heading: '1. MEMBERS (AREA)',
            text: module_mem_section1_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_tenn_mem_SA2',
                legendText: 'Tennis Members in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_tenn_area_popup_hover
              },
              {
                id: 'sec_004_tenn_mem_LGA',
                name: 'LGA',
                legendText: 'Tennis Members in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_tenn_area_popup_hover
              },
              {
                id: 'sec_004_tenn_mem_REG',
                name: 'REGION',
                legendText: 'Tennis Members in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_tenn_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '2. DEMAND (AREA)',
            text: module_mem_section2_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_tenn_dem_SA2',
                legendText: 'Tennis Demand in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_tenn_area_popup_hover
              },
              {
                id: 'sec_004_tenn_dem_LGA',
                name: 'LGA',
                legendText: 'Tennis Demand in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_tenn_area_popup_hover
              },
              {
                id: 'sec_004_tenn_dem_REG',
                name: 'REGION',
                legendText: 'Tennis Demand in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_tenn_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '3. CONVERSION (AREA)',
            text: module_mem_section3_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_tenn_mem_dem_cnv_SA2',
                legendText: 'Tennis Demand Conversion (%) in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_tenn_area_popup_hover
              },
              {
                id: 'sec_004_tenn_mem_dem_cnv_LGA',
                name: 'LGA',
                legendText: 'Tennis Demand Conversion (%) in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_tenn_area_popup_hover
              },
              {
                id: 'sec_004_tenn_mem_dem_cnv_REG',
                name: 'REGION',
                legendText: 'Tennis Demand Conversion (%) in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_tenn_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '4. CLUB SIZE (SITE)',
            text: module_mem_section4_text,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'sec_004_tenn_SITE',
                legendText: 'Tennis Clubs and Members at Site',
                // click: TBC,
                hover: module_mem_site_popup_hover
              },
            ]
          },//END OF SECTION
        ]
      },//END OF SUB-MODULE
   {
        name: 'TOUCH FOOTBALL',
        id: 'module_mem_touc',
        image: PRIMARY_MENU_IMAGE,
        summary: module_sport_module_summary,
        sections: [
          {
            heading: '1. MEMBERS (AREA)',
            text: module_mem_section1_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_ax_21_mem_SA2',
                legendText: 'Touch Members in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_ax_21_area_popup_hover
              },
              {
                id: 'sec_004_ax_21_mem_LGA',
                name: 'LGA',
                legendText: 'Touch Members in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_ax_21_area_popup_hover
              },
              {
                id: 'sec_004_ax_21_mem_REG',
                name: 'REGION',
                legendText: 'Touch Members in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_ax_21_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '2. DEMAND (AREA)',
            text: module_mem_section2_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_ax_21_dem_SA2',
                legendText: 'Touch Demand in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_ax_21_area_popup_hover
              },
              {
                id: 'sec_004_ax_21_dem_LGA',
                name: 'LGA',
                legendText: 'Touch Demand in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_ax_21_area_popup_hover
              },
              {
                id: 'sec_004_ax_21_dem_REG',
                name: 'REGION',
                legendText: 'Touch Demand in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_ax_21_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '3. CONVERSION (AREA)',
            text: module_mem_section3_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_ax_21_mem_dem_cnv_SA2',
                legendText: 'Touch Demand Conversion (%) in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_ax_21_area_popup_hover
              },
              {
                id: 'sec_004_ax_21_mem_dem_cnv_LGA',
                name: 'LGA',
                legendText: 'Touch Demand Conversion (%) in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_ax_21_area_popup_hover
              },
              {
                id: 'sec_004_ax_21_mem_dem_cnv_REG',
                name: 'REGION',
                legendText: 'Touch Demand Conversion (%) in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_ax_21_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '4. CLUB SIZE (SITE)',
            text: module_mem_section4_text,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'sec_004_ax_21_SITE',
                legendText: 'Touch Clubs and Members at Site',
                // click: TBC,
                hover: module_mem_site_popup_hover
              },
            ]
          },//END OF SECTION
        ]
      },//END OF SUB-MODULE
     {
        name: 'VOLLEYBALL',
        id: 'module_mem_voll',
        image: PRIMARY_MENU_IMAGE,
        summary: module_sport_module_summary,
        sections: [
          {
            heading: '1. MEMBERS (AREA)',
            text: module_mem_section1_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_ax_20_mem_SA2',
                legendText: 'Volleyball Members in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_ax_20_area_popup_hover
              },
              {
                id: 'sec_004_ax_20_mem_LGA',
                name: 'LGA',
                legendText: 'Volleyball Members in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_ax_20_area_popup_hover
              },
              {
                id: 'sec_004_ax_20_mem_REG',
                name: 'REGION',
                legendText: 'Volleyball Members in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_ax_20_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '2. DEMAND (AREA)',
            text: module_mem_section2_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_ax_20_dem_SA2',
                legendText: 'Volleyball Demand in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_ax_20_area_popup_hover
              },
              {
                id: 'sec_004_ax_20_dem_LGA',
                name: 'LGA',
                legendText: 'Volleyball Demand in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_ax_20_area_popup_hover
              },
              {
                id: 'sec_004_ax_20_dem_REG',
                name: 'REGION',
                legendText: 'Volleyball Demand in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_ax_20_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '3. CONVERSION (AREA)',
            text: module_mem_section3_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_004_ax_20_mem_dem_cnv_SA2',
                legendText: 'Volleyball Demand Conversion (%) in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_004_ax_20_area_popup_hover
              },
              {
                id: 'sec_004_ax_20_mem_dem_cnv_LGA',
                name: 'LGA',
                legendText: 'Volleyball Demand Conversion (%) in LGA Area',
                // click: TBC,
                hover: module_mem_sec_004_ax_20_area_popup_hover
              },
              {
                id: 'sec_004_ax_20_mem_dem_cnv_REG',
                name: 'REGION',
                legendText: 'Volleyball Demand Conversion (%) in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_004_ax_20_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '4. CLUB SIZE (SITE)',
            text: module_mem_section4_text,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'sec_004_ax_20_SITE',
                legendText: 'Volleyball Clubs and Members at Site',
                // click: TBC,
                hover: module_mem_site_popup_hover
              },
            ]
          },//END OF SECTION
        ]
      },//END OF SUB-MODULE
      // {
      //   name: 'SPARE 15',
      //   id: 'module_mem_ax_15',
      //   image: PRIMARY_MENU_IMAGE,
      //   summary: module_sport_module_summary,
      //   sections: [
      //     {
      //       heading: '1. MEMBERS (AREA)',
      //       text: module_mem_section1_text,
      //       icon: AREA_ICON,
      //       layers: [
      //         {
      //           name: 'SA2',
      //           id: 'sec_004_ax_15_mem_SA2',
      //           legendText: 'Spare Members in SA2 Area',
      //           // click: TBC,
      //           hover: module_mem_sec_004_ax_15_area_popup_hover
      //         },
      //         {
      //           id: 'sec_004_ax_15_mem_LGA',
      //           name: 'LGA',
      //           legendText: 'Spare Members in LGA Area',
      //           // click: TBC,
      //           hover: module_mem_sec_004_ax_15_area_popup_hover
      //         },
      //         {
      //           id: 'sec_004_ax_15_mem_REG',
      //           name: 'REGION',
      //           legendText: 'Spare Members in Govt. Region',
      //           // click: TBC,
      //           hover: module_mem_sec_004_ax_15_area_popup_hover
      //         },
      //       ]
      //     },//END OF SECTION
      //     {
      //       heading: '2. DEMAND (AREA)',
      //       text: module_mem_section2_text,
      //       icon: AREA_ICON,
      //       layers: [
      //         {
      //           name: 'SA2',
      //           id: 'sec_004_ax_15_dem_SA2',
      //           legendText: 'Spare Demand in SA2 Area',
      //           // click: TBC,
      //           hover: module_mem_sec_004_ax_15_area_popup_hover
      //         },
      //         {
      //           id: 'sec_004_ax_15_dem_LGA',
      //           name: 'LGA',
      //           legendText: 'Spare Demand in LGA Area',
      //           // click: TBC,
      //           hover: module_mem_sec_004_ax_15_area_popup_hover
      //         },
      //         {
      //           id: 'sec_004_ax_15_dem_REG',
      //           name: 'REGION',
      //           legendText: 'Spare Demand in Govt. Region',
      //           // click: TBC,
      //           hover: module_mem_sec_004_ax_15_area_popup_hover
      //         },
      //       ]
      //     },//END OF SECTION
      //     {
      //       heading: '3. CONVERSION (AREA)',
      //       text: module_mem_section3_text,
      //       icon: AREA_ICON,
      //       layers: [
      //         {
      //           name: 'SA2',
      //           id: 'sec_004_ax_15_mem_dem_cnv_SA2',
      //           legendText: 'Spare Demand Conversion (%) in SA2 Area',
      //           // click: TBC,
      //           hover: module_mem_sec_004_ax_15_area_popup_hover
      //         },
      //         {
      //           id: 'sec_004_ax_15_mem_dem_cnv_LGA',
      //           name: 'LGA',
      //           legendText: 'Spare Demand Conversion (%) in LGA Area',
      //           // click: TBC,
      //           hover: module_mem_sec_004_ax_15_area_popup_hover
      //         },
      //         {
      //           id: 'sec_004_ax_15_mem_dem_cnv_REG',
      //           name: 'REGION',
      //           legendText: 'Spare Demand Conversion (%) in Govt. Region',
      //           // click: TBC,
      //           hover: module_mem_sec_004_ax_15_area_popup_hover
      //         },
      //       ]
      //     },//END OF SECTION
      //     {
      //       heading: '4. CLUB SIZE (SITE)',
      //       text: module_mem_section4_text,
      //       icon: POINT_ICON,
      //       layers: [
      //         {
      //           name: 'SITE',
      //           id: 'sec_004_ax_15_SITE',
      //           legendText: 'Spare Clubs and Members at Site',
      //           // click: TBC,
      //           hover: module_mem_site_popup_hover
      //         },
      //       ]
      //     },//END OF SECTION
      //   ]
      // },//END OF SUB-MODULE
      // {
      //   name: 'SPARE 20',
      //   id: 'module_mem_ax_20',
      //   image: PRIMARY_MENU_IMAGE,
      //   summary: module_sport_module_summary,
      //   sections: [
      //     {
      //       heading: '1. MEMBERS (AREA)',
      //       text: module_mem_section1_text,
      //       icon: AREA_ICON,
      //       layers: [
      //         {
      //           name: 'SA2',
      //           id: 'sec_004_ax_20_mem_SA2',
      //           legendText: 'Spare Members in SA2 Area',
      //           // click: TBC,
      //           hover: module_mem_sec_004_ax_20_area_popup_hover
      //         },
      //         {
      //           id: 'sec_004_ax_20_mem_LGA',
      //           name: 'LGA',
      //           legendText: 'Spare Members in LGA Area',
      //           // click: TBC,
      //           hover: module_mem_sec_004_ax_20_area_popup_hover
      //         },
      //         {
      //           id: 'sec_004_ax_20_mem_REG',
      //           name: 'REGION',
      //           legendText: 'Spare Members in Govt. Region',
      //           // click: TBC,
      //           hover: module_mem_sec_004_ax_20_area_popup_hover
      //         },
      //       ]
      //     },//END OF SECTION
      //     {
      //       heading: '2. DEMAND (AREA)',
      //       text: module_mem_section2_text,
      //       icon: AREA_ICON,
      //       layers: [
      //         {
      //           name: 'SA2',
      //           id: 'sec_004_ax_20_dem_SA2',
      //           legendText: 'Spare Demand in SA2 Area',
      //           // click: TBC,
      //           hover: module_mem_sec_004_ax_20_area_popup_hover
      //         },
      //         {
      //           id: 'sec_004_ax_20_dem_LGA',
      //           name: 'LGA',
      //           legendText: 'Spare Demand in LGA Area',
      //           // click: TBC,
      //           hover: module_mem_sec_004_ax_20_area_popup_hover
      //         },
      //         {
      //           id: 'sec_004_ax_20_dem_REG',
      //           name: 'REGION',
      //           legendText: 'Spare Demand in Govt. Region',
      //           // click: TBC,
      //           hover: module_mem_sec_004_ax_20_area_popup_hover
      //         },
      //       ]
      //     },//END OF SECTION
      //     {
      //       heading: '3. CONVERSION (AREA)',
      //       text: module_mem_section3_text,
      //       icon: AREA_ICON,
      //       layers: [
      //         {
      //           name: 'SA2',
      //           id: 'sec_004_ax_20_mem_dem_cnv_SA2',
      //           legendText: 'Spare Demand Conversion (%) in SA2 Area',
      //           // click: TBC,
      //           hover: module_mem_sec_004_ax_20_area_popup_hover
      //         },
      //         {
      //           id: 'sec_004_ax_20_mem_dem_cnv_LGA',
      //           name: 'LGA',
      //           legendText: 'Spare Demand Conversion (%) in LGA Area',
      //           // click: TBC,
      //           hover: module_mem_sec_004_ax_20_area_popup_hover
      //         },
      //         {
      //           id: 'sec_004_ax_20_mem_dem_cnv_REG',
      //           name: 'REGION',
      //           legendText: 'Spare Demand Conversion (%) in Govt. Region',
      //           // click: TBC,
      //           hover: module_mem_sec_004_ax_20_area_popup_hover
      //         },
      //       ]
      //     },//END OF SECTION
      //     {
      //       heading: '4. CLUB SIZE (SITE)',
      //       text: module_mem_section4_text,
      //       icon: POINT_ICON,
      //       layers: [
      //         {
      //           name: 'SITE',
      //           id: 'sec_004_ax_20_SITE',
      //           legendText: 'Spare Clubs and Members at Site',
      //           // click: TBC,
      //           hover: module_mem_site_popup_hover
      //         },
      //       ]
      //     },//END OF SECTION
      //   ]
      // },//END OF SUB-MODULE
      // {
      //   name: 'SPARE 21',
      //   id: 'module_mem_ax_21',
      //   image: PRIMARY_MENU_IMAGE,
      //   summary: module_sport_module_summary,
      //   sections: [
      //     {
      //       heading: '1. MEMBERS (AREA)',
      //       text: module_mem_section1_text,
      //       icon: AREA_ICON,
      //       layers: [
      //         {
      //           name: 'SA2',
      //           id: 'sec_004_ax_21_mem_SA2',
      //           legendText: 'Spare Members in SA2 Area',
      //           // click: TBC,
      //           hover: module_mem_sec_004_ax_21_area_popup_hover
      //         },
      //         {
      //           id: 'sec_004_ax_21_mem_LGA',
      //           name: 'LGA',
      //           legendText: 'Spare Members in LGA Area',
      //           // click: TBC,
      //           hover: module_mem_sec_004_ax_21_area_popup_hover
      //         },
      //         {
      //           id: 'sec_004_ax_21_mem_REG',
      //           name: 'REGION',
      //           legendText: 'Spare Members in Govt. Region',
      //           // click: TBC,
      //           hover: module_mem_sec_004_ax_21_area_popup_hover
      //         },
      //       ]
      //     },//END OF SECTION
      //     {
      //       heading: '2. DEMAND (AREA)',
      //       text: module_mem_section2_text,
      //       icon: AREA_ICON,
      //       layers: [
      //         {
      //           name: 'SA2',
      //           id: 'sec_004_ax_21_dem_SA2',
      //           legendText: 'Spare Demand in SA2 Area',
      //           // click: TBC,
      //           hover: module_mem_sec_004_ax_21_area_popup_hover
      //         },
      //         {
      //           id: 'sec_004_ax_21_dem_LGA',
      //           name: 'LGA',
      //           legendText: 'Spare Demand in LGA Area',
      //           // click: TBC,
      //           hover: module_mem_sec_004_ax_21_area_popup_hover
      //         },
      //         {
      //           id: 'sec_004_ax_21_dem_REG',
      //           name: 'REGION',
      //           legendText: 'Spare Demand in Govt. Region',
      //           // click: TBC,
      //           hover: module_mem_sec_004_ax_21_area_popup_hover
      //         },
      //       ]
      //     },//END OF SECTION
      //     {
      //       heading: '3. CONVERSION (AREA)',
      //       text: module_mem_section3_text,
      //       icon: AREA_ICON,
      //       layers: [
      //         {
      //           name: 'SA2',
      //           id: 'sec_004_ax_21_mem_dem_cnv_SA2',
      //           legendText: 'Spare Demand Conversion (%) in SA2 Area',
      //           // click: TBC,
      //           hover: module_mem_sec_004_ax_21_area_popup_hover
      //         },
      //         {
      //           id: 'sec_004_ax_21_mem_dem_cnv_LGA',
      //           name: 'LGA',
      //           legendText: 'Spare Demand Conversion (%) in LGA Area',
      //           // click: TBC,
      //           hover: module_mem_sec_004_ax_21_area_popup_hover
      //         },
      //         {
      //           id: 'sec_004_ax_21_mem_dem_cnv_REG',
      //           name: 'REGION',
      //           legendText: 'Spare Demand Conversion (%) in Govt. Region',
      //           // click: TBC,
      //           hover: module_mem_sec_004_ax_21_area_popup_hover
      //         },
      //       ]
      //     },//END OF SECTION
      //     {
      //       heading: '4. CLUB SIZE (SITE)',
      //       text: module_mem_section4_text,
      //       icon: POINT_ICON,
      //       layers: [
      //         {
      //           name: 'SITE',
      //           id: 'sec_004_ax_21_SITE',
      //           legendText: 'Spare Clubs and Members at Site',
      //           // click: TBC,
      //           hover: module_mem_site_popup_hover
      //         },
      //       ]
      //     },//END OF SECTION
      //   ]
      // },//END OF SUB-MODULE
    ]
  }, //end of MODULE
  {
    id: 'module_cp', // COMMUNITY PROFILE
    name: module_cp_module_name,
    collapsible: true,
    type: 'CODE_VIEWER',
    CODES: [
      {
        name: module_cp_submodule1_name, // CENSUS KEY INDICATORS AUS
        id: 'module_cp_submodule1',
        image: PRIMARY_MENU_IMAGE,
        summary: module_cp_submodule1_summary,
        sections: [
          {
            heading: module_cp_submodule1_section1_heading,
            text: module_cp_submodule1_section1_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'LGA',
                id: 'cp_cen_total_pop_LGA',
                legendText: module_cp_submodule1_section1_layer1_legendText,
                click: module_cp_submodule1_sectionmaps_area_layers_popup_click,
                hover: module_cp_submodule1_sectionmaps_area_layers_popup_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: module_cp_submodule1_section2_heading,
            text: module_cp_submodule1_section2_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'LGA',
                id: 'cp_cen_indig_pop_LGA',
                legendText: module_cp_submodule1_section2_layer1_legendText,
                click: module_cp_submodule1_sectionmaps_area_layers_popup_click,
                hover: module_cp_submodule1_sectionmaps_area_layers_popup_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: module_cp_submodule1_section3_heading,
            text: module_cp_submodule1_section3_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'LGA',
                id: 'cp_cen_birth_elsewhere_LGA',
                legendText: module_cp_submodule1_section3_layer1_legendText,
                click: module_cp_submodule1_sectionmaps_area_layers_popup_click,
                hover: module_cp_submodule1_sectionmaps_area_layers_popup_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: module_cp_submodule1_section4_heading,
            text: module_cp_submodule1_section4_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'LGA',
                id: 'cp_cen_lang_noneng_LGA',
                legendText: module_cp_submodule1_section4_layer1_legendText,
                click: module_cp_submodule1_sectionmaps_area_layers_popup_click,
                hover: module_cp_submodule1_sectionmaps_area_layers_popup_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: module_cp_submodule1_section5_heading,
            text: module_cp_submodule1_section5_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'LGA',
                id: 'cp_cen_dep_LGA',
                legendText: module_cp_submodule1_section5_layer1_legendText,
                click: module_cp_submodule1_sectionmaps_area_layers_popup_click,
                hover: module_cp_submodule1_sectionmaps_area_layers_popup_hover,
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
          {
            heading: module_cp_submodule1_section6_heading,
            text: module_cp_submodule1_section6_text,
            icon: AREA_ICON,
            layers: [
              {
                id: 'cp_cen_assist_LGA',
                name: 'LGA',
                legendText: module_cp_submodule1_section6_layer1_legendText,
                click: module_cp_submodule1_sectionmaps_area_layers_popup_click,
                hover: module_cp_submodule1_sectionmaps_area_layers_popup_hover,
              },
              {
                name: 'SA2',
                id: 'cp_cen_assist_SA2',
                legendText:module_cp_submodule1_section6_layer2_legendText,
                // click: AREA_COMMUNITY_POPUP,
                hover: '<h4>{AREA_NAME}</h4><p>Need Assistance:</p><h4>{cp_cen_assist}</h4>',
              },
              {
                name: 'SA1',
                id: 'cp_cen_assist_SA1',
                legendText: module_cp_submodule1_section6_layer3_legendText,
                // click: AREA_COMMUNITY_POPUP,
                hover: '<h4>{AREA_NAME}</h4><p>Need Assistance:</p><h4>{cp_cen_assist}</h4>',
              },
            ]
          },//END OF SECTION
          {
            heading: module_se_section_layer_details_heading,
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: module_cp_submodule1_sectiondetails_documentHtml,
          },//END OF SECTION
        ]
      },//END OF SUB-MODULE
      {
        name: module_cp_submodule3_name, // HEALTH FACTORS
        id: 'module_cp_submodule3',
        image: PRIMARY_MENU_IMAGE,
        summary: module_cp_submodule3_summary,
        sections: [
          {
            heading: module_cp_submodule3_section1_heading,
            text: module_cp_submodule3_section1_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'cp_hf_roi_SA1',
                legendText: module_cp_submodule3_section1_layer1_legendText,
                // click: AREA_COMMUNITY_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{cp_hf_roi}</h4>',
              },
            ]
          },//END OF SECTION
         {
           heading: module_cp_submodule3_section2_heading,
           text: module_cp_submodule3_section2_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'cp_hf_2_SA1',
                legendText: module_cp_submodule3_section2_layer1_legendText,
                hover: module_cp_submodule3_sectionmaps_area_layers_popup_hover,
              },
              {
                name: 'SA2',
                id: 'cp_hf_2_SA2',
                legendText: module_cp_submodule3_section2_layer2_legendText,
                hover: module_cp_submodule3_sectionmaps_area_layers_popup_hover,
              },
              {
                id: 'cp_hf_2_LGA',
                name: 'LGA',
                legendText: module_cp_submodule3_section2_layer3_legendText,
                hover: module_cp_submodule3_sectionmaps_area_layers_popup_hover,
              },
            ]
          },//END OF SECTION
         {
           heading: module_cp_submodule3_section3_heading,
           text: module_cp_submodule3_section3_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'cp_hf_3_SA1',
                legendText: module_cp_submodule3_section3_layer1_legendText,
                hover: module_cp_submodule3_sectionmaps_area_layers_popup_hover,
              },
              {
                name: 'SA2',
                id: 'cp_hf_3_SA2',
                legendText: module_cp_submodule3_section3_layer2_legendText,
                hover: module_cp_submodule3_sectionmaps_area_layers_popup_hover,
              },
              {
                id: 'cp_hf_3_LGA',
                name: 'LGA',
                legendText: module_cp_submodule3_section3_layer3_legendText,
                hover: module_cp_submodule3_sectionmaps_area_layers_popup_hover,
              },
            ]
          },//END OF SECTION
         {
           heading: module_cp_submodule3_section4_heading,
           text: module_cp_submodule3_section4_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'cp_hf_4_SA1',
                legendText: module_cp_submodule3_section4_layer1_legendText,
                hover: module_cp_submodule3_sectionmaps_area_layers_popup_hover,
              },
              {
                name: 'SA2',
                id: 'cp_hf_4_SA2',
                legendText: module_cp_submodule3_section4_layer2_legendText,
                hover: module_cp_submodule3_sectionmaps_area_layers_popup_hover,
              },
              {
                id: 'cp_hf_4_LGA',
                name: 'LGA',
                legendText: module_cp_submodule3_section4_layer3_legendText,
                hover: module_cp_submodule3_sectionmaps_area_layers_popup_hover,
              },
            ]
          },//END OF SECTION
         {
           heading: module_cp_submodule3_section5_heading,
           text: module_cp_submodule3_section5_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'cp_hf_5_SA1',
                legendText: module_cp_submodule3_section5_layer1_legendText,
                hover: module_cp_submodule3_sectionmaps_area_layers_popup_hover,
              },
              {
                name: 'SA2',
                id: 'cp_hf_5_SA2',
                legendText: module_cp_submodule3_section5_layer2_legendText,
                hover: module_cp_submodule3_sectionmaps_area_layers_popup_hover,
              },
              {
                id: 'cp_hf_5_LGA',
                name: 'LGA',
                legendText: module_cp_submodule3_section5_layer3_legendText,
                hover: module_cp_submodule3_sectionmaps_area_layers_popup_hover,
              },
            ]
          },//END OF SECTION
         {
           heading: module_cp_submodule3_section6_heading,
           text: module_cp_submodule3_section6_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'cp_hf_6_SA1',
                legendText: module_cp_submodule3_section6_layer1_legendText,
                hover: module_cp_submodule3_sectionmaps_area_layers_popup_hover,
              },
              {
                name: 'SA2',
                id: 'cp_hf_6_SA2',
                legendText: module_cp_submodule3_section6_layer2_legendText,
                hover: module_cp_submodule3_sectionmaps_area_layers_popup_hover,
              },
              {
                id: 'cp_hf_6_LGA',
                name: 'LGA',
                legendText: module_cp_submodule3_section6_layer3_legendText,
                hover: module_cp_submodule3_sectionmaps_area_layers_popup_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: module_se_section_layer_details_heading,
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: module_cp_submodule3_sectiondetails_documentHtml,
          },//END OF SECTION
        ]
      },//END OF SUB-MODULE
      {
        name: module_cp_submodule4_name, // AREA INFO AUS
        id: 'module_cp_submodule4',
        image: PRIMARY_MENU_IMAGE,
        summary: module_cp_submodule4_summary,
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
          {
            heading: module_cp_submodule4_section2_heading,
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
            heading: module_cp_submodule4_section3_heading,
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
          {
            heading: module_cp_submodule4_section4_heading,
            text: module_cp_submodule4_section4_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SATELLITE',
                id: 'mapbox-satellite',
                legendText: 'Satellite View',
                // click: '<p>{AREA_NAME}<p>',
                // hover: '<p>{AREA_NAME}<p>',
              },
            ]
          },//END OF SECTION
          {
            heading: module_se_section_layer_details_heading,
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: module_cp_submodule4_sectiondetails_documentHtml,
          },//END OF SECTION
        ]
      },//END OF SUB-MODULE
    ]
  }, //END OF MODULE
  {
    id: 'module_feedback',
    name: 'FEEDBACK',
    type: 'AREA_VIEWER',
//    image: PRIMARY_MENU_IMAGE,
    summary: module_feedback_summary,
        // sections: [
        //   // {
        //   //   heading: 'TBC',
        //   //   text: null,
        //   //   icon: DOCUMENT_ICON,
        //   //   documentHtml: TBC,
        //   //   // documentHtml: 'TBC',
        //   // },
        // ]
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