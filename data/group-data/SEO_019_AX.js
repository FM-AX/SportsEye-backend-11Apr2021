/////////////////////////////////////////////////////////////////////////////////////

// SEO V2.0
// LAST UPDATED 05-JAN-21

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
const ACCOUNT_NAME = "SEO_019_AX"

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
// // Mapbox Studio Style: SE_HANDOVER_SEO
const MAPBOX_STYLE = "mapbox://styles/activexchange-cust/ckjc99yb2bo6f19lh4sfj01to"


// 2B. STARTING MAP VIEW

const MAP_START = {
  lat: -37.768691, lng: 145.010512, zoom: 9 //MELBOURNE
}

// 3. IMAGES

// 3A. MENU IMAGES
const PRIMARY_MENU_IMAGE = '/images/SportsEye_Swimming.jpg'


/////////////////////////////////////////////////////////////////////////////////////

// PART B: ACCOUNT SPECIFIC REFERENCES

/////////////////////////////////////////////////////////////////////////////////////

// TEMP
const EXAMPLE = `
`

// 1. POPUPS

const module_mem_submodule1_sectionall_layers_site_popup_hover = `
<h4>{site_name}</h4>
`

const module_mem_submodule1_sectionall_layers_area_popup_hover = `
<h4>{AREA_NAME}</h4>
<p>1. Members</p>
<h4>{seo_019_mem_all}</h4>
<p>2. Demand</p>
<h4>{se_leisure_dem}</h4>
<p>3. Conversion</p>
<h4>{seo_019_mem_dem_cnv_all}%</h4>
`

const module_mem_submodule2_sectionall_layers_site_popup_hover = `
<h4>{site_name}</h4>
`

const module_mem_submodule2_sectionall_layers_area_popup_hover = `
<h4>{AREA_NAME}</h4>
<p>1. Members</p>
<h4>{seo_019_mem_swm}</h4>
<p>2. Demand</p>
<h4>{se_swim_dem}</h4>
<p>3. Conversion</p>
<h4>{seo_019_mem_dem_cnv_swm}%</h4>
`

const module_aqu_submodule1_sectionall_layers_site_popup_hover = `
<h4>{site_name}</h4>
<p>Unmet Demand:</p>
<h4>{site_unmtdem}</h4>
`

const module_aqu_submodule1_sectionall_layers_area_popup_hover = `
<h4>{AREA_NAME}</h4>
<p>Unmet Demand:</p>
<h4>{seo_019_unmtdem}</h4>
`


// 2. DASHBOARDS

const module_key_dashboard_centremanager = `
<h1>1. CENTRE MANAGER DASHBOARD</h1>
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/1_0g-mk_Pvc31beoezSIj19QJhcAsbjpw/page/9DY9" frameborder="0" style="border:0" allowfullscreen></iframe>
`

const module_key_dashboard_healthwellbeing = `
<h1>2. HEALTH AND WELLBEING - YOUR LOCAL GOVT</h1>
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/1soSkPJq6a4Kthtbe1gPrKH8iizjb-kwU/page/yNm9" frameborder="0" style="border:0" allowfullscreen></iframe>
`

const module_key_dashboard_socialvalue = `
<h1>3. SOCIAL VALUE SUMMARY</h1>
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/1ho3-lpWPqcGoyzjGPGzfUNVWJDEkSc4I/page/lssn" frameborder="0" style="border:0" allowfullscreen></iframe>
`

const module_key_dashboard_siteperformance = `
<h1>4. SITE PERFORMANCE (HEAD OFFICE) DASHBOARD</h1>
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/1HZai9MNlyVJ-POBhWIwZAgcvQ7IxzmCO/page/VqMm" frameborder="0" style="border:0" allowfullscreen></iframe>
`

const module_key_dashboard_groupex = `
<h1>5. PROGRAMS DASHBOARD</h1>
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/1FMJSWLI4-KByY0TXbX1HvsZdJbPiEdgU/page/rCRt" frameborder="0" style="border:0" allowfullscreen></iframe>
`

