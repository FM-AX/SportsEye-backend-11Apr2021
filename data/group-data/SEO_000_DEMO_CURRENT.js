//SEO V1.4.1
// LAST UPDATED 26-AUGUST-20


// ** PART 1: ACCOUNT CONFIGURATION
// ***ACOUUNT SPECIFIC***


const ACCOUNT_NAME = "DEMO OPERATOR"


// ** 1A. STARTING MAP VIEW

const MAP_START = {
  lat: -37.768691, lng: 145.010512, zoom: 9 //MELBOURNE
   // lat: -33.8688, lng: 151.2093, zoom: 10 SYDNEY
  // lat: -32.131175, lng: 115.830918, zoom: 10 //COCKBURN, WA
}

// ** 1B. ACCOUNT DETAILS

// Mapbox Account: stella-op
const MAPBOX_APIKEY = "pk.eyJ1Ijoic3RlbGxhLW9wZXJhdG9yIiwiYSI6ImNrM253OWJ3NjF1bHgzZW8zcmxkbmY4YmIifQ.z0o8M1upJoNVUV_AcKQuWg"

// Mapbox Studio Style: SEO-XXX-V1.3-TEMPLATE
const MAPBOX_STYLE = "mapbox://styles/stella-operator/ck3obr5ul00wm1co1of3xo89e"


// 1C. OPENING SPLASH TEXT

// PRODUCT SELECTION PAGE
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

// LOGIN SPLASH
const SPLASH = {
  lede: `

  ActiveXchange. Empowering data. Intelligent investment.`,
  head: "WELCOME TO SPORTSEYE",
  subhead: ACCOUNT_NAME,
  // disclaimer: '<span>POWERED BY <a href="https://activexchange.org/" target="_blank">ACTIVEXCHANGE</a><span>',
  disclaimer: '<span><a href="https://activexchange.org/your-data-our-commitment" target="_blank">SportsEye Terms of Use</a><span>',
  action: "ENTER"
}

const AFFILIATE_LOGOS = [
  "",
]




/////////////////////////////////////////////////////////////////////////////////////


// PART 2: EXTERNAL REFERENCES

// V9 - LOCAL TESTING
// import SAMPLE_DOCUMENT from '../sample-document'


// // **A. ACCOUNT SPECIFIC:

// // REPORTS AND DASHBOARDS

// // KEY DASHBOARDS
// import PERF_MANAGER_EMBED_REPORT from '../group-details/SEO_XXX_TEMPLATE/PERF_MANAGER_EMBED_REPORT'
// import KEY_HEALTH_WELLB_DASH_REPORT from '../group-details/SEO_XXX_TEMPLATE/KEY_HEALTH_WELLB_DASH_REPORT'
// import COMM_SVALUE_EMBED_REPORT from '../group-details/SEO_XXX_TEMPLATE/COMM_SVALUE_EMBED_REPORT'
// import PERF_SITE_EMBED_REPORT from '../group-details/SEO_XXX_TEMPLATE/PERF_SITE_EMBED_REPORT'
// import RECOMM_PROG_EMBED_REPORT from '../group-details/SEO_XXX_TEMPLATE/RECOMM_PROG_EMBED_REPORT'
// import PERF_SWIMSCHOL_EMBED_REPORT from '../group-details/SEO_XXX_TEMPLATE/PERF_SWIMSCHOL_EMBED_REPORT'
// import RECOMM_PRIC_EMBED_REPORT from '../group-details/SEO_XXX_TEMPLATE/RECOMM_PRIC_EMBED_REPORT'
// import RECOMM_OPER_EMBED_REPORT from '../group-details/SEO_XXX_TEMPLATE/RECOMM_OPER_EMBED_REPORT'

// //AQUSITION/RETENTION
// import AXCAMP_EMBED_REPORT_AQU from '../group-details/SEO_XXX_TEMPLATE/AXCAMP_EMBED_REPORT_AQU'
// import AXCAMP_EMBED_REPORT_RET from '../group-details/SEO_XXX_TEMPLATE/AXCAMP_EMBED_REPORT_RET'

// //LOCKERROOM
// import RECOMM_DATA_QUAL_SCORECARD from '../group-details/SEO_000_DEMO/RECOMM_DATA_QUAL_SCORECARD'

// //NEW SITE
// import OPTIMAL_LOCATION_DASH_REPORT from '../group-details/SEO_000_DEMO/OPTIMAL_LOCATION_DASH_REPORT'



// //B. PRODUCT SPECIFIC:

// // POPUPS
// import AREA_ALL_POPUP from '../group-details/SEO_PRODUCTION/POPUPS/AREA_ALL_POPUP'
// import AREA_SWIM_POPUP from '../group-details/SEO_PRODUCTION/POPUPS/AREA_SWIM_POPUP'
// import COMM_HFACT_POPUP from '../group-details/SEO_PRODUCTION/POPUPS/COMM_HFACT_POPUP'

// //LAYER TEXT DESCRIPTIONS
// import SITE_YOUR_TEXT from '../group-details/SEO_PRODUCTION/LAYER_TEXT/SITE_YOUR_TEXT'
// import AREA_MEM_TEXT from '../group-details/SEO_PRODUCTION/LAYER_TEXT/AREA_MEM_TEXT'
// import AREA_DEM_TEXT from '../group-details/SEO_PRODUCTION/LAYER_TEXT/AREA_DEM_TEXT'
// import AREA_DEM_CNV_TEXT from '../group-details/SEO_PRODUCTION/LAYER_TEXT/AREA_DEM_CNV_TEXT'
// import CTCH_TARG_UNMT_DEM_TEXT from '../group-details/SEO_PRODUCTION/LAYER_TEXT/CTCH_TARG_UNMT_DEM_TEXT'
// import AREA_UNMT_DEM_TEXT from '../group-details/SEO_PRODUCTION/LAYER_TEXT/AREA_UNMT_DEM_TEXT'
// import CX_HF_TEXT from '../group-details/SEO_PRODUCTION/LAYER_TEXT/CX_HF_TEXT'
// import CX_DEPRIVATION_AUS_TEXT from '../group-details/SEO_PRODUCTION/LAYER_TEXT/CX_DEPRIVATION_AUS_TEXT'
// import CX_DEPRIVATION_NZL_TEXT from '../group-details/SEO_PRODUCTION/LAYER_TEXT/CX_DEPRIVATION_NZL_TEXT'
// import CX_SCHOOLS_AUS from '../group-details/SEO_PRODUCTION/LAYER_TEXT/CX_SCHOOLS_AUS'
// import CX_SCHOOLS_NZL from '../group-details/SEO_PRODUCTION/LAYER_TEXT/CX_SCHOOLS_NZL'
// import CX_AXC_ASSIST_TEXT from '../group-details/SEO_PRODUCTION/LAYER_TEXT/CX_AXC_ASSIST_TEXT'
// import CX_AXC_ROI_TEXT from '../group-details/SEO_PRODUCTION/LAYER_TEXT/CX_AXC_ROI_TEXT'
// import CX_BOUNDARY_TEXT from '../group-details/SEO_PRODUCTION/LAYER_TEXT/CX_BOUNDARY_TEXT'
// import CX_LABEL_TEXT from '../group-details/SEO_PRODUCTION/LAYER_TEXT/CX_LABEL_TEXT'
// import IPM_REQUEST_TEXT from '../group-details/SEO_PRODUCTION/LAYER_TEXT/IPM_REQUEST_TEXT'

