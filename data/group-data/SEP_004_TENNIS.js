/////////////////////////////////////////////////////////////////////////////////////

// SEP V2.0
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
const ACCOUNT_NAME = "TENNIS AUSTRALIA"

// 1B. PRODUCT SELECTION PAGE
const SPLASH_APPS = [
  {
    name: 'SPORTSEYE PRO',
    lede: '<p>Full investment planning model tailored for state sport associations and national sport organisations.</p>',
    action: 'ENTER',
    route: '/home',
    disabled: false
  }
]


// 1C. LOGIN SPLASH

// LOGIN SPLASH
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
// activexchange-prod
const MAPBOX_APIKEY = "pk.eyJ1IjoiYWN0aXZleGNoYW5nZS1wcm9kIiwiYSI6ImNrM2FpcjZseDBlZDMzbXAxdHRsNjgzcjEifQ.zETmZUB8EKAwbHG1SegL1w"
// SEP-004-v1.0-TENNISAUS
const MAPBOX_STYLE = "mapbox://styles/activexchange-prod/ck3p24ll50fiy1co6dl8y7fjp" 


// 2B. STARTING MAP VIEW

const MAP_START = {
    lat: -33.8688, lng: 151.2093, zoom: 10 //SYDNEY
}


// 3. IMAGES

// 3A. MENU IMAGES
const PRIMARY_MENU_IMAGE = '/images/SportsEye_Houses.jpg'



/////////////////////////////////////////////////////////////////////////////////////

// PART B: ACCOUNT SPECIFIC REFERENCES

/////////////////////////////////////////////////////////////////////////////////////

// 1. POPUPS

const CLICK_COMMUNITY_PROFILE = require('../group-references/SEP_004_TENNIS/CLICK_COMMUNITY_PROFILE')
const HOVER_COMMUNITY_PROFILE = require('../group-references/SEP_004_TENNIS/HOVER_COMMUNITY_PROFILE')
const SITE_PRIVATE_POPUP = require('../group-references/SEP_004_TENNIS/SITE_PRIVATE_POPUP')



const HOVER_SPORT_NSW_TENN_AREA_LGA = `
<h4>{AREA_NAME}</h4>
<p>Members:</p>
<h4>{PR_MEM_TENN}</h4>
<p>Demand:</p>
<h4>{PB_DEM_TENN}</h4>
<p>Conversion:</p>
<h4>{PR_CNV_TENN}%</h4>
<p>Population: </p>
<h4>{Total_Population}</h4>
`

const HOVER_SPORT_NSW_TENN_AREA_SA2 = `
<h4>{AREA_NAME}</h4>
<p>Members:</p>
<h4>{PR_MEM_TENN}</h4>
<p>Demand:</p>
<h4>{PB_DEM_TENN}</h4>
<p>Conversion:</p>
<h4>{PR_CNV_TENN}%</h4>
<p>Population: </p>
<h4>{Total_Population}</h4>
`


const AREA_PRIVATE_11_TENN_POPUP = `
<h4>{AREA_NAME}</h4>
<p>Members:</p>
<h4>{AREA_MEM_11_TENN}</h4>
<p>Demand:</p>
<h4>{AREA_DEM_11_TENN}</h4>
<p>Conversion:</p>
<h4>{AREA_DEM_CNV_11_TENN}%</h4>
<p>Population: </p>
<h4>{Total_Population}</h4>
`


// 2. DASHBOARDS

const MY_PRIORITIES_REPORT = require('../group-references/SEP_004_TENNIS/REPORTS/SEP_004_PRIORITIES_DEMO')
const MY_HEALTH_REPORT = require('../group-references/SEP_004_TENNIS/REPORTS/SEP_004_HEALTH_DEMO')


// 3. LAYER TEXT
const DEMOGR_AUS_DETAILS = require('../group-references/SEP_004_TENNIS/DEMOGR_AUS_DETAILS')
const COMM_INFO_AUS_DETAILS = require('../group-references/SEP_004_TENNIS/COMM_INFO_AUS_DETAILS')



const AREA_SPORTNSW_MEM = `
<b>Colour: Total Members in Area</b>
`

const AREA_SPORTNSW_DEM = `
<b>Colour: Total Demand in Area</b>
`

const AREA_SPORTNSW_DEM_CNV = `
<b>Colour: Percent Conversion in Area</b>
<p>Members / Demand</p>
`