const module_key_dashboard_swimschool = `
<h1>6. SWIM SCHOOL DASHBOARD</h1>
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/323995ec-e901-42aa-a12e-1ba65bb834e7/page/1M" frameborder="0" style="border:0" allowfullscreen></iframe>
`

const module_key_dashboard_pricing = `
<h1>7. PRICING DASHBOARD</h1>
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/1GUYtoyN6jVaBRn4xQOV-ej_Ik0_QHPkr/page/rCRt" frameborder="0" style="border:0" allowfullscreen></iframe>
`

const module_key_dashboard_covid = `
<h1>8. COVID-19 RECOVERY</h1>
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/1IZY0TrtuafXtUC6ZSrmTImU18An0GZBX/page/rCRt" frameborder="0" style="border:0" allowfullscreen></iframe>
`

const module_aqu_dashboard_aquisition = `
<div class="standard-popup">
<h1>ACQUISITION TRACKER</h1>
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/1MlIxFMRyxZydpNi1szwEj6Mx07DdahNT/page/q1vq" frameborder="0" style="border:0" allowfullscreen></iframe>
<br><br>
<!--<a class="contact-button" href="https://docs.google.com/spreadsheets/d/1PiLL9ReVX5CSSpbAb4xKT0me25GefQex9-KyRea-Tbw/edit?usp=sharing" target=_blank ><span class="h2">TARGET PROSPECT ACQUISITION</span><span class="download-icon"></span><span class="p">Click here to access ACQUISITION download</span></a></div> -->
</div>
`

const module_aqu_dashboard_retention = `
<div class="standard-popup">
<h1>RETENTION TRACKING</h1>

<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/1TM9Fjrc9RB31MR7XjCWe1A6nh7WwMYsZ/page/VqMm" frameborder="0" style="border:0" allowfullscreen></iframe>
<br><br>
<a class="contact-button" href="https://docs.google.com/spreadsheets/d/1IY64UvL5p0At2ausVWrfOp-x15EvVBtrtM0uYngG2iE/edit?usp=sharing" target=_blank ><span class="h2">AT RISK MEMBERS</span><span class="download-icon"></span><span class="p">Click here to access Retention download.</span></a></div><!-- END OF POPUP -->

</div>
`

const module_newsite_dashboard_optimal = `
<h1>HEALTH AND FITNESS OPTIMAL LOCATION DASHBOARD</h1>
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/1vCvFyEwd6ezwmTfba4ZhQehTuqCYYQui/page/F33t" frameborder="0" style="border:0" allowfullscreen></iframe>
`

// 3. LAYER TEXT

const module_lock_standards_text = `
<p><a href="https://docs.google.com/spreadsheets/d/1_nbOKq70lxQXJnTkiVzKmOhCeb0zHw14Tu2pdXJno4A/edit#gid=675536604" target="_blank" style="text-decoration:underline!important;font-weight:bold;">Click here</a> to view SportsEye Operator Data Standards for your account.</p>
`

const module_newsite_ipm_text = `
<p><a href="mailto:intelligence@activexchange.org?subject=SportsEye%20IPM%3A%20Report%20Request&amp;body=My%20AX%20Data%20Team%2C%0A%0AI%20am%20emailing%20about%20an%20IPM%20Report%20request." target=_blank style="text-decoration:underline!important;">Contact the ActiveXchange Data Team</a> to order an IPM Report.</p>
`

// 4. DOCUMENTS

const module_lock_scorecard_documentHtml = require('../group-references/SEO_FILES/SEO_000_DEMO/module_lock_scorecard_documentHtml')


/////////////////////////////////////////////////////////////////////////////////////

// PART C: PRODUCT SPECIFIC REFERENCES

/////////////////////////////////////////////////////////////////////////////////////