// //REPORTS AND DASHBOARDS
// import GUIDANCE_INTRO_SE_REPORT from '../group-details/SEO_PRODUCTION/REPORTS/GUIDANCE_INTRO_SE_REPORT'
// import GUIDANCE_AQUISITION_REPORT from '../group-details/SEO_PRODUCTION/REPORTS/GUIDANCE_AQUISITION_REPORT'
// import GUIDANCE_RETENTION_REPORT from '../group-details/SEO_PRODUCTION/REPORTS/GUIDANCE_RETENTION_REPORT'
// import GUIDANCE_OPERATIONS_REPORT from '../group-details/SEO_PRODUCTION/REPORTS/GUIDANCE_OPERATIONS_REPORT'
// import GUIDANCE_LGA_REPORT from '../group-details/SEO_PRODUCTION/REPORTS/GUIDANCE_LGA_REPORT'
// import GUIDANCE_INFRASTRUCTURE_REPORT from '../group-details/SEO_PRODUCTION/REPORTS/GUIDANCE_INFRASTRUCTURE_REPORT'
// import GUIDANCE_PRIORITIES_REPORT from '../group-details/SEO_PRODUCTION/REPORTS/GUIDANCE_PRIORITIES_REPORT'

// //LAYER DETAILS
// import PERF_ALL_DETAILS from '../group-details/SEO_PRODUCTION/LAYER_DETAILS/PERF_ALL_DETAILS'
// import PERF_SWM_DETAILS from '../group-details/SEO_PRODUCTION/LAYER_DETAILS/PERF_SWM_DETAILS'



// //C. SPORTSEYE:

// // POPUPS
// import CX_SCHOOLS_POPUP from '../group-details/SE_PRODUCTION/POPUPS/CX_SCHOOLS_POPUP'
// import CLICK_COMMUNITY_PROFILE from '../group-details/SE_PRODUCTION/POPUPS/CLICK_COMMUNITY_PROFILE'
// import HOVER_COMMUNITY_PROFILE from '../group-details/SE_PRODUCTION/POPUPS/HOVER_COMMUNITY_PROFILE'


// //LAYER TEXT DESCRIPTIONS
// import AREA_CX_TOT_P_P from '../group-details/SE_PRODUCTION/LAYER_TEXT/AREA_CX_TOT_P_P'
// import AREA_CX_INDIGENOUS_TOT_P from '../group-details/SE_PRODUCTION/LAYER_TEXT/AREA_CX_INDIGENOUS_TOT_P'
// import AREA_CX_BIRTH_ELSEWHERE_P from '../group-details/SE_PRODUCTION/LAYER_TEXT/AREA_CX_BIRTH_ELSEWHERE_P'
// import AREA_CX_LANG_HOME_OTHER_P from '../group-details/SE_PRODUCTION/LAYER_TEXT/AREA_CX_LANG_HOME_OTHER_P'
// import AREA_CX_IRSAD from '../group-details/SE_PRODUCTION/LAYER_TEXT/AREA_CX_IRSAD'


// //REPORTS AND DASHBOARDS

// //LAYER DETAILS
// import CP_CENSUS_KEY_AUS_DETAILS from '../group-details/SE_PRODUCTION/LAYER_DETAILS/CP_CENSUS_KEY_AUS_DETAILS'
// import CP_CENSUS_KEY_NZL_DETAILS from '../group-details/SE_PRODUCTION/LAYER_DETAILS/CP_CENSUS_KEY_NZL_DETAILS'
// import CP_HFACT_DETAILS from '../group-details/SE_PRODUCTION/LAYER_DETAILS/CP_HFACT_DETAILS'
// import CP_INFO_AUS_DETAILS from '../group-details/SE_PRODUCTION/LAYER_DETAILS/CP_INFO_AUS_DETAILS'
// import CP_INFO_NZL_DETAILS from '../group-details/SE_PRODUCTION/LAYER_DETAILS/CP_INFO_NZL_DETAILS'

// //MODULE SUMMARIES
// import MODULE_SUMMARY from '../group-details/SEO_PRODUCTION/MODULE_SUMMARY/MODULE_SUMMARY'
// import MODULE_SUMMARY_CENSUS_KEY_AUS from '../group-details/SE_PRODUCTION/MODULE_SUMMARY/MODULE_SUMMARY_CENSUS_KEY_AUS'
// import MODULE_SUMMARY_DEMO from '../group-details/SEO_PRODUCTION/MODULE_SUMMARY/MODULE_SUMMARY_DEMO'
// import MODULE_SUMMARY_LOCKERROOM from '../group-details/SEO_PRODUCTION/MODULE_SUMMARY/MODULE_SUMMARY_LOCKERROOM'
// import MODULE_SUMMARY_FEEDBACK from '../group-details/SEO_PRODUCTION/MODULE_SUMMARY/MODULE_SUMMARY_FEEDBACK'



// V10 - PRODUCTION DATABASE
// const SAMPLE_DOCUMENT = require('../sample-document')

//// **A. ACCOUNT SPECIFIC:

//// REPORTS AND DASHBOARDS

// KEY DASHBOARDS
const PERF_MANAGER_EMBED_REPORT = require('../group-details/SEO_XXX_TEMPLATE/PERF_MANAGER_EMBED_REPORT')
const KEY_HEALTH_WELLB_DASH_REPORT = require('../group-details/SEO_XXX_TEMPLATE/KEY_HEALTH_WELLB_DASH_REPORT')
const COMM_SVALUE_EMBED_REPORT = require('../group-details/SEO_XXX_TEMPLATE/COMM_SVALUE_EMBED_REPORT')
const PERF_SITE_EMBED_REPORT = require('../group-details/SEO_XXX_TEMPLATE/PERF_SITE_EMBED_REPORT')
const RECOMM_PROG_EMBED_REPORT = require('../group-details/SEO_XXX_TEMPLATE/RECOMM_PROG_EMBED_REPORT')
const PERF_SWIMSCHOL_EMBED_REPORT = require('../group-details/SEO_XXX_TEMPLATE/PERF_SWIMSCHOL_EMBED_REPORT')
const RECOMM_PRIC_EMBED_REPORT = require('../group-details/SEO_XXX_TEMPLATE/RECOMM_PRIC_EMBED_REPORT')
const RECOMM_OPER_EMBED_REPORT = require('../group-details/SEO_XXX_TEMPLATE/RECOMM_OPER_EMBED_REPORT')

//AQUSITION/RETENTION
const AXCAMP_EMBED_REPORT_AQU = require('../group-details/SEO_XXX_TEMPLATE/AXCAMP_EMBED_REPORT_AQU')
const AXCAMP_EMBED_REPORT_RET = require('../group-details/SEO_XXX_TEMPLATE/AXCAMP_EMBED_REPORT_RET')

//LOCKERROOM
const RECOMM_DATA_QUAL_SCORECARD = require('../group-details/SEO_000_DEMO/RECOMM_DATA_QUAL_SCORECARD')

//NEW SITE
const OPTIMAL_LOCATION_DASH_REPORT = require('../group-details/SEO_000_DEMO/OPTIMAL_LOCATION_DASH_REPORT')



//B. PRODUCT SPECIFIC:

// POPUPS
const AREA_ALL_POPUP = require('../group-details/SEO_PRODUCTION/POPUPS/AREA_ALL_POPUP')
const AREA_SWIM_POPUP = require('../group-details/SEO_PRODUCTION/POPUPS/AREA_SWIM_POPUP')
const COMM_HFACT_POPUP = require('../group-details/SEO_PRODUCTION/POPUPS/COMM_HFACT_POPUP')

//LAYER TEXT DESCRIPTIONS
const SITE_YOUR_TEXT = require('../group-details/SEO_PRODUCTION/LAYER_TEXT/SITE_YOUR_TEXT')
const AREA_MEM_TEXT = require('../group-details/SEO_PRODUCTION/LAYER_TEXT/AREA_MEM_TEXT')
const AREA_DEM_TEXT = require('../group-details/SEO_PRODUCTION/LAYER_TEXT/AREA_DEM_TEXT')
const AREA_DEM_CNV_TEXT = require('../group-details/SEO_PRODUCTION/LAYER_TEXT/AREA_DEM_CNV_TEXT')
const CTCH_TARG_UNMT_DEM_TEXT = require('../group-details/SEO_PRODUCTION/LAYER_TEXT/CTCH_TARG_UNMT_DEM_TEXT')
const AREA_UNMT_DEM_TEXT = require('../group-details/SEO_PRODUCTION/LAYER_TEXT/AREA_UNMT_DEM_TEXT')
const CX_HF_TEXT = require('../group-details/SEO_PRODUCTION/LAYER_TEXT/CX_HF_TEXT')
const CX_DEPRIVATION_AUS_TEXT = require('../group-details/SEO_PRODUCTION/LAYER_TEXT/CX_DEPRIVATION_AUS_TEXT')
const CX_DEPRIVATION_NZL_TEXT = require('../group-details/SEO_PRODUCTION/LAYER_TEXT/CX_DEPRIVATION_NZL_TEXT')
const CX_SCHOOLS_AUS = require('../group-details/SEO_PRODUCTION/LAYER_TEXT/CX_SCHOOLS_AUS')
const CX_SCHOOLS_NZL = require('../group-details/SEO_PRODUCTION/LAYER_TEXT/CX_SCHOOLS_NZL')
const CX_AXC_ASSIST_TEXT = require('../group-details/SEO_PRODUCTION/LAYER_TEXT/CX_AXC_ASSIST_TEXT')
const CX_AXC_ROI_TEXT = require('../group-details/SEO_PRODUCTION/LAYER_TEXT/CX_AXC_ROI_TEXT')
const CX_BOUNDARY_TEXT = require('../group-details/SEO_PRODUCTION/LAYER_TEXT/CX_BOUNDARY_TEXT')
const CX_LABEL_TEXT = require('../group-details/SEO_PRODUCTION/LAYER_TEXT/CX_LABEL_TEXT')
const IPM_REQUEST_TEXT = require('../group-details/SEO_PRODUCTION/LAYER_TEXT/IPM_REQUEST_TEXT')

//REPORTS AND DASHBOARDS
const GUIDANCE_INTRO_SE_REPORT = require('../group-details/SEO_PRODUCTION/REPORTS/GUIDANCE_INTRO_SE_REPORT')
const GUIDANCE_AQUISITION_REPORT = require('../group-details/SEO_PRODUCTION/REPORTS/GUIDANCE_AQUISITION_REPORT')
const GUIDANCE_RETENTION_REPORT = require('../group-details/SEO_PRODUCTION/REPORTS/GUIDANCE_RETENTION_REPORT')
const GUIDANCE_OPERATIONS_REPORT = require('../group-details/SEO_PRODUCTION/REPORTS/GUIDANCE_OPERATIONS_REPORT')
const GUIDANCE_LGA_REPORT = require('../group-details/SEO_PRODUCTION/REPORTS/GUIDANCE_LGA_REPORT')
const GUIDANCE_INFRASTRUCTURE_REPORT = require('../group-details/SEO_PRODUCTION/REPORTS/GUIDANCE_INFRASTRUCTURE_REPORT')
const GUIDANCE_PRIORITIES_REPORT = require('../group-details/SEO_PRODUCTION/REPORTS/GUIDANCE_PRIORITIES_REPORT')

//LAYER DETAILS
const PERF_ALL_DETAILS = require('../group-details/SEO_PRODUCTION/LAYER_DETAILS/PERF_ALL_DETAILS')
const PERF_SWM_DETAILS = require('../group-details/SEO_PRODUCTION/LAYER_DETAILS/PERF_SWM_DETAILS')



//C. SPORTSEYE:

// POPUPS
const CX_SCHOOLS_POPUP = require('../group-details/SE_PRODUCTION/POPUPS/CX_SCHOOLS_POPUP')
const CLICK_COMMUNITY_PROFILE = require('../group-details/SE_PRODUCTION/POPUPS/CLICK_COMMUNITY_PROFILE')
const HOVER_COMMUNITY_PROFILE = require('../group-details/SE_PRODUCTION/POPUPS/HOVER_COMMUNITY_PROFILE')


//LAYER TEXT DESCRIPTIONS
const AREA_CX_TOT_P_P = require('../group-details/SE_PRODUCTION/LAYER_TEXT/AREA_CX_TOT_P_P')
const AREA_CX_INDIGENOUS_TOT_P = require('../group-details/SE_PRODUCTION/LAYER_TEXT/AREA_CX_INDIGENOUS_TOT_P')
const AREA_CX_BIRTH_ELSEWHERE_P = require('../group-details/SE_PRODUCTION/LAYER_TEXT/AREA_CX_BIRTH_ELSEWHERE_P')
const AREA_CX_LANG_HOME_OTHER_P = require('../group-details/SE_PRODUCTION/LAYER_TEXT/AREA_CX_LANG_HOME_OTHER_P')
const AREA_CX_IRSAD = require('../group-details/SE_PRODUCTION/LAYER_TEXT/AREA_CX_IRSAD')

//REPORTS AND DASHBOARDS

//LAYER DETAILS
const CP_CENSUS_KEY_AUS_DETAILS = require('../group-details/SE_PRODUCTION/LAYER_DETAILS/CP_CENSUS_KEY_AUS_DETAILS')
const CP_CENSUS_KEY_NZL_DETAILS = require('../group-details/SE_PRODUCTION/LAYER_DETAILS/CP_CENSUS_KEY_NZL_DETAILS')
const CP_HFACT_DETAILS = require('../group-details/SE_PRODUCTION/LAYER_DETAILS/CP_HFACT_DETAILS')
const CP_INFO_AUS_DETAILS = require('../group-details/SE_PRODUCTION/LAYER_DETAILS/CP_INFO_AUS_DETAILS')
const CP_INFO_NZL_DETAILS = require('../group-details/SE_PRODUCTION/LAYER_DETAILS/CP_INFO_NZL_DETAILS')

//MODULE SUMMARIES
const MODULE_SUMMARY = require('../group-details/SEO_PRODUCTION/MODULE_SUMMARY/MODULE_SUMMARY')
const MODULE_SUMMARY_CENSUS_KEY_AUS = require('../group-details/SE_PRODUCTION/MODULE_SUMMARY/MODULE_SUMMARY_CENSUS_KEY_AUS')
const MODULE_SUMMARY_DEMO = require('../group-details/SEO_PRODUCTION/MODULE_SUMMARY/MODULE_SUMMARY_DEMO')
const MODULE_SUMMARY_LOCKERROOM = require('../group-details/SEO_PRODUCTION/MODULE_SUMMARY/MODULE_SUMMARY_LOCKERROOM')
const MODULE_SUMMARY_FEEDBACK = require('../group-details/SEO_PRODUCTION/MODULE_SUMMARY/MODULE_SUMMARY_FEEDBACK')



