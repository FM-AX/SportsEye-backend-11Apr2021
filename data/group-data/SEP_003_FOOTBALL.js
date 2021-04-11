/////////////////////////////////////////////////////////////////////////////////////

// SEp V2.0
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
const ACCOUNT_NAME = "FOOTBALL NSW"

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
//activexchange-prod
const MAPBOX_APIKEY = "pk.eyJ1IjoiYWN0aXZleGNoYW5nZS1wcm9kIiwiYSI6ImNrM2FpcjZseDBlZDMzbXAxdHRsNjgzcjEifQ.zETmZUB8EKAwbHG1SegL1w"
// SEP-003-v1.2-FOOTBALL-11NOV19
const MAPBOX_STYLE = "mapbox://styles/activexchange-prod/ck3ajueif0zq51cpliziw1ogy" 


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

const CLICK_ENGAGEMENT_AREA_PARTICIPATION = require('../group-references/SEP_003_FOOTBALLNSW/CLICK_ENGAGEMENT_AREA_PARTICIPATION')
const CLICK_ENGAGEMENT_AREA_OTHER = require('../group-references/SEP_003_FOOTBALLNSW/CLICK_ENGAGEMENT_AREA_OTHER')
const CLICK_RESOURCES_PROVISION = require('../group-references/SEP_003_FOOTBALLNSW/CLICK_RESOURCES_PROVISION')
const CLICK_RESOURCES_SITE = require('../group-references/SEP_003_FOOTBALLNSW/CLICK_RESOURCES_SITE')


const module_priorities_site_click = `
<h4>Priority Project</h4>
<p>Site Name: <b>{site_name}</b></p>
<p>Site Address: <b>{site_address}</b></p>
<p>Primary Club: <b>{primary_club}</b></p>
<p>Proposed Facilities: <b>{proposed_facilities}</b></p>
<p>Project Desciption: <b>{project_description}</b></p>
<p>Estimated Cost: <b>{estimated_cost}</b></p>
<p>Funding: <b>{funding}</b></p>
<p>Project Rationale: <b>{project_rationale}</b></p>
<p>Expected Outputs: <b>{expected_outputs}</b></p>
`


// 2. DASHBOARDS

const GAP_DASHBOARD = require('../group-references/SEP_003_FOOTBALLNSW/GAP_DASHBOARD')

const module_stateofsport_dashboard_summary = `
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/1fkjllOAFlSuvsE-z5DbK3ckImN7wybBP/page/vwyq" frameborder="0" style="border:0" allowfullscreen></iframe>
`

const module_stateofsport_dashboard_sportsummary = `
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/1sPwsFRdByOh0s2oJvvHS4s1haek2nZ8y/page/bTLpB" frameborder="0" style="border:0" allowfullscreen></iframe>
`



const module_engagement_dashboard_engageprovision = `
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/1G2lQOG_3KvnqpJ79iy9LZoozUwD_XQNM/page/jRQu" frameborder="0" style="border:0" allowfullscreen></iframe>
`

const module_engagement_dashboard_sportperf = `
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/1Ux7U_gGG9SYTGqJBuyIXSSFT_yLSlBxC/page/mZ1r" frameborder="0" style="border:0" allowfullscreen></iframe>
`

const module_resource_dashboard_provision = `
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/1v86PVyCuF_Hnp_speWGtdjk0pBa3GVn_/page/c5Hs" frameborder="0" style="border:0" allowfullscreen></iframe>
`

const module_value_dashboard_socialvalue = `
<h1>2. SOCIAL VALUE DASHBOARD</h1>
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/1ho3-lpWPqcGoyzjGPGzfUNVWJDEkSc4I/page/gCnRB" frameborder="0" style="border:0" allowfullscreen></iframe>
`

const module_value_dashboard_wellbeing = `
<h1>3. WELLBEING DASHBOARD</h1>
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/1mxk3Bhx9SoSbZfi91rmpBBpmtskpYyVF/page/GVEnB" frameborder="0" style="border:0" allowfullscreen></iframe>
`

const module_value_dashboard_sponsorship = `
<h1>4. SPONSORSHIP DASHBOARD</h1>
`



// 3. LAYER TEXT
const CX_AREA_CUST_TEXT = require('../group-references/SEP_003_FOOTBALLNSW/CX_AREA_CUST_TEXT')

const MODULE_SUMMARY = `
<p>Select layers below to display on the map.</p>
`

const MODULE_SUMMARY_DEMO = `
<p>Select layers below to display on the map.</p>
<p><b>NOTE: Data for demonstration purposes only.</b></p>
`


const SITE_OVERVIEW_TEXT = `
<p>All Football NSW Sites</p>
`

const DEMO_TEXT = `
<p><b>NOTE: Data for demonstration purposes only.</b></p>
`
// PERFORMANCE & BENCHMARKING


// A. ENGAGEMENT
const SITE_MEM_ALL_TEXT = `
<b>Colour: Category</b><br>
Green: Members at Site<br>Blue: No Members at Site<br><br>
<b>Size: Total Participants</b>
`
const AREA_MEM_ALL_TEXT = `
<b>Colour: Total Participants (winter only)</b>
`
const AREA_MEM_CNV_ALL_TEXT = `
<b>Colour: Rate</b><br>
Total Participants / Total Population
`
const AREA_MEM_GRPB_TEXT = `
<b>Colour: Alternative Season Participants</b>
`
const AREA_MEM_CHNG_ALL_TEXT = `
<b>Colour: Change in Participants</b><br>
Difference between 2018 Participants and 2014 Participants
`
const AREA_DEM_ALL_TEXT = `
<b>Colour: Total Demand (winter)</b>
`

const AREA_DEM_CNV_ALL_TEXT = `
<b>Colour: Conversion</b><br>
Total Participants / Total (winter) Demand
`
const AREA_DEM_DIF_TEXT = `
<b>Colour: Difference in Demand</b><br>
Difference between Demand and Participants 
`

// B. RESOURCES
const SITE_DETAILS_TEXT = `
<b>Colour: Hierachy</b><br>
Green: Tier 1 (NPL)<br>
Blue: Tier 2 (Community Football Venue)<br>
Gold: Training area only<br>
Black: Potential future venue<br>(not currently in use for Football)<br><br>
<b>Size: FSE Capacity Playing Fields</b>
`
const AREA_CATCHMENT_DT_TEXT = `
<b>Colour: Drive Time to Closest Facility</b><br>
Total 22 Minute Catchment from all Facilities<br><br>
<b>View: SA1 Area</b>
`
const AREA_FCLT_COUNT_TEXT = `
<b>Colour: Total FSE Capacity of Playing Fields in Area.</b><br>
`
const AREA_PROV_MEM_TEXT = `
<b>Colour: Ratio of Participants to Playing Fields</b><br>
Total Participants / Playing Field FSE Capacity
`
const AREA_PROV_DEM_TEXT = `
<b>Colour: Ratio of Demand to Playing Fields</b><br>
Total Demand / Playing Field FSE Capacity
`
const AREA_PROV_POP_TEXT = `
<b>Colour: Ratio of Population to Playing Fields</b><br>
Total Population / Playing Field FSE Capacity
`

