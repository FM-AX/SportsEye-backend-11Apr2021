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
const ACCOUNT_NAME = "NETBALL NSW"

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
const SPLASH_TEXT = require('../group-references/SEC_FILES/SEC_004_NSW/SPLASH_TEXT')

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
// // Mapbox Studio Style: SE_HANDOVER_SEC_NSW
const MAPBOX_STYLE = "mapbox://styles/activexchange-cust/ckh1lmtj60lz41aqjzhlwuaq4"


// 2B. STARTING MAP VIEW

const MAP_START = {
  lat: -33.8688, lng: 151.2093, zoom: 9 //SYDNEY
}

// 3. IMAGES

// 3A. MENU IMAGES
const PRIMARY_MENU_IMAGE = '/images/SportNSW_Logo.jpg'


/////////////////////////////////////////////////////////////////////////////////////

// PART B: ACCOUNT SPECIFIC REFERENCES

/////////////////////////////////////////////////////////////////////////////////////

// 1. POPUPS

const module_mem_sec_004_netb_area_popup_hover = require('../group-references/SEC_FILES/SEC_004_NSW/my_members/netb/area_popup_hover')


// 2. DASHBOARDS

const module_mem_dashboard_summary = `
<h1>SPORT SUMMARY DASHBOARD</h1>
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/1QNXrhe4uHMx66eBvDPXeVSJwKxQhauI9/page/HbFMB" frameborder="0" style="border:0" allowfullscreen></iframe>
`

const module_mem_dashboard_performance = `
<h1>SPORT PERFORMANCE DASHBOARD</h1>
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/15dSBtOko9lhmyxph8bXx-vBHHwG0PjQ1/page/mZ1r" frameborder="0" style="border:0" allowfullscreen></iframe>
`

const module_mem_dashboard_wellbeing = `
<h1>HEALTH & WELLBEING DASHBOARD</h1>
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/1DUveoaoX-OGF3clIVoJUZcuZFjb8Bozl/page/J8YJB" frameborder="0" style="border:0" allowfullscreen></iframe>
`

// 3. LAYER TEXT

// 4. DOCUMENTS


/////////////////////////////////////////////////////////////////////////////////////

// PART C: PRODUCT SPECIFIC REFERENCES

/////////////////////////////////////////////////////////////////////////////////////


// MODULE - MY MEMBERS

const module_mem_site_popup_hover = require('../group-references/SEC_FILES/SEC_004_NSW/my_members/site_popup_hover')


const module_mem_module_name = require('../group-references/SEC_FILES/SEC_004_NSW/my_members/module_name')
const module_mem_module_summary = require('../group-references/SEC_FILES/SEC_004_NSW/my_members/submodule_summary')

const module_mem_section1_text = require('../group-references/SEC_FILES/SEC_004_NSW/my_members/submodule_section1_text')
const module_mem_section2_text = require('../group-references/SEC_FILES/SEC_004_NSW/my_members/submodule_section2_text')
const module_mem_section3_text = require('../group-references/SEC_FILES/SEC_004_NSW/my_members/submodule_section3_text')
const module_mem_section4_text = require('../group-references/SEC_FILES/SEC_004_NSW/my_members/submodule_section4_text')

// MODULE - MODEL DEVELOPMENT
const module_model_module_summary = require('../group-references/SEC_FILES/SEC_004_NSW/model_development/module_summary')



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
    type: 'AREA_VIEWER',
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
          {
            heading: '5. SPORT SUMMARY',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_mem_dashboard_summary,
          },//END OF SECTION
          {
            heading: '6. SPORT PERFORMANCE',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_mem_dashboard_performance,
          },//END OF SECTION
          {
            heading: '7. HEALTH & WELLBEING',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_mem_dashboard_wellbeing,
          },//END OF SECTION
        ]
  },//END OF MODULE
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
      },//END OF SECTION GROUP
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





