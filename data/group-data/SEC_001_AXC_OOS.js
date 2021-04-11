//SEO V1.2 - LIVE
// LAST UPDATED 18-JUN-19
// CURRENTLY RUNNING LATEST VERSION WITH NO UNIQUE VARIATION

//SOME FEATURES DELETED DUE TO SHIFT TO V1.3 THAT WERE LINKED TO SEO DEMO FOLDER


// PART 1: ACCOUNT CONFIGURATION

const AREA_ICON = '/images/icons/land.svg'
const POINT_ICON = '/images/icons/pin.svg'
const PEOPLE_ICON = '/images/icons/people.svg'
const DOCUMENT_ICON = '/images/icons/document.svg'


const MAP_START = {
  //  lat: -33.8688, lng: 151.2093, zoom: 10 SYDNEY
  lat: -37.748453, lng: 145.101967, zoom: 9 //MELBOURNE
}

const SPLASH = {
  lede: `

  ActiveXchange. Empowering data. Intelligent investment.`,
  head: "WELCOME TO SPORTSEYE",
  subhead: "SPORTSYE OPERATOR DEMO",
  // disclaimer: '<span>POWERED BY <a href="https://activexchange.org/" target="_blank">ACTIVEXCHANGE</a><span>',
  disclaimer: '<span><a href="https://activexchange.org/your-data-our-commitment" target="_blank">SportsEye Terms of Use</a><span>',
  action: "ENTER"
}

const SPLASH_APPS = [
  {
    name: 'SPORTSEYE OPERATOR',
    lede: '<p>A business intelligence service tailored for your organisation.</p>',
    action: 'ENTER',
    route: '/home',
    disabled: false
  }
]

const AFFILIATE_LOGOS = [
  "",
]

const MAPBOX_APIKEY = "pk.eyJ1IjoiYWN0aXZleGNoYW5nZSIsImEiOiJjamw0ZjIzemUwNjdmM3dxa2pnY3p0YW92In0.ak0AdM4Si9-G-Ez8VzPByQ"

const MAPBOX_STYLE = "mapbox://styles/activexchange/cjw5jow0301ks1cmqolt33lr8"


/////////////////////////////////////////////////////////////////////////////////////


// EXTERNAL REFERENCES

// V9
//ACCOUNT SPECIFIC
// import SAMPLE_DOCUMENT from '../sample-document'
// import SAMPLE_DOCUMENT_2 from '../sample-document-2'
// import SCORECARD_POPUP from '../group-details/SEC_001_AXC_OOS/CLICK_SCORECARD'
// import CAMPAIGNS_DL_POPUP from '../group-details/SEC_001_AXC_OOS/CLICK_CAMPAIGNS'
// import COMMUNICATION_POPUP from '../group-details/SEC_001_AXC_OOS/CLICK_COMMUNICATION'
// import LOCKERROOM_MODAL from '../group-details/SEC_001_AXC_OOS/MODAL_LOCKERROOM'


// import DETAILS_PERFORMANCE_AUDIT from '../group-details/SEC_001_AXC_OOS/DETAILS_PERFORMANCE_AUDIT'
// import DETAILS_PERFORMANCE_ALL from '../group-details/SEC_001_AXC_OOS/DETAILS_PERFORMANCE_ALL'
// import DETAILS_PERFORMANCE_HLTH from '../group-details/SEC_001_AXC_OOS/DETAILS_PERFORMANCE_HLTH'
// import DETAILS_PERFORMANCE_AQU from '../group-details/SEC_001_AXC_OOS/DETAILS_PERFORMANCE_AQU'
// import DETAILS_PERFORMANCE_SWM from '../group-details/SEC_001_AXC_OOS/DETAILS_PERFORMANCE_SWM'


// import DETAILS_CAMPAIGNS from '../group-details/SEC_001_AXC_OOS/DETAILS_CAMPAIGNS'
// import DETAILS_AX_DATA from '../group-details/SEC_001_AXC_OOS/DETAILS_AX_DATA'

// import DETAILS_COMMUNITY_HF from '../group-details/SEC_001_AXC_OOS/DETAILS_COMMUNITY_HF'
// import DETAILS_COMMUNITY_INFO from '../group-details/SEC_001_AXC_OOS/DETAILS_COMMUNITY_INFO'
// import DETAILS_COMMUNITY_SPORTNSW from '../group-details/SEC_001_AXC_OOS/DETAILS_COMMUNITY_SPORTNSW'
// import DETAILS_COMMUNITY_PERF from '../group-details/SEC_001_AXC_OOS/DETAILS_COMMUNITY_PERF'



// V10
//ACCOUNT SPECIFIC
const SAMPLE_DOCUMENT = require('../sample-document')
const SAMPLE_DOCUMENT_2 = require('../sample-document-2')
const SCORECARD_POPUP = require('../group-details/SEC_001_AXC_OOS/CLICK_SCORECARD')
const CAMPAIGNS_DL_POPUP = require('../group-details/SEC_001_AXC_OOS/CLICK_CAMPAIGNS')
const COMMUNICATION_POPUP = require('../group-details/SEC_001_AXC_OOS/CLICK_COMMUNICATION')
const LOCKERROOM_MODAL = require('../group-details/SEC_001_AXC_OOS/MODAL_LOCKERROOM')



const DETAILS_PERFORMANCE_AUDIT = require('../group-details/SEC_001_AXC_OOS/DETAILS_PERFORMANCE_AUDIT')
const DETAILS_PERFORMANCE_ALL = require('../group-details/SEC_001_AXC_OOS/DETAILS_PERFORMANCE_ALL')
const DETAILS_PERFORMANCE_HLTH = require('../group-details/SEC_001_AXC_OOS/DETAILS_PERFORMANCE_HLTH')
const DETAILS_PERFORMANCE_AQU = require('../group-details/SEC_001_AXC_OOS/DETAILS_PERFORMANCE_AQU')
const DETAILS_PERFORMANCE_SWM = require('../group-details/SEC_001_AXC_OOS/DETAILS_PERFORMANCE_SWM')

const DETAILS_COMMUNITY_DEM = require('../group-details/SEC_001_AXC_OOS/DETAILS_COMMUNITY_DEM')



const DETAILS_CAMPAIGNS = require('../group-details/SEC_001_AXC_OOS/DETAILS_CAMPAIGNS')
const DETAILS_AX_DATA = require('../group-details/SEC_001_AXC_OOS/DETAILS_AX_DATA')
const DETAILS_COMMUNITY_PERF = require('../group-details/SEC_001_AXC_OOS/DETAILS_COMMUNITY_PERF')
const DETAILS_COMMUNITY_HF = require('../group-details/SEC_001_AXC_OOS/DETAILS_COMMUNITY_HF')
const DETAILS_COMMUNITY_INFO = require('../group-details/SEC_001_AXC_OOS/DETAILS_COMMUNITY_INFO')
const DETAILS_COMMUNITY_SPORTNSW = require('../group-details/SEC_001_AXC_OOS/DETAILS_COMMUNITY_SPORTNSW')



/////////////////////////////////////////////////////////////////////////////////////

// PART 2: DESCRIPTION TEXT

// A: MODULE DESCRIPTION TEXT

const MODULE_SUMMARY = `
<p>Select layers below to display on the map.</p>
`

const MODULE_SUMMARY_SWIM = `
<p>Select layers below to display on the map.</p>
<p><b>NOTE: Data for demonstration purposes only.</b></p>
`

const MODULE_SUMMARY_DEMO = `
<p>Select layers below to display on the map.</p>
<p><b>NOTE: Data for demonstration purposes only.</b></p>
`


//account specific
const ADT_MODULE_SUMMARY = `
<p>Select layers below to display on the map.</p>
<p>To amend site information please see the <a href="http://activexchange.com.au/sportseye/operator/demo/1_facility_audit.html" target="_blank" style="text-decoration: underline !important;font-weight:bold;">Facility Audit Platform</a>.</p>
<p><b>NOTE: Data for demonstration purposes only.</b></p>
`

//account specific
const MODULE_SUMMARY_ALL_LOCTIONS = `
<p>Select layers below to display on the map.</p>
<p><a href="http://activexchange.com.au/sportseye/operator/demo/2_performance_all_locations.html" target="_blank" style="text-decoration: underline !important;font-weight:bold;">Click here</a> to see all Site performance data.</p>
<p><b>NOTE: Data for demonstration purposes only.</b></p>
`

//account specific
const MODULE_SUMMARY_RISK = `
<p>Select layers below to display on the map. Click on 1. Subscribed Sites pins to access reporting files.</p>
<p>To view Live Reporting Table <a href="http://activexchange.com.au/sportseye/operator/demo/3_activecampaigns.html" target="_blank" style="text-decoration: underline !important;font-weight:bold;">click here</a>.</p>
<p><b>NOTE: Data for demonstration purposes only.</b></p>
`

const MODULE_SUMMARY_FEEDBACK = `
<p>SportsEye is a toolkit & eco-system that brings together the fitness, leisure and sport sectors.
<br>We want your feedback on how to keep improving the platform and predictive modelling.<br>
<a href="mailto:intelligence@activexchange.org?subject=SportsEye%20Feedback" target="_blank" style="text-decoration: underline !important;font-weight:bold;">Contact ActiveXchange</a> to share your thoughts.</p>
`



// B: LAYER DESCRIPTION TEXT

//TEMP

//AUDIT


//SITE  & AREA PERFORMANCE
const SITE_MEM_ALL_TEXT = `
<b>Size: Total Members</b>
`
const AREA_MEM_ALL_TEXT = `
<b>Colour: Total Members</b>
`
const AREA_DEM_ALL_TEXT = `
<b>Colour: Total Demand</b>
`
const AREA_DEM_CNV_ALL_TEXT = `
<b>Colour: Conversion %</b><br>
Total Members / Total Demand
`
const CTCH_TARG_UNMT_DEM_TEXT = `
<b>Size: Target Unmet Demand</b>
`
const CTCH_ALLO_UNMT_DEM_TEXT = `
<b>Size: Allocated Unmet Demand</b>
`
const AREA_UNMT_DEM_ALL_TEXT = `
<b>Colour: Unmet Demand</b>
`
const AREA_UNMT_DEM_AGG_TEXT = `
<b>Colour: Aggregated Unmet Demand</b>
`
const CTCH_PERF_BAL_ALL_TEXT = `
<b>Colour: Performance %</b><br>
Red: Under-performing<br>Green: Over-performing<br><br>
<b>Size: Members at Site / Demand in Catchment</b>
`

//ACTIVECAMPAIGNS

const SITE_MEM_LTV_TEXT = `
<b>Size: Site Members Lifetime Value</b>
`
const SITE_MEM_DOZ_TEXT = `
<b>Size: Site Members in Drop Out Zone</b>
`
const SITE_MEM_DOZ_VAL_TEXT = `
<b>Size: Value of Site Members in Drop Out Zone</b>
`
const SITE_UNMT_DEM_CNV_TEXT = `
<b>Size: Unmet Demand Conversion %</b>
`
const SITE_UNMT_DEM_VAL_TEXT = `
<b>Size: Unmet Demand Value</b>
`
const SITE_CAMPAIGN_DL_TEXT = `
<b>Colour: Subscribed Site Category</b><br>
Blue: Retention<br>Yellow: ACQUISITION<br>Green: Both
`
const SITE_SCORECARD_TEXT = `
<b>Scorecard Sites</b>
`
const SITE_COMMUNICATION_TEXT = `
<b>Action Plan Sites</b>
`

//COMMIUNITY PRIORITIES
const CTCH_DEP_CNV_TEXT = `
<b>Size: Site Deprivation Conversion %</b>
`
const CTCH_ROI_CNV_TEXT = `
<b>Size: Site Risk of Inactivity Conversion %</b>
`
const CTCH_SV_GEN_TEXT = `
<b>Size: Social Value Generated in last calendar year</b>
`
const CTCH_SV_CHNG_TEXT = `
<b>Size: Social Value Percentage Change between last 2 calendar years</b><br>
<b>Colour: Change %</b><br>
Red: Reduction<br>Green: Increase<br><br>
`
const CX_HF_TEXT = `
<b>Colour: Count of People</b>
`

//ACCOUNT SPECITIF
const CX_DEPRIVATION_TEXT = `
<b>Colour: Index Score</b><br>
Index of Relative Socioeconomic Advantage and Disadvantage (IRSAD).<br>Decile Scores range from 1 - 10, with 1 indicating the most deprived areas and 10 the least deprived.
`
const CX_AXC_ASSIST_TEXT = `
<b>Colour: Count of People</b>
`
const CX_AXC_ROI_TEXT = `
<b>Colour: Score</b><br>
Decile Scores range from 1 - 10, with 1 indicating the least risk areas and 10 the most at risk areas.

`
const CX_BOUNDARY_TEXT = `
<b>Area Boundaries</b>
`
const CX_LABEL_TEXT = `
<b>Area Labels</b>
`


/////////////////////////////////////////////////////////////////////////////////////

// PART 3: POPUPS

// CONSTANTS
// const POINT_POPUP_HOVER = `
// <h4>Site: {SITE_NAME}</h4><i>Click to view full site details</i>
// `

// AUDIT
// const HOVER_AUDIT_CLIENT = `
// <h4>{Q2}</h4><i>Click to view full site details</i>
// `

