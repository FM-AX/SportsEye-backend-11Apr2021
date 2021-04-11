/////////////////////////////////////////////////////////////////////////////////////

// SEC SA V2.0
// LAST UPDATED 04-JAN-21

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
const ACCOUNT_NAME = "SOUTH AUSTRALIA"

// 1B. PRODUCT SELECTION PAGE
const SPLASH_APPS = [
  {
    name: 'SPORTSEYE STATE',
    lede: '<p>Using real world member data to match the sports offer to local demand.</p>',
    action: 'ENTER',
    route: '/home',
    disabled: false
  },
  {
    name: 'SPORTSEYE PRO',
    lede: '<p>Full investment planning model tailored for state sport associations and national sport organisations.</p>',
    action: 'ENTER',
    route: null,
    disabled: true
  },
]

// 1C. LOGIN SPLASH
const SPLASH_TEXT = require('../group-references/SEC_FILES/SEC_003_SA/SPLASH_TEXT')

const SPLASH = {
  lede: SPLASH_TEXT,
  head: "WELCOME TO SPORTSEYE",
  subhead: ACCOUNT_NAME,
  disclaimer: '<span><a href="https://activexchange.org/your-data-our-commitment" target="_blank">SportsEye Terms of Use</a><span>',
  action: "ENTER"
}

const AFFILIATE_LOGOS = [
  "/images/Front_Page_Logo_Band.png",
]


// 2. MAP DETAILS

// 2A. MAPBOX ACCOUNT DETAILS
// // Mapbox Account: activexchange+cust
const MAPBOX_APIKEY = "pk.eyJ1IjoiYWN0aXZleGNoYW5nZS1jdXN0IiwiYSI6ImNrM292dnI2eDI1Z2MzaHBobWk4Z3Q2cnQifQ.Nx-qysX5Bjm33Zwux6H1dA"
// // Mapbox Studio Style: SE_HANDOVER_SEC_003_SA
const MAPBOX_STYLE = "mapbox://styles/activexchange-cust/ckjgyo7970ksn19o3bnl5kkrm"


// 2B. STARTING MAP VIEW

const MAP_START = {
   lat: -34.919114, lng: 138.672789, zoom: 10 //ADELAIDE
}

// 3. IMAGES

// 3A. MENU IMAGES
const PRIMARY_MENU_IMAGE = '/images/ORSR_Logo.jpg'


/////////////////////////////////////////////////////////////////////////////////////

// PART B: ACCOUNT SPECIFIC REFERENCES

/////////////////////////////////////////////////////////////////////////////////////

// 1. POPUPS

// 2. DASHBOARDS

const module_mem_dashboard_summary = `
<h1>SPORT SUMMARY DASHBOARD</h1>
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/1ESHNmjvsqopq9bYw1LDyWcFTQQKgxUPm/page/HbFMB" frameborder="0" style="border:0" allowfullscreen></iframe>
`

const module_mem_dashboard_performance = `
<h1>SPORT PERFORMANCE DASHBOARD</h1>
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/16oPFtUNGgu8bKQJWtzxcze0HAmwpJUhA/page/mZ1r" frameborder="0" style="border:0" allowfullscreen></iframe>
`

const module_mem_dashboard_wellbeing = `
<h1>HEALTH & WELLBEING DASHBOARD</h1>
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/1nTy3jSS3zFL4KeXefnRNKZDy688Qqu0o/page/J8YJB" frameborder="0" style="border:0" allowfullscreen></iframe>
`

// 3. LAYER TEXT

const module_mem_combined_site_text = require('../group-references/SEC_FILES/SEC_003_SA/my_members/module_mem_combined_site_text')

// 4. DOCUMENTS


/////////////////////////////////////////////////////////////////////////////////////

// PART C: PRODUCT SPECIFIC REFERENCES

/////////////////////////////////////////////////////////////////////////////////////


// MODULE - MY MEMBERS

const module_mem_site_popup_hover = require('../group-references/SEC_FILES/SEC_003_SA/my_members/site_popup_hover')


const module_mem_module_name = require('../group-references/SEC_FILES/SEC_003_SA/my_members/module_name')
const module_mem_module_summary = require('../group-references/SEC_FILES/SEC_003_SA/my_members/submodule_summary')