const SITE_SPORTNSW_MEM = `
<b>Size: Total Members at Facility</b><br>
Green: Members at Facility<br>Black: No Members
`
const SITE_SPORTSA_MEM = `
<b>Size: Total Members at Facility</b><br>
<b>Colour: Category</b><br>
Blue: Members at Facility<br>Black: No Members
`



const AREA_CX_TOT_P_P = `
<b>Colour: Total Population in Area</b>
`
const AREA_CX_INDIGENOUS_TOT_P = `
<b>Colour: Total Indigenous Population in Area</b>
`
const AREA_CX_BIRTH_ELSEWHERE_P = `
<b>Colour: Total Persons Born Overseas in Area</b>
`
const AREA_CX_LANG_HOME_OTHER_P = `
<b>Colour: Total Persons Language Other than English Spoken at Home in Area</b>
`
const AREA_CX_CX_IRSAD = `
<b>Colour: Index Score</b><br>
Index of Relative Socioeconomic Advantage and Disadvantage (IRSAD).<br>Decile Scores range from 1 - 10, with 1 indicating the most deprived areas and 10 the least deprived.
`


// 4. DOCUMENTS

/////////////////////////////////////////////////////////////////////////////////////

// PART C: PRODUCT SPECIFIC REFERENCES

/////////////////////////////////////////////////////////////////////////////////////

// 1. POPUPS

const COMM_HFACT_POPUP = require('../group-references/SEP_004_TENNIS/COMM_HFACT_POPUP')


// 2. DASHBOARDS

// 3. LAYER TEXT

const COMM_HFACT_DETAILS = require('../group-references/SEP_004_TENNIS/COMM_HFACT_DETAILS')
const CX_HF_TEXT = require('../group-references/SEP_004_TENNIS/CX_HF_TEXT')
const CX_AXC_ASSIST_TEXT = require('../group-references/SEP_004_TENNIS/CX_AXC_ASSIST_TEXT')
const CX_AXC_ROI_TEXT = require('../group-references/SEP_004_TENNIS/CX_AXC_ROI_TEXT')
const CX_BOUNDARY_TEXT = require('../group-references/SEP_004_TENNIS/CX_BOUNDARY_TEXT')
const CX_LABEL_TEXT = require('../group-references/SEP_004_TENNIS/CX_LABEL_TEXT')



const MODULE_SUMMARY = `
<p>Select layers below to display on the map.</p>
`

// 4. DOCUMENTS

/////////////////////////////////////////////////////////////////////////////////////

// PART D: SPORTSEYE REFERENCES

/////////////////////////////////////////////////////////////////////////////////////

// 1. POPUPS

// 2. DASHBOARDS

// 3. LAYER TEXT

// 4. DOCUMENTS

//LAYER ICONS
const AREA_ICON = '/images/icons/land.svg'
const POINT_ICON = '/images/icons/pin.svg'
const PEOPLE_ICON = '/images/icons/people.svg'
const DOCUMENT_ICON = '/images/icons/document.svg'
const DASHBOARD_ICON = '/images/icons/dashboard.svg'
const AUDIT_ICON = '/images/icons/audit.svg'

/////////////////////////////////////////////////////////////////////////////////////

// PART E: MENU LAYOUT

/////////////////////////////////////////////////////////////////////////////////////