// MODULE - GUIDANCE VIDEOS
const module_guid_name = require('../group-references/SEO_TEMPLATES/SEO_MODULES/guidance_videos/module_name')
const module_guid_section1_documentHtml = require('../group-references/SEO_TEMPLATES/SEO_MODULES/guidance_videos/module_section1_documentHtml')
const module_guid_section1_heading = require('../group-references/SEO_TEMPLATES/SEO_MODULES/guidance_videos/module_section1_heading')
const module_guid_section2_documentHtml = require('../group-references/SEO_TEMPLATES/SEO_MODULES/guidance_videos/module_section2_documentHtml')
const module_guid_section2_heading = require('../group-references/SEO_TEMPLATES/SEO_MODULES/guidance_videos/module_section2_heading')
const module_guid_section3_documentHtml = require('../group-references/SEO_TEMPLATES/SEO_MODULES/guidance_videos/module_section3_documentHtml')
const module_guid_section3_heading = require('../group-references/SEO_TEMPLATES/SEO_MODULES/guidance_videos/module_section3_heading')
const module_guid_section4_documentHtml = require('../group-references/SEO_TEMPLATES/SEO_MODULES/guidance_videos/module_section4_documentHtml')
const module_guid_section4_heading = require('../group-references/SEO_TEMPLATES/SEO_MODULES/guidance_videos/module_section4_heading')
const module_guid_section5_documentHtml = require('../group-references/SEO_TEMPLATES/SEO_MODULES/guidance_videos/module_section5_documentHtml')
const module_guid_section5_heading = require('../group-references/SEO_TEMPLATES/SEO_MODULES/guidance_videos/module_section5_heading')
const module_guid_section6_documentHtml = require('../group-references/SEO_TEMPLATES/SEO_MODULES/guidance_videos/module_section6_documentHtml')
const module_guid_section6_heading = require('../group-references/SEO_TEMPLATES/SEO_MODULES/guidance_videos/module_section6_heading')
const module_guid_section7_documentHtml = require('../group-references/SEO_TEMPLATES/SEO_MODULES/guidance_videos/module_section7_documentHtml')
const module_guid_section7_heading = require('../group-references/SEO_TEMPLATES/SEO_MODULES/guidance_videos/module_section7_heading')

// MODULE - MEMBER DEMAND
const module_mem_name = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/module_name')
const module_mem_submodule1_name = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule1_name')
const module_mem_submodule1_section1_heading = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule1_section1_heading')
const module_mem_submodule1_section1_layer1_legendText = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule1_section1_layer1_legendText')
const module_mem_submodule1_section1_text = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule1_section1_text')
const module_mem_submodule1_section2_heading = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule1_section2_heading')
const module_mem_submodule1_section2_layer1_legendText = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule1_section2_layer1_legendText')
const module_mem_submodule1_section2_layer2_legendText = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule1_section2_layer2_legendText')
const module_mem_submodule1_section2_text = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule1_section2_text')
const module_mem_submodule1_section3_heading = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule1_section3_heading')
const module_mem_submodule1_section3_layer1_legendText = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule1_section3_layer1_legendText')
const module_mem_submodule1_section3_layer2_legendText = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule1_section3_layer2_legendText')
const module_mem_submodule1_section3_text = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule1_section3_text')
const module_mem_submodule1_section4_heading = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule1_section4_heading')
const module_mem_submodule1_section4_layer1_legendText = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule1_section4_layer1_legendText')
const module_mem_submodule1_section4_layer2_legendText = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule1_section4_layer2_legendText')
const module_mem_submodule1_section4_text = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule1_section4_text')
const module_mem_submodule1_section_layer_details_documentHtml = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule1_section_layer_details_documentHtml')
const module_mem_submodule1_summary = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule1_summary')
const module_mem_submodule2_name = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule2_name')
const module_mem_submodule2_section1_heading = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule2_section1_heading')
const module_mem_submodule2_section1_layer1_legendText = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule2_section1_layer1_legendText')
const module_mem_submodule2_section1_text = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule2_section1_text')
const module_mem_submodule2_section2_heading = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule2_section2_heading')
const module_mem_submodule2_section2_layer1_legendText = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule2_section2_layer1_legendText')
const module_mem_submodule2_section2_layer2_legendText = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule2_section2_layer2_legendText')
const module_mem_submodule2_section2_text = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule2_section2_text')
const module_mem_submodule2_section3_heading = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule2_section3_heading')
const module_mem_submodule2_section3_layer1_legendText = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule2_section3_layer1_legendText')
const module_mem_submodule2_section3_layer2_legendText = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule2_section3_layer2_legendText')
const module_mem_submodule2_section3_text = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule2_section3_text')
const module_mem_submodule2_section4_heading = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule2_section4_heading')
const module_mem_submodule2_section4_layer1_legendText = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule2_section4_layer1_legendText')
const module_mem_submodule2_section4_layer2_legendText = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule2_section4_layer2_legendText')
const module_mem_submodule2_section4_text = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule2_section4_text')
const module_mem_submodule2_section_layer_details_documentHtml = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule2_section_layer_details_documentHtml')
const module_mem_submodule2_summary = require('../group-references/SEO_TEMPLATES/SEO_MODULES/member_demand/submodule2_summary')