const BEL_AUDIT_POPUP_HOVER = `
<h4>{Q2}</h4><i>Click to view full site details</i>
`
const BEL_AUDIT_BEL_POPUP = `
<div class="scorecard"><h2>{Q2}</h2><h3>FACILITY AUDIT</h3><p>*Site status (if due to open or close): <a style="font-weight:bold;">{Q48}</a></p><p>*Q1. Please insert the name of your organisation: <a style="font-weight:bold;">{Q1}</a></p><p>*Q2. Please insert the name of your site: <a style="font-weight:bold;">{Q2}</a></p><p>*Q3. Please provide the contact email address for the site/ website URL: <a style="font-weight:bold;">{Q3}</a></p><p>Q4. Please provide the specific address for the site: <a style="font-weight:bold;">{Q4}</a></p><p>*Q5A-H. What is the access policy at your site? A. Registered Members: <a style="font-weight:bold;">{Q5_A}</a></p><p>*Q5B. Pay and Play: <a style="font-weight:bold;">{Q5_B}</a></p><p>*Q5C. Free Public Access: <a style="font-weight:bold;">{Q5_C}</a></p><p>*Q5D. Sports Club: <a style="font-weight:bold;">{Q5_D}</a></p><p>*Q5E. Private Use: <a style="font-weight:bold;">{Q5_E}</a></p><p>*Q5F. Community Association: <a style="font-weight:bold;">{Q5_F}</a></p><p>*Q5G. Education (dual use site e.g. school/ university): <a style="font-weight:bold;">{Q5_G}</a></p><p>*Q5H. Other (please specify): <a style="font-weight:bold;">{Q5_H}</a></p><p>*Q6. Approximately what year was the site built in? i.e. 1999: <a style="font-weight:bold;">{Q6}</a></p><p>Q7. Number of full time equivalent staff: <a style="font-weight:bold;">{Q7}</a></p><p>*Q8. What is the current Google rating (Google Map reviews) for the site? E.g. 4.2: <a style="font-weight:bold;">{Q8}</a></p><p>*Q9A-M. Which of the following ancillary facilities do you have? A. Cafe: <a style="font-weight:bold;">{Q9_A}</a></p><p>*Q9B. Retail shop (equipment): <a style="font-weight:bold;">{Q9_B}</a></p><p>Q9C. Changing rooms: <a style="font-weight:bold;">{Q9_C}</a></p><p>Q9D. Lockers: <a style="font-weight:bold;">{Q9_D}</a></p><p>Q9E. BBQ and picnic areas: <a style="font-weight:bold;">{Q9_E}</a></p><p>Q9F. Childrens play area: <a style="font-weight:bold;">{Q9_F}</a></p><p>Q9G. Sauna: <a style="font-weight:bold;">{Q9_G}</a></p><p>Q9H. Spa: <a style="font-weight:bold;">{Q9_H}</a></p><p>Q9I. Creche/ dedicated child care: <a style="font-weight:bold;">{Q9_I}</a></p><p>Q9J. Soft play area (indoor): <a style="font-weight:bold;">{Q9_J}</a></p><p>Q9K. Health/ doctor service (dual use site): <a style="font-weight:bold;">{Q9_K}</a></p><p>Q9L. Physiotherapy/ massage or similar service: <a style="font-weight:bold;">{Q9_L}</a></p><p>Q9M. Other (please specify): <a style="font-weight:bold;">{Q9_M}</a></p><p>*Q10. Facility Access: How many dedicated car parking spaces does your site have?: <a style="font-weight:bold;">{Q10}</a></p><p>Q11. Facility Access: Parking - What is the average hourly cost of parking at your site?: <a style="font-weight:bold;">{Q11}</a></p><p>Q12. Does the gym facility have 24/7 access? (if yes, please only complete the next question if access is different for the rest of the venue): <a style="font-weight:bold;">{Q12}</a></p><p>Q13. If Q12 is Yes, is the facility staffed 24/7: <a style="font-weight:bold;">{Q13}</a></p><p>*Q14-17. When does the site usually open and close i.e. 0630? 14. Weekday - Opening hour: <a style="font-weight:bold;">{Q14}</a></p><p>*Q15. Weekday - Closing hour: <a style="font-weight:bold;">{Q15}</a></p><p>*Q16. Weekend - Opening hour: <a style="font-weight:bold;">{Q16}</a></p><p>*Q17. Weekend - Closing hour: <a style="font-weight:bold;">{Q17}</a></p><p>Q18A-D: If relevant please provide the price of these common types of membership per week i.e. $20.50. A. Adult full access (excluding specific area booking): <a style="font-weight:bold;">{Q18_A}</a></p><p>*Q18B. Adult gym only: <a style="font-weight:bold;">{Q18_B}</a></p><p>Q18C. Adult swim only: <a style="font-weight:bold;">{Q18_C}</a></p><p>Q18D. Swim school session (average per week): <a style="font-weight:bold;">{Q18_D}</a></p><p>Q19A-F. If relevant, which membership promotions are available at the venue? (within the last 3 months) A. No joining fee: <a style="font-weight:bold;">{Q19_A}</a></p><p>Q19B. Free or discounted time e.g. first month half price: <a style="font-weight:bold;">{Q19_B}</a></p><p>Q19C. Free personal training: <a style="font-weight:bold;">{Q19_C}</a></p><p>Q19D. Free class access: <a style="font-weight:bold;">{Q19_D}</a></p><p>Q19E. Discounted membership: <a style="font-weight:bold;">{Q19_E}</a></p><p>Q19F. Other (please specify): <a style="font-weight:bold;">{Q19_F}</a></p><p>Q20. Is a concessionary membership option available?: <a style="font-weight:bold;">{Q20}</a></p><p>Q21. Is your venue a member of a Fitness Passport, ClassPass or similar third party access scheme? Please list this here: <a style="font-weight:bold;">{Q21}</a></p><p>Q22A. Over the next year are there any planned site or facility-specific upgrades? Please provide details with dates if applicable. Planned Upgrade Details: <a style="font-weight:bold;">{Q22_A1}</a></p><p>Q22B. Planned Upgrade Date i.e. MM/YY: <a style="font-weight:bold;">{Q22_A2}</a></p><p>List what sports are played at your site.: <a style="font-weight:bold;">{Q49}</a></p><p>*Q23. Does your site have a gym?: <a style="font-weight:bold;">{Q23}</a></p><p>*Q24. How many equipment stations do you have in your gym i.e. treadmill, bench press etc (free weights don’t count)?: <a style="font-weight:bold;">{Q24}</a></p><p>Q25. What is the average age of your gym equipment? (number of years i.e. 5): <a style="font-weight:bold;">{Q25}</a></p><p>*Q26. When was the gym last refurbished? i.e. 1999: <a style="font-weight:bold;">{Q26}</a></p><p>Q27. How often is the gym cleaned?: <a style="font-weight:bold;">{Q27}</a></p><p>Q28A-K. Please select other features available at your gym. A. Functional training areas: <a style="font-weight:bold;">{Q28_A}</a></p><p>Q28B. Body mass measurement i.e. Boditrax: <a style="font-weight:bold;">{Q28_B}</a></p><p>Q28C. Personal trainer service available: <a style="font-weight:bold;">{Q28_C}</a></p><p>Q28D. Digitally connected equipment e.g Technogym-mywellness: <a style="font-weight:bold;">{Q28_D}</a></p><p>Q28E. Suspension weight training: <a style="font-weight:bold;">{Q28_E}</a></p><p>*Q28F. Group exercise classes offered at the venue: <a style="font-weight:bold;">{Q28_F}</a></p><p>Q28G. Classes offered outside of the venue e.g. in the park or beach: <a style="font-weight:bold;">{Q28_G}</a></p><p>Q28H. Virtual fitness class option: <a style="font-weight:bold;">{Q28_H}</a></p><p>Q28I. Small group training area (gym floor): <a style="font-weight:bold;">{Q28_I}</a></p><p>Q28J. Ladies only area: <a style="font-weight:bold;">{Q28_J}</a></p><p>Q28K. Other (please specify): <a style="font-weight:bold;">{Q28_K}</a></p><p>Q29. How would you rate the overall quality of you gym? (specifically in relation to equipment and appeal of the facility when compared with similar priced alternative sites): <a style="font-weight:bold;">{Q29}</a></p><p>*Q30. How many swimming pools does your facility have?: <a style="font-weight:bold;">{Q30}</a></p><p>Q31A. Type of pool - Swimming pool 1: <a style="font-weight:bold;">{Q31_A}</a></p><p>Q31B. Type of pool - Swimming pool 2: <a style="font-weight:bold;">{Q31_B}</a></p><p>Q31C. Type of pool - Swimming pool 3: <a style="font-weight:bold;">{Q31_C}</a></p><p>Q31D. Type of pool - Swimming pool 4: <a style="font-weight:bold;">{Q31_D}</a></p><p>Q31E. Type of pool - Swimming pool 5: <a style="font-weight:bold;">{Q31_E}</a></p><p>Q31F. Type of pool - Other (please specify): <a style="font-weight:bold;">{Q31_F}</a></p><p>Q32A. Length of pool (metres) - Swimming pool 1: <a style="font-weight:bold;">{Q32_A}</a></p><p>Q32B. Length of pool (metres) - Swimming pool 2: <a style="font-weight:bold;">{Q32_B}</a></p><p>Q32C. Length of pool (metres) - Swimming pool 3: <a style="font-weight:bold;">{Q32_C}</a></p><p>Q32D. Length of pool (metres) - Swimming pool 4: <a style="font-weight:bold;">{Q32_D}</a></p><p>Q32E. Length of pool (metres) - Swimming pool 5: <a style="font-weight:bold;">{Q32_E}</a></p><p>Q33A. Lanes of pool (equivalent) - Swimming pool 1: <a style="font-weight:bold;">{Q33_A}</a></p><p>Q33B. Lanes of pool (equivalent) - Swimming pool 2: <a style="font-weight:bold;">{Q33_B}</a></p><p>Q33C. Lanes of pool (equivalent) - Swimming pool 3: <a style="font-weight:bold;">{Q33_C}</a></p><p>Q33D. Lanes of pool (equivalent) - Swimming pool 4: <a style="font-weight:bold;">{Q33_D}</a></p><p>Q33E. Lanes of pool (equivalent) - Swimming pool 5: <a style="font-weight:bold;">{Q33_E}</a></p><p>Q34. How would you rate the overall quality of your swimming pools? (specifically in relation to equipment and appeal of the facility when compared with similar priced alternative sites): <a style="font-weight:bold;">{Q34}</a></p><p>*Q35. Does your site have studio(s)?: <a style="font-weight:bold;">{Q35}</a></p><p>Q36A-D. What is the size of your studio(s)? - A. Studio 1 (approx. metres squared): <a style="font-weight:bold;">{Q36_A}</a></p><p>Q36B. Studio 2 (approx. metres squared): <a style="font-weight:bold;">{Q36_B}</a></p><p>Q36C. Studio 3 (approx. metres squared): <a style="font-weight:bold;">{Q36_C}</a></p><p>Q36D. Studio 4 (approx. metres squared): <a style="font-weight:bold;">{Q36_D}</a></p><p>Q37. Does your site have squash courts?: <a style="font-weight:bold;">{Q37}</a></p><p>Q38. How many squash courts are there?: <a style="font-weight:bold;">{Q38}</a></p><p>Q39. Does your site have a tennis court(s)?: <a style="font-weight:bold;">{Q39}</a></p><p>Q40. How many tennis courts are there?: <a style="font-weight:bold;">{Q40}</a></p><p>Q41. Does your site have a sports hall?: <a style="font-weight:bold;">{Q41}</a></p><p>Q42A-C. What size are your sport halls? A. Number of badminton courts (equivalent) - Sport hall 1: <a style="font-weight:bold;">{Q42_A}</a></p><p>Q42B. Number of badminton courts (equivalent) - Sport hall 2: <a style="font-weight:bold;">{Q42_B}</a></p><p>Q42C. Number of badminton courts (equivalent) - Sport hall 3: <a style="font-weight:bold;">{Q42_C}</a></p><p>Q43. Does the site have a synthetic turf pitch: <a style="font-weight:bold;">{Q43}</a></p><p>Q44. Total m2 of area across all synthetic pitches (full size football pitch is 6000m2): <a style="font-weight:bold;">{Q44}</a></p><p>Q45. Are any of the synthetic turf pitches floodlit?: <a style="font-weight:bold;">{Q45}</a></p><p>Q46. Does your site have any golf facilities?: <a style="font-weight:bold;">{Q46}</a></p><p>Q47. How many golf holes are on the site i.e. 18: <a style="font-weight:bold;">{Q47}</a></p></div> <!-- END OF TABLE -->
`