const CATEGORIES = [
  {
    id: 'PART-10',
    name: 'TENNIS NSW',
    type: 'AREA_VIEWER',
    image: PRIMARY_MENU_IMAGE,
    summary: MODULE_SUMMARY,
        sections: [
          {
            heading: '1. MEMBERS',
            text: AREA_SPORTNSW_MEM,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'SPORT_NSW_TENN_MEM_SA2',
                legendText: 'Total NSW Members in SA2 Area',
                // click: HOVER_SPORT_NSW_TENN_AREA,
                hover: HOVER_SPORT_NSW_TENN_AREA_SA2
              },
              {
                name: 'LGA',
                id: 'SPORT_NSW_TENN_MEM_LGA',
                legendText: 'Total NSW Members in LGA Area',
                // click: HOVER_SPORT_NSW_TENN_AREA,
                hover: HOVER_SPORT_NSW_TENN_AREA_LGA
              },
            ]
          },//END OF SECTION
          {
            heading: '2. DEMAND',
            text: AREA_SPORTNSW_DEM,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'SPORT_NSW_TENN_DEM_SA2',
                legendText: 'Total NSW Demand in SA2 Area',
                // click: HOVER_SPORT_NSW_TENN_AREA,
                hover: HOVER_SPORT_NSW_TENN_AREA_SA2
              },
              {
                name: 'LGA',
                id: 'SPORT_NSW_TENN_DEM_LGA',
                legendText: 'Total NSW Demand in LGA Area',
                // click: HOVER_SPORT_NSW_TENN_AREA,
                hover: HOVER_SPORT_NSW_TENN_AREA_LGA
              },
            ]
          },//END OF SECTION
          {
            heading: '3. CONVERSION',
            text: AREA_SPORTNSW_DEM_CNV,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'SPORT_NSW_TENN_DEM_CNV_SA2',
                legendText: 'NSW Demand Conversion (%) in SA2 Area',
                // click: HOVER_SPORT_NSW_TENN_AREA,
                hover: HOVER_SPORT_NSW_TENN_AREA_SA2
              },
              {
                name: 'LGA',
                id: 'SPORT_NSW_TENN_DEM_CNV_LGA',
                legendText: 'NSW Demand Conversion (%) in LGA Area',
                // click: HOVER_SPORT_NSW_TENN_AREA,
                hover: HOVER_SPORT_NSW_TENN_AREA_LGA
              },
            ]
          },//END OF SECTION
          {
            heading: '4. FACILITY MEMBERSHIP',
            text: SITE_SPORTNSW_MEM,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'SPORT_NSW_TENN_SITE',
                legendText: 'Total NSW Members at Facility',
                // click: HOVER_SPORT_NSW_TENN_AREA,
                hover: '<h4>{SITENAME}</h4><p>{PR_CLUBS}</p>'
              },
            ]
          },//END OF SECTION
          {
            heading: '5. SITE & AREA PRIORITIES',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: MY_PRIORITIES_REPORT,
          },//END OF SECTION
          {
            heading: '6. HEALTH & WELLBEING',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: MY_HEALTH_REPORT,
          },//END OF SECTION
        ]
  }, //END OF MODULE
  {
    id: 'PART-11',
    name: 'TENNIS SA',
    type: 'AREA_VIEWER',
    image: PRIMARY_MENU_IMAGE,
    summary: MODULE_SUMMARY,
        sections: [
          {
            heading: '1. MEMBERS',
            text: AREA_SPORTNSW_MEM,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'SPORT_SA_TENN_MEM_SA2',
                legendText: 'Total SA Members in SA2 Area',
                // click: HOVER_SPORT_NSW_TENN_AREA,
                hover: AREA_PRIVATE_11_TENN_POPUP
              },
            ]
          },//END OF SECTION
          {
            heading: '2. DEMAND',
            text: AREA_SPORTNSW_DEM,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'SPORT_SA_TENN_DEM_SA2',
                legendText: 'Total SA Demand in SA2 Area',
                hover: AREA_PRIVATE_11_TENN_POPUP
              },
            ]
          },//END OF SECTION
          {
            heading: '3. CONVERSION',
            text: AREA_SPORTNSW_DEM_CNV,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'SPORT_SA_TENN_DEM_CNV_SA2',
                legendText: 'SA Demand Conversion (%) in SA2 Area',
                hover: AREA_PRIVATE_11_TENN_POPUP
              },
            ]
          },//END OF SECTION
          {
            heading: '4. FACILITY MEMBERSHIP',
            text: SITE_SPORTSA_MEM,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'SPORT_SA_TENN_SITE',
                legendText: 'Total SA Members at Facility',
                hover: SITE_PRIVATE_POPUP,
              },
            ]
          },//END OF SECTION
          {
            heading: '5. SITE & AREA PRIORITIES',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: MY_PRIORITIES_REPORT,
          },//END OF SECTION
          {
            heading: '6. HEALTH & WELLBEING',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: MY_HEALTH_REPORT,
          },//END OF SECTION
        ]
  }, //END OF MODULE
  {
    id: 'PART-9',
    name: 'COMMUNITY PROFILE',
    collapsible: true,
    type: 'CODE_VIEWER',
    CODES: [
      {
        name: 'KEY INDICATORS',
        id: 'PART-9-SECTION-A',
        image: PRIMARY_MENU_IMAGE,
        summary: MODULE_SUMMARY,
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
            text: AREA_CX_CX_IRSAD,
            icon: AREA_ICON,
            layers: [
              {
                name: 'LGA',
                id: 'CX_IRSAD',
                legendText: 'Deprivation Decile in 2016 LGA Area',
                click: CLICK_COMMUNITY_PROFILE,
                hover: HOVER_COMMUNITY_PROFILE,
              },
            ]
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
      {
        name: 'HEALTH FACTORS',
        id: 'PART-D-SECTION-2',
        image: PRIMARY_MENU_IMAGE,
        summary: MODULE_SUMMARY,
        sections: [
         {
            heading: '1. I love to do as many sports as possible',
            text: CX_HF_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'CX_HF_1_SA1',
                legendText: 'Count in SA1 Area',
                click: COMM_HFACT_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_1}</h4><i>Click to view full area details</i>',
              },
              {
                name: 'SA2',
                id: 'CX_HF_1_SA2',
                legendText: 'Count in SA2 Area',
                click: COMM_HFACT_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_1}</h4><i>Click to view full area details</i>',
              },
              {
                id: 'CX_HF_1_LGA',
                name: 'LGA',
                legendText: 'Count in LGA Area',
                click: COMM_HFACT_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_1}</h4><i>Click to view full area details</i>',
              },
            ]
          },//END OF SECTION
         {
            heading: '2. I would like to be able to lose weight',
            text: CX_HF_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'CX_HF_2_SA1',
                legendText: 'Count in SA1 Area',
                click: COMM_HFACT_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_2}</h4><i>Click to view full area details</i>',
              },
              {
                name: 'SA2',
                id: 'CX_HF_2_SA2',
                legendText: 'Count in SA2 Area',
                click: COMM_HFACT_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_2}</h4><i>Click to view full area details</i>',
              },
              {
                id: 'CX_HF_2_LGA',
                name: 'LGA',
                legendText: 'Count in LGA Area',
                click: COMM_HFACT_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_2}</h4><i>Click to view full area details</i>',
              },
            ]
          },//END OF SECTION
         {
            heading: '3. I’m concerned about my cholesterol level',
            text: CX_HF_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'CX_HF_3_SA1',
                legendText: 'Count in SA1 Area',
                click: COMM_HFACT_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_3}</h4><i>Click to view full area details</i>',
              },
              {
                name: 'SA2',
                id: 'CX_HF_3_SA2',
                legendText: 'Count in SA2 Area',
                click: COMM_HFACT_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_3}</h4><i>Click to view full area details</i>',
              },
              {
                id: 'CX_HF_3_LGA',
                name: 'LGA',
                legendText: 'Count in LGA Area',
                click: COMM_HFACT_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_3}</h4><i>Click to view full area details</i>',
              },
            ]
          },//END OF SECTION
         {
            heading: '4. I try to get enough calcium in my diet',
            text: CX_HF_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'CX_HF_4_SA1',
                legendText: 'Count in SA1 Area',
                click: COMM_HFACT_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_4}</h4><i>Click to view full area details</i>',
              },
              {
                name: 'SA2',
                id: 'CX_HF_4_SA2',
                legendText: 'Count in SA2 Area',
                click: COMM_HFACT_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_4}</h4><i>Click to view full area details</i>',
              },
              {
                id: 'CX_HF_4_LGA',
                name: 'LGA',
                legendText: 'Count in LGA Area',
                click: COMM_HFACT_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_4}</h4><i>Click to view full area details</i>',
              },
            ]
          },//END OF SECTION
         {
            heading: '5. I’m feeling well and in good health',
            text: CX_HF_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'CX_HF_5_SA1',
                legendText: 'Count in SA1 Area',
                click: COMM_HFACT_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_5}</h4><i>Click to view full area details</i>',
              },
              {
                name: 'SA2',
                id: 'CX_HF_5_SA2',
                legendText: 'Count in SA2 Area',
                click: COMM_HFACT_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_5}</h4><i>Click to view full area details</i>',
              },
              {
                id: 'CX_HF_5_LGA',
                name: 'LGA',
                legendText: 'Count in LGA Area',
                click: COMM_HFACT_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_5}</h4><i>Click to view full area details</i>',
              },
            ]
          },//END OF SECTION
         {
            heading: '6. I’m constantly watching my weight',
            text: CX_HF_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'CX_HF_6_SA1',
                legendText: 'Count in SA1 Area',
                click: COMM_HFACT_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_6}</h4><i>Click to view full area details</i>',
              },
              {
                name: 'SA2',
                id: 'CX_HF_6_SA2',
                legendText: 'Count in SA2 Area',
                click: COMM_HFACT_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_6}</h4><i>Click to view full area details</i>',
              },
              {
                id: 'CX_HF_6_LGA',
                name: 'LGA',
                legendText: 'Count in LGA Area',
                click: COMM_HFACT_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_6}</h4><i>Click to view full area details</i>',
              },
            ]
          },//END OF SECTION
         {
            heading: '7. Played a sport',
            text: CX_HF_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'CX_HF_7_SA1',
                legendText: 'Count in SA1 Area',
                click: COMM_HFACT_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_7}</h4><i>Click to view full area details</i>',
              },
              {
                name: 'SA2',
                id: 'CX_HF_7_SA2',
                legendText: 'Count in SA2 Area',
                click: COMM_HFACT_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_7}</h4><i>Click to view full area details</i>',
              },
              {
                id: 'CX_HF_7_LGA',
                name: 'LGA',
                legendText: 'Count in LGA Area',
                click: COMM_HFACT_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_7}</h4><i>Click to view full area details</i>',
              },
            ]
          },//END OF SECTION
         {
            heading: '8. Did some formal exercise (e.g. gym, aerobics, running, cycling, etc.)',
            text: CX_HF_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'CX_HF_8_SA1',
                legendText: 'Count in SA1 Area',
                click: COMM_HFACT_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_8}</h4><i>Click to view full area details</i>',
              },
              {
                name: 'SA2',
                id: 'CX_HF_8_SA2',
                legendText: 'Count in SA2 Area',
                click: COMM_HFACT_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_8}</h4><i>Click to view full area details</i>',
              },
              {
                id: 'CX_HF_8_LGA',
                name: 'LGA',
                legendText: 'Count in LGA Area',
                click: COMM_HFACT_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_8}</h4><i>Click to view full area details</i>',
              },
            ]
          },//END OF SECTION
          {
            heading: 'LAYER DETAILS',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: COMM_HFACT_DETAILS,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
      {
        name: 'DEMOGRAPHICS',
        id: 'PART-D-SECTION-3',
        image: PRIMARY_MENU_IMAGE,
        summary: MODULE_SUMMARY,
        sections: [
          {
            heading: '1. NEED ASSISTANCE (DISABILITY)',
            text: CX_AXC_ASSIST_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'CX_AXC_ASSIST_SA1',
                legendText: 'Need Assistance Count in SA1 Area',
                hover: '<p>{AREA_NAME}<p><h4>{CX_AXC_ASSIST}</h4>',
              },
              {
                name: 'SA2',
                id: 'CX_AXC_ASSIST_SA2',
                legendText: 'Need Assistance Count in SA2 Area',
                hover: '<p>{AREA_NAME}<p><h4>{CX_AXC_ASSIST}</h4>',
              },
              {
                id: 'CX_AXC_ASSIST_LGA',
                name: 'LGA',
                legendText: 'Need Assistance Count in LGA Area',
                hover: '<p>{AREA_NAME}<p><h4>{CX_AXC_ASSIST}</h4>',
              },
            ]
          },//END OF SECTION
          {
            heading: '2. AXC RISK OF INACTIVITY',
            text: CX_AXC_ROI_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'CX_INACTIVITY_SA1',
                legendText: 'Risk of Inactivity Score in SA1 Area',
                hover: '<p>{AREA_NAME}<p><h4>{CX_AXC_ROI}</h4>',
              },
            ]
          },//END OF SECTION
          {
            heading: 'LAYER DETAILS',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: DEMOGR_AUS_DETAILS,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
      {
        name: 'AREA INFO',
        id: 'PART-D-SECTION-4',
        image: PRIMARY_MENU_IMAGE,
        summary: MODULE_SUMMARY,
        sections: [
          {
            heading: '1. AREA BOUNDARIES',
            text: CX_BOUNDARY_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'CX_BOUNDARY_SA2',
                legendText: 'SA2 Boundaries',
              },
              {
                name: 'LGA',
                id: 'CX_BOUNDARY_LGA',
                legendText: 'LGA Boundaries',
              },
              {
                id: 'CX_BOUNDARY_REG',
                name: 'GOV REGION',
                legendText: 'Region Boundaries',
              },
            ]
          },//END OF SECTION
          {
            heading: '2. AREA LABELS',
            text: CX_LABEL_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'CX_LABEL_SA2',
                legendText: 'SA2 Area Labels',
              },
              {
                name: 'LGA',
                id: 'CX_LABEL_LGA',
                legendText: 'LGA Area Labels',
              },
              {
                id: 'CX_LABEL_REG',
                name: 'GOV REGION',
                legendText: 'Region Labels',
              },
            ]
          },//END OF SECTION
          {
            heading: '3. SATELLITE VIEW',
            text: '',
            icon: AREA_ICON,
            layers: [
              {
                name: 'SATELLITE',
                id: 'mapbox-satellite',
                legendText: 'Satellite View',
              },
            ]
          },//END OF SECTION
          {
            heading: 'LAYER DETAILS',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: COMM_INFO_AUS_DETAILS,
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