// MODULE - AQUISITION RETENTION
const module_aqu_name = require('../group-references/SEO_TEMPLATES/SEO_MODULES/aquistion_retention/module_name')
const module_aqu_submodule1_name = require('../group-references/SEO_TEMPLATES/SEO_MODULES/aquistion_retention/submodule1_name')
const module_aqu_submodule1_summary = require('../group-references/SEO_TEMPLATES/SEO_MODULES/aquistion_retention/submodule1_summary')
const module_aqu_submodule1_section1_heading = require('../group-references/SEO_TEMPLATES/SEO_MODULES/aquistion_retention/submodule1_section1_heading')
const module_aqu_submodule1_section1_layer1_legendText = require('../group-references/SEO_TEMPLATES/SEO_MODULES/aquistion_retention/submodule1_section1_layer1_legendText')
const module_aqu_submodule1_section1_text = require('../group-references/SEO_TEMPLATES/SEO_MODULES/aquistion_retention/submodule1_section1_text')
const module_aqu_submodule1_section2_heading = require('../group-references/SEO_TEMPLATES/SEO_MODULES/aquistion_retention/submodule1_section2_heading')
const module_aqu_submodule1_section2_layer1_legendText = require('../group-references/SEO_TEMPLATES/SEO_MODULES/aquistion_retention/submodule1_section2_layer1_legendText')
const module_aqu_submodule1_section2_layer2_legendText = require('../group-references/SEO_TEMPLATES/SEO_MODULES/aquistion_retention/submodule1_section2_layer2_legendText')
const module_aqu_submodule1_section2_layer3_legendText = require('../group-references/SEO_TEMPLATES/SEO_MODULES/aquistion_retention/submodule1_section2_layer3_legendText')
const module_aqu_submodule1_section2_text = require('../group-references/SEO_TEMPLATES/SEO_MODULES/aquistion_retention/submodule1_section2_text')


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
  {
    id: 'module_a',
    name: module_guid_name,
    type: 'AREA_VIEWER',
    image: PRIMARY_MENU_IMAGE,
    summary: '',
        sections: [
          {
            heading: module_guid_section1_heading,
            text: null,
            icon: QUESTION_ICON,
            documentHtml: module_guid_section1_documentHtml,
          },//END OF SECTION
          {
            heading: module_guid_section2_heading,
            text: null,
            icon: QUESTION_ICON,
            documentHtml: module_guid_section2_documentHtml,
          },//END OF SECTION
          {
            heading: module_guid_section3_heading,
            text: null,
            icon: QUESTION_ICON,
            documentHtml: module_guid_section3_documentHtml,
          },//END OF SECTION
          {
            heading: module_guid_section4_heading,
            text: null,
            icon: QUESTION_ICON,
            documentHtml: module_guid_section4_documentHtml,
          },//END OF SECTION
          {
            heading: module_guid_section5_heading,
            text: null,
            icon: QUESTION_ICON,
            documentHtml: module_guid_section5_documentHtml,
          },//END OF SECTION
          {
            heading: module_guid_section6_heading,
            text: null,
            icon: QUESTION_ICON,
            documentHtml: module_guid_section6_documentHtml,
          },//END OF SECTION
          {
            heading: module_guid_section7_heading,
            text: null,
            icon: QUESTION_ICON,
            documentHtml: module_guid_section7_documentHtml,
          },//END OF SECTION
        ]
  }, //END OF MODULE
  {
    id: 'module_mem',
    name: module_mem_name,
    collapsible: true,
    type: 'CODE_VIEWER',
    CODES: [
      {
        name: module_mem_submodule1_name,
        id: 'module_b1',
        image: PRIMARY_MENU_IMAGE,
        summary: module_mem_submodule1_summary,
        sections: [
          {
            heading: module_mem_submodule1_section1_heading,
            text: module_mem_submodule1_section1_text,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'seo_019_SITE',
                legendText: module_mem_submodule1_section1_layer1_legendText,
                hover: module_mem_submodule1_sectionall_layers_site_popup_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: module_mem_submodule1_section2_heading,
            text: module_mem_submodule1_section2_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'seo_019_mem_all_SA2',
                legendText: module_mem_submodule1_section2_layer1_legendText,
                hover: module_mem_submodule1_sectionall_layers_area_popup_hover,
              },
              {
                id: 'seo_019_mem_all_LGA',
                name: 'LGA',
                legendText: module_mem_submodule1_section2_layer2_legendText,
                hover: module_mem_submodule1_sectionall_layers_area_popup_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: module_mem_submodule1_section3_heading,
            text: module_mem_submodule1_section3_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'se_leisure_dem_SA2',
                legendText: module_mem_submodule1_section3_layer1_legendText,
                hover: module_mem_submodule1_sectionall_layers_area_popup_hover,
              },
              {
                id: 'se_leisure_dem_LGA',
                name: 'LGA',
                legendText: module_mem_submodule1_section3_layer2_legendText,
                hover: module_mem_submodule1_sectionall_layers_area_popup_hover,
              },
              {
                name: 'SA2 (NZ)',
                id: 'se_leisure_dem_nz_SA2',
                legendText: module_mem_submodule1_section3_layer1_legendText,
                hover: module_mem_submodule1_sectionall_layers_area_popup_hover,
              },
              {
                id: 'se_leisure_dem_nz_LGA',
                name: 'TA (NZ)',
                legendText: module_mem_submodule1_section3_layer2_legendText,
                hover: module_mem_submodule1_sectionall_layers_area_popup_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: module_mem_submodule1_section4_heading,
            text: module_mem_submodule1_section4_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'seo_019_mem_dem_cnv_all_SA2',
                legendText: module_mem_submodule1_section4_layer1_legendText,
                hover: module_mem_submodule1_sectionall_layers_area_popup_hover,
              },
              {
                id: 'seo_019_mem_dem_cnv_all_LGA',
                name: 'LGA',
                legendText: module_mem_submodule1_section4_layer2_legendText,
                hover: module_mem_submodule1_sectionall_layers_area_popup_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: module_se_section_layer_details_heading,
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: module_mem_submodule1_section_layer_details_documentHtml,
          },//END OF SECTION
        ]
      },//END OF SUB-MODULE
      {
        name: module_mem_submodule2_name,
        id: 'module_b2',
        image: PRIMARY_MENU_IMAGE,
        summary: module_mem_submodule2_summary,
        sections: [
          {
            heading: module_mem_submodule2_section1_heading,
            text: module_mem_submodule2_section1_text,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'seo_019_swim_SITE',
                legendText: module_mem_submodule2_section1_layer1_legendText,
                hover: module_mem_submodule2_sectionall_layers_site_popup_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: module_mem_submodule2_section2_heading,
            text: module_mem_submodule2_section2_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'seo_019_mem_swm_SA2',
                legendText: module_mem_submodule2_section2_layer1_legendText,
                hover: module_mem_submodule2_sectionall_layers_area_popup_hover,
              },
              {
                id: 'seo_019_mem_swm_LGA',
                name: 'LGA',
                legendText: module_mem_submodule2_section2_layer2_legendText,
                hover: module_mem_submodule2_sectionall_layers_area_popup_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: module_mem_submodule2_section3_heading,
            text: module_mem_submodule2_section3_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'se_swim_dem_SA2',
                legendText: module_mem_submodule2_section3_layer1_legendText,
                hover: module_mem_submodule2_sectionall_layers_area_popup_hover,
              },
              {
                id: 'se_swim_dem_LGA',
                name: 'LGA',
                legendText: module_mem_submodule2_section3_layer2_legendText,
                hover: module_mem_submodule2_sectionall_layers_area_popup_hover,
              },
              {
                name: 'SA2 (NZ)',
                id: 'se_swim_dem_nz_SA2',
                legendText: module_mem_submodule2_section3_layer1_legendText,
                hover: module_mem_submodule2_sectionall_layers_area_popup_hover,
              },
              {
                id: 'se_swim_dem_nz_LGA',
                name: 'TA (NZ)',
                legendText: module_mem_submodule2_section3_layer2_legendText,
                hover: module_mem_submodule2_sectionall_layers_area_popup_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: module_mem_submodule2_section4_heading,
            text: module_mem_submodule2_section4_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA2',
                id: 'seo_019_mem_dem_cnv_swm_SA2',
                legendText: module_mem_submodule2_section4_layer1_legendText,
                hover: module_mem_submodule2_sectionall_layers_area_popup_hover,
              },
              {
                id: 'seo_019_mem_dem_cnv_swm_LGA',
                name: 'LGA',
                legendText: module_mem_submodule2_section4_layer2_legendText,
                hover: module_mem_submodule2_sectionall_layers_area_popup_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: module_se_section_layer_details_heading,
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: module_mem_submodule2_section_layer_details_documentHtml,
          },//END OF SECTION
        ]
      },//END OF SUB-MODULE
    ]
  },//END OF MODULE
  {
    id: 'module_key',
    name: 'KEY DASHBOARDS',
    type: 'AREA_VIEWER',
    image: PRIMARY_MENU_IMAGE,
    summary: '',
        sections: [
          {
            heading: '1. CENTRE MANAGER DASHBOARD',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_key_dashboard_centremanager,
          },//END OF SECTION
          {
            heading: '2. HEALTH AND WELLBEING - YOUR LOCAL GOVT',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_key_dashboard_healthwellbeing,
          },//END OF SECTION
          {
            heading: '3. SOCIAL VALUE SUMMARY',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_key_dashboard_socialvalue,
          },//END OF SECTION
          {
            heading: '4. SITE PERFORMANCE (HEAD OFFICE) DASHBOARD',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_key_dashboard_siteperformance,
          },//END OF SECTION
          {
            heading: '5. GROUP EX PROGRAM DASHBOARD',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_key_dashboard_groupex,
          },//END OF SECTION
          {
            heading: '6. SWIM SCHOOL DASHBOARD',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_key_dashboard_swimschool,
          },//END OF SECTION
          {
            heading: '7. PRICING DASHBOARD',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_key_dashboard_pricing,
          },//END OF SECTION
          {
            heading: '8. COVID-19 RECOVERY',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_key_dashboard_covid,
          },//END OF SECTION
        ]
  }, //END OF MODULE
  {
    id: 'module_aqu',
    name: module_aqu_name,
    collapsible: true,
    type: 'CODE_VIEWER',
    CODES: [
      {
        name: module_aqu_submodule1_name,
        id: 'module_d1',
        image: PRIMARY_MENU_IMAGE,
        summary: module_aqu_submodule1_summary,
        sections: [
          {
            heading: module_aqu_submodule1_section1_heading,
            text: module_aqu_submodule1_section1_text,
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'seo_019_unmtdem_SITE',
                legendText: module_aqu_submodule1_section1_layer1_legendText,
                hover: module_aqu_submodule1_sectionall_layers_site_popup_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: module_aqu_submodule1_section2_heading,
            text: module_aqu_submodule1_section2_text,
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'seo_019_unmtdem_SA1',
                legendText: module_aqu_submodule1_section2_layer1_legendText,
                hover: module_aqu_submodule1_sectionall_layers_area_popup_hover,
              },
              {
                name: 'SA2',
                id: 'seo_019_unmtdem_SA2',
                legendText: module_aqu_submodule1_section2_layer2_legendText,
                hover: module_aqu_submodule1_sectionall_layers_area_popup_hover,
              },
              {
                id: 'seo_019_unmtdem_LGA',
                name: 'LGA',
                legendText: module_aqu_submodule1_section2_layer3_legendText,
                hover: module_aqu_submodule1_sectionall_layers_area_popup_hover,
              },
            ]
          },//END OF SECTION
        ]
      },//END OF SUB-MODULE
      {
        name: 'DASHBOARDS',
        id: 'module_d2',
        image: PRIMARY_MENU_IMAGE,
        summary: '',
        sections: [
          {
            heading: '1. ACQUISITION',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_aqu_dashboard_aquisition,
          },//END OF SECTION
          {
            heading: '2. RETENTION',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_aqu_dashboard_retention,
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
      },//END OF SECTION GROUP
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
              {
                name: 'SA1 (NZ)',
                id: 'cp_hf_2_nz_SA1',
                legendText: module_cp_submodule3_section2_layer1_legendText,
                hover: module_cp_submodule3_sectionmaps_area_layers_popup_hover,
              },
              {
                name: 'SA2 (NZ)',
                id: 'cp_hf_2_nz_SA2',
                legendText: module_cp_submodule3_section2_layer2_legendText,
                hover: module_cp_submodule3_sectionmaps_area_layers_popup_hover,
              },
              {
                id: 'cp_hf_2_nz_LGA',
                name: 'TA (NZ)',
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
              {
                name: 'SA1 (NZ)',
                id: 'cp_hf_3_nz_SA1',
                legendText: module_cp_submodule3_section3_layer1_legendText,
                hover: module_cp_submodule3_sectionmaps_area_layers_popup_hover,
              },
              {
                name: 'SA2 (NZ)',
                id: 'cp_hf_3_nz_SA2',
                legendText: module_cp_submodule3_section3_layer2_legendText,
                hover: module_cp_submodule3_sectionmaps_area_layers_popup_hover,
              },
              {
                id: 'cp_hf_3_nz_LGA',
                name: 'TA (NZ)',
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
              {
                name: 'SA1 (NZ)',
                id: 'cp_hf_4_nz_SA1',
                legendText: module_cp_submodule3_section4_layer1_legendText,
                hover: module_cp_submodule3_sectionmaps_area_layers_popup_hover,
              },
              {
                name: 'SA2 (NZ)',
                id: 'cp_hf_4_nz_SA2',
                legendText: module_cp_submodule3_section4_layer2_legendText,
                hover: module_cp_submodule3_sectionmaps_area_layers_popup_hover,
              },
              {
                id: 'cp_hf_4_nz_LGA',
                name: 'TA (NZ)',
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
              {
                name: 'SA1 (NZ)',
                id: 'cp_hf_5_nz_SA1',
                legendText: module_cp_submodule3_section5_layer1_legendText,
                hover: module_cp_submodule3_sectionmaps_area_layers_popup_hover,
              },
              {
                name: 'SA2 (NZ)',
                id: 'cp_hf_5_nz_SA2',
                legendText: module_cp_submodule3_section5_layer2_legendText,
                hover: module_cp_submodule3_sectionmaps_area_layers_popup_hover,
              },
              {
                id: 'cp_hf_5_nz_LGA',
                name: 'TA (NZ)',
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
              {
                name: 'SA1 (NZ)',
                id: 'cp_hf_6_nz_SA1',
                legendText: module_cp_submodule3_section6_layer1_legendText,
                hover: module_cp_submodule3_sectionmaps_area_layers_popup_hover,
              },
              {
                name: 'SA2 (NZ)',
                id: 'cp_hf_6_nz_SA2',
                legendText: module_cp_submodule3_section6_layer2_legendText,
                hover: module_cp_submodule3_sectionmaps_area_layers_popup_hover,
              },
              {
                id: 'cp_hf_6_nz_LGA',
                name: 'TA (NZ)',
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
    id: 'module_network',
    name: 'SPORTSEYE NETWORK',
    collapsible: true,
    type: 'CODE_VIEWER',
    CODES: [
      {
        name: 'STATE SPORT DEMAND',
        id: 'module_network_state',
        image: PRIMARY_MENU_IMAGE,
        summary: '<p>Select layers below to display on the map.</p>',
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
            heading: module_se_section_layer_details_heading,
            text: null,
            icon: DOCUMENT_ICON,
            // documentHtml: TBC,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
      {
        name: 'FITNESS AUSTRALIA KPI BENCHMARKING',
        id: 'module_network_fitness',
        image: PRIMARY_MENU_IMAGE,
        summary: '<p>Select layers below to display on the map.</p>',
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
        id: 'module_network_fy30',
        image: PRIMARY_MENU_IMAGE,
        summary: '<p>Select layers below to display on the map.</p>',
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
        id: 'module_network_arv',
        image: PRIMARY_MENU_IMAGE,
        summary: '<p>Select layers below to display on the map.</p>',
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
    id: 'module_lock', // LOCKER ROOM
    name: module_lock_name,
    type: 'AREA_VIEWER',
    image: PRIMARY_MENU_IMAGE,
    summary: module_lock_summary,
        sections: [
          {
            heading: 'ACTIVITY STANDARDS AND MATCHING',
            text: module_lock_standards_text,
            icon: DOCUMENT_ICON,
            // documentHtml: TBC,
          },//END OF SECTION
          {
            heading: 'DATA QUALITY SCORECARD (AVAILABLE FREE ON REQUEST)',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: module_lock_scorecard_documentHtml,
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
    id: 'module_newsite',
    name: 'NEW SITE IDENTIFICATION - PROPERTY SEARCH (OPTIONAL MODULE)',
    type: 'AREA_VIEWER',
    image: PRIMARY_MENU_IMAGE,
    summary: '<p>Select layers below to display on the map.</p>',
        sections: [
          {
            heading: '1. HEALTH AND FITNESS OPTIMAL HOTSPOTS',
            text: '<b>Colour: Aggregated Unmet Demand</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'SA1',
                id: 'seo_019_unmtdem_agg_SA1',
                legendText: 'Aggregated Unmet Demand in SA1 Area',
                // hover: '<p>{AREA_NAME}</p><h4>{AREA_UNMT_DEM_AGG_ALL}</h4>',
                hover: '<p>{AREA_NAME}</p><h4>{seo_001_unmtdem_agg}</h4>',
              },
            ]
          },//END OF SECTION
          {
            heading: '2. HEALTH AND FITNESS OPTIMAL LOCATION DASHBOARD',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_newsite_dashboard_optimal,
          },//END OF SECTION
          {
            heading: '3. ORDER FULL INVESTMENT PLANNING MODEL',
            text: module_newsite_ipm_text,
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