const AREA_PROV_DEM_SUPPLY_DIF_TEXT = `
<b>Colour: Difference between Capacity and Demand</b><br>
FSE Capacity in area minus FSE Demand
`

const SITE_EVENTS_TEXT = `
<b>Colour: Category</b><br>
<b>Size: Number of Events at Site</b>
`



// C: GROWTH
const AREA_DEM_FUT_TEXT = `
<b>Colour: Total Future Demand</b>
`

const AREA_DEM_FUT_CHNG_TEXT = `
<b>Colour: Change in Demand</b><br>
Difference between Future Demand and Existing Demand 
`

const SITE_TEMP_OPPORTUNITIES_TEXT = `
<b>Colour: Category</b><br>
Purple: Ancillary Upgrade<br>Pink: Facility Upgrade<br>Green: New Grass<br>Blue: New Synthetic
`
const SITE_POTENTIAL_TEXT = `
<p>Potential Sites</p>
`
const SITE_UNUSED_TEXT = `
<b>Colour: Category</b><br>
Green: Difference greater than 0<br>Blue: Difference less than or equal to 0<br><br>
<b>Size: Difference</b><br>
Difference between 'raw' number of fields and the FSE capacity.
`

const AREA_GAP_TYPEA = `
<b>Colour: Modelled Gap</b><br>
Based on Playing Fields
`



const AREA_GAP_SA1 = `
<b>Colour: Modelled Gap</b><br>
<b>View: SA1 Area</b>
`

// D: PRIORITIES
const AREA_PRIORITIES_TEXT = `
<b>Colour: Project Type</b><br>
Blue: New Type A<br>Green: New Type B<br>Light Blue: Upgrade Type B<br>Pink: Upgrade Other
`


// 4. DOCUMENTS

const DATA_SCORECARD = require('../group-references/SEP_003_FOOTBALLNSW/DATA_SCORECARD')


const module_engagement_document_layerdetails = `
<iframe width="700" height="500" src="https://docs.google.com/document/d/e/2PACX-1vSJGjX6lk1a0ZQ4rAsvFn3wNmX1ROJJXSCn4MqgjxQv8Bto_NuQkhB3THSwJ-gzGQjU3yOnymAZEdZo/pub?embedded=true" frameborder="0" style="border:0" allowfullscreen></iframe>
`
const module_resources_document_layerdetails = `
<iframe width="700" height="500" src="https://docs.google.com/document/d/e/2PACX-1vQjKXzXgomcDX2FhYGq_HvZuwI2vkkRkoBlPSkEptI6pOLuyDyt4W-bOFfK66IesIbI_geTPFfjM781/pub?embedded=true" frameborder="0" style="border:0" allowfullscreen></iframe>
`
const module_value_document_layerdetails = `
<iframe width="700" height="500" src="https://docs.google.com/document/d/e/2PACX-1vRqLHYEljiPKHKUt-TW9E0bt--kKEHDmOk33QUp06Z4qQf6-f8R-2jf1RwmmBhz9gDIImhg5Vk-c0vk/pub?embedded=true" frameborder="0" style="border:0" allowfullscreen></iframe>
`
const module_growth_document_layerdetails = `
<iframe width="700" height="500" src="https://docs.google.com/document/d/e/2PACX-1vQ_6NanxzHDj_RM_tzYOpL3yBW9CbQfZLL70UWSNzqW5X0QW9s8VFOR_8epZmI-RRGCX_EXDRGJmZGl/pub?embedded=true" frameborder="0" style="border:0" allowfullscreen></iframe>
`
const module_investment_document_layerdetails = `
<iframe width="700" height="500" src="https://docs.google.com/document/d/e/2PACX-1vSsUNDG8ebkY-VY9u8DzFvpEqOrfdRQlI3-XFFiSp3pP81kUxcbNmAcQXx32hTZiv6RyyC-G_O8ZPfL/pub?embedded=true" frameborder="0" style="border:0" allowfullscreen></iframe>
`
const module_piorities_document_layerdetails = `
<iframe width="700" height="500" src="https://docs.google.com/document/d/e/2PACX-1vSbCxBR3nRoA89tHL70bVPpoJgihtNRTn5oXTfTeFkg_I_oQwJ1B_H_tSe3vOtct3NsWwAdhgm68bLj/pub?embedded=true" frameborder="0" style="border:0" allowfullscreen></iframe>
`
const module_workforce_document_layerdetails = `
<iframe width="700" height="500" src="https://docs.google.com/document/d/e/2PACX-1vTghTFCspsnpfZFFjHgXqRw7qhP9ReuwtgeDNKUf_tOGZnYXyAWv_dp3Lvqk7K5GH35-2pKVLB2fozP/pub?embedded=true" frameborder="0" style="border:0" allowfullscreen></iframe>
`
const module_usertips_document_layerdetails = `
<iframe width="700" height="500" src="https://docs.google.com/document/d/e/2PACX-1vQphkVKVg2ByvbTLMjuq4uelVtf3O_wD_Vxy8zs1vzEIdi2__WeqyMwLdIpI670kQjUNFNvx5oH4YFg/pub?embedded=true" frameborder="0" style="border:0" allowfullscreen></iframe>
`


/////////////////////////////////////////////////////////////////////////////////////

// PART C: PRODUCT SPECIFIC REFERENCES

/////////////////////////////////////////////////////////////////////////////////////

// 1. POPUPS
const AREA_FUTURE_DEM_HOVER = require('../group-references/SEP_PRODUCTION/POPUPS/AREA_FUTURE_DEM_HOVER')


// 2. DASHBOARDS

// 3. LAYER TEXT
const CX_DEPRIVATION_AUS_TEXT = require('../group-references/SEP_PRODUCTION/LAYER_TEXT/CX_DEPRIVATION_AUS_TEXT')
const CX_AXC_ROI_TEXT = require('../group-references/SEP_PRODUCTION/LAYER_TEXT/CX_AXC_ROI_TEXT')