/////////////////////////////////////////////////////////////////////////////////////

// PART 3: SIDE MENU REFERENCES

// 3A. STYLE REFERENCES

// MENU IMAGES
const PRIMARY_MENU_IMAGE = '/images/SportsEye_Swimming.jpg'

//LAYER ICONS
const AREA_ICON = '/images/icons/land.svg'
const POINT_ICON = '/images/icons/pin.svg'
const PEOPLE_ICON = '/images/icons/people.svg'
const DOCUMENT_ICON = '/images/icons/document.svg'
const DASHBOARD_ICON = '/images/icons/dashboard.svg'
const QUESTION_ICON = '/images/icons/question-mark.svg'
const AUDIT_ICON = '/images/icons/audit.svg'


// 3B. ACCOUNT SPECIFIC MODULE DESCRIPTION TEXT

// const MODULE_SUMMARY_TYPE = `
// <p>Select layers below to display on the map.</p>
// <p>To reference external URL <a href="http://activexchange.com.au/sportseye/operator/cockburn/1_facility_audit.html" target="_blank" style="text-decoration: underline !important;font-weight:bold;">click here</a>.</p>
// `


// 3C. ACCOUNT SPECIFIC LAYER DESCRIPTION TEXT

// const LAYERNAME_TEXT = `
// <b>Colour: Total Demand</b>
// `

const SAMPLE_DROP = `
`

const LOCKERROOM_MATCHING_STANDARDS = `
<p><a href="https://docs.google.com/spreadsheets/d/1_nbOKq70lxQXJnTkiVzKmOhCeb0zHw14Tu2pdXJno4A/edit#gid=675536604" target="_blank" style="text-decoration:underline!important;font-weight:bold;">Click here</a> to view SportsEye Operator Data Standards for your account.</p>
`


/////////////////////////////////////////////////////////////////////////////////////

// PART 4: ACCOUNT SPECIFIC POPUP REFERENCES


//POPUP TEXT

// const SITE_NAME_EXT_HOVER = `
// <h4>Site: {SITE_NAME}</h4><i>Click to view full site details</i>
// `



/////////////////////////////////////////////////////////////////////////////////////

// PART 5: MENU LAYOUT

