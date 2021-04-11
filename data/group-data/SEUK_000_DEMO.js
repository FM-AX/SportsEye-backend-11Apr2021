/////////////////////////////////////////////////////////////////////////////////////

// SEA V2.0
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
const ACCOUNT_NAME = "SE UK DEMO"

// 1B. PRODUCT SELECTION PAGE
const SPLASH_LEDE = `

<div>

<h3>SportsEye Plans</h3>
<p>Shaping a more informed and connected sport and leisure sector.</p>
<a href="https://activexchange.co.uk" target="_blank"><p style="text-decoration: underline;"><i>Further details</i></p></a>

</div>
`


const SPLASH_APPS = [
  {
    name: '',
    lede: SPLASH_LEDE,
    action: 'ENTER',
    route: '/home',
    disabled: false
  },
  // {
  //   name: '',
  //   lede: SPLASH_LEDE_OTHER,
  //   action: 'ENTER',
  //   route: '/home',
  //   disabled: true
  // },
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
   lat: 51.403, lng: -0.374, zoom: 7.38 //UK
}


// 3. IMAGES

// 3A. MENU IMAGES
const PRIMARY_MENU_IMAGE = '/images/SportsEye_Swimming.jpg'

/////////////////////////////////////////////////////////////////////////////////////

// PART B: ACCOUNT SPECIFIC REFERENCES

/////////////////////////////////////////////////////////////////////////////////////

// 1. POPUPS

// 2. DASHBOARDS

// 3. LAYER TEXT

// 4. DOCUMENTS

const MODULE_SUMMARY_FEEDBACK = require('../group-references/SEC_FILES/SEA_000_DEMO/MODULE_SUMMARY_FEEDBACK')


/////////////////////////////////////////////////////////////////////////////////////

// PART C: PRODUCT SPECIFIC REFERENCES

/////////////////////////////////////////////////////////////////////////////////////

// 1. POPUPS

// 2. DASHBOARDS

// 3. LAYER TEXT

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
const QUESTION_ICON = '/images/icons/question-mark.svg'
const AUDIT_ICON = '/images/icons/audit.svg'



/////////////////////////////////////////////////////////////////////////////////////

// PART E: MENU LAYOUT

/////////////////////////////////////////////////////////////////////////////////////

const CATEGORIES = [
  {
    id: 'COMMUNITY-PROFILE',
    name: 'COMMUNITY PROFILE',
    collapsible: true,
    type: 'CODE_VIEWER',
    CODES: [
      {
        name: 'AREA INFO',
        id: 'COMMUNITY-PROFILE-INFO-AUS',
        image: PRIMARY_MENU_IMAGE,
        summary: MODULE_SUMMARY,
        sections: [
          {
            heading: '1. SATELLITE VIEW',
            text: '',
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
        ]
      },//END OF SECTION GROUP
    ]
  }, //END OF MODULE
  {
    id: 'PART-G',
    name: 'FEEDBACK',
    type: 'AREA_VIEWER',
    image: PRIMARY_MENU_IMAGE,
    summary: MODULE_SUMMARY_FEEDBACK,
        // sections: [
        //   // {
        //   //   heading: 'AUCKLAND',
        //   //   text: null,
        //   //   icon: DOCUMENT_ICON,
        //   //   documentHtml: LOCKERROOM_MODAL,
        //   //   // documentHtml: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
