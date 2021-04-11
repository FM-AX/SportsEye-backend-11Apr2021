/////////////////////////////////////////////////////////////////////////////////////

// SEC NSW V2.0
// LAST UPDATED 22-OCT-20

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
const ACCOUNT_NAME = "CRICKET"

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
  }
]

// 1C. LOGIN SPLASH
const SPLASH_TEXT = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/SPLASH_TEXT')

const SPLASH = {
  lede: SPLASH_TEXT,
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
// // Mapbox Studio Style: SE_HANDOVER_SEC_NZL
const MAPBOX_STYLE = "mapbox://styles/activexchange-cust/ckj0q1occ011119s4sed7651q"


// 2B. STARTING MAP VIEW

const MAP_START = {
  lat: -43.523952, lng: 172.620868, zoom: 9 //CHRISTCHURCH
}

// 3. IMAGES

// 3A. MENU IMAGES
const PRIMARY_MENU_IMAGE = '/images/Logo_SportCanterbury.jpg'


/////////////////////////////////////////////////////////////////////////////////////

// PART B: ACCOUNT SPECIFIC REFERENCES

/////////////////////////////////////////////////////////////////////////////////////

// 1. POPUPS
// 2. DASHBOARDS
// 3. LAYER TEXT
// 4. DOCUMENTS


/////////////////////////////////////////////////////////////////////////////////////

// PART C: PRODUCT SPECIFIC REFERENCES

/////////////////////////////////////////////////////////////////////////////////////



// 1. POPUPS
const module_mem_site_popup_hover = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/my_members/site_popup_hover')
const module_mem_sec_002_athl_area_popup_hover = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/my_members/athl/area_popup_hover')
const module_mem_sec_002_bowl_area_popup_hover = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/my_members/bowl/area_popup_hover')
const module_mem_sec_002_cric_area_popup_hover = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/my_members/cric/area_popup_hover')
const module_mem_sec_002_foot_area_popup_hover = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/my_members/foot/area_popup_hover')
const module_mem_sec_002_rugb_area_popup_hover = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/my_members/rugb/area_popup_hover')
const module_mem_sec_002_touc_area_popup_hover = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/my_members/touc/area_popup_hover')
const module_mem_sec_002_squa_area_popup_hover = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/my_members/squa/area_popup_hover')


const module_pat_site_hover = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/pat/module_pat_site_hover')
const module_pat_area_hover = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/pat/module_pat_area_hover')

const POPUP_HOVER_SCHOOL = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/schools/POPUP_HOVER_SCHOOL')


// 2. DASHBOARDS

const module_mem_sec_002_athl_dashboard_priorities = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/my_members/athl/dashboard_priorities')
const module_mem_sec_002_bowl_dashboard_priorities = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/my_members/bowl/dashboard_priorities')
const module_mem_sec_002_cric_dashboard_priorities = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/my_members/cric/dashboard_priorities')
const module_mem_sec_002_foot_dashboard_priorities = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/my_members/foot/dashboard_priorities')
const module_mem_sec_002_rugb_dashboard_priorities = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/my_members/rugb/dashboard_priorities')
const module_mem_sec_002_touc_dashboard_priorities = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/my_members/touc/dashboard_priorities')
const module_mem_sec_002_squa_dashboard_priorities = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/my_members/squa/dashboard_priorities')

const module_mem_sec_002_athl_dashboard_wellbeing = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/my_members/athl/dashboard_wellbeing')
const module_mem_sec_002_bowl_dashboard_wellbeing = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/my_members/bowl/dashboard_wellbeing')
const module_mem_sec_002_cric_dashboard_wellbeing = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/my_members/cric/dashboard_wellbeing')
const module_mem_sec_002_foot_dashboard_wellbeing = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/my_members/foot/dashboard_wellbeing')
const module_mem_sec_002_rugb_dashboard_wellbeing = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/my_members/rugb/dashboard_wellbeing')
const module_mem_sec_002_touc_dashboard_wellbeing = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/my_members/touc/dashboard_wellbeing')
const module_mem_sec_002_squa_dashboard_wellbeing = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/my_members/squa/dashboard_wellbeing')


const module_pat_dashboard_grnprescription = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/pat/module_pat_dashboard_grnprescription')


// 3. LAYER TEXT

const module_mem_module_name = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/my_members/module_name')
const module_mem_module_summary = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/my_members/submodule_summary')

const module_model_module_summary = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/model_development/module_summary')

const module_mem_section1_text = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/my_members/submodule_section1_text')
const module_mem_section2_text = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/my_members/submodule_section2_text')
const module_mem_section3_text = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/my_members/submodule_section3_text')
const module_mem_section4_text = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/my_members/submodule_section4_text')


const module_pat_name = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/pat/module_pat_name')
const module_pat_summary = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/pat/module_pat_summary')
const module_pat_referral_site_text = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/pat/module_pat_referral_site_text')
const module_pat_grnprescription_text = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/pat/module_pat_grnprescription_text')
const module_pat_activefamilies_text = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/pat/module_pat_activefamilies_text')


const DESC_PT_SCHL_ALL_LVL = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/schools/DESC_PT_SCHL_ALL_LVL')
const DESC_PT_SCHL_COL_LVL = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/schools/DESC_PT_SCHL_COL_LVL')
const DESC_PT_SCHL_CSC_LVL = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/schools/DESC_PT_SCHL_CSC_LVL')
const DESC_PT_SCHL_CONTR = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/schools/DESC_PT_SCHL_CONTR')
const DESC_PT_SCHL_PRIMRY = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/schools/DESC_PT_SCHL_PRIMRY')
const DESC_PT_SCHL_INTRM = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/schools/DESC_PT_SCHL_INTRM')
const DESC_PT_SCHL_SCNDRY = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/schools/DESC_PT_SCHL_SCNDRY')
const DESC_PT_SCHL_COMPO = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/schools/DESC_PT_SCHL_COMPO')
const DESC_PT_SCHL_DEC_LVL = require('../group-references/SEC_FILES/SEC_002_CANTERBURY/schools/DESC_PT_SCHL_DEC_LVL')

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
const module_cp_submodule3_section2_layer4_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section2_layer4_legendText')
const module_cp_submodule3_section2_text = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section2_text')
const module_cp_submodule3_section3_heading = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section3_heading')
const module_cp_submodule3_section3_layer1_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section3_layer1_legendText')
const module_cp_submodule3_section3_layer2_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section3_layer2_legendText')
const module_cp_submodule3_section3_layer3_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section3_layer3_legendText')
const module_cp_submodule3_section3_layer4_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section3_layer4_legendText')
const module_cp_submodule3_section3_text = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section3_text')
const module_cp_submodule3_section4_heading = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section4_heading')
const module_cp_submodule3_section4_layer1_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section4_layer1_legendText')
const module_cp_submodule3_section4_layer2_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section4_layer2_legendText')
const module_cp_submodule3_section4_layer3_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section4_layer3_legendText')
const module_cp_submodule3_section4_layer4_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section4_layer4_legendText')
const module_cp_submodule3_section4_text = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section4_text')
const module_cp_submodule3_section5_heading = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section5_heading')
const module_cp_submodule3_section5_layer1_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section5_layer1_legendText')
const module_cp_submodule3_section5_layer2_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section5_layer2_legendText')
const module_cp_submodule3_section5_layer3_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section5_layer3_legendText')
const module_cp_submodule3_section5_layer4_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section5_layer4_legendText')
const module_cp_submodule3_section5_text = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section5_text')
const module_cp_submodule3_section6_heading = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section6_heading')
const module_cp_submodule3_section6_layer1_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section6_layer1_legendText')
const module_cp_submodule3_section6_layer2_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section6_layer2_legendText')
const module_cp_submodule3_section6_layer3_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section6_layer3_legendText')
const module_cp_submodule3_section6_layer4_legendText = require('../group-references/SE_PRODUCT/SE_MODULES/community_profile/submodule3_section6_layer4_legendText')
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
        name: 'CRICKET',
        id: 'module_mem_cric',
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
                id: 'sec_002_cric_mem_SA2',
                legendText: 'Cricket Members in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_002_cric_area_popup_hover
              },
              {
                id: 'sec_002_cric_mem_LGA',
                name: 'LGA',
                legendText: 'Cricket Members in TA Area',
                // click: TBC,
                hover: module_mem_sec_002_cric_area_popup_hover
              },
              {
                id: 'sec_002_cric_mem_REG',
                name: 'REGION',
                legendText: 'Cricket Members in RC Area',
                // click: TBC,
                hover: module_mem_sec_002_cric_area_popup_hover
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
                id: 'sec_002_cric_dem_SA2',
                legendText: 'Cricket Demand in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_002_cric_area_popup_hover
              },
              {
                id: 'sec_002_cric_dem_LGA',
                name: 'LGA',
                legendText: 'Cricket Demand in TA Area',
                // click: TBC,
                hover: module_mem_sec_002_cric_area_popup_hover
              },
              {
                id: 'sec_002_cric_dem_REG',
                name: 'REGION',
                legendText: 'Cricket Demand in RC Area',
                // click: TBC,
                hover: module_mem_sec_002_cric_area_popup_hover
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
                id: 'sec_002_cric_mem_dem_cnv_SA2',
                legendText: 'Cricket Demand Conversion (%) in SA2 Area',
                // click: TBC,
                hover: module_mem_sec_002_cric_area_popup_hover
              },
              {
                id: 'sec_002_cric_mem_dem_cnv_LGA',
                name: 'LGA',
                legendText: 'Cricket Demand Conversion (%) in TA Area',
                // click: TBC,
                hover: module_mem_sec_002_cric_area_popup_hover
              },
              {
                id: 'sec_002_cric_mem_dem_cnv_REG',
                name: 'REGION',
                legendText: 'Cricket Demand Conversion (%) in RC Area',
                // click: TBC,
                hover: module_mem_sec_002_cric_area_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '4. CLUB LOCATIONS (SITE)',
            text: module_mem_section4_text,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'sec_002_cric_SITE',
                legendText: 'Cricket Club Locations',
                // click: TBC,
                hover: module_mem_site_popup_hover
              },
            ]
          },//END OF SECTION
          {
            heading: '5. SITE & AREA PRIORITIES',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_mem_sec_002_cric_dashboard_priorities,
          },//END OF SECTION
          {
            heading: '6. HEALTH & WELLBEING',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_mem_sec_002_cric_dashboard_wellbeing,
          },//END OF SECTION
        ]
      },//END OF SUB-MODULE
    ]
  }, //end of MODULE
  {
    id: 'module_pat',
    name: module_pat_name,
    type: 'AREA_VIEWER',
    image: PRIMARY_MENU_IMAGE,
    summary: module_pat_summary,
        sections: [
          {
            heading: '1. POINT OF REFERRAL LOCATION',
            text: module_pat_referral_site_text,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'sec_002_pat_SITE',
                legendText: 'Point of Referral',
                // click: SITE_SPORT_HOVER,
                hover: module_pat_site_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: '2. GREEN PRESCRIPTION PATIENTS',
            text: module_pat_grnprescription_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'sec_002_cust_grn_SA1',
                legendText: 'Green Prescription Patients in SA1 Area',
                // click: AREA_PAT_HOVER,
                hover: module_pat_area_hover,
              },
              {
                name: 'SA2',
                id: 'sec_002_cust_grn_SA2',
                legendText: 'Green Prescription Patients in SA2 Area',
                // click: AREA_PAT_HOVER,
                hover: module_pat_area_hover,
              },
              {
                name: 'TA',
                id: 'sec_002_cust_grn_LGA',
                legendText: 'Green Prescription Patients in TA Area',
                // click: AREA_PAT_HOVER,
                hover: module_pat_area_hover,
              },
              {
                name: 'REGION',
                id: 'sec_002_cust_grn_REG',
                legendText: 'Green Prescription Patients in Regional Council Area',
                // click: AREA_PAT_HOVER,
                hover: module_pat_area_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: '3. GREEN PRESCRIPTION DASHBOARD',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_pat_dashboard_grnprescription,
          },//END OF SECTION
          {
            heading: '4. ACTIVE FAMILIES',
            text: module_pat_activefamilies_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'sec_002_cust_fam_SA1',
                legendText: 'Active Families in SA1 Area',
                // click: AREA_PAT_HOVER,
                hover: module_pat_area_hover,
              },
              {
                name: 'SA2',
                id: 'sec_002_cust_fam_SA2',
                legendText: 'Active Families in SA2 Area',
                // click: AREA_PAT_HOVER,
                hover: module_pat_area_hover,
              },
              {
                name: 'TA',
                id: 'sec_002_cust_fam_LGA',
                legendText: 'Active Families in TA Area',
                // click: AREA_PAT_HOVER,
                hover: module_pat_area_hover,
              },
              {
                name: 'REGION',
                id: 'sec_002_cust_fam_REG',
                legendText: 'Active Families in Regional Council Area',
                // click: AREA_PAT_HOVER,
                hover: module_pat_area_hover,
              },
            ]
          },//END OF SECTION
        ]
  }, //END OF MODULE
  {
    id: 'module-schools',
    name: 'SCHOOLS',
    collapsible: true,
    type: 'CODE_VIEWER',
    CODES: [
      {
        name: 'CATEGORY',
        id: 'module-schools-submodule-1',
        image: PRIMARY_MENU_IMAGE,
        summary: '<p>Select layers below to display on the map.',
        sections: [
        {
            heading: '1. ALL SCHOOLS',
            text: DESC_PT_SCHL_ALL_LVL,
            icon: POINT_ICON,
            layers: [
              {
                name: 'A. LEVEL',
                id: 'PT_SCHL_ALL_LVL',
                legendText: 'All Schools (Colour: Level)',
                // click: 'none',
                hover: POPUP_HOVER_SCHOOL,
              },
              {
                name: 'B. ROLL',
                id: 'PT_SCHL_ALL_ROLL',
                legendText: 'All Schools (Size: Total Roll)',
                // click: 'none',
                hover: POPUP_HOVER_SCHOOL,
              },
              {
                name: 'C. DECILE',
                id: 'PT_SCHL_ALL_DECILE',
                legendText: 'All Schools (Colour: Decile; Size: Total Roll)',
                // click: 'none',
                hover: POPUP_HOVER_SCHOOL,
              },
            ]
          },//END OF SECTION
          {
            heading: '2. COMMUNITY OF LEARNING',
            text: DESC_PT_SCHL_COL_LVL,
            icon: POINT_ICON,
            layers: [
              {
                name: 'LEVEL',
                id: 'PT_SCHL_COL_LVL',
                legendText: 'Community of Learning Schools (Colour: Level)',
                // click: 'none',
                hover: POPUP_HOVER_SCHOOL,
              },
              {
                name: 'LABEL',
                id: 'PT_SCHL_COL_LVL_LABEL',
                legendText: 'Community of Learning Schools (Colour: Level)',
                // click: 'none',
                hover: POPUP_HOVER_SCHOOL,
              },
            ]
          },//END OF SECTION
          {
            heading: '3. CSC SPORT COORDINATOR',
            text: DESC_PT_SCHL_CSC_LVL,
            icon: POINT_ICON,
            layers: [
              {
                name: 'LEVEL',
                id: 'PT_SCHL_CSC_LVL',
                legendText: 'CSC Sport Coordinator Schools (Colour: Level)',
                // click: 'none',
                hover: POPUP_HOVER_SCHOOL,
              },
              {
                name: 'LABEL',
                id: 'PT_SCHL_CSC_LVL_LABEL',
                legendText: 'CSC Sport Coordinator Schools (Colour: Level)',
                // click: 'none',
                hover: POPUP_HOVER_SCHOOL,
              },
            ]
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
     {
        name: 'LEVEL',
        id: 'module-schools-submodule-2',
        image: PRIMARY_MENU_IMAGE,
        summary: '<p>Select layers below to display on the map.',
        sections: [
          {
            heading: '1. CONTRIBUTING (YR 1-6)',
            text: DESC_PT_SCHL_CONTR,
            icon: POINT_ICON,
            layers: [
              {
                name: 'DECILE',
                id: 'PT_SCHL_CONTR',
                legendText: 'Contributing Schools (Colour: Decile; Size: Total Roll)',
                // click: 'none',
                hover: POPUP_HOVER_SCHOOL,
              },
            ]
          },//END OF SECTION
          {
            heading: '2. FULL PRIMARY (YR 1-8)',
            text: DESC_PT_SCHL_PRIMRY,
            icon: POINT_ICON,
            layers: [
              {
                name: 'DECILE',
                id: 'PT_SCHL_PRIMRY',
                legendText: 'Primary Schools (Colour: Decile; Size: Total Roll)',
                // click: 'none',
                hover: POPUP_HOVER_SCHOOL,
              },
            ]
          },//END OF SECTION
          {
            heading: '3. INTERMEDIATE (YR 7-8)',
            text: DESC_PT_SCHL_INTRM,
            icon: POINT_ICON,
            layers: [
              {
                name: 'DECILE',
                id: 'PT_SCHL_INTRM',
                legendText: 'Intermediate Schools (Colour: Decile; Size: Total Roll)',
                // click: 'none',
                hover: POPUP_HOVER_SCHOOL,
              },
            ]
          },//END OF SECTION
          {
            heading: '4. SECONDARY (YR 7-15 & 9-15)',
            text: DESC_PT_SCHL_SCNDRY,
            icon: POINT_ICON,
            layers: [
              {
                name: 'DECILE',
                id: 'PT_SCHL_SCNDRY',
                legendText: 'Secondary Schools (Colour: Decile; Size: Total Roll)',
                // click: 'none',
                hover: POPUP_HOVER_SCHOOL,
              },
            ]
          },//END OF SECTION
          {
            heading: '5. COMPOSITE (YR 1-13)',
            text: DESC_PT_SCHL_COMPO,
            icon: POINT_ICON,
            layers: [
              {
                name: 'DECILE',
                id: 'PT_SCHL_COMPO',
                legendText: 'Composite Schools (Colour: Decile; Size: Total Roll)',
                // click: 'none',
                hover: POPUP_HOVER_SCHOOL,
              },
            ]
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
     {
        name: 'DECILE',
        id: 'module-schools-submodule-3',
        image: PRIMARY_MENU_IMAGE,
        summary: '<p>Select layers below to display on the map.',
        sections: [
          {
            heading: 'DECILE 1',
            text: DESC_PT_SCHL_DEC_LVL,
            icon: POINT_ICON,
            layers: [
              {
                name: 'DECILE',
                id: 'PT_SCHL_DECL_1_LVL',
                legendText: 'Decile 1 Schools (Colour: Level)',
                // click: 'none',
                hover: POPUP_HOVER_SCHOOL,
              },
            ]
          },//END OF SECTION
          {
            heading: 'DECILE 2',
            text: DESC_PT_SCHL_DEC_LVL,
            icon: POINT_ICON,
            layers: [
              {
                name: 'DECILE',
                id: 'PT_SCHL_DECL_2_LVL',
                legendText: 'Decile 2 Schools (Colour: Level)',
                // click: 'none',
                hover: POPUP_HOVER_SCHOOL,
              },
            ]
          },//END OF SECTION
          {
            heading: 'DECILE 3',
            text: DESC_PT_SCHL_DEC_LVL,
            icon: POINT_ICON,
            layers: [
              {
                name: 'DECILE',
                id: 'PT_SCHL_DECL_3_LVL',
                legendText: 'Decile 3 Schools (Colour: Level)',
                // click: 'none',
                hover: POPUP_HOVER_SCHOOL,
              },
            ]
          },//END OF SECTION
          {
            heading: 'DECILE 4',
            text: DESC_PT_SCHL_DEC_LVL,
            icon: POINT_ICON,
            layers: [
              {
                name: 'DECILE',
                id: 'PT_SCHL_DECL_4_LVL',
                legendText: 'Decile 4 Schools (Colour: Level)',
                // click: 'none',
                hover: POPUP_HOVER_SCHOOL,
              },
            ]
          },//END OF SECTION
          {
            heading: 'DECILE 5',
            text: DESC_PT_SCHL_DEC_LVL,
            icon: POINT_ICON,
            layers: [
              {
                name: 'DECILE',
                id: 'PT_SCHL_DECL_5_LVL',
                legendText: 'Decile 5 Schools (Colour: Level)',
                // click: 'none',
                hover: POPUP_HOVER_SCHOOL,
              },
            ]
          },//END OF SECTION
          {
            heading: 'DECILE 6',
            text: DESC_PT_SCHL_DEC_LVL,
            icon: POINT_ICON,
            layers: [
              {
                name: 'DECILE',
                id: 'PT_SCHL_DECL_6_LVL',
                legendText: 'Decile 6 Schools (Colour: Level)',
                // click: 'none',
                hover: POPUP_HOVER_SCHOOL,
              },
            ]
          },//END OF SECTION
          {
            heading: 'DECILE 7',
            text: DESC_PT_SCHL_DEC_LVL,
            icon: POINT_ICON,
            layers: [
              {
                name: 'DECILE',
                id: 'PT_SCHL_DECL_7_LVL',
                legendText: 'Decile 7 Schools (Colour: Level)',
                // click: 'none',
                hover: POPUP_HOVER_SCHOOL,
              },
            ]
          },//END OF SECTION
          {
            heading: 'DECILE 8',
            text: DESC_PT_SCHL_DEC_LVL,
            icon: POINT_ICON,
            layers: [
              {
                name: 'DECILE',
                id: 'PT_SCHL_DECL_8_LVL',
                legendText: 'Decile 8 Schools (Colour: Level)',
                // click: 'none',
                hover: POPUP_HOVER_SCHOOL,
              },
            ]
          },//END OF SECTION
          {
            heading: 'DECILE 9',
            text: DESC_PT_SCHL_DEC_LVL,
            icon: POINT_ICON,
            layers: [
              {
                name: 'DECILE',
                id: 'PT_SCHL_DECL_9_LVL',
                legendText: 'Decile 9 Schools (Colour: Level)',
                // click: 'none',
                hover: POPUP_HOVER_SCHOOL,
              },
            ]
          },//END OF SECTION
          {
            heading: 'DECILE 10',
            text: DESC_PT_SCHL_DEC_LVL,
            icon: POINT_ICON,
            layers: [
              {
                name: 'DECILE',
                id: 'PT_SCHL_DECL_10_LVL',
                legendText: 'Decile 10 Schools (Colour: Level)',
                // click: 'none',
                hover: POPUP_HOVER_SCHOOL,
              },
            ]
          },//END OF SECTION
          {
            heading: 'NO DECILE',
            text: DESC_PT_SCHL_DEC_LVL,
            icon: POINT_ICON,
            layers: [
              {
                name: 'DECILE',
                id: 'PT_SCHL_DECL_99_LVL',
                legendText: 'No Decile Schools (Colour: Level)',
                // click: 'none',
                hover: POPUP_HOVER_SCHOOL,
              },
            ]
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
    ]
  }, //end of MODULE
  {
    id: 'module_cp', // COMMUNITY PROFILE
    name: module_cp_module_name,
    collapsible: true,
    type: 'CODE_VIEWER',
    CODES: [
      {
        name: module_cp_submodule2_name, // CENSUS KEY INDICATORS NZL
        id: 'module_cp_submodule2',
        image: PRIMARY_MENU_IMAGE,
        summary: module_cp_submodule2_summary,
        sections: [
          {
            heading: module_cp_submodule2_section1_heading,
            text: module_cp_submodule2_section1_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'cp_cen_dep_nz_SA1',
                legendText: module_cp_submodule2_section1_layer1_legendText,
                // click: AREA_COMMUNITY_POPUP,
                hover: module_cp_submodule2_sectionmaps_area_layers_popup_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: module_se_section_layer_details_heading,
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: module_cp_submodule2_sectiondetails_documentHtml,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
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
                id: 'cp_hf_roi_nz_SA1',
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
                id: 'cp_hf_2_nz_SA1',
                legendText: module_cp_submodule3_section2_layer1_legendText,
                hover: module_cp_submodule3_sectionmaps_area_layers_popup_hover,
              },
              {
                name: 'SA2',
                id: 'cp_hf_2_nz_SA2',
                legendText: module_cp_submodule3_section2_layer2_legendText,
                hover: module_cp_submodule3_sectionmaps_area_layers_popup_hover,
              },
              {
                id: 'cp_hf_2_nz_LGA',
                name: 'TA',
                legendText: module_cp_submodule3_section2_layer4_legendText,
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
                id: 'cp_hf_3_nz_SA1',
                legendText: module_cp_submodule3_section3_layer1_legendText,
                hover: module_cp_submodule3_sectionmaps_area_layers_popup_hover,
              },
              {
                name: 'SA2',
                id: 'cp_hf_3_nz_SA2',
                legendText: module_cp_submodule3_section3_layer2_legendText,
                hover: module_cp_submodule3_sectionmaps_area_layers_popup_hover,
              },
              {
                id: 'cp_hf_3_nz_LGA',
                name: 'TA',
                legendText: module_cp_submodule3_section3_layer4_legendText,
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
                id: 'cp_hf_4_nz_SA1',
                legendText: module_cp_submodule3_section4_layer1_legendText,
                hover: module_cp_submodule3_sectionmaps_area_layers_popup_hover,
              },
              {
                name: 'SA2',
                id: 'cp_hf_4_nz_SA2',
                legendText: module_cp_submodule3_section4_layer2_legendText,
                hover: module_cp_submodule3_sectionmaps_area_layers_popup_hover,
              },
              {
                id: 'cp_hf_4_nz_LGA',
                name: 'TA',
                legendText: module_cp_submodule3_section4_layer4_legendText,
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
                id: 'cp_hf_5_nz_SA1',
                legendText: module_cp_submodule3_section5_layer1_legendText,
                hover: module_cp_submodule3_sectionmaps_area_layers_popup_hover,
              },
              {
                name: 'SA2',
                id: 'cp_hf_5_nz_SA2',
                legendText: module_cp_submodule3_section5_layer2_legendText,
                hover: module_cp_submodule3_sectionmaps_area_layers_popup_hover,
              },
              {
                id: 'cp_hf_5_nz_LGA',
                name: 'TA',
                legendText: module_cp_submodule3_section5_layer4_legendText,
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
                id: 'cp_hf_6_nz_SA1',
                legendText: module_cp_submodule3_section6_layer1_legendText,
                hover: module_cp_submodule3_sectionmaps_area_layers_popup_hover,
              },
              {
                name: 'SA2',
                id: 'cp_hf_6_nz_SA2',
                legendText: module_cp_submodule3_section6_layer2_legendText,
                hover: module_cp_submodule3_sectionmaps_area_layers_popup_hover,
              },
              {
                id: 'cp_hf_6_nz_LGA',
                name: 'TA',
                legendText: module_cp_submodule3_section6_layer4_legendText,
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
      },//END OF SECTION GROUP
      {
        name: module_cp_submodule5_name, // AREA INFO NZ
        id: 'module_cp_submodule5',
        image: PRIMARY_MENU_IMAGE,
        summary: module_cp_submodule5_summary,
        sections: [
          {
            heading: module_cp_submodule5_section1_heading,
            text: module_cp_submodule5_section1_text,
            icon: POINT_ICON,
            layers: [
              {
                name: 'ALL',
                id: 'NZL_SCHL_ROLL',
                legendText: module_cp_submodule5_section1_layer1_legendText,
                hover: module_cp_submodule5_sectionmaps_site_layers_popup_hover,
              },
              {
                name: 'PRIMARY',
                id: 'NZL_SCHL_ROLL_LVL_PRIM',
                legendText: module_cp_submodule5_section1_layer2_legendText,
                hover: module_cp_submodule5_sectionmaps_site_layers_popup_hover,
              },
              {
                name: 'INTER.',
                id: 'NZL_SCHL_ROLL_LVL_INTER',
                legendText: module_cp_submodule5_section1_layer3_legendText,
                hover: module_cp_submodule5_sectionmaps_site_layers_popup_hover,
              },
              {
                name: 'SECONDARY',
                id: 'NZL_SCHL_ROLL_LVL_SECN',
                legendText: module_cp_submodule5_section1_layer4_legendText,
                hover: module_cp_submodule5_sectionmaps_site_layers_popup_hover,
              },
              {
                name: 'SPECIAL',
                id: 'NZL_SCHL_ROLL_LVL_SPEC',
                legendText: module_cp_submodule5_section1_layer5_legendText,
                hover: module_cp_submodule5_sectionmaps_site_layers_popup_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: module_cp_submodule5_section2_heading,
            text: module_cp_submodule5_section2_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'cp_bndry_nz_SA2',
                legendText: module_cp_submodule5_section2_layer1_legendText,
                // click: '<p>{AREA_NAME}<p>',
                // hover: '<p>{AREA_NAME}<p>',
              },
              {
                name: 'TA',
                id: 'cp_bndry_nz_LGA',
                legendText: module_cp_submodule5_section2_layer2_legendText,
                // click: '<p>{AREA_NAME}<p>',
                // hover: '<p>{AREA_NAME}<p>',
              },
            ]
          },//END OF SECTION
          {
            heading: module_cp_submodule5_section3_heading,
            text: module_cp_submodule5_section3_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'cp_label_nz_SA2',
                legendText: module_cp_submodule5_section3_layer1_legendText,
                // click: '<p>{AREA_NAME}<p>',
                // hover: '<p>{AREA_NAME}<p>',
              },
              {
                name: 'TA',
                id: 'cp_label_nz_LGA',
                legendText: module_cp_submodule5_section3_layer2_legendText,
                // click: '<p>{AREA_NAME}<p>',
                // hover: '<p>{AREA_NAME}<p>',
              },
            ]
          },//END OF SECTION
          {
            heading: module_cp_submodule5_section4_heading,
            text: module_cp_submodule5_section4_text,
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
            documentHtml: module_cp_submodule5_sectiondetails_documentHtml,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
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