const CATEGORIES = [
  {
    id: 'GUIDANCE-VIDEOS',
    name: 'GUIDANCE VIDEOS',
    type: 'AREA_VIEWER',
    image: PRIMARY_MENU_IMAGE,
    summary: '',
        sections: [
          // {
          //   heading: '1. INTRODUCTION TO SPORTSEYE',
          //   text: null,
          //   icon: QUESTION_ICON,
          //   // documentHtml: TBC,
          // },//END OF SECTION
          {
            heading: 'INTRO TO SE OPERATOR',
            text: null,
            icon: QUESTION_ICON,
            documentHtml: GUIDANCE_INTRO_SE_REPORT,
          },//END OF SECTION
          {
            heading: 'IDENTIFYING YOUR PRIORITY AREAS',
            text: null,
            icon: QUESTION_ICON,
            documentHtml: GUIDANCE_PRIORITIES_REPORT,
          },//END OF SECTION
          {
            heading: 'MEMBER ACQUISITION',
            text: null,
            icon: QUESTION_ICON,
            documentHtml: GUIDANCE_AQUISITION_REPORT,
          },//END OF SECTION
          {
            heading: 'MEMBER RETENTION',
            text: null,
            icon: QUESTION_ICON,
            documentHtml: GUIDANCE_RETENTION_REPORT,
          },//END OF SECTION
          {
            heading: 'OPERATIONS (PROGRAM & PRICING)',
            text: null,
            icon: QUESTION_ICON,
            documentHtml: GUIDANCE_OPERATIONS_REPORT,
          },//END OF SECTION
          {
            heading: 'LOCAL GOVERNMENT MEETINGS',
            text: null,
            icon: QUESTION_ICON,
            documentHtml: GUIDANCE_LGA_REPORT,
          },//END OF SECTION
          {
            heading: 'INFRASTRUCTURE & ACTION PLANS',
            text: null,
            icon: QUESTION_ICON,
            documentHtml: GUIDANCE_INFRASTRUCTURE_REPORT,
          },//END OF SECTION
        ]
  }, //END OF MODULE
  {
    id: 'PART-A',
    name: 'MEMBER & DEMAND MAPPING',
    collapsible: true,
    type: 'CODE_VIEWER',
    CODES: [
      {
        name: 'ALL LOCATIONS',
        id: 'PART-A-SECTION-2',
        image: PRIMARY_MENU_IMAGE,
        summary: MODULE_SUMMARY_DEMO,
        sections: [
          {
            heading: 'YOUR SITES',
            text: SITE_YOUR_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'SITE_MEM_ALL',
                legendText: 'Your Sites',
                // click: SITE_ALL_POPUP,
                hover: '<h4>{SITE_NAME}</h4>',
              },
            ]
          },//END OF SECTION
          {
            heading: '1. MEMBERS (AREA)',
            text: AREA_MEM_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'AREA_MEM_ALL_SA2',
                legendText: 'Total Members in SA2 Area',
                hover: AREA_ALL_POPUP,
              },
              {
                id: 'AREA_MEM_ALL_LGA',
                name: 'LGA',
                legendText: 'Total Members in LGA Area',
                hover: AREA_ALL_POPUP,
              },
            ]
          },//END OF SECTION
          {
            heading: '2. DEMAND (AREA)',
            text: AREA_DEM_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'AREA_DEM_ALL_SA2',
                legendText: 'Total Demand in SA2 Area',
                hover: AREA_ALL_POPUP,
              },
              {
                id: 'AREA_DEM_ALL_LGA',
                name: 'LGA',
                legendText: 'Total Demand in LGA Area',
                hover: AREA_ALL_POPUP,              },
            ]
          },//END OF SECTION
          {
            heading: '3. CONVERSION (AREA)',
            text: AREA_DEM_CNV_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'AREA_DEM_CNV_ALL_SA2',
                legendText: 'Total Demand Conversion (%) in SA2 Area',
                hover: AREA_ALL_POPUP,
              },
              {
                id: 'AREA_DEM_CNV_ALL_LGA',
                name: 'LGA',
                legendText: 'Total Demand Conversion (%) in LGA Area',
                hover: AREA_ALL_POPUP,
              },
            ]
          },//END OF SECTION
          {
            heading: 'LAYER DETAILS',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: PERF_ALL_DETAILS,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
      {
        name: 'SWIM SCHOOL',
        id: 'PART-A-SECTION-5',
        image: PRIMARY_MENU_IMAGE,
        summary: MODULE_SUMMARY_DEMO,
        sections: [
          {
            heading: 'YOUR SITES',
            text: SITE_YOUR_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'SITE_MEM_SWM',
                legendText: 'Your Swim Schools',
                // click: SITE_SWIM_POPUP,
                hover: '<h4>{SITE_NAME}</h4>',
              },
            ]
          },//END OF SECTION
          {
            heading: '1. MEMBERS (AREA)',
            text: AREA_MEM_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'AREA_MEM_SWM_SA2',
                legendText: 'Swim School Members in SA2 Area',
                hover: AREA_SWIM_POPUP,
              },
              {
                id: 'AREA_MEM_SWM_LGA',
                name: 'LGA',
                legendText: 'Swim School Members in LGA Area',
                hover: AREA_SWIM_POPUP,
              },
            ]
          },//END OF SECTION
          {
            heading: '2. DEMAND (AREA)',
            text: AREA_DEM_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'AREA_DEM_SWM_SA2',
                legendText: 'Swim School Demand in SA2 Area',
                hover: AREA_SWIM_POPUP,
                },
              {
                id: 'AREA_DEM_SWM_LGA',
                name: 'LGA',
                legendText: 'Swim School Demand in LGA Area',
                hover: AREA_SWIM_POPUP,
              },
            ]
          },//END OF SECTION
          {
            heading: '3. CONVERSION (AREA)',
            text: AREA_DEM_CNV_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'AREA_DEM_CNV_SWM_SA2',
                legendText: 'Swim School Demand Conversion (%) in SA2 Area',
                hover: AREA_SWIM_POPUP,
              },
              {
                id: 'AREA_DEM_CNV_SWM_LGA',
                name: 'LGA',
                legendText: 'Swim School Demand Conversion (%) in LGA Area',
                hover: AREA_SWIM_POPUP,
              },
            ]
          },//END OF SECTION  
           {
            heading: 'LAYER DETAILS',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: PERF_SWM_DETAILS,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
    ]
  },//END OF MODULE
  {
    id: 'KEY_DASHBOARDS',
    name: 'KEY DASHBOARDS',
    type: 'AREA_VIEWER',
    image: PRIMARY_MENU_IMAGE,
    summary: '',
        sections: [
          {
            heading: '1. CENTRE MANAGER DASHBOARD',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: PERF_MANAGER_EMBED_REPORT,
          },//END OF SECTION
          {
            heading: '2. HEALTH AND WELLBEING - YOUR LOCAL GOVT',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: KEY_HEALTH_WELLB_DASH_REPORT,
          },//END OF SECTION
          {
            heading: '3. SOCIAL VALUE SUMMARY',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: COMM_SVALUE_EMBED_REPORT,
          },//END OF SECTION
          {
            heading: '4. SITE PERFORMANCE (HEAD OFFICE) DASHBOARD',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: PERF_SITE_EMBED_REPORT,
          },//END OF SECTION
          {
            heading: '5. GROUP EX PROGRAM DASHBOARD',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: RECOMM_PROG_EMBED_REPORT,
          },//END OF SECTION   
          {
            heading: '6. SWIM SCHOOL DASHBOARD',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: PERF_SWIMSCHOL_EMBED_REPORT,
          },//END OF SECTION
          {
            heading: '7. PRICING DASHBOARD',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: RECOMM_PRIC_EMBED_REPORT,
          },//END OF SECTION
          {
            heading: '8. COVID-19 RECOVERY',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: RECOMM_OPER_EMBED_REPORT,
          },//END OF SECTION
        ]
  }, //END OF MODULE
  {
    id: 'ACQUISITION',
    name: 'MEMBER ACQUISITION & RETENTION',
    collapsible: true,
    type: 'CODE_VIEWER',
    CODES: [
      {
        name: 'TARGET PROSPECTS - UNMET DEMAND (GROWTH POTENTIAL)',
        id: 'PART-E-SECTION-1',
        image: PRIMARY_MENU_IMAGE,
        summary: MODULE_SUMMARY_DEMO,
        sections: [
          {
            heading: '1. TARGET UNMET DEMAND (SITE)',
            text: CTCH_TARG_UNMT_DEM_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'CTCH_TARG_UNMT_DEM_ALL',
                legendText: 'Target Unmet Demand in Catchment',
                hover: '<h4>{SITE_NAME}</h4><p>Unmet Demand:</p><h4>{CTCH_TARG_UNMT_DEM_ALL}</h4>',
              },
            ]
          },//END OF SECTION
          {
            heading: '2. UNMET DEMAND (AREA)',
            text: AREA_UNMT_DEM_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'AREA_UNMT_DEM_ALL_SA1',
                legendText: 'Unmet Demand in SA1 Area',
                hover: '<h4>{AREA_NAME}</h4><p>Unmet Demand:</p><h4>{AREA_UNMT_DEM_ALL}</h4>',
              },
              {
                name: 'SA2',
                id: 'AREA_UNMT_DEM_ALL_SA2',
                legendText: 'Unmet Demand in SA2 Area',
                hover: '<h4>{AREA_NAME}</h4><p>Unmet Demand:</p><h4>{AREA_UNMT_DEM_ALL}</h4>',
              },
              {
                id: 'AREA_UNMT_DEM_ALL_LGA',
                name: 'LGA',
                legendText: 'Unmet Demand in LGA Area',
                hover: '<h4>{AREA_NAME}</h4><p>Unmet Demand:</p><h4>{AREA_UNMT_DEM_ALL}</h4>',
              },
            ]
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
      {
        name: 'DASHBOARDS',
        id: 'PART-E-SECTION-2',
        image: PRIMARY_MENU_IMAGE,
        summary: MODULE_SUMMARY_DEMO,
        sections: [
          {
            heading: '1. ACQUISITION',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: AXCAMP_EMBED_REPORT_AQU,
          },//END OF SECTION  
          {
            heading: '2. RETENTION',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: AXCAMP_EMBED_REPORT_RET,
          },//END OF SECTION  
        ]
      },//END OF SECTION GROUP
    ]
  }, //end of MODULE
  {
    id: 'COMMUNITY-PROFILE',
    name: 'COMMUNITY PROFILE',
    collapsible: true,
    type: 'CODE_VIEWER',
    CODES: [
      {
        name: 'CENSUS KEY INDICATORS (AUS) ',
        id: 'COMMUNITY-PROFILE-CENSUS-KEY-AUS',
        image: PRIMARY_MENU_IMAGE,
        summary: MODULE_SUMMARY_CENSUS_KEY_AUS,
        sections: [
          {
            heading: '1. TOTAL POPULATION',
            text: AREA_CX_TOT_P_P,
            icon: AREA_ICON,
            layers: [
              {
                name: 'LGA',
                id: 'CX_TOT_P_P',
                legendText: 'Total Population in 2016 LGA Area',
                click: CLICK_COMMUNITY_PROFILE,
                hover: HOVER_COMMUNITY_PROFILE,
              },
            ]
          },//END OF SECTION
          {
            heading: '2. INDIGENOUS POPULATION',
            text: AREA_CX_INDIGENOUS_TOT_P,
            icon: AREA_ICON,
            layers: [
              {
                name: 'LGA',
                id: 'CX_INDIGENOUS_TOT_P',
                legendText: 'Total Indigenous Population in 2016 LGA Area',
                click: CLICK_COMMUNITY_PROFILE,
                hover: HOVER_COMMUNITY_PROFILE,
              },
            ]
          },//END OF SECTION
          {
            heading: '3. BIRTHPLACE: OVERSEAS',
            text: AREA_CX_BIRTH_ELSEWHERE_P,
            icon: AREA_ICON,
            layers: [
              {
                name: 'LGA',
                id: 'CX_BIRTH_ELSEWHERE_P',
                legendText: 'Total Population Born Overseas in 2016 LGA Area',
                click: CLICK_COMMUNITY_PROFILE,
                hover: HOVER_COMMUNITY_PROFILE,
              },
            ]
          },//END OF SECTION
          {
            heading: '4. LANGUAGE AT HOME OTHER THAN ENGLISH',
            text: AREA_CX_LANG_HOME_OTHER_P,
            icon: AREA_ICON,
            layers: [
              {
                name: 'LGA',
                id: 'CX_LANG_HOME_OTHER_P',
                legendText: 'Total Population Speak Language Other than English in 2016 LGA Area',
                click: CLICK_COMMUNITY_PROFILE,
                hover: HOVER_COMMUNITY_PROFILE,
              },
            ]
          },//END OF SECTION
          {
            heading: '5. DEPRIVATION OF AREA',
            text: AREA_CX_IRSAD,
            icon: AREA_ICON,
            layers: [
              {
                name: 'LGA',
                id: 'CX_IRSAD',
                legendText: 'Deprivation Decile in 2016 LGA Area',
                click: CLICK_COMMUNITY_PROFILE,
                hover: HOVER_COMMUNITY_PROFILE,
              },
              {
                name: 'SA1',
                id: 'CX_DEPRIVATION_AUS_SA1',
                legendText: 'Deprivation Decile in SA1 Area',
                // click: AREA_COMMUNITY_POPUP,
                hover: '<h4>{AREA_NAME}</h4><p>Deprivation Decile:</p><h4>{CX_DEPRIVATION}</h4>',
              },
            ]
          },//END OF SECTION
          {
            heading: '6. NEED ASSISTANCE (DISABILITY)',
            text: CX_AXC_ASSIST_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                id: 'CX_AXC_ASSIST_LGA',
                name: 'LGA',
                legendText: 'Need Assistance Count in 2016 LGA Area',
                click: CLICK_COMMUNITY_PROFILE,
                hover: HOVER_COMMUNITY_PROFILE,
              },
              {
                name: 'SA2',
                id: 'CX_AXC_ASSIST_SA2',
                legendText: 'Need Assistance Count in SA2 Area',
                // click: AREA_COMMUNITY_POPUP,
                hover: '<h4>{AREA_NAME}</h4><p>Need Assistance:</p><h4>{CX_AXC_ASSIST}</h4>',
              },
              {
                name: 'SA1',
                id: 'CX_AXC_ASSIST_SA1',
                legendText: 'Need Assistance Count in SA1 Area',
                // click: AREA_COMMUNITY_POPUP,
                hover: '<h4>{AREA_NAME}</h4><p>Need Assistance:</p><h4>{CX_AXC_ASSIST}</h4>',
              },
            ]
          },//END OF SECTION
          {
            heading: 'LAYER DETAILS',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: CP_CENSUS_KEY_AUS_DETAILS,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
      {
        name: 'CENSUS KEY INDICATORS (NZL)',
        id: 'COMMUNITY-PROFILE-CENSUS-KEY-NZL',
        image: PRIMARY_MENU_IMAGE,
        summary: MODULE_SUMMARY,
        sections: [
          {
            heading: '1. DEPRIVATION OF AREA',
            text: CX_DEPRIVATION_NZL_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'CX_DEPRIVATION_NZL_SA1',
                legendText: 'Mean Deprivation Index in SA1 Area',
                // click: AREA_COMMUNITY_POPUP,
                hover: '<h4>{AREA_NAME}</h4><p>Deprivation Index:</p><h4>{CX_DEPRIVATION}</h4>',
              },
            ]
          },//END OF SECTION
          {
            heading: 'LAYER DETAILS',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: CP_CENSUS_KEY_NZL_DETAILS,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
      {
        name: 'AX HEALTH FACTORS',
        id: 'COMMUNITY-PROFILE-HF',
        image: PRIMARY_MENU_IMAGE,
        summary: MODULE_SUMMARY,
        sections: [
          {
            heading: 'AX RISK OF INACTIVITY',
            text: CX_AXC_ROI_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'CX_INACTIVITY_SA1',
                legendText: 'Risk of Inactivity Score in SA1 Area',
                // click: AREA_COMMUNITY_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_AXC_ROI}</h4>',
              },
            ]
          },//END OF SECTION
         {
            heading: 'HF: I would like to be able to lose weight',
            text: CX_HF_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'CX_HF_2_SA1',
                legendText: 'HF: I would like to be able to lose weight Count in SA1 Area',
                hover: COMM_HFACT_POPUP,
              },
              {
                name: 'SA2',
                id: 'CX_HF_2_SA2',
                legendText: 'HF: I would like to be able to lose weight Count in SA2 Area',
                hover: COMM_HFACT_POPUP,
              },
              {
                id: 'CX_HF_2_LGA',
                name: 'LGA',
                legendText: 'HF: I would like to be able to lose weight Count in LGA Area',
                hover: COMM_HFACT_POPUP,
              },
            ]
          },//END OF SECTION
         {
            heading: 'HF: I’m concerned about my cholesterol level',
            text: CX_HF_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'CX_HF_3_SA1',
                legendText: 'HF: I’m concerned about my cholesterol level Count in SA1 Area',
                hover: COMM_HFACT_POPUP,
              },
              {
                name: 'SA2',
                id: 'CX_HF_3_SA2',
                legendText: 'HF: I’m concerned about my cholesterol level Count in SA2 Area',
                hover: COMM_HFACT_POPUP,
              },
              {
                id: 'CX_HF_3_LGA',
                name: 'LGA',
                legendText: 'HF: I’m concerned about my cholesterol level Count in LGA Area',
                hover: COMM_HFACT_POPUP,
              },
            ]
          },//END OF SECTION
         {
            heading: 'HF: I try to get enough calcium in my diet',
            text: CX_HF_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'CX_HF_4_SA1',
                legendText: 'HF: I try to get enough calcium in my diet Count in SA1 Area',
                hover: COMM_HFACT_POPUP,
              },
              {
                name: 'SA2',
                id: 'CX_HF_4_SA2',
                legendText: 'HF: I try to get enough calcium in my diet Count in SA2 Area',
                hover: COMM_HFACT_POPUP,
              },
              {
                id: 'CX_HF_4_LGA',
                name: 'LGA',
                legendText: 'HF: I try to get enough calcium in my diet Count in LGA Area',
                hover: COMM_HFACT_POPUP,
              },
            ]
          },//END OF SECTION
         {
            heading: 'HF: I’m feeling well and in good health',
            text: CX_HF_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'CX_HF_5_SA1',
                legendText: 'HF: I’m feeling well and in good health Count in SA1 Area',
                hover: COMM_HFACT_POPUP,
              },
              {
                name: 'SA2',
                id: 'CX_HF_5_SA2',
                legendText: 'HF: I’m feeling well and in good health Count in SA2 Area',
                hover: COMM_HFACT_POPUP,
              },
              {
                id: 'CX_HF_5_LGA',
                name: 'LGA',
                legendText: 'HF: I’m feeling well and in good health Count in LGA Area',
                hover: COMM_HFACT_POPUP,
              },
            ]
          },//END OF SECTION
         {
            heading: 'HF: I’m constantly watching my weight',
            text: CX_HF_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'CX_HF_6_SA1',
                legendText: 'HF: I’m constantly watching my weight Count in SA1 Area',
                hover: COMM_HFACT_POPUP,
              },
              {
                name: 'SA2',
                id: 'CX_HF_6_SA2',
                legendText: 'HF: I’m constantly watching my weight Count in SA2 Area',
                hover: COMM_HFACT_POPUP,
              },
              {
                id: 'CX_HF_6_LGA',
                name: 'LGA',
                legendText: 'HF: I’m constantly watching my weight Count in LGA Area',
                hover: COMM_HFACT_POPUP,
              },
            ]
          },//END OF SECTION
          {
            heading: 'LAYER DETAILS',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: CP_HFACT_DETAILS,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
      {
        name: 'AREA INFO (AUS)',
        id: 'COMMUNITY-PROFILE-INFO-AUS',
        image: PRIMARY_MENU_IMAGE,
        summary: MODULE_SUMMARY,
        sections: [
          {
            heading: '1. ALL SCHOOLS',
            text: CX_SCHOOLS_AUS,
            icon: POINT_ICON,
            layers: [
              {
                name: 'ALL',
                id: 'AUS_SCHL_ROLL',
                legendText: 'Total Roll at School (Colour: Category)',
                hover: CX_SCHOOLS_POPUP,
              },
              {
                name: 'PRIMARY',
                id: 'AUS_SCHL_ROLL_LVL_PRIM',
                legendText: 'Total Roll at Primary School',
                hover: CX_SCHOOLS_POPUP,
              },
              {
                name: 'COMBINED',
                id: 'AUS_SCHL_ROLL_LVL_COMB',
                legendText: 'Total Roll at Combined School',
                hover: CX_SCHOOLS_POPUP,
              },
              {
                name: 'SECONDARY',
                id: 'AUS_SCHL_ROLL_LVL_SECN',
                legendText: 'Total Roll at Secondary School',
                hover: CX_SCHOOLS_POPUP,
              },
              {
                name: 'SPECIAL',
                id: 'AUS_SCHL_ROLL_LVL_SPEC',
                legendText: 'Total Roll at Special School',
                hover: CX_SCHOOLS_POPUP,
              },
            ]
          },//END OF SECTION   
          {
            heading: '2. AREA BOUNDARIES',
            text: CX_BOUNDARY_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'CX_BOUNDARY_SA2',
                legendText: 'SA2 Boundaries',
                // click: AREA_COMMUNITY_POPUP,
                // hover: '<p>{AREA_NAME}<p><h4>{CX_DEPRIVATION}</h4>',
              },
              {
                name: 'LGA',
                id: 'CX_BOUNDARY_LGA',
                legendText: 'LGA Boundaries',
                // click: AREA_COMMUNITY_POPUP,
                // hover: '<p>{AREA_NAME}<p><h4>{CX_DEPRIVATION}</h4>',
              },
            ]
          },//END OF SECTION
          {
            heading: '3. AREA LABELS',
            text: CX_LABEL_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'CX_LABEL_SA2',
                legendText: 'SA2 Area Labels',
                // click: AREA_COMMUNITY_POPUP,
                // hover: '<p>{AREA_NAME}<p><h4>{CX_DEPRIVATION}</h4>',
              },
              {
                name: 'LGA',
                id: 'CX_LABEL_LGA',
                legendText: 'LGA Area Labels',
                // click: AREA_COMMUNITY_POPUP,
                // hover: '<p>{AREA_NAME}<p><h4>{CX_DEPRIVATION}</h4>',
              },
            ]
          },//END OF SECTION
          {
            heading: '4. SATELLITE VIEW',
            text: SAMPLE_DROP,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SATELLITE',
                id: 'mapbox-satellite',
                legendText: 'Satellite View',
                // click: AREA_COMMUNITY_POPUP,
                // hover: '<p>{AREA_NAME}<p>',
              },
            ]
          },//END OF SECTION
          {
            heading: 'LAYER DETAILS',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: CP_INFO_AUS_DETAILS,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
    {
        name: 'AREA INFO (NZL)',
        id: 'COMMUNITY-PROFILE-INFO-NZL',
        image: PRIMARY_MENU_IMAGE,
        summary: MODULE_SUMMARY,
        sections: [
          {
            heading: '1. ALL SCHOOLS',
            text: CX_SCHOOLS_NZL,
            icon: POINT_ICON,
            layers: [
              {
                name: 'ALL',
                id: 'NZL_SCHL_ROLL',
                legendText: 'Total Roll at School (Colour: Category)',
                hover: CX_SCHOOLS_POPUP,
              },
              {
                name: 'PRIMARY',
                id: 'NZL_SCHL_ROLL_LVL_PRIM',
                legendText: 'Total Roll at Primary School',
                hover: CX_SCHOOLS_POPUP,
              },
              {
                name: 'INTER.',
                id: 'NZL_SCHL_ROLL_LVL_INTER',
                legendText: 'Total Roll at Intermediate School',
                hover: CX_SCHOOLS_POPUP,
              },
              {
                name: 'SECONDARY',
                id: 'NZL_SCHL_ROLL_LVL_SECN',
                legendText: 'Total Roll at Secondary School',
                hover: CX_SCHOOLS_POPUP,
              },
              {
                name: 'SPECIAL',
                id: 'NZL_SCHL_ROLL_LVL_SPEC',
                legendText: 'Total Roll at Special School',
                hover: CX_SCHOOLS_POPUP,
              },
            ]
          },//END OF SECTION  
          {
            heading: '2. AREA BOUNDARIES',
            text: CX_BOUNDARY_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'CX_BOUNDARY_SA2',
                legendText: 'SA2 Boundaries',
                // click: AREA_COMMUNITY_POPUP,
                // hover: '<p>{AREA_NAME}<p><h4>{CX_DEPRIVATION}</h4>',
              },
              {
                name: 'TA',
                id: 'CX_BOUNDARY_LGA',
                legendText: 'TA Boundaries',
                // click: AREA_COMMUNITY_POPUP,
                // hover: '<p>{AREA_NAME}<p><h4>{CX_DEPRIVATION}</h4>',
              },
            ]
          },//END OF SECTION
          {
            heading: '3. AREA LABELS',
            text: CX_LABEL_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'CX_LABEL_SA2',
                legendText: 'SA2 Area Labels',
                // click: AREA_COMMUNITY_POPUP,
                // hover: '<p>{AREA_NAME}<p><h4>{CX_DEPRIVATION}</h4>',
              },
              {
                name: 'TA',
                id: 'CX_LABEL_LGA',
                legendText: 'TA Area Labels',
                // click: AREA_COMMUNITY_POPUP,
                // hover: '<p>{AREA_NAME}<p><h4>{CX_DEPRIVATION}</h4>',
              },
            ]
          },//END OF SECTION
          {
            heading: '4. SATELLITE VIEW',
            text: SAMPLE_DROP,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SATELLITE',
                id: 'mapbox-satellite',
                legendText: 'Satellite View',
                // click: AREA_COMMUNITY_POPUP,
                // hover: '<p>{AREA_NAME}<p>',
              },
            ]
          },//END OF SECTION
          {
            heading: 'LAYER DETAILS',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: CP_INFO_NZL_DETAILS,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
    ]
  }, //END OF MODULE
  {
    id: 'SPORTSEYE_NETWORK',
    name: 'SPORTSEYE NETWORK',
    collapsible: true,
    type: 'CODE_VIEWER',
    CODES: [
      {
        name: 'STATE SPORT DEMAND',
        id: 'PART-E-SECTION-1',
        image: PRIMARY_MENU_IMAGE,
        summary: MODULE_SUMMARY_DEMO,
        sections: [
          {
            heading: 'AFL',
            text: null,
            icon: AREA_ICON,
            // documentHtml: TBC,
          },//END OF SECTION 
          {
            heading: 'ATHLETICS',
            text: null,
            icon: AREA_ICON,
            // documentHtml: TBC,
          },//END OF SECTION 
            {
            heading: 'BASEBALL',
            text: null,
            icon: AREA_ICON,
            // documentHtml: TBC,
          },//END OF SECTION 
          {
            heading: 'BASKETBALL',
            text: null,
            icon: AREA_ICON,
            // documentHtml: TBC,
          },//END OF SECTION 
          {
            heading: 'BOWLING',
            text: null,
            icon: AREA_ICON,
            // documentHtml: TBC,
          },//END OF SECTION 
          {
            heading: 'CRICKET',
            text: null,
            icon: AREA_ICON,
            // documentHtml: TBC,
          },//END OF SECTION 
            {
            heading: 'CYCLING',
            text: null,
            icon: AREA_ICON,
            // documentHtml: TBC,
          },//END OF SECTION 
          {
            heading: 'EQUESTRIAN',
            text: null,
            icon: AREA_ICON,
            // documentHtml: TBC,
          },//END OF SECTION 
          {
            heading: 'FOOTBALL',
            text: null,
            icon: AREA_ICON,
            // documentHtml: TBC,
          },//END OF SECTION 
          {
            heading: 'GYMNASTICS',
            text: null,
            icon: AREA_ICON,
            // documentHtml: TBC,
          },//END OF SECTION 
            {
            heading: 'HOCKEY',
            text: null,
            icon: AREA_ICON,
            // documentHtml: TBC,
          },//END OF SECTION 
          {
            heading: 'ICE HOCKEY',
            text: null,
            icon: AREA_ICON,
            // documentHtml: TBC,
          },//END OF SECTION 
          {
            heading: 'ICE SKATING',
            text: null,
            icon: AREA_ICON,
            // documentHtml: TBC,
          },//END OF SECTION 
          {
            heading: 'LITTLE ATHLETICS',
            text: null,
            icon: AREA_ICON,
            // documentHtml: TBC,
          },//END OF SECTION 
            {
            heading: 'NETBALL',
            text: null,
            icon: AREA_ICON,
            // documentHtml: TBC,
          },//END OF SECTION 
          {
            heading: 'RUGBY',
            text: null,
            icon: AREA_ICON,
            // documentHtml: TBC,
          },//END OF SECTION 
          {
            heading: 'SOFTBALL',
            text: null,
            icon: AREA_ICON,
            // documentHtml: TBC,
          },//END OF SECTION 
          {
            heading: 'SQUASH',
            text: null,
            icon: AREA_ICON,
            // documentHtml: TBC,
          },//END OF SECTION 
            {
            heading: 'SWIMMING',
            text: null,
            icon: AREA_ICON,
            // documentHtml: TBC,
          },//END OF SECTION 
          {
            heading: 'TENNIS',
            text: null,
            icon: AREA_ICON,
            // documentHtml: TBC,
          },//END OF SECTION 
          {
            heading: 'TOUCH',
            text: null,
            icon: AREA_ICON,
            // documentHtml: TBC,
          },//END OF SECTION 
          {
            heading: 'VOLLEYBALL',
            text: null,
            icon: AREA_ICON,
            // documentHtml: TBC,
          },//END OF SECTION
          {
            heading: 'LAYER DETAILS',
            text: null,
            icon: DOCUMENT_ICON,
            // documentHtml: TBC,
          },//END OF SECTION 
        ]
      },//END OF SECTION GROUP
      {
        name: 'FITNESS AUSTRALIA KPI BENCHMARKING',
        id: 'PART-E-SECTION-3',
        image: PRIMARY_MENU_IMAGE,
        summary: MODULE_SUMMARY_DEMO,
        sections: [
          {
            heading: 'FITNESS AUSTRALIA',
            text: null,
            icon: DASHBOARD_ICON,
            // documentHtml: TBC,
          },//END OF SECTION 
        ]
      },//END OF SECTION GROUP
      {
        name: 'SPORT AUSTRALIA - FY30',
        id: 'PART-E-SECTION-4',
        image: PRIMARY_MENU_IMAGE,
        summary: MODULE_SUMMARY_DEMO,
        sections: [
          {
            heading: 'FIND YOUR 30',
            text: null,
            icon: DASHBOARD_ICON,
            // documentHtml: TBC,
          },//END OF SECTION 
        ]
      },//END OF SECTION GROUP
      {
        name: 'ARV - VICSWIM',
        id: 'PART-E-SECTION-5',
        image: PRIMARY_MENU_IMAGE,
        summary: MODULE_SUMMARY_DEMO,
        sections: [
          {
            heading: 'LAYERS',
            text: null,
            icon: AREA_ICON,
            // documentHtml: TBC,
          },//END OF SECTION 
          {
            heading: 'DASHBOARD',
            text: null,
            icon: DASHBOARD_ICON,
            // documentHtml: TBC,
          },//END OF SECTION 
        ]
      },//END OF SECTION GROUP
    ]
  }, //end of MODULE
  {
    id: 'PART-F',
    name: 'THE LOCKER ROOM',
    type: 'AREA_VIEWER',
    image: PRIMARY_MENU_IMAGE,
    summary: MODULE_SUMMARY_LOCKERROOM,
        sections: [
          {
            heading: 'ACTIVITY STANDARDS AND MATCHING',
            text: LOCKERROOM_MATCHING_STANDARDS,
            icon: DOCUMENT_ICON,
            // documentHtml: TBC,
          },//END OF SECTION 
          {
            heading: 'DATA QUALITY SCORECARD (AVAILABLE FREE ON REQUEST)',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: RECOMM_DATA_QUAL_SCORECARD,
          },//END OF SECTION
          {
            heading: 'INVESTMENT PLANNING REPORTS',
            text: null,
            icon: DOCUMENT_ICON,
            // documentHtml: TBC,
          },//END OF SECTION 
        ]
  }, //END OF MODULE
  {
    id: 'NEW_SITE_IDENTIFICATION',
    name: 'NEW SITE IDENTIFICATION - PROPERTY SEARCH (OPTIONAL MODULE)',
    type: 'AREA_VIEWER',
    image: PRIMARY_MENU_IMAGE,
    summary: MODULE_SUMMARY_DEMO,
        sections: [
          {
            heading: '1. HEALTH AND FITNESS OPTIMAL HOTSPOTS',
            text: '<b>Colour: Aggregated Unmet Demand</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'AREA_UNMT_DEM_AGG_ALL_SA1',
                legendText: 'Aggregated Unmet Demand in SA1 Area',
                // hover: '<p>{AREA_NAME}</p><h4>{AREA_UNMT_DEM_AGG_ALL}</h4>',
                hover: '<p>{AREA_NAME}</p><h4>{AREA_UNMT_DEM_ALL}</h4>',
              },
            ]
          },//END OF SECTION - HIDDEN TEMP. AS NO MAPBOX LAYER REF  
          {
            heading: '2. HEALTH AND FITNESS OPTIMAL LOCATION DASHBOARD',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: OPTIMAL_LOCATION_DASH_REPORT,
          },//END OF SECTION
          {
            heading: '3. ORDER FULL INVESTMENT PLANNING MODEL',
            text: IPM_REQUEST_TEXT,
            icon: QUESTION_ICON,
            // documentHtml: IPM_REQUEST_REPORT,
          },//END OF SECTION  
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