const CX_AREA_SA2_TEXT = require('../group-references/SEP_PRODUCTION/LAYER_TEXT/CX_AREA_SA2_TEXT')
const CX_AREA_LGA_TEXT = require('../group-references/SEP_PRODUCTION/LAYER_TEXT/CX_AREA_LGA_TEXT')
const CX_AREA_REG_TEXT = require('../group-references/SEP_PRODUCTION/LAYER_TEXT/CX_AREA_REG_TEXT')
const CX_AREA_CED_TEXT = require('../group-references/SEP_PRODUCTION/LAYER_TEXT/CX_AREA_CED_TEXT')
const CX_AREA_SED_TEXT = require('../group-references/SEP_PRODUCTION/LAYER_TEXT/CX_AREA_SED_TEXT')
const CX_AREA_SATELITE_TEXT = require('../group-references/SEP_PRODUCTION/LAYER_TEXT/CX_AREA_SATELITE_TEXT')


// 4. DOCUMENTS
const DEMOGR_AUS_DETAILS = require('../group-references/SEP_PRODUCTION/LAYER_DETAILS/DEMOGR_AUS_DETAILS')


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
    id: 'MODULE1',
    name: 'PERFORMANCE & BENCHMARKING',
    collapsible: true,
    type: 'CODE_VIEWER',
    CODES: [
      {
        name: 'STATE OF FOOTBALL IN NSW',
        id: '1A_SUMMARY',
        image: PRIMARY_MENU_IMAGE,
        summary: MODULE_SUMMARY,
        sections: [
          {
            heading: 'SUMMARY REPORT',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_stateofsport_dashboard_summary,
          },//END OF SECTION
          {
            heading: 'OVERVIEW: SITES',
            text: SITE_OVERVIEW_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'SITE_OVERVIEW',
                legendText: 'Football NSW Sites',
                hover: '<h4>{SITE_NAME}</h4>',
              },
            ]
          },//END OF SECTION
          {
            heading: 'OVERVIEW: DEMAND CONVERSION',
            text: AREA_DEM_CNV_ALL_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                id: 'AREA_DEM_CNV_ALL_SA2',
                name: 'SA2',
                legendText: 'Total Demand Conversion (%) in SA2 Area',
                hover: '<h4>{AREA_NAME}</h4><p>Total Demand Conversion:</p><h4>{AREA_DEM_CNV_ALL}%</h4>',
              },
            ]
          },//END OF SECTION
          {
            heading: 'DATA QUALITY SCORECARD',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: DATA_SCORECARD,
          },//END OF SECTION
          {
            heading: 'SPORT SUMMARY',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_stateofsport_dashboard_sportsummary,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
      {
        name: 'ENGAGEMENT',
        id: '1B_ENGAGEMENT',
        image: PRIMARY_MENU_IMAGE,
        summary: MODULE_SUMMARY,
        sections: [
          {
            heading: '1A. PARTICIPATION (SITE)',
            text: SITE_MEM_ALL_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'SITE_MEM_ALL',
                legendText: 'Total Participants at Site (Colour: Category)',
                hover: '<h4>{SITE_NAME}</h4><p>Participants:</p><h4>{SITE_MEM_ALL}</h4><p>Club Participants:</p><h4>{SITE_CLUBS_PRT}</h4>',
              },
            ]
          },//END OF SECTION
          {
            heading: '1B. PARTICIPATION',
            text: AREA_MEM_ALL_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                id: 'AREA_MEM_ALL_CUST',
                name: 'FB REGION',
                legendText: 'Total Participants in Football Region',
                hover: '<h4>{AREA_NAME}</h4><p>Total Participants:</p><h4>{AREA_MEM_ALL}</h4><i>Click to view full site details</i>',
                click: CLICK_ENGAGEMENT_AREA_PARTICIPATION,
              },
              {
                id: 'AREA_MEM_ALL_REG',
                name: 'GOV REGION',
                legendText: 'Total Participants in Govt. Region',
                hover: '<h4>{AREA_NAME}</h4><p>Total Participants:</p><h4>{AREA_MEM_ALL}</h4><i>Click to view full site details</i>',
                click: CLICK_ENGAGEMENT_AREA_PARTICIPATION,
              },
              {
                id: 'AREA_MEM_ALL_LGA',
                name: 'LGA',
                legendText: 'Total Participants in LGA Area',
                hover: '<h4>{AREA_NAME}</h4><p>Total Participants:</p><h4>{AREA_MEM_ALL}</h4><i>Click to view full site details</i>',
                click: CLICK_ENGAGEMENT_AREA_PARTICIPATION,
              },
              {
                id: 'AREA_MEM_ALL_SA2',
                name: 'SA2',
                legendText: 'Total Participants in SA2 Area',
                hover: '<h4>{AREA_NAME}</h4><p>Total Participants:</p><h4>{AREA_MEM_ALL}</h4><i>Click to view full site details</i>',
                click: CLICK_ENGAGEMENT_AREA_PARTICIPATION,
              },
            ]
          },//END OF SECTION
          {
            heading: '1C. PARTICIPATION RATE',
            text: AREA_MEM_CNV_ALL_TEXT,
            icon: AREA_ICON,
            layers: [
                {
                id: 'AREA_MEM_CNV_ALL_CUST',
                name: 'FB REGION',
                legendText: 'Participation Rate in Football Region',
                hover: '<p>{AREA_NAME}<p><h4>{AREA_MEM_CNV_ALL}%</h4><i>Click to view full site details</i>',
                click: CLICK_ENGAGEMENT_AREA_PARTICIPATION,
              },
              {
                id: 'AREA_MEM_CNV_ALL_REG',
                name: 'GOV REGION',
                legendText: 'Participation Rate in Govt. Region',
                hover: '<p>{AREA_NAME}<p><h4>{AREA_MEM_CNV_ALL}%</h4><i>Click to view full site details</i>',
                click: CLICK_ENGAGEMENT_AREA_PARTICIPATION,
              },
              {
                id: 'AREA_MEM_CNV_ALL_LGA',
                name: 'LGA',
                legendText: 'Participation Rate in LGA Area',
                hover: '<p>{AREA_NAME}<p><h4>{AREA_MEM_CNV_ALL}%</h4><i>Click to view full site details</i>',
                click: CLICK_ENGAGEMENT_AREA_PARTICIPATION,
              },
              {
                id: 'AREA_MEM_CNV_ALL_SA2',
                name: 'SA2',
                legendText: 'Participation Rate in SA2 Area',
                hover: '<p>{AREA_NAME}<p><h4>{AREA_MEM_CNV_ALL}%</h4><i>Click to view full site details</i>',
                click: CLICK_ENGAGEMENT_AREA_PARTICIPATION,
              },
            ]
          },//END OF SECTION
          {
            heading: '1D. PARTICIPATION CHANGE',
            text: AREA_MEM_CHNG_ALL_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                id: 'AREA_MEM_CHNG_ALL_CUST',
                name: 'FB REGION',
                legendText: 'Participation Change in Football Region',
                hover: '<p>{AREA_NAME}<p><h4>{AREA_MEM_CHNG_ALL}</h4><i>Click to view full site details</i>',
                click: CLICK_ENGAGEMENT_AREA_PARTICIPATION,
              },
              {
                id: 'AREA_MEM_CHNG_ALL_REG',
                name: 'GOV REGION',
                legendText: 'Participation Change in Govt. Region',
                hover: '<p>{AREA_NAME}<p><h4>{AREA_MEM_CHNG_ALL}</h4><i>Click to view full site details</i>',
                click: CLICK_ENGAGEMENT_AREA_PARTICIPATION,
              },
              {
                id: 'AREA_MEM_CHNG_ALL_LGA',
                name: 'LGA',
                legendText: 'Participation Change in LGA Area',
                hover: '<p>{AREA_NAME}<p><h4>{AREA_MEM_CHNG_ALL}</h4><i>Click to view full site details</i>',
                click: CLICK_ENGAGEMENT_AREA_PARTICIPATION,
              },
              {
                id: 'AREA_MEM_CHNG_ALL_SA2',
                name: 'SA2',
                legendText: 'Participation Change in SA2 Area',
                hover: '<p>{AREA_NAME}<p><h4>{AREA_MEM_CHNG_ALL}</h4><i>Click to view full site details</i>',
                click: CLICK_ENGAGEMENT_AREA_PARTICIPATION,
              },
            ]
          },//END OF SECTION
          {
            heading: '1E. ALTERNATIVE SEASON PARTICIPATION',
            text: AREA_MEM_GRPB_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                id: 'AREA_MEM_GRPB_CUST',
                name: 'FB REGION',
                legendText: 'Alternative Season Participants in Football Region',
                hover: '<h4>{AREA_NAME}</h4><p>Participants:</p><h4>{AREA_MEM_GRPB}</h4>',
              },
              {
                id: 'AREA_MEM_GRPB_REG',
                name: 'GOV REGION',
                legendText: 'Alternative Season Participants in Govt. Region',
                hover: '<h4>{AREA_NAME}</h4><p>Participants:</p><h4>{AREA_MEM_GRPB}</h4>',
              },
              {
                id: 'AREA_MEM_GRPB_LGA',
                name: 'LGA',
                legendText: 'Alternative Season Participants in LGA Area',
                hover: '<h4>{AREA_NAME}</h4><p>Participants:</p><h4>{AREA_MEM_GRPB}</h4>',
              },
              {
                id: 'AREA_MEM_GRPB_SA2',
                name: 'SA2',
                legendText: 'Alternative Season Participants in SA2 Area',
                hover: '<h4>{AREA_NAME}</h4><p>Participants:</p><h4>{AREA_MEM_GRPB}</h4>',
              },
            ]
          },//END OF SECTION
          {
            heading: '2A. DEMAND',
            text: AREA_DEM_ALL_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                id: 'AREA_DEM_ALL_CUST',
                name: 'FB REGION',
                legendText: 'Total Demand in Football Region',
                hover: '<h4>{AREA_NAME}</h4><p>Total Demand:</p><h4>{AREA_DEM_ALL}</h4><i>Click to view full site details</i>',
                click: CLICK_ENGAGEMENT_AREA_OTHER,
              },
              {
                id: 'AREA_DEM_ALL_REG',
                name: 'GOV REGION',
                legendText: 'Total Demand in Govt. Region',
                hover: '<h4>{AREA_NAME}</h4><p>Total Demand:</p><h4>{AREA_DEM_ALL}</h4><i>Click to view full site details</i>',
                click: CLICK_ENGAGEMENT_AREA_OTHER,
              },
              {
                id: 'AREA_DEM_ALL_LGA',
                name: 'LGA',
                legendText: 'Total Demand in LGA Area',
                hover: '<h4>{AREA_NAME}</h4><p>Total Demand:</p><h4>{AREA_DEM_ALL}</h4><i>Click to view full site details</i>',
                click: CLICK_ENGAGEMENT_AREA_OTHER,
              },
              {
                id: 'AREA_DEM_ALL_SA2',
                name: 'SA2',
                legendText: 'Total Demand in SA2 Area',
                hover: '<h4>{AREA_NAME}</h4><p>Total Demand:</p><h4>{AREA_DEM_ALL}</h4><i>Click to view full site details</i>',
                click: CLICK_ENGAGEMENT_AREA_OTHER,
              },
            ]
          },//END OF SECTION
          {
            heading: '2B. DEMAND CONVERSION',
            text: AREA_DEM_CNV_ALL_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                id: 'AREA_DEM_CNV_ALL_CUST',
                name: 'FB REGION',
                legendText: 'Total Demand Conversion (%) in Football Region',
                hover: '<h4>{AREA_NAME}</h4><p>Total Demand Conversion:</p><h4>{AREA_DEM_CNV_ALL}%</h4><i>Click to view full site details</i>',
                click: CLICK_ENGAGEMENT_AREA_OTHER,
              },
              {
                id: 'AREA_DEM_CNV_ALL_REG',
                name: 'GOV REGION',
                legendText: 'Total Demand Conversion (%) in Govt. Region',
                hover: '<h4>{AREA_NAME}</h4><p>Total Demand Conversion:</p><h4>{AREA_DEM_CNV_ALL}%</h4><i>Click to view full site details</i>',
                click: CLICK_ENGAGEMENT_AREA_OTHER,
              },
              {
                id: 'AREA_DEM_CNV_ALL_LGA',
                name: 'LGA',
                legendText: 'Total Demand Conversion (%) in LGA Area',
                hover: '<h4>{AREA_NAME}</h4><p>Total Demand Conversion:</p><h4>{AREA_DEM_CNV_ALL}%</h4><i>Click to view full site details</i>',
                click: CLICK_ENGAGEMENT_AREA_OTHER,
              },
              {
                id: 'AREA_DEM_CNV_ALL_SA2',
                name: 'SA2',
                legendText: 'Total Demand Conversion (%) in SA2 Area',
                hover: '<h4>{AREA_NAME}</h4><p>Total Demand Conversion:</p><h4>{AREA_DEM_CNV_ALL}%</h4><i>Click to view full site details</i>',
                click: CLICK_ENGAGEMENT_AREA_OTHER,
              },
            ]
          },//END OF SECTION
          {
            heading: '2C. DEMAND DIFFERENCE',
            text: AREA_DEM_DIF_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                id: 'AREA_DEM_DIF_ALL_CUST',
                name: 'FB REGION',
                legendText: 'Total Difference between Demand and Participation in Football Region',
                hover: '<h4>{AREA_NAME}</h4><p>Demand Difference:</p><h4>{AREA_DEM_DIF_ALL}</h4><i>Click to view full site details</i>',
                click: CLICK_ENGAGEMENT_AREA_OTHER,
              },
              {
                id: 'AREA_DEM_DIF_ALL_REG',
                name: 'GOV REGION',
                legendText: 'Total Difference between Demand and Participation in Govt. Region',
                hover: '<h4>{AREA_NAME}</h4><p>Demand Difference:</p><h4>{AREA_DEM_DIF_ALL}</h4><i>Click to view full site details</i>',
                click: CLICK_ENGAGEMENT_AREA_OTHER,
              },
              {
                id: 'AREA_DEM_DIF_ALL_LGA',
                name: 'LGA',
                legendText: 'Total Difference between Demand and Participation in LGA Area',
                hover: '<h4>{AREA_NAME}</h4><p>Demand Difference:</p><h4>{AREA_DEM_DIF_ALL}</h4><i>Click to view full site details</i>',
                click: CLICK_ENGAGEMENT_AREA_OTHER,
              },
              {
                id: 'AREA_DEM_DIF_ALL_SA2',
                name: 'SA2',
                legendText: 'Total Difference between Demand and Participation in SA2 Area',
                hover: '<h4>{AREA_NAME}</h4><p>Demand Difference:</p><h4>{AREA_DEM_DIF_ALL}</h4><i>Click to view full site details</i>',
                click: CLICK_ENGAGEMENT_AREA_OTHER,
              },
            ]
          },//END OF SECTION
          {
            heading: 'ENGAGEMENT AND PROVISION DATA DASHBOARD',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_engagement_dashboard_engageprovision,
          },//END OF SECTION
          {
            heading: 'SPORT PERFORMANCE DASHBOARD',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_engagement_dashboard_sportperf,
          },//END OF SECTION
          {
            heading: 'LAYER DETAILS',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: module_engagement_document_layerdetails,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
      {
        name: 'RESOURCES',
        id: '1C_RESOURCES',
        image: PRIMARY_MENU_IMAGE,
        summary: MODULE_SUMMARY,
        sections: [
          {
            heading: '1A. FACILITY SUPPLY (SITE)',
            text: SITE_DETAILS_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'SITE_DETAILS',
                legendText: 'Site Type (Colour: Category)',
                hover: '<h4>{SITE_NAME}</h4><p>Capacity:</p><h4>{SITE_ASSET_FSE_CAPACITY}</h4><p>Hierachy:</p><h4>{SITE_HIERARCHY}</h4><i>Click to view full site details</i>',
                click: CLICK_RESOURCES_SITE,
              },
            ]
          },//END OF SECTION
          {
            heading: '1B. FACILITY SUPPLY (FOOTPRINT)',
            text: AREA_CATCHMENT_DT_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'AREA_CATCHMENT_DT',
                legendText: 'Drive Time to Closest Site',
                hover: '<h4>{AREA_NAME}</h4><p>MINUTES</p><h4>{DRIVE_TIME}</h4>',
              },
            ]
          },//END OF SECTION
          {
            heading: '1C. FACILITY SUPPLY (AREA)',
            text: AREA_FCLT_COUNT_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                id: 'AREA_FACL_COUNT_CUST',
                name: 'FB REGION',
                legendText: 'Total FSE Capacity of Playing Fields in Football Region',
                hover: '<h4>{AREA_NAME}</h4><p>Capacity:</p><h4>{AREA_FACL_ASSET_COUNT}</h4><p>Facilities:<p><h4>{AREA_FACL_COUNT}</h4>',
              },
              {
                id: 'AREA_FACL_COUNT_REG',
                name: 'GOV REGION',
                legendText: 'Total FSE Capacity of Playing Fields in Govt. Region',
                hover: '<h4>{AREA_NAME}</h4><p>Capacity:</p><h4>{AREA_FACL_ASSET_COUNT}</h4><p>Facilities:<p><h4>{AREA_FACL_COUNT}</h4>',
              },
              {
                id: 'AREA_FACL_COUNT_LGA',
                name: 'LGA',
                legendText: 'Total FSE Capacity of Playing Fields in LGA Area',
                hover: '<h4>{AREA_NAME}</h4><p>Capacity:</p><h4>{AREA_FACL_ASSET_COUNT}</h4><p>Facilities:<p><h4>{AREA_FACL_COUNT}</h4>',
              },
            ]
          },//END OF SECTION
          {
            heading: '2A. PROVISION RATIO: MEMBERS',
            text: AREA_PROV_MEM_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                id: 'AREA_PROV_MEM_CUST',
                name: 'FB REGION',
                legendText: 'Ratio of Members to FSE Capacity of Playing Fields in Football Region',
                hover: '<h4>{AREA_NAME}</h4><p>Ratio:</p><h4>{AREA_PROV_MEM}</h4><i>Click to view full area details</i>',
                click: CLICK_RESOURCES_PROVISION,
              },
              {
                id: 'AREA_PROV_MEM_REG',
                name: 'GOV REGION',
                legendText: 'Ratio of Members to FSE Capacity of Playing Fields in Govt. Region',
                hover: '<h4>{AREA_NAME}</h4><p>Ratio:</p><h4>{AREA_PROV_MEM}</h4><i>Click to view full area details</i>',
                click: CLICK_RESOURCES_PROVISION,
              },
              {
                id: 'AREA_PROV_MEM_LGA',
                name: 'LGA',
                legendText: 'Ratio of Members to FSE Capacity of Playing Fields in LGA Area',
                hover: '<h4>{AREA_NAME}</h4><p>Ratio:</p><h4>{AREA_PROV_MEM}</h4><i>Click to view full area details</i>',
                click: CLICK_RESOURCES_PROVISION,
              },
            ]
          },//END OF SECTION
          {
            heading: '2B. PROVISION RATIO: DEMAND',
            text: AREA_PROV_DEM_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                id: 'AREA_PROV_DEM_CUST',
                name: 'FB REGION',
                legendText: 'Ratio of Demand to FSE Capacity of Playing Fields in Football Region',
                hover: '<h4>{AREA_NAME}</h4><p>Ratio:</p><h4>{AREA_PROV_DEM}</h4><i>Click to view full area details</i>',
                click: CLICK_RESOURCES_PROVISION,
              },
              {
                id: 'AREA_PROV_DEM_REG',
                name: 'GOV REGION',
                legendText: 'Ratio of Demand to FSE Capacity of Playing Fields in Govt. Region',
                hover: '<h4>{AREA_NAME}</h4><p>Ratio:</p><h4>{AREA_PROV_DEM}</h4><i>Click to view full area details</i>',
                click: CLICK_RESOURCES_PROVISION,
              },
              {
                id: 'AREA_PROV_DEM_LGA',
                name: 'LGA',
                legendText: 'Ratio of Demand to FSE Capacity of Playing Fields in LGA Area',
                hover: '<h4>{AREA_NAME}</h4><p>Ratio:</p><h4>{AREA_PROV_DEM}</h4><i>Click to view full area details</i>',
                click: CLICK_RESOURCES_PROVISION,
              },
            ]
          },//END OF SECTION
          {
            heading: '2C. PROVISION RATIO: POPULATION',
            text: AREA_PROV_POP_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                id: 'AREA_PROV_POP_CUST',
                name: 'FB REGION',
                legendText: 'Ratio of Population to FSE Capacity of Playing Fields in Football Region',
                hover: '<h4>{AREA_NAME}</h4><p>Ratio:</p><h4>{AREA_PROV_POP}</h4><i>Click to view full area details</i>',
                click: CLICK_RESOURCES_PROVISION,
              },
              {
                id: 'AREA_PROV_POP_REG',
                name: 'GOV REGION',
                legendText: 'Ratio of Population to FSE Capacity of Playing Fields in Govt. Region',
                hover: '<h4>{AREA_NAME}</h4><p>Ratio:</p><h4>{AREA_PROV_POP}</h4><i>Click to view full area details</i>',
                click: CLICK_RESOURCES_PROVISION,
              },
              {
                id: 'AREA_PROV_POP_LGA',
                name: 'LGA',
                legendText: 'Ratio of Population to FSE Capacity of Playing Fields in LGA Area',
                hover: '<h4>{AREA_NAME}</h4><p>Ratio:</p><h4>{AREA_PROV_POP}</h4><i>Click to view full area details</i>',
                click: CLICK_RESOURCES_PROVISION,
              },
            ]
          },//END OF SECTION
          {
            heading: '3. DEMAND v.s SUPPLY MODEL',
            text: AREA_PROV_DEM_SUPPLY_DIF_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                id: 'AREA_PROV_DEM_DIF_ALL_CUST',
                name: 'FB REGION',
                legendText: 'Difference between Capacity and Demand in Football Region',
                hover: '<h4>{AREA_NAME}</h4><p>Difference:</p><h4>{AREA_PROV_DEM_DIF_ALL}</h4><p>Capacity:</p><h4>{AREA_FACL_ASSET_COUNT}</h4><p>Capacity Demand:</p><h4>{AREA_PROV_DEM_ALL}</h4>',
              },
              {
                id: 'AREA_PROV_DEM_DIF_ALL_REG',
                name: 'GOV REGION',
                legendText: 'Difference between Capacity and Demand in Govt. Region',
                hover: '<h4>{AREA_NAME}</h4><p>Difference:</p><h4>{AREA_PROV_DEM_DIF_ALL}</h4><p>Capacity:</p><h4>{AREA_FACL_ASSET_COUNT}</h4><p>Capacity Demand:</p><h4>{AREA_PROV_DEM_ALL}</h4>',
              },
              {
                id: 'AREA_PROV_DEM_DIF_ALL_LGA',
                name: 'LGA',
                legendText: 'Difference between Capacity and Demand in LGA Area',
                hover: '<h4>{AREA_NAME}</h4><p>Difference:</p><h4>{AREA_PROV_DEM_DIF_ALL}</h4><p>Capacity:</p><h4>{AREA_FACL_ASSET_COUNT}</h4><p>Capacity Demand:</p><h4>{AREA_PROV_DEM_ALL}</h4>',
              },
              {
                id: 'AREA_PROV_DEM_DIF_ALL_SA2',
                name: 'SA2',
                legendText: 'Difference between Capacity and Demand in SA2 Area',
                hover: '<h4>{AREA_NAME}</h4><p>Difference:</p><h4>{AREA_PROV_DEM_DIF_ALL}</h4><p>Capacity:</p><h4>{AREA_FACL_ASSET_COUNT}</h4><p>Capacity Demand:</p><h4>{AREA_PROV_DEM_ALL}</h4>',
              },
            ]
          },//END OF SECTION
          {
            heading: 'PROVISION DASHBOARD',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_resource_dashboard_provision,
          },//END OF SECTION
          {
            heading: 'LAYER DETAILS',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: module_resources_document_layerdetails,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
      {
        name: 'VALUE',
        id: '1D_VALUE',
        image: PRIMARY_MENU_IMAGE,
        summary: MODULE_SUMMARY_DEMO,
        sections: [
          {
            heading: '1. EVENTS',
            text: SITE_EVENTS_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'SITE_EVENTS',
                legendText: 'Count of Events at Site',
              },
            ]
          },//END OF SECTION
          {
            heading: '2. SOCIAL VALUE DASHBOARD',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_value_dashboard_socialvalue,
          },//END OF SECTION

          {
            heading: '3. WELLBEING DASHBOARD',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_value_dashboard_wellbeing,
          },//END OF SECTION
          {
            heading: '4. SPONSORSHIP DASHBOARD',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_value_dashboard_sponsorship,
          },//END OF SECTION
          {
            heading: 'LAYER DETAILS',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: module_value_document_layerdetails,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
    ]
  },//END OF MODULE
  {
    id: 'MODULE2',
    name: 'PLANNING FRAMEWORK',
    collapsible: true,
    type: 'CODE_VIEWER',
    CODES: [
      {
        name: 'ENVIRONMENTAL REVIEW',
        id: '2A_CONTEXT',
        image: PRIMARY_MENU_IMAGE,
        summary: MODULE_SUMMARY,
        sections: [
          {
            heading: '1. REPORT 1',
            text: '<span><a href="https://drive.google.com/file/d/1WOufDlLlMGjAN2udv83Q09O8P8NVJSO9/view?usp=sharing" target="_blank" style="text-decoration: underline !important;font-weight:bold;">View Report</a><span>',
            icon: DOCUMENT_ICON,
          },//END OF SECTION
          {
            heading: '2. REPORT 2',
            text: null,
            icon: DOCUMENT_ICON,
          },//END OF SECTION
          {
            heading: '3. REPORT 3',
            text: null,
            icon: DOCUMENT_ICON,
          },//END OF SECTION
          {
            heading: '4. REPORT 4',
            text: null,
            icon: DOCUMENT_ICON,
          },//END OF SECTION
          {
            heading: '5. STAKEHOLDER ENGAGEMENT',
            text: null,
            icon: DOCUMENT_ICON,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
      {
        name: 'STRATEGIC DIRECTION',
        id: '2B_VISION_DIRECTION',
        image: PRIMARY_MENU_IMAGE,
        summary: MODULE_SUMMARY,
        sections: [
          {
            heading: '1. REPORT 1',
            text: '<span><a href="https://drive.google.com/file/d/1WOufDlLlMGjAN2udv83Q09O8P8NVJSO9/view?usp=sharing" target="_blank" style="text-decoration: underline !important;font-weight:bold;">View Report</a><span>',
            icon: DOCUMENT_ICON,
          },//END OF SECTION
          {
            heading: '2. REPORT 2',
            text: null,
            icon: DOCUMENT_ICON,
          },//END OF SECTION
          {
            heading: '3. REPORT 3',
            text: null,
            icon: DOCUMENT_ICON,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
      {
        name: 'GROWTH PROFILE & OPPORTUNITY MODEL',
        id: '3A_GROWTH',
        image: PRIMARY_MENU_IMAGE,
        summary: MODULE_SUMMARY,
        sections: [
          {
            heading: '1A. FUTURE DEMAND',
            text: AREA_DEM_FUT_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                id: 'AREA_DEM_FUT_26_ALL_REG',
                name: 'GOV REGION',
                legendText: 'Future Demand in Govt. Region',
                hover: AREA_FUTURE_DEM_HOVER,
              },
              {
                id: 'AREA_DEM_FUT_26_ALL_LGA',
                name: 'LGA',
                legendText: 'Future Demand in LGA Area',
                hover: AREA_FUTURE_DEM_HOVER,
              },
            ]
          },//END OF SECTION
          {
            heading: '2A. CHANGE IN DEMAND - 2026',
            text: AREA_DEM_FUT_CHNG_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                id: 'AREA_DEM_FUT_26_CHNG_ALL_REG',
                name: 'GOV REGION',
                legendText: 'Change in Demand in Govt. Region',
                hover: AREA_FUTURE_DEM_HOVER,
              },
              {
                id: 'AREA_DEM_FUT_26_CHNG_ALL_LGA',
                name: 'LGA',
                legendText: 'Change in Demand in LGA Area',
                hover: AREA_FUTURE_DEM_HOVER,
              },
            ]
          },//END OF SECTION
          {
            heading: '3. PARTNER OPPORTUNITIES',
            text: SITE_TEMP_OPPORTUNITIES_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'SITE_GROWTH_PARTNERS',
                legendText: 'Site Partner Opportunities (Colour: Category)',
              },
            ]
          },//END OF SECTION
          {
            heading: '4. POTENTIAL SCHOOLS',
            text: SITE_POTENTIAL_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'SITE_GROWTH_SCHOOLS',
                legendText: 'Potential Schools',
                hover: '<h4>{SITE_NAME}</h4>',
              },
            ]
          },//END OF SECTION
          {
            // heading: '5. UNUSED',
            heading: '5. FIELDS V CAPACITY ANALYSIS',
            text: SITE_UNUSED_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'SITE_GROWTH_UNUSED',
                legendText: 'Site Capacity Difference (Colour: Category)',
                hover: '<h4>{SITE_NAME}</h4><p>Site Capacity Difference:</p><h4>{SITE_CAPACITY_DIF}</h4>',
              },
            ]
          },//END OF SECTION
          {
            heading: 'LAYER DETAILS',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: module_growth_document_layerdetails,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
      {
        name: 'FACILITIES INVESTMENT MODEL',
        id: '3B_FACILITIES',
        image: PRIMARY_MENU_IMAGE,
        summary: MODULE_SUMMARY,
        sections: [
          {
            heading: '1. GAP MODELLING - STANDARD 2026',
            text: AREA_GAP_TYPEA,
            icon: AREA_ICON,
            layers: [
              {
                id: 'GAP_TYPEA_26_REG',
                name: 'GOV REGION',
                legendText: '2026 Competition Gap in Govt. Region',
                hover: '<h4>{AREA_NAME}</h4><p>Standard Gap 2016:</p><h4>{GAP_TYPEA_16}</h4><p>Standard Gap 2026:</p><h4>{GAP_TYPEA_26}</h4><p>Standard Gap 2036:</p><h4>{GAP_TYPEA_36}</h4>',
                // click: LGAPOPUP,
              },
              {
                id: 'GAP_TYPEA_26_LGA',
                name: 'LGA',
                legendText: '2026 Competition Gap in LGA Area',
                hover: '<h4>{AREA_NAME}</h4><p>Standard Gap 2016:</p><h4>{GAP_TYPEA_16}</h4><p>Standard Gap 2026:</p><h4>{GAP_TYPEA_26}</h4><p>Standard Gap 2036:</p><h4>{GAP_TYPEA_36}</h4>',
                // click: LGAPOPUP,
              },
            ]
          },//END OF SECTION
          {
            heading: '2. GAP MODELLING LOCATION (SA1)',
            text: AREA_GAP_SA1,
            icon: AREA_ICON,
            layers: [
              {
                id: 'AREA_DEM_GAP_SA1',
                name: 'SA1',
                legendText: 'Gap in SA1 Area',
                hover: '<h4>{AREA_NAME}</h4><p>Gap:</p><h4>{AREA_DEM_GAP}</h4>',
              },
            ]
          },//END OF SECTION
          {
            heading: '3. GAP MODELLING DASHBOARD',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: GAP_DASHBOARD,
          },//END OF SECTION
          {
            heading: 'LAYER DETAILS',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: module_investment_document_layerdetails,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
    ]
  },//END OF MODULE
  {
    id: 'MODULE4',
    name: 'IMPLEMENTATION & RESOURCING STRATEGY',
    collapsible: true,
    type: 'CODE_VIEWER',
    CODES: [
      {
        name: 'FACILITY PRIORITIES',
        id: '4A_FACILITIES',
        image: PRIMARY_MENU_IMAGE,
        summary: MODULE_SUMMARY,
        sections: [
          {
            heading: '1. CAPACITY INCREASE PRIORITY AREAS',
            text: AREA_PRIORITIES_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'ALL',
                id: 'SITE_PRIORITY_2',
                legendText: 'Capacity Increase Priority Areas (Colour: Category)',
              },
            ]
          },//END OF SECTION
          {
            heading: '2. PRIORITY PROJECTS (SITES)',
            text: '',
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'SITE_PRIORITY_SITES',
                legendText: 'Priority Projects (Sites)',
                hover: '<p>Site:</p><h4>{site_name}</h4><p>Project Description:</p><p>{project_description}</p><i>Click for more details</i>',
                click: module_priorities_site_click,
              },
            ]
          },//END OF SECTION
          {
            heading: '3. SUPPORTING INFRASTRUCTURE PRIORITIES',
            text: DEMO_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'SITE_PRIORITY_2',
                legendText: 'Supporting Infrastructure',
              },
            ]
          },//END OF SECTION
          {
            heading: '4. PRIORITY PROJECTS TABLE',
            text: '<span><a href="https://docs.google.com/spreadsheets/d/1uJncA-Nt1_atsgkzMerVY46CZvu51PSUpgvVijHwBxA/edit?usp=sharing" target="_blank" style="text-decoration: underline !important;font-weight:bold;">View Table</a><span>',
            icon: DOCUMENT_ICON,
          },//END OF SECTION
          {
            heading: '5. AREA/REGION PLANS',
            text: '<span><a href="https://drive.google.com/drive/folders/1gvUfHtIBMgGquJpFjJ0j3pdRZa2FJzGx?usp=sharing" target="_blank" style="text-decoration: underline !important;font-weight:bold;">View Plans</a><span>',
            icon: DOCUMENT_ICON,
          },//END OF SECTION
          {
            heading: 'LAYER DETAILS',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: module_piorities_document_layerdetails,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
      {
        name: 'PROGRAM & WORKFORCE PRIORITIES',
        id: '4B_PROGRAM',
        image: PRIMARY_MENU_IMAGE,
        summary: MODULE_SUMMARY_DEMO,
        sections: [
          {
            heading: '1. PARTICIPATION PRIORITIY AREAS',
            text: DEMO_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                id: 'AREA_PROGRAM_1_REG',
                name: 'GOV REGION',
                legendText: 'Priority Level in Govt. Region',
              },
              {
                id: 'AREA_PROGRAM_1_LGA',
                name: 'LGA',
                legendText: 'Priority Level in SA2 Area',
              },
              {
                id: 'AREA_PROGRAM_1_SA2',
                name: 'SA2',
                legendText: 'Priority Level in SA2 Area',
              },
            ]
          },//END OF SECTION
          {
            heading: '2. DEVELOPMENT OFFICER ALLOCATION',
            text: DEMO_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'SITE_PROGRAM_1',
                legendText: 'Development Officers at Site',
              },
            ]
          },//END OF SECTION
          {
            heading: '3. PRIORITY PROGRAM LOCATIONS',
            text: DEMO_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'SITE_PROGRAM_2',
                legendText: 'Optimal Pricing at Site',
              },
            ]
          },//END OF SECTION
          {
            heading: '4. UNUSED',
            text: DEMO_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'SITE_PROGRAM_3',
                legendText: 'Count of Events at Site',
              },
            ]
          },//END OF SECTION
          {
            heading: 'LAYER DETAILS',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: module_workforce_document_layerdetails,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
    ]
  },//END OF MODULE
 {
    id: 'PART-8',
    name: 'AREA INFO & TIPS',
    collapsible: true,
    type: 'CODE_VIEWER',
    CODES: [
      {
        name: 'BOUNDARIES & LABELS',
        id: 'PART-8-SECTION-1',
        image: PRIMARY_MENU_IMAGE,
        summary: MODULE_SUMMARY,
        sections: [
          {
            heading: '1A. FOOTBALL REGION AREA BOUNDARIES',
            text: CX_AREA_CUST_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                id: 'CX_BOUNDARY_CUST',
                name: 'FB REGION',
                legendText: 'Football Region Boundaries',
              },
            ]
          },//END OF SECTION
          {
            heading: '1B. FOOTBALL REGION AREA LABELS',
            text: CX_AREA_CUST_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                id: 'CX_LABEL_CUST',
                name: 'FB REGION',
                legendText: 'Football Region Labels',
              },
            ]
          },//END OF SECTION
          {
            heading: '2A. GOVT. REGION AREA BOUNDARIES',
            text: CX_AREA_REG_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                id: 'CX_BOUNDARY_REG',
                name: 'GOV REGION',
                legendText: 'Govt. Region Boundaries',
              },
            ]
          },//END OF SECTION
          {
            heading: '2B. GOVT. REGION AREA LABELS',
            text: CX_AREA_REG_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                id: 'CX_LABEL_REG',
                name: 'GOV REGION',
                legendText: 'Govt. Region Labels',
              },
            ]
          },//END OF SECTION
          {
            heading: '3A. LGA AREA BOUNDARIES',
            text: CX_AREA_LGA_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                id: 'CX_BOUNDARY_LGA',
                name: 'LGA',
                legendText: 'LGA Area Boundaries',
              },
            ]
          },//END OF SECTION
          {
            heading: '3B. LGA AREA LABELS',
            text: CX_AREA_LGA_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                id: 'CX_LABEL_LGA',
                name: 'LGA',
                legendText: 'LGA Area Labels',
              },
            ]
          },//END OF SECTION
          {
            heading: '4A. SA2 AREA BOUNDARIES',
            text: CX_AREA_SA2_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'CX_BOUNDARY_SA2',
                legendText: 'SA2 Area Boundaries',
              },
            ]
          },//END OF SECTION
          {
            heading: '4B. SA2 AREA LABELS',
            text: CX_AREA_SA2_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'CX_LABEL_SA2',
                legendText: 'SA2 Area Labels',
              },
            ]
          },//END OF SECTION
          {
            heading: '5A. CED AREA BOUNDARIES',
            text: CX_AREA_CED_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'CED',
                id: 'CX_BOUNDARY_CED',
                legendText: 'CED Area Boundaries',
              },
            ]
          },//END OF SECTION
          {
            heading: '5B. CED AREA LABELS',
            text: CX_AREA_CED_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'CED',
                id: 'CX_LABEL_CED',
                legendText: 'CED Area Labels',
              },
            ]
          },//END OF SECTION
          {
            heading: '6A. SED AREA BOUNDARIES',
            text: CX_AREA_SED_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SED',
                id: 'CX_BOUNDARY_SED',
                legendText: 'SED Area Boundaries',
              },
            ]
          },//END OF SECTION
          {
            heading: '6B. SED AREA LABELS',
            text: CX_AREA_SED_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SED',
                id: 'CX_LABEL_SED',
                legendText: 'SED Area Labels',
              },
            ]
          },//END OF SECTION
          {
            heading: '7. SATELLITE VIEW',
            text: CX_AREA_SATELITE_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SATELLITE',
                id: 'mapbox-satellite',
                legendText: 'Satellite View',
              },
            ]
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
      {
        name: 'DEMOGRAPHICS',
        id: 'PART-8-SECTION-2',
        image: PRIMARY_MENU_IMAGE,
        summary: MODULE_SUMMARY,
        sections: [
          {
            heading: '1. DEPRIVATION',
            text: CX_DEPRIVATION_AUS_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'CX_DEPRIVATION_SA1',
                legendText: 'Deprivation Decile in SA1 Area',
                hover: '<p>{AREA_NAME}<p><h4>{CX_DEPRIVATION}</h4>',
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
        name: 'USER TIPS',
        id: 'PART-8-SECTION-3',
        image: PRIMARY_MENU_IMAGE,
        summary: MODULE_SUMMARY,
        sections: [
          {
            heading: 'USER TIPS',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: module_usertips_document_layerdetails,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
    ]
  }, //end of MODULE
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