const BEL_AUDIT_GYM_POPUP = `
<div class="scorecard"><h2>{Q2}</h2><h3>FACILITY AUDIT</h3><p>*Site status (if due to open or close): <a style="font-weight:bold;">{Q48}</a></p><p>*Q1. Please insert the name of your organisation: <a style="font-weight:bold;">{Q1}</a></p><p>*Q2. Please insert the name of your site: <a style="font-weight:bold;">{Q2}</a></p><p>*Q3. Please provide the contact email address for the site/ website URL: <a style="font-weight:bold;">{Q3}</a></p><p>Q4. Please provide the specific address for the site: <a style="font-weight:bold;">{Q4}</a></p><p>*Q5A-H. What is the access policy at your site? A. Registered Members: <a style="font-weight:bold;">{Q5_A}</a></p><p>*Q5B. Pay and Play: <a style="font-weight:bold;">{Q5_B}</a></p><p>*Q5C. Free Public Access: <a style="font-weight:bold;">{Q5_C}</a></p><p>*Q5D. Sports Club: <a style="font-weight:bold;">{Q5_D}</a></p><p>*Q5E. Private Use: <a style="font-weight:bold;">{Q5_E}</a></p><p>*Q5F. Community Association: <a style="font-weight:bold;">{Q5_F}</a></p><p>*Q5G. Education (dual use site e.g. school/ university): <a style="font-weight:bold;">{Q5_G}</a></p><p>*Q5H. Other (please specify): <a style="font-weight:bold;">{Q5_H}</a></p><p>*Q6. Approximately what year was the site built in? i.e. 1999: <a style="font-weight:bold;">{Q6}</a></p><p>*Q8. What is the current Google rating (Google Map reviews) for the site? E.g. 4.2: <a style="font-weight:bold;">{Q8}</a></p><p>*Q9A-M. Which of the following ancillary facilities do you have? A. Cafe: <a style="font-weight:bold;">{Q9_A}</a></p><p>*Q9B. Retail shop (equipment): <a style="font-weight:bold;">{Q9_B}</a></p><p>Q9C. Changing rooms: <a style="font-weight:bold;">{Q9_C}</a></p><p>Q9D. Lockers: <a style="font-weight:bold;">{Q9_D}</a></p><p>Q9E. BBQ and picnic areas: <a style="font-weight:bold;">{Q9_E}</a></p><p>Q9F. Childrens play area: <a style="font-weight:bold;">{Q9_F}</a></p><p>Q9G. Sauna: <a style="font-weight:bold;">{Q9_G}</a></p><p>Q9H. Spa: <a style="font-weight:bold;">{Q9_H}</a></p><p>Q9I. Creche/ dedicated child care: <a style="font-weight:bold;">{Q9_I}</a></p><p>Q9J. Soft play area (indoor): <a style="font-weight:bold;">{Q9_J}</a></p><p>Q9K. Health/ doctor service (dual use site): <a style="font-weight:bold;">{Q9_K}</a></p><p>Q9L. Physiotherapy/ massage or similar service: <a style="font-weight:bold;">{Q9_L}</a></p><p>Q9M. Other (please specify): <a style="font-weight:bold;">{Q9_M}</a></p><p>*Q10. Facility Access: How many dedicated car parking spaces does your site have?: <a style="font-weight:bold;">{Q10}</a></p><p>Q12. Does the gym facility have 24/7 access? (if yes, please only complete the next question if access is different for the rest of the venue): <a style="font-weight:bold;">{Q12}</a></p><p>Q13. If Q12 is Yes, is the facility staffed 24/7: <a style="font-weight:bold;">{Q13}</a></p><p>*Q14-17. When does the site usually open and close i.e. 0630? 14. Weekday - Opening hour: <a style="font-weight:bold;">{Q14}</a></p><p>*Q15. Weekday - Closing hour: <a style="font-weight:bold;">{Q15}</a></p><p>*Q16. Weekend - Opening hour: <a style="font-weight:bold;">{Q16}</a></p><p>*Q17. Weekend - Closing hour: <a style="font-weight:bold;">{Q17}</a></p><p>Q18A-D: If relevant please provide the price of these common types of membership per week i.e. $20.50. A. Adult full access (excluding specific area booking): <a style="font-weight:bold;">{Q18_A}</a></p><p>*Q18B. Adult gym only: <a style="font-weight:bold;">{Q18_B}</a></p><p>Q18C. Adult swim only: <a style="font-weight:bold;">{Q18_C}</a></p><p>Q18D. Swim school session (average per week): <a style="font-weight:bold;">{Q18_D}</a></p><p>Q19A-F. If relevant, which membership promotions are available at the venue? (within the last 3 months) A. No joining fee: <a style="font-weight:bold;">{Q19_A}</a></p><p>Q19B. Free or discounted time e.g. first month half price: <a style="font-weight:bold;">{Q19_B}</a></p><p>Q19C. Free personal training: <a style="font-weight:bold;">{Q19_C}</a></p><p>Q19D. Free class access: <a style="font-weight:bold;">{Q19_D}</a></p><p>Q19E. Discounted membership: <a style="font-weight:bold;">{Q19_E}</a></p><p>Q19F. Other (please specify): <a style="font-weight:bold;">{Q19_F}</a></p><p>Q20. Is a concessionary membership option available?: <a style="font-weight:bold;">{Q20}</a></p><p>Q21. Is your venue a member of a Fitness Passport, ClassPass or similar third party access scheme? Please list this here: <a style="font-weight:bold;">{Q21}</a></p><p>Q22A. Over the next year are there any planned site or facility-specific upgrades? Please provide details with dates if applicable. Planned Upgrade Details: <a style="font-weight:bold;">{Q22_A1}</a></p><p>Q22B. Planned Upgrade Date i.e. MM/YY: <a style="font-weight:bold;">{Q22_A2}</a></p><p>List what sports are played at your site.: <a style="font-weight:bold;">{Q49}</a></p><p>*Q23. Does your site have a gym?: <a style="font-weight:bold;">{Q23}</a></p><p>*Q24. How many equipment stations do you have in your gym i.e. treadmill, bench press etc (free weights don’t count)?: <a style="font-weight:bold;">{Q24}</a></p><p>Q25. What is the average age of your gym equipment? (number of years i.e. 5): <a style="font-weight:bold;">{Q25}</a></p><p>*Q26. When was the gym last refurbished? i.e. 1999: <a style="font-weight:bold;">{Q26}</a></p><p>Q27. How often is the gym cleaned?: <a style="font-weight:bold;">{Q27}</a></p><p>Q28A-K. Please select other features available at your gym. A. Functional training areas: <a style="font-weight:bold;">{Q28_A}</a></p><p>Q28B. Body mass measurement i.e. Boditrax: <a style="font-weight:bold;">{Q28_B}</a></p><p>Q28C. Personal trainer service available: <a style="font-weight:bold;">{Q28_C}</a></p><p>Q28D. Digitally connected equipment e.g Technogym-mywellness: <a style="font-weight:bold;">{Q28_D}</a></p><p>Q28E. Suspension weight training: <a style="font-weight:bold;">{Q28_E}</a></p><p>*Q28F. Group exercise classes offered at the venue: <a style="font-weight:bold;">{Q28_F}</a></p><p>Q28G. Classes offered outside of the venue e.g. in the park or beach: <a style="font-weight:bold;">{Q28_G}</a></p><p>Q28H. Virtual fitness class option: <a style="font-weight:bold;">{Q28_H}</a></p><p>Q28I. Small group training area (gym floor): <a style="font-weight:bold;">{Q28_I}</a></p><p>Q28J. Ladies only area: <a style="font-weight:bold;">{Q28_J}</a></p><p>Q28K. Other (please specify): <a style="font-weight:bold;">{Q28_K}</a></p><p>Q29. How would you rate the overall quality of you gym? (specifically in relation to equipment and appeal of the facility when compared with similar priced alternative sites): <a style="font-weight:bold;">{Q29}</a></p><p>*Q30. How many swimming pools does your facility have?: <a style="font-weight:bold;">{Q30}</a></p><p>*Q35. Does your site have studio(s)?: <a style="font-weight:bold;">{Q35}</a></p><p>Q36A-D. What is the size of your studio(s)? - A. Studio 1 (approx. metres squared): <a style="font-weight:bold;">{Q36_A}</a></p><p>Q36B. Studio 2 (approx. metres squared): <a style="font-weight:bold;">{Q36_B}</a></p><p>Q36C. Studio 3 (approx. metres squared): <a style="font-weight:bold;">{Q36_C}</a></p><p>Q36D. Studio 4 (approx. metres squared): <a style="font-weight:bold;">{Q36_D}</a></p></div> <!-- END OF TABLE -->
`
const BEL_AUDIT_MULTI_POPUP = `
<div class="scorecard"><h2>{Q2}</h2><h3>FACILITY AUDIT</h3><p>*Site status (if due to open or close): <a style="font-weight:bold;">{Q48}</a></p><p>*Q1. Please insert the name of your organisation: <a style="font-weight:bold;">{Q1}</a></p><p>*Q2. Please insert the name of your site: <a style="font-weight:bold;">{Q2}</a></p><p>*Q3. Please provide the contact email address for the site/ website URL: <a style="font-weight:bold;">{Q3}</a></p><p>Q4. Please provide the specific address for the site: <a style="font-weight:bold;">{Q4}</a></p><p>*Q5A-H. What is the access policy at your site? A. Registered Members: <a style="font-weight:bold;">{Q5_A}</a></p><p>*Q5B. Pay and Play: <a style="font-weight:bold;">{Q5_B}</a></p><p>*Q5C. Free Public Access: <a style="font-weight:bold;">{Q5_C}</a></p><p>*Q5D. Sports Club: <a style="font-weight:bold;">{Q5_D}</a></p><p>*Q5E. Private Use: <a style="font-weight:bold;">{Q5_E}</a></p><p>*Q5F. Community Association: <a style="font-weight:bold;">{Q5_F}</a></p><p>*Q5G. Education (dual use site e.g. school/ university): <a style="font-weight:bold;">{Q5_G}</a></p><p>*Q5H. Other (please specify): <a style="font-weight:bold;">{Q5_H}</a></p><p>*Q6. Approximately what year was the site built in? i.e. 1999: <a style="font-weight:bold;">{Q6}</a></p><p>Q7. Number of full time equivalent staff: <a style="font-weight:bold;">{Q7}</a></p><p>*Q8. What is the current Google rating (Google Map reviews) for the site? E.g. 4.2: <a style="font-weight:bold;">{Q8}</a></p><p>*Q9A-M. Which of the following ancillary facilities do you have? A. Cafe: <a style="font-weight:bold;">{Q9_A}</a></p><p>*Q9B. Retail shop (equipment): <a style="font-weight:bold;">{Q9_B}</a></p><p>Q9C. Changing rooms: <a style="font-weight:bold;">{Q9_C}</a></p><p>Q9D. Lockers: <a style="font-weight:bold;">{Q9_D}</a></p><p>Q9E. BBQ and picnic areas: <a style="font-weight:bold;">{Q9_E}</a></p><p>Q9F. Childrens play area: <a style="font-weight:bold;">{Q9_F}</a></p><p>Q9G. Sauna: <a style="font-weight:bold;">{Q9_G}</a></p><p>Q9H. Spa: <a style="font-weight:bold;">{Q9_H}</a></p><p>Q9I. Creche/ dedicated child care: <a style="font-weight:bold;">{Q9_I}</a></p><p>Q9J. Soft play area (indoor): <a style="font-weight:bold;">{Q9_J}</a></p><p>Q9K. Health/ doctor service (dual use site): <a style="font-weight:bold;">{Q9_K}</a></p><p>Q9L. Physiotherapy/ massage or similar service: <a style="font-weight:bold;">{Q9_L}</a></p><p>Q9M. Other (please specify): <a style="font-weight:bold;">{Q9_M}</a></p><p>*Q10. Facility Access: How many dedicated car parking spaces does your site have?: <a style="font-weight:bold;">{Q10}</a></p><p>Q11. Facility Access: Parking - What is the average hourly cost of parking at your site?: <a style="font-weight:bold;">{Q11}</a></p><p>Q12. Does the gym facility have 24/7 access? (if yes, please only complete the next question if access is different for the rest of the venue): <a style="font-weight:bold;">{Q12}</a></p><p>Q13. If Q12 is Yes, is the facility staffed 24/7: <a style="font-weight:bold;">{Q13}</a></p><p>*Q14-17. When does the site usually open and close i.e. 0630? 14. Weekday - Opening hour: <a style="font-weight:bold;">{Q14}</a></p><p>*Q15. Weekday - Closing hour: <a style="font-weight:bold;">{Q15}</a></p><p>*Q16. Weekend - Opening hour: <a style="font-weight:bold;">{Q16}</a></p><p>*Q17. Weekend - Closing hour: <a style="font-weight:bold;">{Q17}</a></p><p>Q18A-D: If relevant please provide the price of these common types of membership per week i.e. $20.50. A. Adult full access (excluding specific area booking): <a style="font-weight:bold;">{Q18_A}</a></p><p>*Q18B. Adult gym only: <a style="font-weight:bold;">{Q18_B}</a></p><p>Q18C. Adult swim only: <a style="font-weight:bold;">{Q18_C}</a></p><p>Q18D. Swim school session (average per week): <a style="font-weight:bold;">{Q18_D}</a></p><p>Q19A-F. If relevant, which membership promotions are available at the venue? (within the last 3 months) A. No joining fee: <a style="font-weight:bold;">{Q19_A}</a></p><p>Q19B. Free or discounted time e.g. first month half price: <a style="font-weight:bold;">{Q19_B}</a></p><p>Q19C. Free personal training: <a style="font-weight:bold;">{Q19_C}</a></p><p>Q19D. Free class access: <a style="font-weight:bold;">{Q19_D}</a></p><p>Q19E. Discounted membership: <a style="font-weight:bold;">{Q19_E}</a></p><p>Q19F. Other (please specify): <a style="font-weight:bold;">{Q19_F}</a></p><p>Q20. Is a concessionary membership option available?: <a style="font-weight:bold;">{Q20}</a></p><p>Q21. Is your venue a member of a Fitness Passport, ClassPass or similar third party access scheme? Please list this here: <a style="font-weight:bold;">{Q21}</a></p><p>Q22A. Over the next year are there any planned site or facility-specific upgrades? Please provide details with dates if applicable. Planned Upgrade Details: <a style="font-weight:bold;">{Q22_A1}</a></p><p>Q22B. Planned Upgrade Date i.e. MM/YY: <a style="font-weight:bold;">{Q22_A2}</a></p><p>List what sports are played at your site.: <a style="font-weight:bold;">{Q49}</a></p><p>*Q23. Does your site have a gym?: <a style="font-weight:bold;">{Q23}</a></p><p>*Q24. How many equipment stations do you have in your gym i.e. treadmill, bench press etc (free weights don’t count)?: <a style="font-weight:bold;">{Q24}</a></p><p>Q25. What is the average age of your gym equipment? (number of years i.e. 5): <a style="font-weight:bold;">{Q25}</a></p><p>*Q26. When was the gym last refurbished? i.e. 1999: <a style="font-weight:bold;">{Q26}</a></p><p>Q27. How often is the gym cleaned?: <a style="font-weight:bold;">{Q27}</a></p><p>Q28A-K. Please select other features available at your gym. A. Functional training areas: <a style="font-weight:bold;">{Q28_A}</a></p><p>Q28B. Body mass measurement i.e. Boditrax: <a style="font-weight:bold;">{Q28_B}</a></p><p>Q28C. Personal trainer service available: <a style="font-weight:bold;">{Q28_C}</a></p><p>Q28D. Digitally connected equipment e.g Technogym-mywellness: <a style="font-weight:bold;">{Q28_D}</a></p><p>Q28E. Suspension weight training: <a style="font-weight:bold;">{Q28_E}</a></p><p>*Q28F. Group exercise classes offered at the venue: <a style="font-weight:bold;">{Q28_F}</a></p><p>Q28G. Classes offered outside of the venue e.g. in the park or beach: <a style="font-weight:bold;">{Q28_G}</a></p><p>Q28H. Virtual fitness class option: <a style="font-weight:bold;">{Q28_H}</a></p><p>Q28I. Small group training area (gym floor): <a style="font-weight:bold;">{Q28_I}</a></p><p>Q28J. Ladies only area: <a style="font-weight:bold;">{Q28_J}</a></p><p>Q28K. Other (please specify): <a style="font-weight:bold;">{Q28_K}</a></p><p>Q29. How would you rate the overall quality of you gym? (specifically in relation to equipment and appeal of the facility when compared with similar priced alternative sites): <a style="font-weight:bold;">{Q29}</a></p><p>*Q30. How many swimming pools does your facility have?: <a style="font-weight:bold;">{Q30}</a></p><p>Q31A. Type of pool - Swimming pool 1: <a style="font-weight:bold;">{Q31_A}</a></p><p>Q31B. Type of pool - Swimming pool 2: <a style="font-weight:bold;">{Q31_B}</a></p><p>Q31C. Type of pool - Swimming pool 3: <a style="font-weight:bold;">{Q31_C}</a></p><p>Q31D. Type of pool - Swimming pool 4: <a style="font-weight:bold;">{Q31_D}</a></p><p>Q31E. Type of pool - Swimming pool 5: <a style="font-weight:bold;">{Q31_E}</a></p><p>Q31F. Type of pool - Other (please specify): <a style="font-weight:bold;">{Q31_F}</a></p><p>Q32A. Length of pool (metres) - Swimming pool 1: <a style="font-weight:bold;">{Q32_A}</a></p><p>Q32B. Length of pool (metres) - Swimming pool 2: <a style="font-weight:bold;">{Q32_B}</a></p><p>Q32C. Length of pool (metres) - Swimming pool 3: <a style="font-weight:bold;">{Q32_C}</a></p><p>Q32D. Length of pool (metres) - Swimming pool 4: <a style="font-weight:bold;">{Q32_D}</a></p><p>Q32E. Length of pool (metres) - Swimming pool 5: <a style="font-weight:bold;">{Q32_E}</a></p><p>Q33A. Lanes of pool (equivalent) - Swimming pool 1: <a style="font-weight:bold;">{Q33_A}</a></p><p>Q33B. Lanes of pool (equivalent) - Swimming pool 2: <a style="font-weight:bold;">{Q33_B}</a></p><p>Q33C. Lanes of pool (equivalent) - Swimming pool 3: <a style="font-weight:bold;">{Q33_C}</a></p><p>Q33D. Lanes of pool (equivalent) - Swimming pool 4: <a style="font-weight:bold;">{Q33_D}</a></p><p>Q33E. Lanes of pool (equivalent) - Swimming pool 5: <a style="font-weight:bold;">{Q33_E}</a></p><p>Q34. How would you rate the overall quality of your swimming pools? (specifically in relation to equipment and appeal of the facility when compared with similar priced alternative sites): <a style="font-weight:bold;">{Q34}</a></p><p>*Q35. Does your site have studio(s)?: <a style="font-weight:bold;">{Q35}</a></p><p>Q36A-D. What is the size of your studio(s)? - A. Studio 1 (approx. metres squared): <a style="font-weight:bold;">{Q36_A}</a></p><p>Q36B. Studio 2 (approx. metres squared): <a style="font-weight:bold;">{Q36_B}</a></p><p>Q36C. Studio 3 (approx. metres squared): <a style="font-weight:bold;">{Q36_C}</a></p><p>Q36D. Studio 4 (approx. metres squared): <a style="font-weight:bold;">{Q36_D}</a></p><p>Q37. Does your site have squash courts?: <a style="font-weight:bold;">{Q37}</a></p><p>Q38. How many squash courts are there?: <a style="font-weight:bold;">{Q38}</a></p><p>Q39. Does your site have a tennis court(s)?: <a style="font-weight:bold;">{Q39}</a></p><p>Q40. How many tennis courts are there?: <a style="font-weight:bold;">{Q40}</a></p><p>Q41. Does your site have a sports hall?: <a style="font-weight:bold;">{Q41}</a></p><p>Q42A-C. What size are your sport halls? A. Number of badminton courts (equivalent) - Sport hall 1: <a style="font-weight:bold;">{Q42_A}</a></p><p>Q42B. Number of badminton courts (equivalent) - Sport hall 2: <a style="font-weight:bold;">{Q42_B}</a></p><p>Q42C. Number of badminton courts (equivalent) - Sport hall 3: <a style="font-weight:bold;">{Q42_C}</a></p><p>Q43. Does the site have a synthetic turf pitch: <a style="font-weight:bold;">{Q43}</a></p><p>Q44. Total m2 of area across all synthetic pitches (full size football pitch is 6000m2): <a style="font-weight:bold;">{Q44}</a></p><p>Q45. Are any of the synthetic turf pitches floodlit?: <a style="font-weight:bold;">{Q45}</a></p><p>Q46. Does your site have any golf facilities?: <a style="font-weight:bold;">{Q46}</a></p><p>Q47. How many golf holes are on the site i.e. 18: <a style="font-weight:bold;">{Q47}</a></p></div> <!-- END OF TABLE -->
`
const BEL_AUDIT_OTHER_POPUP = `
<div class="scorecard"><h2>{Q2}</h2><h3>FACILITY AUDIT</h3><p>*Site status (if due to open or close): <a style="font-weight:bold;">{Q48}</a></p><p>*Q1. Please insert the name of your organisation: <a style="font-weight:bold;">{Q1}</a></p><p>*Q2. Please insert the name of your site: <a style="font-weight:bold;">{Q2}</a></p><p>*Q3. Please provide the contact email address for the site/ website URL: <a style="font-weight:bold;">{Q3}</a></p><p>Q4. Please provide the specific address for the site: <a style="font-weight:bold;">{Q4}</a></p><p>*Q5A-H. What is the access policy at your site? A. Registered Members: <a style="font-weight:bold;">{Q5_A}</a></p><p>*Q5B. Pay and Play: <a style="font-weight:bold;">{Q5_B}</a></p><p>*Q5C. Free Public Access: <a style="font-weight:bold;">{Q5_C}</a></p><p>*Q5D. Sports Club: <a style="font-weight:bold;">{Q5_D}</a></p><p>*Q5E. Private Use: <a style="font-weight:bold;">{Q5_E}</a></p><p>*Q5F. Community Association: <a style="font-weight:bold;">{Q5_F}</a></p><p>*Q5G. Education (dual use site e.g. school/ university): <a style="font-weight:bold;">{Q5_G}</a></p><p>*Q5H. Other (please specify): <a style="font-weight:bold;">{Q5_H}</a></p><p>*Q6. Approximately what year was the site built in? i.e. 1999: <a style="font-weight:bold;">{Q6}</a></p><p>Q7. Number of full time equivalent staff: <a style="font-weight:bold;">{Q7}</a></p><p>*Q8. What is the current Google rating (Google Map reviews) for the site? E.g. 4.2: <a style="font-weight:bold;">{Q8}</a></p><p>*Q9A-M. Which of the following ancillary facilities do you have? A. Cafe: <a style="font-weight:bold;">{Q9_A}</a></p><p>*Q9B. Retail shop (equipment): <a style="font-weight:bold;">{Q9_B}</a></p><p>Q9C. Changing rooms: <a style="font-weight:bold;">{Q9_C}</a></p><p>Q9D. Lockers: <a style="font-weight:bold;">{Q9_D}</a></p><p>Q9E. BBQ and picnic areas: <a style="font-weight:bold;">{Q9_E}</a></p><p>Q9F. Childrens play area: <a style="font-weight:bold;">{Q9_F}</a></p><p>Q9G. Sauna: <a style="font-weight:bold;">{Q9_G}</a></p><p>Q9H. Spa: <a style="font-weight:bold;">{Q9_H}</a></p><p>Q9I. Creche/ dedicated child care: <a style="font-weight:bold;">{Q9_I}</a></p><p>Q9J. Soft play area (indoor): <a style="font-weight:bold;">{Q9_J}</a></p><p>Q9K. Health/ doctor service (dual use site): <a style="font-weight:bold;">{Q9_K}</a></p><p>Q9L. Physiotherapy/ massage or similar service: <a style="font-weight:bold;">{Q9_L}</a></p><p>Q9M. Other (please specify): <a style="font-weight:bold;">{Q9_M}</a></p><p>*Q10. Facility Access: How many dedicated car parking spaces does your site have?: <a style="font-weight:bold;">{Q10}</a></p><p>Q11. Facility Access: Parking - What is the average hourly cost of parking at your site?: <a style="font-weight:bold;">{Q11}</a></p><p>Q12. Does the gym facility have 24/7 access? (if yes, please only complete the next question if access is different for the rest of the venue): <a style="font-weight:bold;">{Q12}</a></p><p>Q13. If Q12 is Yes, is the facility staffed 24/7: <a style="font-weight:bold;">{Q13}</a></p><p>*Q14-17. When does the site usually open and close i.e. 0630? 14. Weekday - Opening hour: <a style="font-weight:bold;">{Q14}</a></p><p>*Q15. Weekday - Closing hour: <a style="font-weight:bold;">{Q15}</a></p><p>*Q16. Weekend - Opening hour: <a style="font-weight:bold;">{Q16}</a></p><p>*Q17. Weekend - Closing hour: <a style="font-weight:bold;">{Q17}</a></p><p>Q18A-D: If relevant please provide the price of these common types of membership per week i.e. $20.50. A. Adult full access (excluding specific area booking): <a style="font-weight:bold;">{Q18_A}</a></p><p>*Q18B. Adult gym only: <a style="font-weight:bold;">{Q18_B}</a></p><p>Q18C. Adult swim only: <a style="font-weight:bold;">{Q18_C}</a></p><p>Q18D. Swim school session (average per week): <a style="font-weight:bold;">{Q18_D}</a></p><p>Q19A-F. If relevant, which membership promotions are available at the venue? (within the last 3 months) A. No joining fee: <a style="font-weight:bold;">{Q19_A}</a></p><p>Q19B. Free or discounted time e.g. first month half price: <a style="font-weight:bold;">{Q19_B}</a></p><p>Q19C. Free personal training: <a style="font-weight:bold;">{Q19_C}</a></p><p>Q19D. Free class access: <a style="font-weight:bold;">{Q19_D}</a></p><p>Q19E. Discounted membership: <a style="font-weight:bold;">{Q19_E}</a></p><p>Q19F. Other (please specify): <a style="font-weight:bold;">{Q19_F}</a></p><p>Q20. Is a concessionary membership option available?: <a style="font-weight:bold;">{Q20}</a></p><p>Q21. Is your venue a member of a Fitness Passport, ClassPass or similar third party access scheme? Please list this here: <a style="font-weight:bold;">{Q21}</a></p><p>Q22A. Over the next year are there any planned site or facility-specific upgrades? Please provide details with dates if applicable. Planned Upgrade Details: <a style="font-weight:bold;">{Q22_A1}</a></p><p>Q22B. Planned Upgrade Date i.e. MM/YY: <a style="font-weight:bold;">{Q22_A2}</a></p><p>List what sports are played at your site.: <a style="font-weight:bold;">{Q49}</a></p><p>*Q23. Does your site have a gym?: <a style="font-weight:bold;">{Q23}</a></p><p>*Q24. How many equipment stations do you have in your gym i.e. treadmill, bench press etc (free weights don’t count)?: <a style="font-weight:bold;">{Q24}</a></p><p>Q25. What is the average age of your gym equipment? (number of years i.e. 5): <a style="font-weight:bold;">{Q25}</a></p><p>*Q26. When was the gym last refurbished? i.e. 1999: <a style="font-weight:bold;">{Q26}</a></p><p>Q27. How often is the gym cleaned?: <a style="font-weight:bold;">{Q27}</a></p><p>Q28A-K. Please select other features available at your gym. A. Functional training areas: <a style="font-weight:bold;">{Q28_A}</a></p><p>Q28B. Body mass measurement i.e. Boditrax: <a style="font-weight:bold;">{Q28_B}</a></p><p>Q28C. Personal trainer service available: <a style="font-weight:bold;">{Q28_C}</a></p><p>Q28D. Digitally connected equipment e.g Technogym-mywellness: <a style="font-weight:bold;">{Q28_D}</a></p><p>Q28E. Suspension weight training: <a style="font-weight:bold;">{Q28_E}</a></p><p>*Q28F. Group exercise classes offered at the venue: <a style="font-weight:bold;">{Q28_F}</a></p><p>Q28G. Classes offered outside of the venue e.g. in the park or beach: <a style="font-weight:bold;">{Q28_G}</a></p><p>Q28H. Virtual fitness class option: <a style="font-weight:bold;">{Q28_H}</a></p><p>Q28I. Small group training area (gym floor): <a style="font-weight:bold;">{Q28_I}</a></p><p>Q28J. Ladies only area: <a style="font-weight:bold;">{Q28_J}</a></p><p>Q28K. Other (please specify): <a style="font-weight:bold;">{Q28_K}</a></p><p>Q29. How would you rate the overall quality of you gym? (specifically in relation to equipment and appeal of the facility when compared with similar priced alternative sites): <a style="font-weight:bold;">{Q29}</a></p><p>*Q30. How many swimming pools does your facility have?: <a style="font-weight:bold;">{Q30}</a></p><p>Q31A. Type of pool - Swimming pool 1: <a style="font-weight:bold;">{Q31_A}</a></p><p>Q31B. Type of pool - Swimming pool 2: <a style="font-weight:bold;">{Q31_B}</a></p><p>Q31C. Type of pool - Swimming pool 3: <a style="font-weight:bold;">{Q31_C}</a></p><p>Q31D. Type of pool - Swimming pool 4: <a style="font-weight:bold;">{Q31_D}</a></p><p>Q31E. Type of pool - Swimming pool 5: <a style="font-weight:bold;">{Q31_E}</a></p><p>Q31F. Type of pool - Other (please specify): <a style="font-weight:bold;">{Q31_F}</a></p><p>Q32A. Length of pool (metres) - Swimming pool 1: <a style="font-weight:bold;">{Q32_A}</a></p><p>Q32B. Length of pool (metres) - Swimming pool 2: <a style="font-weight:bold;">{Q32_B}</a></p><p>Q32C. Length of pool (metres) - Swimming pool 3: <a style="font-weight:bold;">{Q32_C}</a></p><p>Q32D. Length of pool (metres) - Swimming pool 4: <a style="font-weight:bold;">{Q32_D}</a></p><p>Q32E. Length of pool (metres) - Swimming pool 5: <a style="font-weight:bold;">{Q32_E}</a></p><p>Q33A. Lanes of pool (equivalent) - Swimming pool 1: <a style="font-weight:bold;">{Q33_A}</a></p><p>Q33B. Lanes of pool (equivalent) - Swimming pool 2: <a style="font-weight:bold;">{Q33_B}</a></p><p>Q33C. Lanes of pool (equivalent) - Swimming pool 3: <a style="font-weight:bold;">{Q33_C}</a></p><p>Q33D. Lanes of pool (equivalent) - Swimming pool 4: <a style="font-weight:bold;">{Q33_D}</a></p><p>Q33E. Lanes of pool (equivalent) - Swimming pool 5: <a style="font-weight:bold;">{Q33_E}</a></p><p>Q34. How would you rate the overall quality of your swimming pools? (specifically in relation to equipment and appeal of the facility when compared with similar priced alternative sites): <a style="font-weight:bold;">{Q34}</a></p><p>*Q35. Does your site have studio(s)?: <a style="font-weight:bold;">{Q35}</a></p><p>Q36A-D. What is the size of your studio(s)? - A. Studio 1 (approx. metres squared): <a style="font-weight:bold;">{Q36_A}</a></p><p>Q36B. Studio 2 (approx. metres squared): <a style="font-weight:bold;">{Q36_B}</a></p><p>Q36C. Studio 3 (approx. metres squared): <a style="font-weight:bold;">{Q36_C}</a></p><p>Q36D. Studio 4 (approx. metres squared): <a style="font-weight:bold;">{Q36_D}</a></p><p>Q37. Does your site have squash courts?: <a style="font-weight:bold;">{Q37}</a></p><p>Q38. How many squash courts are there?: <a style="font-weight:bold;">{Q38}</a></p><p>Q39. Does your site have a tennis court(s)?: <a style="font-weight:bold;">{Q39}</a></p><p>Q40. How many tennis courts are there?: <a style="font-weight:bold;">{Q40}</a></p><p>Q41. Does your site have a sports hall?: <a style="font-weight:bold;">{Q41}</a></p><p>Q42A-C. What size are your sport halls? A. Number of badminton courts (equivalent) - Sport hall 1: <a style="font-weight:bold;">{Q42_A}</a></p><p>Q42B. Number of badminton courts (equivalent) - Sport hall 2: <a style="font-weight:bold;">{Q42_B}</a></p><p>Q42C. Number of badminton courts (equivalent) - Sport hall 3: <a style="font-weight:bold;">{Q42_C}</a></p><p>Q43. Does the site have a synthetic turf pitch: <a style="font-weight:bold;">{Q43}</a></p><p>Q44. Total m2 of area across all synthetic pitches (full size football pitch is 6000m2): <a style="font-weight:bold;">{Q44}</a></p><p>Q45. Are any of the synthetic turf pitches floodlit?: <a style="font-weight:bold;">{Q45}</a></p><p>Q46. Does your site have any golf facilities?: <a style="font-weight:bold;">{Q46}</a></p><p>Q47. How many golf holes are on the site i.e. 18: <a style="font-weight:bold;">{Q47}</a></p><p>Q9K1. Climbing wall: <a style="font-weight:bold;">{Q9K1}</a></p><p>QL1. Bouldering wall/ area: <a style="font-weight:bold;">{QL1}</a></p></div> <!-- END OF TABLE -->
`



