// THIS FILE CONTAINS THE DEFUALT VIEW THAT APPEARS ONLY WHEN USERS LOGIN FOR THE FIRST TIME. 
// WHEN THEY NEXT LOGIN WILL BE DIRECTED TO THEIR RESTPECTIVE GROUP SET IN AUTH0


const AREA_ICON = '/images/icons/land.svg'
const POINT_ICON = '/images/icons/pin.svg'
const PEOPLE_ICON = '/images/icons/people.svg'
const DOCUMENT_ICON = '/images/icons/document.svg'
const DASHBOARD_ICON = '/images/icons/dashboard.svg'
const AUDIT_ICON = '/images/icons/audit.svg'



const MAP_START = {
  lat: -33.8688, lng: 151.2093, zoom: 9
}

const SPLASH = {
  lede: `Please logout (bottom left) and login again to be directed to your organisation's SportsEye platform.


  ActiveXchange. Empowering data. Intelligent investment.`,
  head: "WELCOME TO SPORTSEYE",
  subhead: "Account activated.",
  disclaimer: '<span><a href="https://activexchange.org/your-data-our-commitment" target="_blank">SportsEye Terms of Use</a><span>',
  action: "ENTER"
}

const SPLASH_APPS = [
  {
    name: '',
    lede: '',
    action: 'ENTER',
    route: '/home',
    disabled: false
  }
]

const AFFILIATE_LOGOS = [
  "",
]

const MAPBOX_APIKEY = "pk.eyJ1IjoiYWN0aXZleGNoYW5nZSIsImEiOiJjam9pY3RocGQwNGhhM2t0ZGs5cTVkaGFtIn0.YT3rzCilSLt2HwnaIijipA"
const MAPBOX_STYLE = "mapbox://styles/activexchange/cjplszjbb00kp2rprxypfdics"


const CATEGORIES = [
  {
    // id: 'PART-A',
    // name: 'DEMO',
    // type: 'AREA_VIEWER',
    // image: '/images/SportsEye_Houses.jpg',
    // summary: 'MODULE_SUMMARY_DEMO',
    //     sections: [
    //       {
    //         heading: 'DEMO DATA',
    //         text: 'Data for demonstration purposes only.',
    //         icon: POINT_ICON,
    //         layers: [
    //           {
    //             name: 'EX 1',
    //             id: 'spro-icon',
    //             legendText: 'Demo Layer',
    //             click: POINT_POPUP_CLICK,
    //             hover: POINT_POPUP_HOVER,
    //           },
    //           {
    //             id: 'spro-icon-a',
    //             name: 'EX 2',
    //             legendText: 'Demo Layer',
    //             click: POINT_POPUP_CLICK,
    //             hover: POINT_POPUP_HOVER,
    //           },
    //         ]
    //       },
    //     ]
  }, //end of PART A
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
