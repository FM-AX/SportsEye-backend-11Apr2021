/////////////////////////////////////////////////////////////////////////////////////

// SEO V2.0 - CUSTOM ADAPTATION
// LAST UPDATED 14-DEV-20

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
const ACCOUNT_NAME = "INFINITE CYCLING"

// 1B. PRODUCT SELECTION PAGE
const SPLASH_APPS = [
  {
    name: 'SPORTSEYE OPERATOR',
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
// // Mapbox Studio Style: SE_HANDOVER_PROTOTYPE
//const MAPBOX_STYLE = "mapbox://styles/activexchange-cust/ckforbo120d9o1anrzpq1k81m"
const MAPBOX_STYLE = "mapbox://styles/activexchange-cust/ckjc99yb2bo6f19lh4sfj01to"


// 2B. STARTING MAP VIEW

const MAP_START = {
  lat: -32.084, lng: 150.392, zoom: 5 //SYDNEY
}

// 3. IMAGES

// 3A. MENU IMAGES
const PRIMARY_MENU_IMAGE = ''


/////////////////////////////////////////////////////////////////////////////////////

// PART B: ACCOUNT SPECIFIC REFERENCES

/////////////////////////////////////////////////////////////////////////////////////

// TEMP
const EXAMPLE = `
`

// 1. POPUPS

const module_area_popup_hover = `
<h4>{AREA_NAME}</h4>
<p>Health and Fitness Demand</p>
<h4>{se_leisure_dem}</h4>
<p>Group Fitness Demand</p>
<h4>{seo_017_cust_grpex_dem}</h4>
<p>Cycling Demand</p>
<h4>{seo_017_cust_cycl_dem}</h4>
`

// 2. DASHBOARDS

const module_newsite_dashboard_optimal = `
<h1>HEALTH AND FITNESS OPTIMAL LOCATION DASHBOARD</h1>
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/f4fdc6db-927d-4c44-bc68-4bb19aa5cafa/page/F33t" frameborder="0" style="border:0" allowfullscreen></iframe>
`

// 3. LAYER TEXT

const module_lock_standards_text = `
<p><a href="https://docs.google.com/spreadsheets/d/1Ir_y7X7lIeh3mGxzvjAeG-GMtL73mFZ8k8UdSWIBol8/edit?usp=sharing" target="_blank" style="text-decoration:underline!important;font-weight:bold;">Click here</a> to view SportsEye Operator Data Standards for your account.</p>
`

const module_newsite_ipm_text = `
<p><a href="mailto:intelligence@activexchange.org?subject=SportsEye%20IPM%3A%20Report%20Request&amp;body=My%20AX%20Data%20Team%2C%0A%0AI%20am%20emailing%20about%20an%20IPM%20Report%20request." target=_blank style="text-decoration:underline!important;">Contact the ActiveXchange Data Team</a> to order an IPM Report.</p>
`

// 4. DOCUMENTS

const module_lock_scorecard_documentHtml = require('../group-references/SEO_FILES/SEO_000_DEMO/module_lock_scorecard_documentHtml')


/////////////////////////////////////////////////////////////////////////////////////

// PART C: PRODUCT SPECIFIC REFERENCES

/////////////////////////////////////////////////////////////////////////////////////


// MODULE - LOCKER ROOM
const module_lock_name = require('../group-references/SEO_TEMPLATES/SEO_MODULES/locker_room/module_name')
const module_lock_summary = require('../group-references/SEO_TEMPLATES/SEO_MODULES/locker_room/module_summary')


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
  // {
  //   id: 'module_lock', // LOCKER ROOM
  //   name: module_lock_name,
  //   type: 'AREA_VIEWER',
  //   image: PRIMARY_MENU_IMAGE,
  //   summary: module_lock_summary,
  //       sections: [
  //         {
  //           heading: 'ACTIVITY STANDARDS AND MATCHING',
  //           text: null,
  //           // text: module_lock_standards_text,
  //           icon: DOCUMENT_ICON,
  //           // documentHtml: TBC,
  //         },//END OF SECTION
  //         {
  //           heading: 'DATA QUALITY SCORECARD (AVAILABLE FREE ON REQUEST)',
  //           text: null,
  //           icon: DOCUMENT_ICON,
  //           documentHtml: module_lock_scorecard_documentHtml,
  //         },//END OF SECTION
  //         {
  //           heading: 'INVESTMENT PLANNING REPORTS',
  //           text: null,
  //           icon: DOCUMENT_ICON,
  //           // documentHtml: TBC,
  //         },//END OF SECTION
  //       ]
  // }, //END OF MODULE
  {
    id: 'module_newsite',
    name: 'NEW SITE IDENTIFICATION - PROPERTY SEARCH',
    type: 'AREA_VIEWER',
    image: PRIMARY_MENU_IMAGE,
    summary: '<p>Select layers below to display on the map.</p>',
        sections: [
          {
            heading: '1. MY SITES',
            text: '',
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'seo_017_SITE',
                legendText: 'My Sites',
                hover: '<h4>{site_name}</h4>',
              },
            ]
          },//END OF SECTION
          {
            heading: '2. HEALTH AND FITNESS DEMAND',
            text: '<b>Colour: Health and Fitness Demand</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'LGA',
                id: 'se_leisure_dem_LGA',
                legendText: 'Health and Fitness Demand in LGA',
                hover: module_area_popup_hover,
              },
              {
                name: 'SA2',
                id: 'se_leisure_dem_SA2',
                legendText: 'Health and Fitness Demand in SA2',
                hover: module_area_popup_hover,
              },
              // {
              //   name: 'SA1',
              //   id: 'se_leisure_dem_SA1',
              //   legendText: 'Health and Fitness Demand in SA1',
              //   hover: module_area_popup_hover,
              // },
            ]
          },//END OF SECTION
          {
            heading: '3. GROUP FITNESS DEMAND',
            text: '<b>Colour: Group Fitness Demand</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'LGA',
                id: 'seo_017_cust_grpex_dem_LGA',
                legendText: 'Group Fitness Demand in LGA',
                hover: module_area_popup_hover,
              },
              {
                name: 'SA2',
                id: 'seo_017_cust_grpex_dem_SA2',
                legendText: 'Group Fitness Demand in SA2',
                hover: module_area_popup_hover,
              },
              {
                name: 'SA1',
                id: 'seo_017_cust_grpex_dem_SA1',
                legendText: 'Group Fitness Demand in SA1',
                hover: '<h4>{AREA_NAME}</h4><p>Group Fitness Demand:</p><h4>{seo_017_cust_grpex_dem}</h4>',
              },
            ]
          },//END OF SECTION
          {
            heading: '4. CYCLING DEMAND',
            text: '<b>Colour: Cycling Demand</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'LGA',
                id: 'seo_017_cust_cycl_dem_LGA',
                legendText: 'Cycling Demand in LGA',
                hover: module_area_popup_hover,
              },
              {
                name: 'SA2',
                id: 'seo_017_cust_cycl_dem_SA2',
                legendText: 'Cycling Demand in SA2',
                hover: module_area_popup_hover,
              },
              {
                name: 'SA1',
                id: 'seo_017_cust_cycl_dem_SA1',
                legendText: 'Cycling Demand in SA1',
                hover: '<h4>{AREA_NAME}</h4><p>Cycling Demand:</p><h4>{seo_017_cust_grpex_dem}</h4>',
              },
            ]
          },//END OF SECTION
          {
            heading: '5. HEALTH AND FITNESS OPTIMAL HOTSPOTS',
            text: '<b>Colour: Aggregated Unmet Demand</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'seo_017_unmtdem_agg_SA1',
                legendText: 'Aggregated Unmet Demand in SA1 Area',
                hover: '<h4>{AREA_NAME}</h4><p>Aggregated Unmet Demand:</p><h4>{seo_017_unmtdem_agg}</h4>',
              },
            ]
          },//END OF SECTION - HIDDEN TEMP. AS NO MAPBOX LAYER REF
          {
            heading: '6. HEALTH AND FITNESS OPTIMAL LOCATION DASHBOARD',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_newsite_dashboard_optimal,
          },//END OF SECTION
          {
            heading: '7. ORDER FULL INVESTMENT PLANNING MODEL',
            text: module_newsite_ipm_text,
            icon: QUESTION_ICON,
            // documentHtml: IPM_REQUEST_REPORT,
          },//END OF SECTION
        ]
  }, //END OF MODULE
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