// ALL LOCATIONS
const SITE_ALL_POPUP = `
<div class="standard-popup">
<h2>{SITE_NAME}</h2>
<p>1A. MEMBERS (SITE)</p>
<h3>{SITE_MEM_ALL}</h3>
<p>4A. TARGET UNMET DEMAND (SITE)</p>
<h3>{CTCH_TARG_UNMT_DEM_ALL}</h3>
<p>4B. ALLOCATED UNMET DEMAND (SITE)</p>
<h3>{CTCH_ALLO_UNMT_DEM_ALL}</h3>
<p>5. PERFORMANCE BALANCE (SITE)</p>
<h3>{CTCH_PERF_BAL_ALL}%</h3>
</div> <!-- END OF TABLE -->
`
const AREA_ALL_POPUP = `
<div class="standard-popup">
<h2>{AREA_NAME}</h2>
<p>1B. MEMBERS (AREA)</p>
<h3>{AREA_MEM_ALL}</h3>
<p>2. DEMAND (AREA)</p>
<h3>{AREA_DEM_ALL}</h3
<p>3. CONVERSION (AREA)</p>
<h3>{AREA_DEM_CNV_ALL}%</h3>
<p>4C. UNMET DEMAND (AREA)</p>
<h3>{AREA_UNMT_DEM_ALL}</h3>
<!-- <p>4D. UNMET DEMAND - AGG. CATCHMENT (AREA)</p>
<h3>{AREA_UNMT_DEM_AGG_ALL}</h3> -->
</div> <!-- END OF TABLE -->
`
//HEALTH
const SITE_HEALTH_POPUP = `
<div class="standard-popup">
<h2>{SITE_NAME}</h2>
<p>1A. MEMBERS (SITE)</p>
<h3>{SITE_MEM_HLTH}</h3>
<p>4A. TARGET UNMET DEMAND (SITE)</p>
<h3>{CTCH_TARG_UNMT_DEM_HLTH}</h3>
<p>4B. ALLOCATED UNMET DEMAND (SITE)</p>
<h3>{CTCH_ALLO_UNMT_DEM_HLTH}</h3>
<p>5. PERFORMANCE BALANCE (SITE)</p>
<h3>{CTCH_PERF_BAL_HLTH}%</h3>
</div><!-- END OF POPUP -->
`
const AREA_HEALTH_POPUP = `
<div class="standard-popup">
<h2>{AREA_NAME}</h2>
<p>1B. MEMBERS (AREA)</p>
<h3>{AREA_MEM_HLTH}</h3>
<p>2. DEMAND (AREA)</p>
<h3>{AREA_DEM_HLTH}</h3>
<p>3. CONVERSION (AREA)</p>
<h3>{AREA_DEM_CNV_HLTH}%</h3>
<p>4C. UNMET DEMAND (AREA)</p>
<h3>{AREA_UNMT_DEM_HLTH}</h3>
<!-- <p>4D. UNMET DEMAND - AGG. CATCHMENT (AREA)</p>
<h3>{AREA_UNMT_DEM_AGG_HLTH}</h3>-->
</div> <!-- END OF TABLE -->
`

//AQUATIC
const SITE_AQUATIC_POPUP = `
<div class="standard-popup">
<h2>{SITE_NAME}</h2>
<p>1A. MEMBERS (SITE)</p>
<h3>{SITE_MEM_AQU}</h3>
<p>4A. TARGET UNMET DEMAND (SITE)</p>
<h3>{CTCH_TARG_UNMT_DEM_AQU}</h3>
<p>4B. ALLOCATED UNMET DEMAND (SITE)</p>
<h3>{CTCH_ALLO_UNMT_DEM_AQU}</h3>
<p>5. PERFORMANCE BALANCE (SITE)</p>
<h3>{CTCH_PERF_BAL_AQU}%</h3>
</div><!-- END OF POPUP -->
`
const AREA_AQUATIC_POPUP = `
<div class="standard-popup">
<h2>{AREA_NAME}</h2>
<p>1B. MEMBERS (AREA)</p>
<h3>{AREA_MEM_AQU}</h3>
<p>2. DEMAND (AREA)</p>
<h3>{AREA_DEM_AQU}</h3>
<p>3. CONVERSION (AREA)</p>
<h3>{AREA_DEM_CNV_AQU}%</h3>
<p>4C. UNMET DEMAND (AREA)</p>
<h3>{AREA_UNMT_DEM_AQU}</h3>
<!--<p>4D. UNMET DEMAND - AGG. CATCHMENT (AREA)</p>
<h3>{AREA_UNMT_DEM_AGG_AQU}</h3>-->
</div> <!-- END OF TABLE -->
`

// SWIM
const SITE_SWIM_POPUP = `
<div class="standard-popup">
<h2>{SITE_NAME}</h2>
<p>1A. MEMBERS (SITE)</p>
<h3>{SITE_MEM_SWM}</h3>
<p>4A. TARGET UNMET DEMAND (SITE)</p>
<h3>{CTCH_TARG_UNMT_DEM_SWM}</h3>
<p>4B. ALLOCATED UNMET DEMAND (SITE)</p>
<h3>{CTCH_ALLO_UNMT_DEM_SWM}</h3>
p>5. PERFORMANCE BALANCE (SITE)</p>
<h3>{CTCH_PERF_BAL_SWM}%</h3>
</div><!-- END OF POPUP -->
`
const AREA_SWIM_POPUP = `
<div class="standard-popup">
<h2>{AREA_NAME}</h2>
<p>1B. MEMBERS (AREA)</p>
<h3>{AREA_MEM_SWM}</h3>
<p>2. DEMAND (AREA)</p>
<h3>{AREA_DEM_SWM}</h3>
<p>3. CONVERSION (AREA)</p>
<h3>{AREA_DEM_CNV_SWM}%</h3>
<p>4C. UNMET DEMAND (AREA)</p>
<h3>{AREA_UNMT_DEM_SWM}</h3>
<!--<p>4D. UNMET DEMAND - AGG. CATCHMENT (AREA)</p>
<h3>{AREA_UNMT_DEM_AGG_SWM}</h3>-->
</div> <!-- END OF TABLE -->
`


//MEMBER KPIS / CAMPAIGNS
const CAMPAIGNS_RET_POPUP = `
<div class="standard-popup">
<h2>{SITE_NAME}</h2>
<p>1. MEMBER LIFETIME VALUE (SITE)</p>
<h4>$ {SITE_MEM_LTV}</h4>
<p>2. MEMBERS IN DROP OUT ZONE (SITE)</p>
<h4>{SITE_MEM_DOZ}</h4>
<p>3. MEMBER VALUE OF DROP OUT ZONE (SITE)</p>
<h4>$ {SITE_MEM_DOZ_VAL}</h4><br>
<!-- RETENTION BOX --><a class="contact-button" href="mailto:intelligence@activexchange.org?subject=SportsEye%Demo%20activeCAMPAIGNS%20Retention%3A%20{SITE_NAME}&amp;body=My%20AX%20Data%20Team%2C%0A%0AI%20am%20emailing%20about%20using%20SportsEye%20intelligence%20to%20engage%20current%20or%20potential%20members%20more%20effectively%20at%20{SITE_NAME}." target=_blank ><span class="h2">RETENTION RISK</span><span class="contact-icon"></span><span class="p">Click here to request full details on members about to cancel and deliver targeted campaigns.</span></a></div><!-- END OF POPUP -->
`