const module_mem_section1_text = require('../group-references/SEC_FILES/SEC_003_SA/my_members/submodule_section1_text')
const module_mem_section2_text = require('../group-references/SEC_FILES/SEC_003_SA/my_members/submodule_section2_text')
const module_mem_section3_text = require('../group-references/SEC_FILES/SEC_003_SA/my_members/submodule_section3_text')
const module_mem_section4_text = require('../group-references/SEC_FILES/SEC_003_SA/my_members/submodule_section4_text')

// MODULE - MODEL DEVELOPMENT
const module_model_module_summary = require('../group-references/SEC_FILES/SEC_003_SA/model_development/module_summary')


const module_mem_sec_003_comb_mem_area_popup_hover = require('../group-references/SEC_FILES/SEC_003_SA/my_members/comb/area_mem_popup_hover')
const module_mem_sec_003_comb_dem_area_popup_hover = require('../group-references/SEC_FILES/SEC_003_SA/my_members/comb/area_dem_popup_hover')
const module_mem_sec_003_comb_mem_dem_cnv_area_popup_hover = require('../group-references/SEC_FILES/SEC_003_SA/my_members/comb/area_mem_dem_cnv_popup_hover')


const module_mem_sec_003_afl_area_popup_hover = require('../group-references/SEC_FILES/SEC_003_SA/my_members/afl/area_popup_hover')
const module_mem_sec_003_athl_area_popup_hover = require('../group-references/SEC_FILES/SEC_003_SA/my_members/athl/area_popup_hover')
const module_mem_sec_003_cycl_area_popup_hover = require('../group-references/SEC_FILES/SEC_003_SA/my_members/cycl/area_popup_hover')
const module_mem_sec_003_eque_area_popup_hover = require('../group-references/SEC_FILES/SEC_003_SA/my_members/eque/area_popup_hover')
const module_mem_sec_003_foot_area_popup_hover = require('../group-references/SEC_FILES/SEC_003_SA/my_members/foot/area_popup_hover')
const module_mem_sec_003_gymn_area_popup_hover = require('../group-references/SEC_FILES/SEC_003_SA/my_members/gymn/area_popup_hover')
const module_mem_sec_003_hock_area_popup_hover = require('../group-references/SEC_FILES/SEC_003_SA/my_members/hock/area_popup_hover')
const module_mem_sec_003_litt_area_popup_hover = require('../group-references/SEC_FILES/SEC_003_SA/my_members/litt/area_popup_hover')
const module_mem_sec_003_netb_area_popup_hover = require('../group-references/SEC_FILES/SEC_003_SA/my_members/netb/area_popup_hover')
const module_mem_sec_003_soft_area_popup_hover = require('../group-references/SEC_FILES/SEC_003_SA/my_members/soft/area_popup_hover')
const module_mem_sec_003_swim_area_popup_hover = require('../group-references/SEC_FILES/SEC_003_SA/my_members/swim/area_popup_hover')
const module_mem_sec_003_tenn_area_popup_hover = require('../group-references/SEC_FILES/SEC_003_SA/my_members/tenn/area_popup_hover')
const module_mem_sec_003_touc_area_popup_hover = require('../group-references/SEC_FILES/SEC_003_SA/my_members/touc/area_popup_hover')
const module_mem_sec_003_voll_area_popup_hover = require('../group-references/SEC_FILES/SEC_003_SA/my_members/voll/area_popup_hover')



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
    name: module_mem_module_name,
    collapsible: true,
    type: 'CODE_VIEWER',
    CODES: [
      {
        name: 'DASHBOARDS',
        id: 'module_mem_dashboards',
        image: PRIMARY_MENU_IMAGE,
        summary: module_mem_module_summary,
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
        summary: module_mem_module_summary,
        sections: [
          {
            heading: '1. MEMBERS (AREA)',
            text: module_mem_section1_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_003_comb_mem_SA2',
                legendText: 'Combined Sport Members in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_comb_mem_area_popup_hover
              },
              {
                id: 'sec_003_comb_mem_LGA',
                name: 'LGA',
                legendText: 'Combined Sport Members in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_comb_mem_area_popup_hover
              },
              {
                id: 'sec_003_comb_mem_REG',
                name: 'REGION',
                legendText: 'Combined Sport Members in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_comb_mem_area_popup_hover
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
                id: 'sec_003_comb_dem_SA2',
                legendText: 'Combined Sport Demand in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_comb_dem_area_popup_hover
              },
              {
                id: 'sec_003_comb_dem_LGA',
                name: 'LGA',
                legendText: 'Combined Sport Demand in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_comb_dem_area_popup_hover
              },
              {
                id: 'sec_003_comb_dem_REG',
                name: 'REGION',
                legendText: 'Combined Sport Demand in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_comb_dem_area_popup_hover
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
                id: 'sec_003_comb_mem_dem_cnv_SA2',
                legendText: 'Combined Sport Demand Conversion (%) in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_comb_mem_dem_cnv_area_popup_hover
              },
              {
                id: 'sec_003_comb_mem_dem_cnv_LGA',
                name: 'LGA',
                legendText: 'Combined Sport Demand Conversion (%) in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_comb_mem_dem_cnv_area_popup_hover
              },
              {
                id: 'sec_003_comb_mem_dem_cnv_REG',
                name: 'REGION',
                legendText: 'Combined Sport Demand Conversion (%) in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_comb_mem_dem_cnv_area_popup_hover
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
                id: 'sec_003_comb_SITE',
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
        summary: module_mem_module_summary,
        sections: [
          {
            heading: '1. MEMBERS (AREA)',
            text: module_mem_section1_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_003_afl_mem_SA2',
                legendText: 'Australian Football Members in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_afl_area_popup_hover
              },
              {
                id: 'sec_003_afl_mem_LGA',
                name: 'LGA',
                legendText: 'Australian Football Members in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_afl_area_popup_hover
              },
              {
                id: 'sec_003_afl_mem_REG',
                name: 'REGION',
                legendText: 'Australian Football Members in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_afl_area_popup_hover
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
                id: 'sec_003_afl_dem_SA2',
                legendText: 'Australian Football Demand in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_afl_area_popup_hover
              },
              {
                id: 'sec_003_afl_dem_LGA',
                name: 'LGA',
                legendText: 'Australian Football Demand in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_afl_area_popup_hover
              },
              {
                id: 'sec_003_afl_dem_REG',
                name: 'REGION',
                legendText: 'Australian Football Demand in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_afl_area_popup_hover
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
                id: 'sec_003_afl_mem_dem_cnv_SA2',
                legendText: 'Australian Football Demand Conversion (%) in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_afl_area_popup_hover
              },
              {
                id: 'sec_003_afl_mem_dem_cnv_LGA',
                name: 'LGA',
                legendText: 'Australian Football Demand Conversion (%) in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_afl_area_popup_hover
              },
              {
                id: 'sec_003_afl_mem_dem_cnv_REG',
                name: 'REGION',
                legendText: 'Australian Football Demand Conversion (%) in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_afl_area_popup_hover
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
                id: 'sec_003_afl_SITE',
                legendText: 'Australian Football Members at Site',
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
        summary: module_mem_module_summary,
        sections: [
          {
            heading: '1. MEMBERS (AREA)',
            text: module_mem_section1_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_003_athl_mem_SA2',
                legendText: 'Athletics Members in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_athl_area_popup_hover
              },
              {
                id: 'sec_003_athl_mem_LGA',
                name: 'LGA',
                legendText: 'Athletics Members in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_athl_area_popup_hover
              },
              {
                id: 'sec_003_athl_mem_REG',
                name: 'REGION',
                legendText: 'Athletics Members in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_athl_area_popup_hover
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
                id: 'sec_003_athl_dem_SA2',
                legendText: 'Athletics Demand in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_athl_area_popup_hover
              },
              {
                id: 'sec_003_athl_dem_LGA',
                name: 'LGA',
                legendText: 'Athletics Demand in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_athl_area_popup_hover
              },
              {
                id: 'sec_003_athl_dem_REG',
                name: 'REGION',
                legendText: 'Athletics Demand in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_athl_area_popup_hover
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
                id: 'sec_003_athl_mem_dem_cnv_SA2',
                legendText: 'Athletics Demand Conversion (%) in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_athl_area_popup_hover
              },
              {
                id: 'sec_003_athl_mem_dem_cnv_LGA',
                name: 'LGA',
                legendText: 'Athletics Demand Conversion (%) in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_athl_area_popup_hover
              },
              {
                id: 'sec_003_athl_mem_dem_cnv_REG',
                name: 'REGION',
                legendText: 'Athletics Demand Conversion (%) in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_athl_area_popup_hover
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
                id: 'sec_003_athl_SITE',
                legendText: 'Athletics Members at Site',
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
        summary: module_mem_module_summary,
        sections: [
          {
            heading: '1. MEMBERS (AREA)',
            text: module_mem_section1_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_003_cycl_mem_SA2',
                legendText: 'Cycling Members in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_cycl_area_popup_hover
              },
              {
                id: 'sec_003_cycl_mem_LGA',
                name: 'LGA',
                legendText: 'Cycling Members in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_cycl_area_popup_hover
              },
              {
                id: 'sec_003_cycl_mem_REG',
                name: 'REGION',
                legendText: 'Cycling Members in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_cycl_area_popup_hover
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
                id: 'sec_003_cycl_dem_SA2',
                legendText: 'Cycling Demand in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_cycl_area_popup_hover
              },
              {
                id: 'sec_003_cycl_dem_LGA',
                name: 'LGA',
                legendText: 'Cycling Demand in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_cycl_area_popup_hover
              },
              {
                id: 'sec_003_cycl_dem_REG',
                name: 'REGION',
                legendText: 'Cycling Demand in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_cycl_area_popup_hover
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
                id: 'sec_003_cycl_mem_dem_cnv_SA2',
                legendText: 'Cycling Demand Conversion (%) in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_cycl_area_popup_hover
              },
              {
                id: 'sec_003_cycl_mem_dem_cnv_LGA',
                name: 'LGA',
                legendText: 'Cycling Demand Conversion (%) in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_cycl_area_popup_hover
              },
              {
                id: 'sec_003_cycl_mem_dem_cnv_REG',
                name: 'REGION',
                legendText: 'Cycling Demand Conversion (%) in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_cycl_area_popup_hover
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
                id: 'sec_003_cycl_SITE',
                legendText: 'Cycling Members at Site',
                // click: TBC,
                hover: module_mem_site_popup_hover
              },
            ]
          },//END OF SECTION
        ]
      },//END OF SUB-MODULE
      {
        name: 'EQUESTRIAN',
        id: 'module_mem_eque',
        image: PRIMARY_MENU_IMAGE,
        summary: module_mem_module_summary,
        sections: [
          {
            heading: '1. MEMBERS (AREA)',
            text: module_mem_section1_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_003_eque_mem_SA2',
                legendText: 'Equestrian Members in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_eque_area_popup_hover
              },
              {
                id: 'sec_003_eque_mem_LGA',
                name: 'LGA',
                legendText: 'Equestrian Members in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_eque_area_popup_hover
              },
              {
                id: 'sec_003_eque_mem_REG',
                name: 'REGION',
                legendText: 'Equestrian Members in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_eque_area_popup_hover
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
                id: 'sec_003_eque_dem_SA2',
                legendText: 'Equestrian Demand in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_eque_area_popup_hover
              },
              {
                id: 'sec_003_eque_dem_LGA',
                name: 'LGA',
                legendText: 'Equestrian Demand in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_eque_area_popup_hover
              },
              {
                id: 'sec_003_eque_dem_REG',
                name: 'REGION',
                legendText: 'Equestrian Demand in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_eque_area_popup_hover
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
                id: 'sec_003_eque_mem_dem_cnv_SA2',
                legendText: 'Equestrian Demand Conversion (%) in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_eque_area_popup_hover
              },
              {
                id: 'sec_003_eque_mem_dem_cnv_LGA',
                name: 'LGA',
                legendText: 'Equestrian Demand Conversion (%) in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_eque_area_popup_hover
              },
              {
                id: 'sec_003_eque_mem_dem_cnv_REG',
                name: 'REGION',
                legendText: 'Equestrian Demand Conversion (%) in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_eque_area_popup_hover
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
                id: 'sec_003_eque_SITE',
                legendText: 'Equestrian Members at Site',
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
        summary: module_mem_module_summary,
        sections: [
          {
            heading: '1. MEMBERS (AREA)',
            text: module_mem_section1_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_003_foot_mem_SA2',
                legendText: 'Football Members in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_foot_area_popup_hover
              },
              {
                id: 'sec_003_foot_mem_LGA',
                name: 'LGA',
                legendText: 'Football Members in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_foot_area_popup_hover
              },
              {
                id: 'sec_003_foot_mem_REG',
                name: 'REGION',
                legendText: 'Football Members in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_foot_area_popup_hover
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
                id: 'sec_003_foot_dem_SA2',
                legendText: 'Football Demand in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_foot_area_popup_hover
              },
              {
                id: 'sec_003_foot_dem_LGA',
                name: 'LGA',
                legendText: 'Football Demand in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_foot_area_popup_hover
              },
              {
                id: 'sec_003_foot_dem_REG',
                name: 'REGION',
                legendText: 'Football Demand in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_foot_area_popup_hover
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
                id: 'sec_003_foot_mem_dem_cnv_SA2',
                legendText: 'Football Demand Conversion (%) in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_foot_area_popup_hover
              },
              {
                id: 'sec_003_foot_mem_dem_cnv_LGA',
                name: 'LGA',
                legendText: 'Football Demand Conversion (%) in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_foot_area_popup_hover
              },
              {
                id: 'sec_003_foot_mem_dem_cnv_REG',
                name: 'REGION',
                legendText: 'Football Demand Conversion (%) in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_foot_area_popup_hover
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
                id: 'sec_003_foot_SITE',
                legendText: 'Football Members at Site',
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
        summary: module_mem_module_summary,
        sections: [
          {
            heading: '1. MEMBERS (AREA)',
            text: module_mem_section1_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_003_gymn_mem_SA2',
                legendText: 'Gymnastics Members in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_gymn_area_popup_hover
              },
              {
                id: 'sec_003_gymn_mem_LGA',
                name: 'LGA',
                legendText: 'Gymnastics Members in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_gymn_area_popup_hover
              },
              {
                id: 'sec_003_gymn_mem_REG',
                name: 'REGION',
                legendText: 'Gymnastics Members in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_gymn_area_popup_hover
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
                id: 'sec_003_gymn_dem_SA2',
                legendText: 'Gymnastics Demand in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_gymn_area_popup_hover
              },
              {
                id: 'sec_003_gymn_dem_LGA',
                name: 'LGA',
                legendText: 'Gymnastics Demand in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_gymn_area_popup_hover
              },
              {
                id: 'sec_003_gymn_dem_REG',
                name: 'REGION',
                legendText: 'Gymnastics Demand in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_gymn_area_popup_hover
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
                id: 'sec_003_gymn_mem_dem_cnv_SA2',
                legendText: 'Gymnastics Demand Conversion (%) in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_gymn_area_popup_hover
              },
              {
                id: 'sec_003_gymn_mem_dem_cnv_LGA',
                name: 'LGA',
                legendText: 'Gymnastics Demand Conversion (%) in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_gymn_area_popup_hover
              },
              {
                id: 'sec_003_gymn_mem_dem_cnv_REG',
                name: 'REGION',
                legendText: 'Gymnastics Demand Conversion (%) in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_gymn_area_popup_hover
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
                id: 'sec_003_gymn_SITE',
                legendText: 'Gymnastics Members at Site',
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
        summary: module_mem_module_summary,
        sections: [
        {
            heading: '1. MEMBERS (AREA)',
            text: module_mem_section1_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_003_hock_mem_SA2',
                legendText: 'Hockey Members in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_hock_area_popup_hover
              },
              {
                id: 'sec_003_hock_mem_LGA',
                name: 'LGA',
                legendText: 'Hockey Members in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_hock_area_popup_hover
              },
              {
                id: 'sec_003_hock_mem_REG',
                name: 'REGION',
                legendText: 'Hockey Members in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_hock_area_popup_hover
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
                id: 'sec_003_hock_dem_SA2',
                legendText: 'Hockey Demand in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_hock_area_popup_hover
              },
              {
                id: 'sec_003_hock_dem_LGA',
                name: 'LGA',
                legendText: 'Hockey Demand in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_hock_area_popup_hover
              },
              {
                id: 'sec_003_hock_dem_REG',
                name: 'REGION',
                legendText: 'Hockey Demand in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_hock_area_popup_hover
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
                id: 'sec_003_hock_mem_dem_cnv_SA2',
                legendText: 'Hockey Demand Conversion (%) in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_hock_area_popup_hover
              },
              {
                id: 'sec_003_hock_mem_dem_cnv_LGA',
                name: 'LGA',
                legendText: 'Hockey Demand Conversion (%) in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_hock_area_popup_hover
              },
              {
                id: 'sec_003_hock_mem_dem_cnv_REG',
                name: 'REGION',
                legendText: 'Hockey Demand Conversion (%) in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_hock_area_popup_hover
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
                id: 'sec_003_hock_SITE',
                legendText: 'Hockey Members at Site',
                // click: TBC,
                hover: module_mem_site_popup_hover
              },
            ]
          },//END OF SECTION
        ]
      },//END OF SUB-MODULE
      {
        name: 'LITTLE ATHLETICS',
        id: 'module_mem_litt',
        image: PRIMARY_MENU_IMAGE,
        summary: module_mem_module_summary,
        sections: [
          {
            heading: '1. MEMBERS (AREA)',
            text: module_mem_section1_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_003_litt_mem_SA2',
                legendText: 'Little Athletics Members in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_litt_area_popup_hover
              },
              {
                id: 'sec_003_litt_mem_LGA',
                name: 'LGA',
                legendText: 'Little Athletics Members in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_litt_area_popup_hover
              },
              {
                id: 'sec_003_litt_mem_REG',
                name: 'REGION',
                legendText: 'Little Athletics Members in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_litt_area_popup_hover
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
                id: 'sec_003_litt_dem_SA2',
                legendText: 'Little Athletics Demand in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_litt_area_popup_hover
              },
              {
                id: 'sec_003_litt_dem_LGA',
                name: 'LGA',
                legendText: 'Little Athletics Demand in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_litt_area_popup_hover
              },
              {
                id: 'sec_003_litt_dem_REG',
                name: 'REGION',
                legendText: 'Little Athletics Demand in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_litt_area_popup_hover
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
                id: 'sec_003_litt_mem_dem_cnv_SA2',
                legendText: 'Little Athletics Demand Conversion (%) in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_litt_area_popup_hover
              },
              {
                id: 'sec_003_litt_mem_dem_cnv_LGA',
                name: 'LGA',
                legendText: 'Little Athletics Demand Conversion (%) in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_litt_area_popup_hover
              },
              {
                id: 'sec_003_litt_mem_dem_cnv_REG',
                name: 'REGION',
                legendText: 'Little Athletics Demand Conversion (%) in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_litt_area_popup_hover
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
                id: 'sec_003_litt_SITE',
                legendText: 'Little Athletics Members at Site',
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
        summary: module_mem_module_summary,
        sections: [
          {
            heading: '1. MEMBERS (AREA)',
            text: module_mem_section1_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_003_netb_mem_SA2',
                legendText: 'Netball Members in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_netb_area_popup_hover
              },
              {
                id: 'sec_003_netb_mem_LGA',
                name: 'LGA',
                legendText: 'Netball Members in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_netb_area_popup_hover
              },
              {
                id: 'sec_003_netb_mem_REG',
                name: 'REGION',
                legendText: 'Netball Members in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_netb_area_popup_hover
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
                id: 'sec_003_netb_dem_SA2',
                legendText: 'Netball Demand in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_netb_area_popup_hover
              },
              {
                id: 'sec_003_netb_dem_LGA',
                name: 'LGA',
                legendText: 'Netball Demand in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_netb_area_popup_hover
              },
              {
                id: 'sec_003_netb_dem_REG',
                name: 'REGION',
                legendText: 'Netball Demand in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_netb_area_popup_hover
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
                id: 'sec_003_netb_mem_dem_cnv_SA2',
                legendText: 'Netball Demand Conversion (%) in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_netb_area_popup_hover
              },
              {
                id: 'sec_003_netb_mem_dem_cnv_LGA',
                name: 'LGA',
                legendText: 'Netball Demand Conversion (%) in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_netb_area_popup_hover
              },
              {
                id: 'sec_003_netb_mem_dem_cnv_REG',
                name: 'REGION',
                legendText: 'Netball Demand Conversion (%) in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_netb_area_popup_hover
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
                id: 'sec_003_netb_SITE',
                legendText: 'Netball Members at Site',
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
        summary: module_mem_module_summary,
        sections: [
          {
            heading: '1. MEMBERS (AREA)',
            text: module_mem_section1_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_003_soft_mem_SA2',
                legendText: 'Softball Members in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_soft_area_popup_hover
              },
              {
                id: 'sec_003_soft_mem_LGA',
                name: 'LGA',
                legendText: 'Softball Members in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_soft_area_popup_hover
              },
              {
                id: 'sec_003_soft_mem_REG',
                name: 'REGION',
                legendText: 'Softball Members in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_soft_area_popup_hover
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
                id: 'sec_003_soft_dem_SA2',
                legendText: 'Softball Demand in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_soft_area_popup_hover
              },
              {
                id: 'sec_003_soft_dem_LGA',
                name: 'LGA',
                legendText: 'Softball Demand in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_soft_area_popup_hover
              },
              {
                id: 'sec_003_soft_dem_REG',
                name: 'REGION',
                legendText: 'Softball Demand in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_soft_area_popup_hover
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
                id: 'sec_003_soft_mem_dem_cnv_SA2',
                legendText: 'Softball Demand Conversion (%) in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_soft_area_popup_hover
              },
              {
                id: 'sec_003_soft_mem_dem_cnv_LGA',
                name: 'LGA',
                legendText: 'Softball Demand Conversion (%) in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_soft_area_popup_hover
              },
              {
                id: 'sec_003_soft_mem_dem_cnv_REG',
                name: 'REGION',
                legendText: 'Softball Demand Conversion (%) in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_soft_area_popup_hover
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
                id: 'sec_003_soft_SITE',
                legendText: 'Softball Members at Site',
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
        summary: module_mem_module_summary,
        sections: [
          {
            heading: '1. MEMBERS (AREA)',
            text: module_mem_section1_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_003_swim_mem_SA2',
                legendText: 'Swimming Members in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_swim_area_popup_hover
              },
              {
                id: 'sec_003_swim_mem_LGA',
                name: 'LGA',
                legendText: 'Swimming Members in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_swim_area_popup_hover
              },
              {
                id: 'sec_003_swim_mem_REG',
                name: 'REGION',
                legendText: 'Swimming Members in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_swim_area_popup_hover
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
                id: 'sec_003_swim_dem_SA2',
                legendText: 'Swimming Demand in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_swim_area_popup_hover
              },
              {
                id: 'sec_003_swim_dem_LGA',
                name: 'LGA',
                legendText: 'Swimming Demand in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_swim_area_popup_hover
              },
              {
                id: 'sec_003_swim_dem_REG',
                name: 'REGION',
                legendText: 'Swimming Demand in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_swim_area_popup_hover
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
                id: 'sec_003_swim_mem_dem_cnv_SA2',
                legendText: 'Swimming Demand Conversion (%) in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_swim_area_popup_hover
              },
              {
                id: 'sec_003_swim_mem_dem_cnv_LGA',
                name: 'LGA',
                legendText: 'Swimming Demand Conversion (%) in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_swim_area_popup_hover
              },
              {
                id: 'sec_003_swim_mem_dem_cnv_REG',
                name: 'REGION',
                legendText: 'Swimming Demand Conversion (%) in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_swim_area_popup_hover
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
                id: 'sec_003_swim_SITE',
                legendText: 'Swimming Members at Site',
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
        summary: module_mem_module_summary,
        sections: [
          {
            heading: '1. MEMBERS (AREA)',
            text: module_mem_section1_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_003_tenn_mem_SA2',
                legendText: 'Tennis Members in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_tenn_area_popup_hover
              },
              {
                id: 'sec_003_tenn_mem_LGA',
                name: 'LGA',
                legendText: 'Tennis Members in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_tenn_area_popup_hover
              },
              {
                id: 'sec_003_tenn_mem_REG',
                name: 'REGION',
                legendText: 'Tennis Members in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_tenn_area_popup_hover
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
                id: 'sec_003_tenn_dem_SA2',
                legendText: 'Tennis Demand in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_tenn_area_popup_hover
              },
              {
                id: 'sec_003_tenn_dem_LGA',
                name: 'LGA',
                legendText: 'Tennis Demand in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_tenn_area_popup_hover
              },
              {
                id: 'sec_003_tenn_dem_REG',
                name: 'REGION',
                legendText: 'Tennis Demand in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_tenn_area_popup_hover
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
                id: 'sec_003_tenn_mem_dem_cnv_SA2',
                legendText: 'Tennis Demand Conversion (%) in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_tenn_area_popup_hover
              },
              {
                id: 'sec_003_tenn_mem_dem_cnv_LGA',
                name: 'LGA',
                legendText: 'Tennis Demand Conversion (%) in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_tenn_area_popup_hover
              },
              {
                id: 'sec_003_tenn_mem_dem_cnv_REG',
                name: 'REGION',
                legendText: 'Tennis Demand Conversion (%) in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_tenn_area_popup_hover
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
                id: 'sec_003_tenn_SITE',
                legendText: 'Tennis Members at Site',
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
        summary: module_mem_module_summary,
        sections: [
          {
            heading: '1. MEMBERS (AREA)',
            text: module_mem_section1_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_003_touc_mem_SA2',
                legendText: 'Touch Football Members in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_touc_area_popup_hover
              },
              {
                id: 'sec_003_touc_mem_LGA',
                name: 'LGA',
                legendText: 'Touch Football Members in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_touc_area_popup_hover
              },
              {
                id: 'sec_003_touc_mem_REG',
                name: 'REGION',
                legendText: 'Touch Football Members in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_touc_area_popup_hover
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
                id: 'sec_003_touc_dem_SA2',
                legendText: 'Touch Football Demand in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_touc_area_popup_hover
              },
              {
                id: 'sec_003_touc_dem_LGA',
                name: 'LGA',
                legendText: 'Touch Football Demand in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_touc_area_popup_hover
              },
              {
                id: 'sec_003_touc_dem_REG',
                name: 'REGION',
                legendText: 'Touch Football Demand in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_touc_area_popup_hover
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
                id: 'sec_003_touc_mem_dem_cnv_SA2',
                legendText: 'Touch Football Demand Conversion (%) in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_touc_area_popup_hover
              },
              {
                id: 'sec_003_touc_mem_dem_cnv_LGA',
                name: 'LGA',
                legendText: 'Touch Football Demand Conversion (%) in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_touc_area_popup_hover
              },
              {
                id: 'sec_003_touc_mem_dem_cnv_REG',
                name: 'REGION',
                legendText: 'Touch Football Demand Conversion (%) in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_touc_area_popup_hover
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
                id: 'sec_003_touc_SITE',
                legendText: 'Touch Football Members at Site',
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
        summary: module_mem_module_summary,
        sections: [
          {
            heading: '1. MEMBERS (AREA)',
            text: module_mem_section1_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'sec_003_voll_mem_SA2',
                legendText: 'Volleyball Members in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_voll_area_popup_hover
              },
              {
                id: 'sec_003_voll_mem_LGA',
                name: 'LGA',
                legendText: 'Volleyball Members in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_voll_area_popup_hover
              },
              {
                id: 'sec_003_voll_mem_REG',
                name: 'REGION',
                legendText: 'Volleyball Members in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_voll_area_popup_hover
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
                id: 'sec_003_voll_dem_SA2',
                legendText: 'Volleyball Demand in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_voll_area_popup_hover
              },
              {
                id: 'sec_003_voll_dem_LGA',
                name: 'LGA',
                legendText: 'Volleyball Demand in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_voll_area_popup_hover
              },
              {
                id: 'sec_003_voll_dem_REG',
                name: 'REGION',
                legendText: 'Volleyball Demand in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_voll_area_popup_hover
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
                id: 'sec_003_voll_mem_dem_cnv_SA2',
                legendText: 'Volleyball Demand Conversion (%) in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_003_voll_area_popup_hover
              },
              {
                id: 'sec_003_voll_mem_dem_cnv_LGA',
                name: 'LGA',
                legendText: 'Volleyball Demand Conversion (%) in LGA Area',
                // click: TBC,
                hover: module_mem_sec_003_voll_area_popup_hover
              },
              {
                id: 'sec_003_voll_mem_dem_cnv_REG',
                name: 'REGION',
                legendText: 'Volleyball Demand Conversion (%) in Govt. Region',
                // click: TBC,
                hover: module_mem_sec_003_voll_area_popup_hover
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
                id: 'sec_003_voll_SITE',
                legendText: 'Volleyball Members at Site',
                // click: TBC,
                hover: module_mem_site_popup_hover
              },
            ]
          },//END OF SECTION
        ]
      },//END OF SUB-MODULE
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
    id: 'module_model',
    name: 'MODEL DEVELOPMENT',
    type: 'AREA_VIEWER',
//    image: PRIMARY_MENU_IMAGE,
    summary: module_model_module_summary,
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