const CAMPAIGNS_AQU_POPUP = `
<div class="standard-popup">
<h2>{SITE_NAME}</h2>
<a>1. UNMET DEMAND CONVERSION (SITE)</a>
<h4>{SITE_UNMT_DEM_CNV}%</h4>
<a>2. UNMET DEMAND VALUE (SITE)</a>
<h4>$ {SITE_UNMT_DEM_VAL}</h4><br>
<a>3. CAMPAIGN QUOTE</a>
<h4>$ {SITE_CAMPAIGN_QUOTE}</h4><br>
<!-- ACQUISITION BOX --><a class="contact-button" href="mailto:intelligence@activexchange.org?subject=SportsEye%20Demo%20activeCAMPAIGNS%20Acquisition%3A%20{SITE_NAME}&amp;body=My%20AX%20Data%20Team%2C%0A%0AI%20am%20emailing%20about%20using%20SportsEye%20intelligence%20to%20engage%20current%20or%20potential%20members%20more%20effectively%20at%20{SITE_NAME}." target=_blank ><span class="h2">ACQUISITION</span><span class="contact-icon"></span><span class="p">Click here for a quote to target these potential members (partner discount applicable).</span></a></div><!-- END OF POPUP -->
`

//AX DATA TEAM

//COMMUNITY PRIORITIES
//account specific
const SITE_COMMUNITY_POPUP = `
<div class="standard-popup">
<h2>{SITE_NAME}</h2>
<p>1. DEPRIVATION CONVERSION (SITE)</p>
<h3>{CTCH_DEP_CNV}%</h3>
<p>2. AXC RISK OF INACTIVITY CONVERSION (SITE)</p>
<h3>{CTCH_ROI_CNV}%</h3>
<p>3. SOCIAL VALUE GENERATED IN LAST CALENDAR YEAR (SITE)</p>
<h3>$ {CTCH_SV_GEN}</h3>
<p>4. SOCIAL VALUE PERCENTAGE CHANGE BETWEEN LAST 2 CALENDAR YEARS (SITE)</p>
<h3>{CTCH_SV_CHNG} %</h3>
</div> <!-- END OF TABLE -->
<a class="contact-button" href="{SITE_SV_DB}" target=_blank ><span class="h2">SOCIAL VALUE SUMMARY DASHBOARD</span><span class="dashboard-icon"></span><span class="p">Click here to view Social Value Summary Dashboard for subscribed Sites.</span></a>
<a class="contact-button" href="mailto:intelligence@activexchange.org?subject=SportsEye%20Social%20Value%20Demo%3A%20{SITE_NAME}&amp;body=My%20AX%20Data%20Team%2C%0A%0AI%20am%20emailing%20about%20a%20Social%20Value%20Report%20for%20{SITE_NAME}." target=_blank >
  <span class="h2">ORDER SOCIAL VALUE REPORT</span>
  <span class="contact-icon"></span>
  <span class="p">Click here to order Social Value Report from the AX Data Team.</span>
</a>
`
const AREA_COMMUNITY_HF_POPUP = `
<div class="standard-popup"><h2>{AREA_NAME}</h2><a>1. I love to do as many sports as possible: <b>{CX_HF_1}</b></a><br><a>2. I would like to be able to lose weight: <b>{CX_HF_2}</b></a><br><a>3. I’m concerned about my cholesterol level: <b>{CX_HF_3}</b></a><br><a>4. I try to get enough calcium in my diet: <b>{CX_HF_4}</b></a><br><a>5. I’m feeling well and in good health: <b>{CX_HF_5}</b></a><br><a>6. I’m constantly watching my weight: <b>{CX_HF_6}</b></a><br><a>7. Played a sport: <b>{CX_HF_7}</b></a><br><a>8. Did some formal exercise (e.g. gym, aerobics, running, cycling, etc.): <b>{CX_HF_8}</b></a><br><br><a><!-- <b>Total Population: {Total_Population}</b>END OF TABLE --></a></div> <!-- END OF TABLE -->
`

const AREA_COMMUNITY_POPUP = `
<div class="standard-popup"><h2>{AREA_NAME}</h2><a>1. DEPRIVATION</a><h3>{CX_DEPRIVATION}</h3><a>2. NEED ASSISTANCE (DISABILITY)</a><h3>{CX_AXC_ASSIST}</h3><a>3. AXC RISK OF INACTIVITY</a><h3>{CX_INACTIVITY}</h3></div> <!-- END OF TABLE -->
`

/////////////////////////////////////////////////////////////////////////////////////

// PART 4: APPLICATION  LAYER CONFIGURATION



const DESC_SITE_PERF_BAL = `
<b>Members / Demand</b><br>Red: Under-performing<br>Green: Over-performing
`


// CONSTANTS
const POINT_POPUP_HOVER = `
<h4>{SITE_NAME}</h4><i>Click to view full site details</i>
`
const AREA_POPUP_HOVER = `
<h4>AREA NAME</h4><i>Click to view full site details</i>
`

//TEMPORARY TEXT

const SAMPLE_DROP = `
`

//TEMPORARY POPUPS
const POINT_DATAMAP = `
<p>AXC_ID: {AXC_ID}</p><p>SITE_NAME: {SITE_NAME}</p><p>LONGITUDE: SBK note - this won’t read through</p><p>LATITUDE: SBK note - this won’t read through</p><p>SITE_MEM_ALL: {SITE_MEM_ALL}</p><p>CTCH_UNMT_DEM_ALL: {CTCH_UNMT_DEM_ALL}</p><p>CTCH_UNMT_DEM_AGG_ALL: {CTCH_UNMT_DEM_AGG_ALL}</p><p>CTCH_PERF_BAL_ALL: {CTCH_PERF_BAL_ALL}</p><p>SITE_MEM_SEG_1: {SITE_MEM_SEG_1}</p><p>SITE_MEM_SEG_2: {SITE_MEM_SEG_2}</p><p>SITE_MEM_SEG_3: {SITE_MEM_SEG_3}</p><p>SITE_MEM_SEG_4: {SITE_MEM_SEG_4}</p><p>SITE_MEM_SEG_5: {SITE_MEM_SEG_5}</p><p>SITE_MEM_SEG_6: {SITE_MEM_SEG_6}</p><p>SITE_MEM_SEG_7: {SITE_MEM_SEG_7}</p><p>SITE_MEM_SEG_8: {SITE_MEM_SEG_8}</p><p>SITE_MEM_SEG_9: {SITE_MEM_SEG_9}</p><p>SITE_MEM_SEG_10: {SITE_MEM_SEG_10}</p><p>SITE_MEM_SEG_1_PCNT: {SITE_MEM_SEG_1_PCNT}</p><p>SITE_MEM_SEG_2_PCNT: {SITE_MEM_SEG_2_PCNT}</p><p>SITE_MEM_SEG_3_PCNT: {SITE_MEM_SEG_3_PCNT}</p><p>SITE_MEM_SEG_4_PCNT: {SITE_MEM_SEG_4_PCNT}</p><p>SITE_MEM_SEG_5_PCNT: {SITE_MEM_SEG_5_PCNT}</p><p>SITE_MEM_SEG_6_PCNT: {SITE_MEM_SEG_6_PCNT}</p><p>SITE_MEM_SEG_7_PCNT: {SITE_MEM_SEG_7_PCNT}</p><p>SITE_MEM_SEG_8_PCNT: {SITE_MEM_SEG_8_PCNT}</p><p>SITE_MEM_SEG_9_PCNT: {SITE_MEM_SEG_9_PCNT}</p><p>SITE_MEM_SEG_10_PCNT: {SITE_MEM_SEG_10_PCNT}</p><p>SITE_MEM_GRP_EXP_1: {SITE_MEM_GRP_EXP_1}</p><p>SITE_MEM_GRP_EXP_2: {SITE_MEM_GRP_EXP_2}</p><p>SITE_MEM_GRP_EXP_3: {SITE_MEM_GRP_EXP_3}</p><p>SITE_MEM_GRP_EXP_4: {SITE_MEM_GRP_EXP_4}</p><p>SITE_MEM_GRP_EXP_5: {SITE_MEM_GRP_EXP_5}</p><p>SITE_MEM_GRP_EXP_6: {SITE_MEM_GRP_EXP_6}</p><p>SITE_MEM_GRP_EXP_7: {SITE_MEM_GRP_EXP_7}</p><p>SITE_MEM_GRP_EXP_8: {SITE_MEM_GRP_EXP_8}</p><p>SITE_MEM_GRP_EXP_9: {SITE_MEM_GRP_EXP_9}</p><p>SITE_MEM_GRP_EXP_10: {SITE_MEM_GRP_EXP_10}</p><p>SITE_MEM_GRP_EXP_1_PCNT: {SITE_MEM_GRP_EXP_1_PCNT}</p><p>SITE_MEM_GRP_EXP_2_PCNT: {SITE_MEM_GRP_EXP_2_PCNT}</p><p>SITE_MEM_GRP_EXP_3_PCNT: {SITE_MEM_GRP_EXP_3_PCNT}</p><p>SITE_MEM_GRP_EXP_4_PCNT: {SITE_MEM_GRP_EXP_4_PCNT}</p><p>SITE_MEM_GRP_EXP_5_PCNT: {SITE_MEM_GRP_EXP_5_PCNT}</p><p>SITE_MEM_GRP_EXP_6_PCNT: {SITE_MEM_GRP_EXP_6_PCNT}</p><p>SITE_MEM_GRP_EXP_7_PCNT: {SITE_MEM_GRP_EXP_7_PCNT}</p><p>SITE_MEM_GRP_EXP_8_PCNT: {SITE_MEM_GRP_EXP_8_PCNT}</p><p>SITE_MEM_GRP_EXP_9_PCNT: {SITE_MEM_GRP_EXP_9_PCNT}</p><p>SITE_MEM_GRP_EXP_10_PCNT: {SITE_MEM_GRP_EXP_10_PCNT}</p><p>SITE_MEM_HLTH_OP: {SITE_MEM_HLTH_OP}</p><p>SITE_MEM_AQU_SP_1: {SITE_MEM_AQU_SP_1}</p><p>SITE_MEM_AQU_SP_2: {SITE_MEM_AQU_SP_2}</p><p>SITE_MEM_AQU_SP_3: {SITE_MEM_AQU_SP_3}</p><p>SITE_MEM_AQU_SP_4: {SITE_MEM_AQU_SP_4}</p><p>SITE_MEM_AQU_SP_5: {SITE_MEM_AQU_SP_5}</p><p>SITE_MEM_AQU_SP_6: {SITE_MEM_AQU_SP_6}</p><p>SITE_MEM_AQU_SP_7: {SITE_MEM_AQU_SP_7}</p><p>SITE_MEM_AQU_SP_8: {SITE_MEM_AQU_SP_8}</p><p>SITE_MEM_AQU_SP_9: {SITE_MEM_AQU_SP_9}</p><p>SITE_MEM_AQU_SP_10: {SITE_MEM_AQU_SP_10}</p><p>SITE_MEM_AQU_SP_1_PCNT: {SITE_MEM_AQU_SP_1_PCNT}</p><p>SITE_MEM_AQU_SP_2_PCNT: {SITE_MEM_AQU_SP_2_PCNT}</p><p>SITE_MEM_AQU_SP_3_PCNT: {SITE_MEM_AQU_SP_3_PCNT}</p><p>SITE_MEM_AQU_SP_4_PCNT: {SITE_MEM_AQU_SP_4_PCNT}</p><p>SITE_MEM_AQU_SP_5_PCNT: {SITE_MEM_AQU_SP_5_PCNT}</p><p>SITE_MEM_AQU_SP_6_PCNT: {SITE_MEM_AQU_SP_6_PCNT}</p><p>SITE_MEM_AQU_SP_7_PCNT: {SITE_MEM_AQU_SP_7_PCNT}</p><p>SITE_MEM_AQU_SP_8_PCNT: {SITE_MEM_AQU_SP_8_PCNT}</p><p>SITE_MEM_AQU_SP_9_PCNT: {SITE_MEM_AQU_SP_9_PCNT}</p><p>SITE_MEM_AQU_SP_10_PCNT: {SITE_MEM_AQU_SP_10_PCNT}</p><p>SITE_MEM_AQU_OP: {SITE_MEM_AQU_OP}</p><p>SITE_UNMT_DEM_SEG_1: {SITE_UNMT_DEM_SEG_1}</p><p>SITE_UNMT_DEM_SEG_2: {SITE_UNMT_DEM_SEG_2}</p><p>SITE_UNMT_DEM_SEG_3: {SITE_UNMT_DEM_SEG_3}</p><p>SITE_UNMT_DEM_SEG_4: {SITE_UNMT_DEM_SEG_4}</p><p>SITE_UNMT_DEM_SEG_5: {SITE_UNMT_DEM_SEG_5}</p><p>SITE_UNMT_DEM_SEG_6: {SITE_UNMT_DEM_SEG_6}</p><p>SITE_UNMT_DEM_SEG_7: {SITE_UNMT_DEM_SEG_7}</p><p>SITE_UNMT_DEM_SEG_8: {SITE_UNMT_DEM_SEG_8}</p><p>SITE_UNMT_DEM_SEG_9: {SITE_UNMT_DEM_SEG_9}</p><p>SITE_UNMT_DEM_SEG_10: {SITE_UNMT_DEM_SEG_10}</p><p>SITE_UNMT_DEM_SEG_1_PCNT: {SITE_UNMT_DEM_SEG_1_PCNT}</p><p>SITE_UNMT_DEM_SEG_2_PCNT: {SITE_UNMT_DEM_SEG_2_PCNT}</p><p>SITE_UNMT_DEM_SEG_3_PCNT: {SITE_UNMT_DEM_SEG_3_PCNT}</p><p>SITE_UNMT_DEM_SEG_4_PCNT: {SITE_UNMT_DEM_SEG_4_PCNT}</p><p>SITE_UNMT_DEM_SEG_5_PCNT: {SITE_UNMT_DEM_SEG_5_PCNT}</p><p>SITE_UNMT_DEM_SEG_6_PCNT: {SITE_UNMT_DEM_SEG_6_PCNT}</p><p>SITE_UNMT_DEM_SEG_7_PCNT: {SITE_UNMT_DEM_SEG_7_PCNT}</p><p>SITE_UNMT_DEM_SEG_8_PCNT: {SITE_UNMT_DEM_SEG_8_PCNT}</p><p>SITE_UNMT_DEM_SEG_9_PCNT: {SITE_UNMT_DEM_SEG_9_PCNT}</p><p>SITE_UNMT_DEM_SEG_10_PCNT: {SITE_UNMT_DEM_SEG_10_PCNT}</p><p>SITE_UNMT_DEM_GRP_EXP_1: {SITE_UNMT_DEM_GRP_EXP_1}</p><p>SITE_UNMT_DEM_GRP_EXP_2: {SITE_UNMT_DEM_GRP_EXP_2}</p><p>SITE_UNMT_DEM_GRP_EXP_3: {SITE_UNMT_DEM_GRP_EXP_3}</p><p>SITE_UNMT_DEM_GRP_EXP_4: {SITE_UNMT_DEM_GRP_EXP_4}</p><p>SITE_UNMT_DEM_GRP_EXP_5: {SITE_UNMT_DEM_GRP_EXP_5}</p><p>SITE_UNMT_DEM_GRP_EXP_6: {SITE_UNMT_DEM_GRP_EXP_6}</p><p>SITE_UNMT_DEM_GRP_EXP_7: {SITE_UNMT_DEM_GRP_EXP_7}</p><p>SITE_UNMT_DEM_GRP_EXP_8: {SITE_UNMT_DEM_GRP_EXP_8}</p><p>SITE_UNMT_DEM_GRP_EXP_9: {SITE_UNMT_DEM_GRP_EXP_9}</p><p>SITE_UNMT_DEM_GRP_EXP_10: {SITE_UNMT_DEM_GRP_EXP_10}</p><p>SITE_UNMT_DEM_GRP_EXP_1_PCNT: {SITE_UNMT_DEM_GRP_EXP_1_PCNT}</p><p>SITE_UNMT_DEM_GRP_EXP_2_PCNT: {SITE_UNMT_DEM_GRP_EXP_2_PCNT}</p><p>SITE_UNMT_DEM_GRP_EXP_3_PCNT: {SITE_UNMT_DEM_GRP_EXP_3_PCNT}</p><p>SITE_UNMT_DEM_GRP_EXP_4_PCNT: {SITE_UNMT_DEM_GRP_EXP_4_PCNT}</p><p>SITE_UNMT_DEM_GRP_EXP_5_PCNT: {SITE_UNMT_DEM_GRP_EXP_5_PCNT}</p><p>SITE_UNMT_DEM_GRP_EXP_6_PCNT: {SITE_UNMT_DEM_GRP_EXP_6_PCNT}</p><p>SITE_UNMT_DEM_GRP_EXP_7_PCNT: {SITE_UNMT_DEM_GRP_EXP_7_PCNT}</p><p>SITE_UNMT_DEM_GRP_EXP_8_PCNT: {SITE_UNMT_DEM_GRP_EXP_8_PCNT}</p><p>SITE_UNMT_DEM_GRP_EXP_9_PCNT: {SITE_UNMT_DEM_GRP_EXP_9_PCNT}</p><p>SITE_UNMT_DEM_GRP_EXP_10_PCNT: {SITE_UNMT_DEM_GRP_EXP_10_PCNT}</p><p>SITE_UNMT_DEM_HLTH_OP: {SITE_UNMT_DEM_HLTH_OP}</p><p>SITE_UNMT_DEM_AQU_SP_1: {SITE_UNMT_DEM_AQU_SP_1}</p><p>SITE_UNMT_DEM_AQU_SP_2: {SITE_UNMT_DEM_AQU_SP_2}</p><p>SITE_UNMT_DEM_AQU_SP_3: {SITE_UNMT_DEM_AQU_SP_3}</p><p>SITE_UNMT_DEM_AQU_SP_4: {SITE_UNMT_DEM_AQU_SP_4}</p><p>SITE_UNMT_DEM_AQU_SP_5: {SITE_UNMT_DEM_AQU_SP_5}</p><p>SITE_UNMT_DEM_AQU_SP_6: {SITE_UNMT_DEM_AQU_SP_6}</p><p>SITE_UNMT_DEM_AQU_SP_7: {SITE_UNMT_DEM_AQU_SP_7}</p><p>SITE_UNMT_DEM_AQU_SP_8: {SITE_UNMT_DEM_AQU_SP_8}</p><p>SITE_UNMT_DEM_AQU_SP_9: {SITE_UNMT_DEM_AQU_SP_9}</p><p>SITE_UNMT_DEM_AQU_SP_10: {SITE_UNMT_DEM_AQU_SP_10}</p><p>SITE_UNMT_DEM_AQU_SP_1_PCNT: {SITE_UNMT_DEM_AQU_SP_1_PCNT}</p><p>SITE_UNMT_DEM_AQU_SP_2_PCNT: {SITE_UNMT_DEM_AQU_SP_2_PCNT}</p><p>SITE_UNMT_DEM_AQU_SP_3_PCNT: {SITE_UNMT_DEM_AQU_SP_3_PCNT}</p><p>SITE_UNMT_DEM_AQU_SP_4_PCNT: {SITE_UNMT_DEM_AQU_SP_4_PCNT}</p><p>SITE_UNMT_DEM_AQU_SP_5_PCNT: {SITE_UNMT_DEM_AQU_SP_5_PCNT}</p><p>SITE_UNMT_DEM_AQU_SP_6_PCNT: {SITE_UNMT_DEM_AQU_SP_6_PCNT}</p><p>SITE_UNMT_DEM_AQU_SP_7_PCNT: {SITE_UNMT_DEM_AQU_SP_7_PCNT}</p><p>SITE_UNMT_DEM_AQU_SP_8_PCNT: {SITE_UNMT_DEM_AQU_SP_8_PCNT}</p><p>SITE_UNMT_DEM_AQU_SP_9_PCNT: {SITE_UNMT_DEM_AQU_SP_9_PCNT}</p><p>SITE_UNMT_DEM_AQU_SP_10_PCNT: {SITE_UNMT_DEM_AQU_SP_10_PCNT}</p><p>SITE_UNMT_DEM_AQU_OP: {SITE_UNMT_DEM_AQU_OP}</p><p>SITE_HEALTH_FLAG: {SITE_HEALTH_FLAG}</p><p>SITE_MEM_HLTH: {SITE_MEM_HLTH}</p><p>CTCH_UNMT_DEM_HLTH: {CTCH_UNMT_DEM_HLTH}</p><p>CTCH_PERF_BAL_HLTH: {CTCH_PERF_BAL_HLTH}</p><p>SITE_AQUATIC_FLAG: {SITE_AQUATIC_FLAG}</p><p>SITE_MEM_AQU: {SITE_MEM_AQU}</p><p>CTCH_UNMT_DEM_AQU: {CTCH_UNMT_DEM_AQU}</p><p>CTCH_PERF_BAL_AQU: {CTCH_PERF_BAL_AQU}</p><p>SITE_SWIM_FLAG: {SITE_SWIM_FLAG}</p><p>SITE_MEM_SWM: {SITE_MEM_SWM}</p><p>CTCH_UNMT_DEM_SWM: {CTCH_UNMT_DEM_SWM}</p><p>CTCH_PERF_BAL_SWM: {CTCH_PERF_BAL_SWM}</p><p>SITE_MEM_LTV: {SITE_MEM_LTV}</p><p>SITE_MEM_DOZ: {SITE_MEM_DOZ}</p><p>SITE_MEM_DOZ_VAL: {SITE_MEM_DOZ_VAL}</p><p>SITE_UNMT_DEM_CNV: {SITE_UNMT_DEM_CNV}</p><p>SITE_UNMT_DEM_VAL: {SITE_UNMT_DEM_VAL}</p><p>CTCH_DEP_CNV: {CTCH_DEP_CNV}</p><p>CTCH_ROI_CNV: {CTCH_ROI_CNV}</p><p>CTCH_SV_GEN: {CTCH_SV_GEN}</p><p>CTCH_SV_CHNG: {CTCH_SV_CHNG}</p>
`

const POINT_CUSTOM_DATAMAP = `
<p>AXC_ID: {AXC_ID}</p><p>SITE_NAME: {SITE_NAME}</p><p>LATITUDE: SBK note - this won’t read through</p><p>LONGITUDE: SBK note - this won’t read through</p><p>RETENTION_FLAG: {RETENTION_FLAG}</p><p>RETENTION_TEXT: {RETENTION_TEXT}</p><p>RETENTION_DL: {RETENTION_DL}</p><p>SCORECARD_FLAG: {SCORECARD_FLAG}</p><p>SCORECARD_DATE: {SCORECARD_DATE}</p><p>SCORECARD_P1_CATEGORY_1: {SCORECARD_P1_CATEGORY_1}</p><p>SCORECARD_P1_CATEGORY_2: {SCORECARD_P1_CATEGORY_2}</p><p>SCORECARD_P1_CATEGORY_3: {SCORECARD_P1_CATEGORY_3}</p><p>SCORECARD_P1_CATEGORY_4: {SCORECARD_P1_CATEGORY_4}</p><p>SCORECARD_P1_ACTION: {SCORECARD_P1_ACTION}</p><p>SCORECARD_P1_VALUE: {SCORECARD_P1_VALUE}</p><p>SCORECARD_P2_CATEGORY_1: {SCORECARD_P2_CATEGORY_1}</p><p>SCORECARD_P2_CATEGORY_2: {SCORECARD_P2_CATEGORY_2}</p><p>SCORECARD_P2_CATEGORY_3: {SCORECARD_P2_CATEGORY_3}</p><p>SCORECARD_P2_CATEGORY_4: {SCORECARD_P2_CATEGORY_4}</p><p>SCORECARD_P2_ACTION: {SCORECARD_P2_ACTION}</p><p>SCORECARD_P2_VALUE: {SCORECARD_P2_VALUE}</p><p>SCORECARD_P3_CATEGORY_1: {SCORECARD_P3_CATEGORY_1}</p><p>SCORECARD_P3_CATEGORY_2: {SCORECARD_P3_CATEGORY_2}</p><p>SCORECARD_P3_CATEGORY_3: {SCORECARD_P3_CATEGORY_3}</p><p>SCORECARD_P3_CATEGORY_4: {SCORECARD_P3_CATEGORY_4}</p><p>SCORECARD_P3_ACTION: {SCORECARD_P3_ACTION}</p><p>SCORECARD_P3_VALUE: {SCORECARD_P3_VALUE}</p>
`

const POINT_POPUP_CLICK = `
<h4>{SITE_NAME}</h4><p>[SECTION BREAKDOWN OF DATA]</p>
`

const AREA_POPUP_CLICK = `
<h4>AREA NAME</h4><p>[SECTION BREAKDOWN OF DATA]</p>
`

const SPORT_FACILITIES_LEGEND = `
<p>Delivery venues for the sport across NSW.</p>
<p>Hover over sites to view the clubs who identify this facility as their home venue.</p>
`

const SPORT_SEGMENT_LEGEND = `
<p>Top demographic lifestyle segments, ranked according to the percentage of the overall sport profile.</p>
<ol><li>A01</li><li>B02</li><li>C10</li><li>D35</li><li>M10</li></ol>
<p>Full details on all 49 possible segments, which are provided by ActiveXchange’s profiling partner Experian, can be found <a href="https://activexchange.org/segments" target="_blank">here<a></p>
`

const CATEGORIES = [
  {
    id: 'PART-A',
    name: 'SITE & AREA PERFORMANCE',
    collapsible: true,
    type: 'CODE_VIEWER',
    CODES: [
      {
        name: 'AUDIT',
        id: '1A',
        image: '/images/SportsEye_Swimming.jpg',
        summary: ADT_MODULE_SUMMARY,
        sections: [
          {
            heading: '1. AUDIT SITES',
            text: SAMPLE_DROP,
            icon: POINT_ICON,
            layers: [
              {
                name: 'BELGRAVIA SITES',
                id: 'BEL_AUDIT_BEL',
                legendText: 'Audit Site',
                click: BEL_AUDIT_BEL_POPUP,
                hover: BEL_AUDIT_POPUP_HOVER,
              },
            ]
          },//END OF SECTION
          {
            heading: '2. COMPETITOR - GYM ONLY',
            text: SAMPLE_DROP,
            icon: POINT_ICON,
            layers: [
              {
                name: 'COMPETITOR - GYM ONLY',
                id: 'BEL_AUDIT_GYM',
                legendText: 'Competitor - Gym Only',
                click: BEL_AUDIT_GYM_POPUP,
                hover: BEL_AUDIT_POPUP_HOVER,
              },
            ]
          },//END OF SECTION
          {
            heading: '3. COMPETITOR - MULTI SITE WITH GYM',
            text: SAMPLE_DROP,
            icon: POINT_ICON,
            layers: [
              {
                name: 'COMPETITOR - GYM ONLY',
                id: 'BEL_AUDIT_MULTI',
                legendText: 'Competitor - Multi Site with Gym',
                click: BEL_AUDIT_MULTI_POPUP,
                hover: BEL_AUDIT_POPUP_HOVER,
              },
            ]
          },//END OF SECTION
          {
            heading: '4. COMPETITOR - OTHER (NO KNOWN GYM)',
            text: SAMPLE_DROP,
            icon: POINT_ICON,
            layers: [
              {
                name: 'COMPETITOR - GYM ONLY',
                id: 'BEL_AUDIT_OTHER',
                legendText: 'Competitor - Other',
                click: BEL_AUDIT_OTHER_POPUP,
                hover: BEL_AUDIT_POPUP_HOVER,
              },
            ]
          },//END OF SECTION
          {
            heading: 'LAYER DETAILS',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: DETAILS_PERFORMANCE_AUDIT,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
      {
        name: 'ALL LOCATIONS',
        id: '1B',
        image: '/images/SportsEye_Swimming.jpg',
        summary: MODULE_SUMMARY_ALL_LOCTIONS,
        sections: [
          {
            heading: '1A. MEMBERS (SITE)',
            text: SITE_MEM_ALL_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'SITE_MEM_ALL',
                legendText: ' Total Members at Site',
                click: SITE_ALL_POPUP,
                hover: '<p>{SITE_NAME}</p><h4>{SITE_MEM_ALL}</h3><i>Click to view full site details</i>',
              },
            ]
          },//END OF SECTION
          {
            heading: '1B. MEMBERS (AREA)',
            text: AREA_MEM_ALL_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'AREA_MEM_ALL_SA2',
                legendText: 'Total Members in SA2 Area',
                click: AREA_ALL_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{AREA_MEM_ALL}</h4><i>Click to view full site details</i>',
              },
              {
                id: 'AREA_MEM_ALL_LGA',
                name: 'LGA',
                legendText: 'Total Members in LGA Area',
                click: AREA_ALL_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{AREA_MEM_ALL}</h4><i>Click to view full site details</i>',
              },
            ]
          },//END OF SECTION
          {
            heading: '2. DEMAND (AREA)',
            text: AREA_DEM_ALL_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'AREA_DEM_ALL_SA2',
                legendText: 'Total Demand in SA2 Area',
                click: AREA_ALL_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{AREA_DEM_ALL}</h4><i>Click to view full site details</i>',
              },
              {
                id: 'AREA_DEM_ALL_LGA',
                name: 'LGA',
                legendText: 'Total Demand in LGA Area',
                click: AREA_ALL_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{AREA_DEM_ALL}</h4><i>Click to view full site details</i>',
              },
            ]
          },//END OF SECTION
          {
            heading: '3. CONVERSION (AREA)',
            text: AREA_DEM_CNV_ALL_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'AREA_DEM_CNV_ALL_SA2',
                legendText: 'Total Demand Conversion (%) in SA2 Area',
                click: AREA_ALL_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{AREA_DEM_CNV_ALL}%</h4><i>Click to view full site details</i>',
              },
              {
                id: 'AREA_DEM_CNV_ALL_LGA',
                name: 'LGA',
                legendText: 'Total Demand Conversion (%) in LGA Area',
                click: AREA_ALL_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{AREA_DEM_CNV_ALL}%</h4><i>Click to view full site details</i>',
              },
            ]
          },//END OF SECTION
          {
            heading: '4A. TARGET UNMET DEMAND (SITE)',
            text: CTCH_TARG_UNMT_DEM_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'CTCH_TARG_UNMT_DEM_ALL',
                id: 'CTCH_TARG_UNMT_DEM_ALL',
                legendText: 'Target Unmet Demand in Catchment',
                click: SITE_ALL_POPUP,
                hover: '<p>{SITE_NAME}</p><h4>{CTCH_TARG_UNMT_DEM_ALL}</h4><i>Click to view full site details</i>',
              },
            ]
          },//END OF SECTION
          {
            heading: '4B. UNMET DEMAND (AREA)',
            text: AREA_UNMT_DEM_ALL_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'AREA_UNMT_DEM_ALL_SA1',
                legendText: 'Unmet Demand in SA1 Area',
                hover: '<p>{AREA_NAME}<p><h4>{AREA_UNMT_DEM_ALL}</h4>',
              },
              {
                name: 'SA2',
                id: 'AREA_UNMT_DEM_ALL_SA2',
                legendText: 'Unmet Demand in SA2 Area',
                click: AREA_ALL_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{AREA_UNMT_DEM_ALL}</h4><i>Click to view full site details</i>',
              },
              {
                id: 'AREA_UNMT_DEM_ALL_LGA',
                name: 'LGA',
                legendText: 'Unmet Demand in LGA Area',
                click: AREA_ALL_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{AREA_UNMT_DEM_ALL}</h4><i>Click to view full site details</i>',
              },
            ]
          },//END OF SECTION
          // {
          //   heading: '4D. UNMET DEMAND - AGG. CATCHMENT (AREA)',
          //   text: AREA_UNMT_DEM_AGG_TEXT,
          //   icon: AREA_ICON,
          //   layers: [
          //     {
          //       name: 'SA1',
          //       id: 'AREA_UNMT_DEM_AGG_ALL_SA1',
          //       legendText: 'Aggregated Unmet Demand in SA1 Area',
          //       hover: '<p>{AREA_NAME}<p><h4>{AREA_UNMT_DEM_AGG_ALL}</h4>',
          //     },,
          //   ]
          // },//END OF SECTION
          {
            heading: '5. PERFORMANCE BALANCE (SITE)',
            text: CTCH_PERF_BAL_ALL_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'CTCH_PERF_BAL_ALL',
                id: 'CTCH_PERF_BAL_ALL',
                legendText: 'Site Perfomance Balance',
                click: SITE_ALL_POPUP,
                hover: '<p>{SITE_NAME}</p><h4>{CTCH_PERF_BAL_ALL}%</h4><i>Click to view full site details</i>',
              },
            ]
          },//END OF SECTION
          {
            heading: 'LAYER DETAILS',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: DETAILS_PERFORMANCE_ALL,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
      {
        name: 'HEALTH CLUBS',
        id: '1C',
        image: '/images/SportsEye_Swimming.jpg',
        summary: MODULE_SUMMARY_DEMO,
        sections: [
          {
            heading: '1A. MEMBERS (SITE)',
            text: SITE_MEM_ALL_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE_MEM_HLTH',
                id: 'SITE_MEM_HLTH',
                legendText: 'Health Club Members at Site',
                click: SITE_HEALTH_POPUP,
                hover: '<p>{SITE_NAME}</p><h4>{SITE_MEM_HLTH}</h4><i>Click to view full site details</i>',
              },
            ]
          },//END OF SECTION
          {
            heading: '1B. MEMBERS (AREA)',
            text: AREA_MEM_ALL_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'AREA_MEM_HLTH_SA2',
                legendText: 'Health Club Members in SA2 Area',
                click: AREA_HEALTH_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{AREA_MEM_HLTH}</h4><i>Click to view full site details</i>',
              },
              {
                id: 'AREA_MEM_HLTH_LGA',
                name: 'LGA',
                legendText: 'Health Club Members in LGA Area',
                click: AREA_HEALTH_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{AREA_MEM_HLTH}</h4><i>Click to view full site details</i>',
              },
            ]
          },//END OF SECTION
          {
            heading: '2. DEMAND (AREA)',
            text: AREA_DEM_ALL_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'AREA_DEM_HLTH_SA2',
                legendText: 'Health Club Demand in SA2 Area',
                click: AREA_HEALTH_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{AREA_DEM_HLTH}</h4><i>Click to view full site details</i>',
              },
              {
                id: 'AREA_DEM_HLTH_LGA',
                name: 'LGA',
                legendText: 'Health Club Demand in LGA Area',
                click: AREA_HEALTH_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{AREA_DEM_HLTH}</h4><i>Click to view full site details</i>',
              },
            ]
          },//END OF SECTION
          {
            heading: '3. CONVERSION (AREA)',
            text: AREA_DEM_CNV_ALL_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'AREA_DEM_CNV_HLTH_SA2',
                legendText: 'Demand Conversion (%) in SA2 Area',
                click: AREA_HEALTH_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{AREA_DEM_CNV_HLTH}%</h4><i>Click to view full site details</i>',
              },
              {
                id: 'AREA_DEM_CNV_HLTH_LGA',
                name: 'LGA',
                legendText: 'Demand Conversion (%) in LGA Area',
                click: AREA_HEALTH_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{AREA_DEM_CNV_HLTH}%</h4><i>Click to view full site details</i>',
              },
            ]
          },//END OF SECTION
          {
            heading: '4A. TARGET UNMET DEMAND (SITE)',
            text: CTCH_TARG_UNMT_DEM_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'CTCH_TARG_UNMT_DEM_HLTH',
                id: 'CTCH_TARG_UNMT_DEM_HLTH',
                legendText: 'Target Unmet Demand in Catchment',
                click: SITE_HEALTH_POPUP,
                hover: '<p>{SITE_NAME}</p><h4>{CTCH_TARG_UNMT_DEM_HLTH}</h4><i>Click to view full site details</i>',
              },
            ]
          },//END OF SECTION
          {
            heading: '4B. UNMET DEMAND (AREA)',
            text: AREA_UNMT_DEM_ALL_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'AREA_UNMT_DEM_HLTH_SA1',
                legendText: 'Unmet Demand in SA1 Area',
                hover: '<p>{AREA_NAME}<p><h4>{AREA_UNMT_DEM_HLTH}</h4>',
              },
              {
                name: 'SA2',
                id: 'AREA_UNMT_DEM_HLTH_SA2',
                legendText: 'Unmet Demand in SA2 Area',
                click: AREA_HEALTH_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{AREA_UNMT_DEM_HLTH}</h4><i>Click to view full site details</i>',
              },
              {
                id: 'AREA_UNMT_DEM_HLTH_LGA',
                name: 'LGA',
                legendText: 'Unmet Demand in LGA Area',
                click: AREA_HEALTH_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{AREA_UNMT_DEM_HLTH}</h4><i>Click to view full site details</i>',
              },
            ]
          },//END OF SECTION
          // {
          //   heading: '4D. UNMET DEMAND - AGG. CATCHMENT (AREA)',
          //   text: AREA_UNMT_DEM_AGG_TEXT,
          //   icon: AREA_ICON,
          //   layers: [
          //     {
          //       name: 'SA1',
          //       id: 'AREA_UNMT_DEM_AGG_HLTH_SA1',
          //       legendText: 'Aggregated Unmet Demand in SA1 Area',
          //       hover: '<p>{AREA_NAME}<p><h4>{AREA_UNMT_DEM_AGG_HLTH}</h4>',
          //     },,
          //   ]
          // },//END OF SECTION
          {
            heading: '5. PERFORMANCE BALANCE (SITE)',
            text: CTCH_PERF_BAL_ALL_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'CTCH_PERF_BAL_HLTH',
                id: 'CTCH_PERF_BAL_HLTH',
                legendText: 'Site Perfomance Balance',
                click: SITE_HEALTH_POPUP,
                hover: '<p>{SITE_NAME}</p><h4>{CTCH_PERF_BAL_HLTH}%</h4><i>Click to view full site details</i>',
              },
            ]
          },//END OF SECTION
          {
            heading: 'LAYER DETAILS',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: DETAILS_PERFORMANCE_HLTH,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
      {
        name: 'AQUATIC',
        id: '1D',
        image: '/images/SportsEye_Swimming.jpg',
        summary: MODULE_SUMMARY_DEMO,
        sections: [
          {
            heading: '1A. MEMBERS (SITE)',
            text: SITE_MEM_ALL_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE_MEM_AQU',
                id: 'SITE_MEM_AQU',
                legendText: 'Aquatic Members at Site',
                click: SITE_AQUATIC_POPUP,
                hover: '<p>{SITE_NAME}</p><h4>{SITE_MEM_AQU}</h4><i>Click to view full site details</i>',
              },
            ]
          },//END OF SECTION
          {
            heading: '1B. MEMBERS (AREA)',
            text: AREA_MEM_ALL_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'AREA_MEM_AQU_SA2',
                legendText: 'Aquatic Members in SA2 Area',
                click: AREA_AQUATIC_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{AREA_MEM_AQU}</h4><i>Click to view full site details</i>',
              },
              {
                id: 'AREA_MEM_AQU_LGA',
                name: 'LGA',
                legendText: 'Aquatic Members in LGA Area',
                click: AREA_AQUATIC_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{AREA_MEM_AQU}</h4><i>Click to view full site details</i>',
              },
            ]
          },//END OF SECTION
          {
            heading: '2. DEMAND (AREA)',
            text: AREA_DEM_ALL_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'AREA_DEM_AQU_SA2',
                legendText: 'Aquatic Demand in SA2 Area',
                click: AREA_AQUATIC_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{AREA_DEM_AQU}</h4><i>Click to view full site details</i>',
              },
              {
                id: 'AREA_DEM_AQU_LGA',
                name: 'LGA',
                legendText: 'Aquatic Demand in LGA Area',
                click: AREA_AQUATIC_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{AREA_DEM_AQU}</h4><i>Click to view full site details</i>',
              },
            ]
          },//END OF SECTION
          {
            heading: '3. CONVERSION (AREA)',
            text: AREA_DEM_CNV_ALL_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'AREA_DEM_CNV_AQU_SA2',
                legendText: 'Aquatic Demand Conversion (%) in SA2 Area',
                click: AREA_AQUATIC_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{AREA_DEM_CNV_AQU}%</h4><i>Click to view full site details</i>',
              },
              {
                id: 'AREA_DEM_CNV_AQU_LGA',
                name: 'LGA',
                legendText: 'Aquatic Demand Conversion (%) in LGA Area',
                click: AREA_AQUATIC_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{AREA_DEM_CNV_AQU}%</h4><i>Click to view full site details</i>',
              },
            ]
          },//END OF SECTION
          {
            heading: '4A. TARGET UNMET DEMAND (SITE)',
            text: CTCH_TARG_UNMT_DEM_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'CTCH_TARG_UNMT_DEM_AQU',
                legendText: 'Target Unmet Demand in Catchment',
                click: SITE_AQUATIC_POPUP,
                hover: '<p>{SITE_NAME}</p><h4>{CTCH_TARG_UNMT_DEM_AQU}</h4><i>Click to view full site details</i>',
              },
            ]
          },//END OF SECTION
          {
            heading: '4B. UNMET DEMAND (AREA)',
            text: AREA_UNMT_DEM_ALL_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'AREA_UNMT_DEM_AQU_SA1',
                legendText: 'Unmet Demand in SA1 Area',
                hover: '<p>{AREA_NAME}<p><h4>{AREA_UNMT_DEM_AQU}</h4>',
              },
              {
                name: 'SA2',
                id: 'AREA_UNMT_DEM_AQU_SA2',
                legendText: 'Unmet Demand in SA2 Area',
                click: AREA_AQUATIC_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{AREA_UNMT_DEM_AQU}</h4><i>Click to view full site details</i>',
              },
              {
                id: 'AREA_UNMT_DEM_AQU_LGA',
                name: 'LGA',
                legendText: 'Unmet Demand in LGA Area',
                click: AREA_AQUATIC_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{AREA_UNMT_DEM_AQU}</h4><i>Click to view full site details</i>',
              },
            ]
          },//END OF SECTION
          // {
          //   heading: '4D. UNMET DEMAND - AGG. CATCHMENT (AREA)',
          //   text: AREA_UNMT_DEM_AGG_TEXT,
          //   icon: AREA_ICON,
          //   layers: [
          //     {
          //       name: 'SA1',
          //       id: 'AREA_UNMT_DEM_AGG_AQU_SA1',
          //       legendText: 'Aggregated Unmet Demand in SA1 Area',
          //       hover: '<p>{AREA_NAME}<p><h4>{AREA_UNMT_DEM_AGG_AQU}</h4>',
          //     },,
          //   ]
          // },//END OF SECTION
          {
            heading: '5. PERFORMANCE BALANCE (SITE)',
            text: CTCH_PERF_BAL_ALL_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'CTCH_PERF_BAL_AQU',
                id: 'CTCH_PERF_BAL_AQU',
                legendText: 'Site Perfomance Balance',
                click: SITE_AQUATIC_POPUP,
                hover: '<p>{SITE_NAME}</p><h4>{CTCH_PERF_BAL_AQU}%</h4><i>Click to view full site details</i>',
              },
            ]
          },//END OF SECTION
          {
            heading: 'LAYER DETAILS',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: DETAILS_PERFORMANCE_AQU,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
      {
        name: 'SWIM SCHOOL',
        id: '1E',
        image: '/images/SportsEye_Swimming.jpg',
        summary: MODULE_SUMMARY_SWIM,
        sections: [
          {
            heading: '1A. MEMBERS (SITE)',
            text: SITE_MEM_ALL_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE_MEM_SWM',
                id: 'SITE_MEM_SWM',
                legendText: 'Swim School Members at Site',
                click: SITE_SWIM_POPUP,
                hover: '<p>{SITE_NAME}</p><h4>{SITE_MEM_SWM}</h4><i>Click to view full site details</i>',
              },
            ]
          },//END OF SECTION
          {
            heading: '1B. MEMBERS (AREA)',
            text: AREA_MEM_ALL_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'AREA_MEM_SWM_SA2',
                legendText: 'Swim School Members in SA2 Area',
                click: AREA_SWIM_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{AREA_MEM_SWM}</h4><i>Click to view full site details</i>',
              },
              {
                id: 'AREA_MEM_SWM_LGA',
                name: 'LGA',
                legendText: 'Swim School Members in LGA Area',
                click: AREA_SWIM_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{AREA_MEM_SWM}</h4><i>Click to view full site details</i>',
              },
            ]
          },//END OF SECTION
          {
            heading: '2. DEMAND (AREA)',
            text: AREA_DEM_ALL_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'AREA_DEM_SWM_SA2',
                legendText: 'Swim School Demand in SA2 Area',
                click: AREA_SWIM_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{AREA_DEM_SWM}</h4><i>Click to view full site details</i>',
              },
              {
                id: 'AREA_DEM_SWM_LGA',
                name: 'LGA',
                legendText: 'Swim School Demand in LGA Area',
                click: AREA_SWIM_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{AREA_DEM_SWM}</h4><i>Click to view full site details</i>',
              },
            ]
          },//END OF SECTION
          {
            heading: '3. CONVERSION (AREA)',
            text: AREA_DEM_CNV_ALL_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'AREA_DEM_CNV_SWM_SA2',
                legendText: 'Swim School Demand Conversion (%) in SA2 Area',
                click: AREA_SWIM_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{AREA_DEM_CNV_SWM}%</h4><i>Click to view full site details</i>',
              },
              {
                id: 'AREA_DEM_CNV_SWM_LGA',
                name: 'LGA',
                legendText: 'Swim School Demand Conversion (%) in LGA Area',
                click: AREA_SWIM_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{AREA_DEM_CNV_SWM}%</h4><i>Click to view full site details</i>',
              },
            ]
          },//END OF SECTION
          {
            heading: '4A. TARGET UNMET DEMAND (SITE)',
            text: CTCH_TARG_UNMT_DEM_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'CTCH_TARG_UNMT_DEM_SWM',
                id: 'CTCH_TARG_UNMT_DEM_SWM',
                legendText: 'Target Unmet Demand in Catchment',
                click: SITE_SWIM_POPUP,
                hover: '<p>{SITE_NAME}</p><h4>{CTCH_TARG_UNMT_DEM_SWM}</h4><i>Click to view full site details</i>',
              },
            ]
          },//END OF SECTION
          {
            heading: '4B. UNMET DEMAND (AREA)',
            text: AREA_UNMT_DEM_ALL_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'AREA_UNMT_DEM_SWM_SA1',
                legendText: 'Unmet Demand in SA1 Area',
                hover: '<p>{AREA_NAME}<p><h4>{AREA_UNMT_DEM_SWM}</h4>',
              },
              {
                name: 'SA2',
                id: 'AREA_UNMT_DEM_SWM_SA2',
                legendText: 'Unmet Demand in SA2 Area',
                click: AREA_SWIM_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{AREA_UNMT_DEM_SWM}</h4><i>Click to view full site details</i>',
              },
              {
                id: 'AREA_UNMT_DEM_SWM_LGA',
                name: 'LGA',
                legendText: 'Unmet Demand in LGA Area',
                click: AREA_SWIM_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{AREA_UNMT_DEM_SWM}</h4><i>Click to view full site details</i>',
              },
            ]
          },//END OF SECTION
          // {
          //   heading: '4D. UNMET DEMAND - AGG. CATCHMENT (AREA)',
          //   text: AREA_UNMT_DEM_AGG_TEXT,
          //   icon: AREA_ICON,
          //   layers: [
          //     {
          //       name: 'SA1',
          //       id: 'AREA_UNMT_DEM_AGG_SWM_SA1',
          //       legendText: 'Aggregated Unmet Demand in SA1 Area',
          //       hover: '<p>{AREA_NAME}<p><h4>{AREA_UNMT_DEM_AGG_SWM}</h4>',
          //     },,
          //   ]
          // },//END OF SECTION
          {
            heading: '5. PERFORMANCE BALANCE (SITE)',
            text: CTCH_PERF_BAL_ALL_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'CTCH_PERF_BAL_SWM',
                id: 'CTCH_PERF_BAL_SWM',
                legendText: 'Site Perfomance Balance',
                click: SITE_SWIM_POPUP,
                hover: '<p>{SITE_NAME}</p><h4>{CTCH_PERF_BAL_SWM}%</h4><i>Click to view full site details</i>',
              },
            ]
          },//END OF SECTION
           {
            heading: 'LAYER DETAILS',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: DETAILS_PERFORMANCE_SWM,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
    ]
  },//END OF MODULE
  {
    id: 'PART-B',
    name: 'MEMBER KPIS (activeCAMPAIGNS)',
    collapsible: true,
    type: 'CODE_VIEWER',
    CODES: [
      {
        name: 'RETENTION',
        id: '1A_RETENTION',
        image: '/images/SportsEye_Houses.jpg',
        summary: MODULE_SUMMARY_DEMO,
        sections: [
          {
            heading: '1. MEMBER LIFETIME VALUE (SITE)',
            text: SITE_MEM_LTV_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE_MEM_LTV',
                id: 'SITE_MEM_LTV',
                legendText: 'Member Lifetime Value ($) at Site',
                click: CAMPAIGNS_RET_POPUP,
                hover: '<p>{SITE_NAME}</p><h4>$ {SITE_MEM_LTV}</h4><i>Click to view full site details</i>',
              },
            ]
          },//END OF SECTION
          {
            heading: '2. MEMBERS IN DROP OUT ZONE (SITE)',
            text: SITE_MEM_DOZ_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE_MEM_DOZ',
                id: 'SITE_MEM_DOZ',
                legendText: 'Members in Drop Out Zone at Site',
                click: CAMPAIGNS_RET_POPUP,
                hover: '<p>{SITE_NAME}</p><h4>{SITE_MEM_DOZ}</h4><i>Click to view full site details</i>',
              },
            ]
          },//END OF SECTION
          {
            heading: '3. MEMBER VALUE OF DROP OUT ZONE (SITE)',
            text: SITE_MEM_DOZ_VAL_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE_MEM_DOZ_VAL',
                id: 'SITE_MEM_DOZ_VAL',
                legendText: ' Member Value ($) of Drop Out Zone at Site',
                click: CAMPAIGNS_RET_POPUP,
                hover: '<p>{SITE_NAME}</p><h4>$ {SITE_MEM_DOZ_VAL}</h4><i>Click to view full site details</i>',
              },
            ]
          },//END OF SECTION
          {
            heading: 'LAYER DETAILS',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: DETAILS_CAMPAIGNS,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
      {
        name: 'ACQUISITION',
        id: '1B_ACQUISITION',
        image: '/images/SportsEye_Houses.jpg',
        summary: MODULE_SUMMARY_DEMO,
        sections: [
          {
            heading: '1. UNMET DEMAND CONVERSION (SITE)',
            text: SITE_UNMT_DEM_CNV_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE_UNMT_DEM_CNV',
                id: 'SITE_UNMT_DEM_CNV',
                legendText: 'Unmet Demand Conversion (%) at Site',
                click: CAMPAIGNS_AQU_POPUP,
                hover: '<p>{SITE_NAME}</p><h4>{SITE_UNMT_DEM_CNV}%</h4><i>Click to view full site details</i>',
              },
            ]
          },//END OF SECTION
          {
            heading: '2. UNMET DEMAND VALUE (SITE)',
            text: SITE_UNMT_DEM_VAL_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE_UNMT_DEM_VAL',
                id: 'SITE_UNMT_DEM_VAL',
                legendText: 'Unmet Demand Value ($) at Site',
                click: CAMPAIGNS_AQU_POPUP,
                hover: '<p>{SITE_NAME}</p><h4>$ {SITE_UNMT_DEM_VAL}</h4><i>Click to view full site details</i>',
              },
            ]
          },//END OF SECTION
          {
            heading: 'LAYER DETAILS',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: DETAILS_CAMPAIGNS,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
      {
        name: 'activeCAMPAIGNS',
        id: '1C_Member Engagement',
        image: '/images/SportsEye_Houses.jpg',
        summary: MODULE_SUMMARY_RISK,
        sections: [
          {
            heading: '1. SUBSCRIBED SITES',
            text: SITE_CAMPAIGN_DL_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE_CAMPAIGN_FLAG',
                id: 'SITE_CAMPAIGN_FLAG',
                legendText: 'Subscribed Sites (Colour: Category)',
                click: CAMPAIGNS_DL_POPUP,
                hover: '<h4>{SITE_NAME}</h4><p>SUBSCRIPTION: {SITE_CAMPAIGN_FLAG}</p><i>Click to view full site details</i>',
              },
            ]
          },//END OF SECTION
          {
            heading: 'LAYER DETAILS',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: DETAILS_CAMPAIGNS,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
    ]
  },//END OF MODULE
  {
    id: 'PART-C',
    name: 'AX DATA TEAM',
    type: 'AREA_VIEWER',
    image: '/images/SportsEye_Houses.jpg',
    summary: '<p>Key Performance Indicators</p>',
        sections: [
          {
            heading: '1. MEMBER VALUE SCORECARD',
            text: SITE_SCORECARD_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE_SCORECARD',
                id: 'SITE_SCORECARD',
                legendText: 'Scorecard Sites',
                click: SCORECARD_POPUP,
                hover: POINT_POPUP_HOVER,
              },
            ]
          },//END OF SECTION

          {
            heading: '2. SITE ACTION PLAN',
            text: SAMPLE_DROP,
            icon: POINT_ICON,
            layers: [
              {
                name: 'COMMUNICATION_FLAG',
                id: 'COMMUNICATION_FLAG',
                legendText: 'Action Plan Sites',
                click: COMMUNICATION_POPUP,
                hover: POINT_POPUP_HOVER,
              },
            ]
          },//END OF SECTION
          {
            heading: 'LAYER DETAILS',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: DETAILS_AX_DATA,
          },//END OF SECTION
        ]
  },//END OF MODULE
  {
    id: 'MODULE4',
    name: 'COMMUNITY PRIORITIES',
    collapsible: true,
    type: 'CODE_VIEWER',
    CODES: [
      {
        name: 'PERFORMANCE',
        id: '4A',
        image: '/images/SportsEye_Houses.jpg',
        summary: MODULE_SUMMARY_DEMO,
        sections: [
          {
            heading: '1. DEPRIVATION CONVERSION (SITE)',
            text: CTCH_DEP_CNV_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'CTCH_DEP_CNV',
                id: 'CTCH_DEP_CNV',
                legendText: 'Deprivation Conversion (%) at Site',
                click: SITE_COMMUNITY_POPUP,
                hover: '<p>{SITE_NAME}</p><h4>{CTCH_DEP_CNV}%</h4><i>Click to view full site details</i>',
              },
            ]
          },//END OF SECTION
          {
            heading: '2. AXC RISK OF INACTIVITY CONVERSION (SITE)',
            text: CTCH_ROI_CNV_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'CTCH_ROI_CNV',
                id: 'CTCH_ROI_CNV',
                legendText: 'Risk of Inactivity Conversion (%) at Site',
                click: SITE_COMMUNITY_POPUP,
                hover: '<p>{SITE_NAME}</p><h4>{CTCH_ROI_CNV}%</h4><i>Click to view full site details</i>',
              },
            ]
          },//END OF SECTION
          {
            heading: '3. SOCIAL VALUE GENERATED (SITE)',
            text: CTCH_SV_GEN_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'CTCH_SV_GEN',
                id: 'CTCH_SV_GEN',
                legendText: 'Social Value ($) Generated at Site',
                click: SITE_COMMUNITY_POPUP,
                hover: '<p>{SITE_NAME}</p><h4>$ {CTCH_SV_GEN}</h4><i>Click to view full site details</i>',
              },
            ]
          },//END OF SECTION
          {
            heading: '4. SOCIAL VALUE PERCENTAGE CHANGE (SITE)',
            text: CTCH_SV_CHNG_TEXT,
            icon: POINT_ICON,
            layers: [
              {
                name: 'CTCH_SV_CHNG',
                id: 'CTCH_SV_CHNG',
                legendText: 'Social Value Percentage Change (%) at Site (Colour: Category)',
                click: SITE_COMMUNITY_POPUP,
                hover: '<p>{SITE_NAME}</p><h4>{CTCH_SV_CHNG} %</h4><i>Click to view full site details</i>',
              },
            ]
          },//END OF SECTION
          {
            heading: 'LAYER DETAILS',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: DETAILS_COMMUNITY_PERF,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
      {
        name: 'HEALTH FACTORS',
        id: '4B',
        image: '/images/SportsEye_Houses.jpg',
        summary: MODULE_SUMMARY_DEMO,
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
                click: AREA_COMMUNITY_HF_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_1}</h4><i>Click to view full site details</i>',
              },
              {
                name: 'SA2',
                id: 'CX_HF_1_SA2',
                legendText: 'Count in SA2 Area',
                click: AREA_COMMUNITY_HF_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_1}</h4><i>Click to view full site details</i>',
              },
              {
                id: 'CX_HF_1_LGA',
                name: 'LGA',
                legendText: 'Count in LGA Area',
                click: AREA_COMMUNITY_HF_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_1}</h4><i>Click to view full site details</i>',
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
                click: AREA_COMMUNITY_HF_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_2}</h4><i>Click to view full site details</i>',
              },
              {
                name: 'SA2',
                id: 'CX_HF_2_SA2',
                legendText: 'Count in SA2 Area',
                click: AREA_COMMUNITY_HF_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_2}</h4><i>Click to view full site details</i>',
              },
              {
                id: 'CX_HF_2_LGA',
                name: 'LGA',
                legendText: 'Count in LGA Area',
                click: AREA_COMMUNITY_HF_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_2}</h4><i>Click to view full site details</i>',
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
                click: AREA_COMMUNITY_HF_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_3}</h4><i>Click to view full site details</i>',
              },
              {
                name: 'SA2',
                id: 'CX_HF_3_SA2',
                legendText: 'Count in SA2 Area',
                click: AREA_COMMUNITY_HF_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_3}</h4><i>Click to view full site details</i>',
              },
              {
                id: 'CX_HF_3_LGA',
                name: 'LGA',
                legendText: 'Count in LGA Area',
                click: AREA_COMMUNITY_HF_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_3}</h4><i>Click to view full site details</i>',
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
                click: AREA_COMMUNITY_HF_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_4}</h4><i>Click to view full site details</i>',
              },
              {
                name: 'SA2',
                id: 'CX_HF_4_SA2',
                legendText: 'Count in SA2 Area',
                click: AREA_COMMUNITY_HF_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_4}</h4><i>Click to view full site details</i>',
              },
              {
                id: 'CX_HF_4_LGA',
                name: 'LGA',
                legendText: 'Count in LGA Area',
                click: AREA_COMMUNITY_HF_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_4}</h4><i>Click to view full site details</i>',
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
                click: AREA_COMMUNITY_HF_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_5}</h4><i>Click to view full site details</i>',
              },
              {
                name: 'SA2',
                id: 'CX_HF_5_SA2',
                legendText: 'Count in SA2 Area',
                click: AREA_COMMUNITY_HF_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_5}</h4><i>Click to view full site details</i>',
              },
              {
                id: 'CX_HF_5_LGA',
                name: 'LGA',
                legendText: 'Count in LGA Area',
                click: AREA_COMMUNITY_HF_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_5}</h4><i>Click to view full site details</i>',
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
                click: AREA_COMMUNITY_HF_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_6}</h4><i>Click to view full site details</i>',
              },
              {
                name: 'SA2',
                id: 'CX_HF_6_SA2',
                legendText: 'Count in SA2 Area',
                click: AREA_COMMUNITY_HF_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_6}</h4><i>Click to view full site details</i>',
              },
              {
                id: 'CX_HF_6_LGA',
                name: 'LGA',
                legendText: 'Count in LGA Area',
                click: AREA_COMMUNITY_HF_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_6}</h4><i>Click to view full site details</i>',
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
                click: AREA_COMMUNITY_HF_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_7}</h4><i>Click to view full site details</i>',
              },
              {
                name: 'SA2',
                id: 'CX_HF_7_SA2',
                legendText: 'Count in SA2 Area',
                click: AREA_COMMUNITY_HF_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_7}</h4><i>Click to view full site details</i>',
              },
              {
                id: 'CX_HF_7_LGA',
                name: 'LGA',
                legendText: 'Count in LGA Area',
                click: AREA_COMMUNITY_HF_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_7}</h4><i>Click to view full site details</i>',
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
                click: AREA_COMMUNITY_HF_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_8}</h4><i>Click to view full site details</i>',
              },
              {
                name: 'SA2',
                id: 'CX_HF_8_SA2',
                legendText: 'Count in SA2 Area',
                click: AREA_COMMUNITY_HF_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_8}</h4><i>Click to view full site details</i>',
              },
              {
                id: 'CX_HF_8_LGA',
                name: 'LGA',
                legendText: 'Count in LGA Area',
                click: AREA_COMMUNITY_HF_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_HF_8}</h4><i>Click to view full site details</i>',
              },
            ]
          },//END OF SECTION
          {
            heading: 'LAYER DETAILS',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: DETAILS_COMMUNITY_HF,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
      {
        name: 'DEMOGRAPHICS',
        id: '4C',
        image: '/images/SportsEye_Houses.jpg',
        summary: MODULE_SUMMARY_DEMO,
        sections: [
          {
            heading: '1. DEPRIVATION',
            text: CX_DEPRIVATION_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'CX_DEPRIVATION_SA1',
                legendText: 'Deprivation Decile in SA1 Area',
                // click: AREA_COMMUNITY_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_DEPRIVATION}</h4>',
              },
              // {
              //   name: 'SA2',
              //   id: 'CX_DEPRIVATION_SA2',
              //   legendText: 'Deprivation Score in SA2 Area',
              //   // click: AREA_COMMUNITY_POPUP,
              //   hover: '<p>{AREA_NAME}<p><h4>{CX_DEPRIVATION}</h4>',
              // },
            ]
          },//END OF SECTION
          {
            heading: '2. NEED ASSISTANCE (DISABILITY)',
            text: CX_AXC_ASSIST_TEXT,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'CX_AXC_ASSIST_SA1',
                legendText: 'Need Assistance Count in SA1 Area',
                // click: AREA_COMMUNITY_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_AXC_ASSIST}</h4>',
              },
              {
                name: 'SA2',
                id: 'CX_AXC_ASSIST_SA2',
                legendText: 'Need Assistance Count in SA2 Area',
                // click: AREA_COMMUNITY_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_AXC_ASSIST}</h4>',
              },
              {
                id: 'CX_AXC_ASSIST_LGA',
                name: 'LGA',
                legendText: 'Need Assistance Count in LGA Area',
                // click: AREA_COMMUNITY_POPUP,
                hover: '<p>{AREA_NAME}<p><h4>{CX_AXC_ASSIST}</h4>',
              },
            ]
          },//END OF SECTION
          {
            heading: '3. AXC RISK OF INACTIVITY',
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
          // {
          //   heading: 'LAYER DETAILS',
          //   text: null,
          //   icon: DOCUMENT_ICON,
          //   documentHtml: DETAILS_COMMUNITY_DEM,
          // },//END OF SECTION
        ]
      },//END OF SECTION GROUP
      {
        name: 'SPORT NSW DEMAND',
        id: '4D',
        image: '/images/SportsEye_Houses.jpg',
        summary: MODULE_SUMMARY_DEMO,
        sections: [
          {
            heading: '1. COMBINED DEMAND (AREA)',
            text: SAMPLE_DROP,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'SPRT_NSW_DEM_COMB_SA2',
                legendText: 'Total Demand in SA2 Area',
                // click: AREA_COMMUNITY_POPUP,
                hover: '<p>{SA2_NAME_2016}<p><h4>ESTIMATED DEMAND: {PB_DEM_COMB}</h4><p><b>POPULATION: {CX_POP}</p><p>DEMAND/POPULATION: {PB_CNV_COMB}%</b></p><br><p>ATHLETICS DEMAND: {PB_DEM_ATHL}</p><p>LITTLE ATHLETICS DEMAND: {PB_DEM_LITATHL}</p><p>BASEBALL DEMAND: {PB_DEM_BASEB}</p><p>BASKETBALL DEMAND: {PB_DEM_BASK}</p><p>FOOTBALL DEMAND: {PB_DEM_FOOT}</p><p>HOCKEY DEMAND: {PB_DEM_HOCK}</p><p>ICE HOCKEY DEMAND: {PB_DEM_ICEHOC}</p><p>NETBALL DEMAND: {PB_DEM_NETBAL}</p><p>SQUASH DEMAND: {PB_DEM_SQUASH}</p><p>SWIMMING DEMAND: {PB_DEM_SWIM}</p>',
              },
              // {
              //   id: 'SPRT_NSW_DEM_COMB_LGA',
              //   name: 'LGA',
              //   legendText: 'Total Demand in LGA Area',
              //   // click: AREA_COMMUNITY_POPUP,
              //   hover: '<p>{LGA_NAME_2018}<p><h4>ESTIMATED DEMAND: {PB_DEM_COMB}</h4><p><b>POPULATION: {CX_POP}</p><p>DEMAND/POPULATION: {PB_CNV_COMB}%</b></p><br><p>ATHLETICS DEMAND: {PB_DEM_ATHL}</p><p>LITTLE ATHLETICS DEMAND: {PB_DEM_LITATHL}</p><p>BASEBALL DEMAND: {PB_DEM_BASEB}</p><p>BASKETBALL DEMAND: {PB_DEM_BASK}</p><p>FOOTBALL DEMAND: {PB_DEM_FOOT}</p><p>HOCKEY DEMAND: {PB_DEM_HOCK}</p><p>ICE HOCKEY DEMAND: {PB_DEM_ICEHOC}</p><p>NETBALL DEMAND: {PB_DEM_NETBAL}</p><p>SQUASH DEMAND: {PB_DEM_SQUASH}</p><p>SWIMMING DEMAND: {PB_DEM_SWIM}</p>',
              // },
            ]
          },//END OF SECTION
          {
            heading: 'LAYER DETAILS',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: DETAILS_COMMUNITY_SPORTNSW,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
      {
        name: 'AREA INFO',
        id: '4E',
        image: '/images/SportsEye_Houses.jpg',
        summary: MODULE_SUMMARY_DEMO,
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
            heading: '2. AREA LABELS',
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
            heading: 'LAYER DETAILS',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: DETAILS_COMMUNITY_INFO,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
    ]
  }, //END OF MODULE
  {
    id: 'PART-4',
    name: 'THE LOCKER ROOM',
    type: 'AREA_VIEWER',
    image: '/images/SportsEye_Houses.jpg',
    summary: '<p>Resource and references documentation.</p>',
        sections: [
          {
            heading: 'DEMO',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: LOCKERROOM_MODAL,
            // documentHtml: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          },
        ]
  }, //END OF MODULE
  {
    id: 'MODULE-FEEDBACK',
    name: 'FEEDBACK',
    type: 'AREA_VIEWER',
    image: '/images/SportsEye_Houses.jpg',
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
