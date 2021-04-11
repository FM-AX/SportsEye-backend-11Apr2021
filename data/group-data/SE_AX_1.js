/////////////////////////////////////////////////////////////////////////////////////

// SE CANADA V0.11
// LAST UPDATED 15-FEB-21

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
const ACCOUNT_NAME = "DEMO OPERATOR"

// 1B. PRODUCT SELECTION PAGE
const SPLASH_APPS = [
  {
    name: 'DEMO OPERATOR',
    lede: '<p>A business intelligence service tailored for your organization.</p>',
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

  Empowering data to shape a more informed, connected and active sector.`,
  head: "WELCOME TO ACTIVEXCHANGE",
  subhead: ACCOUNT_NAME,
  disclaimer: '<span><a href="https://activexchange.ca/your-data-our-commitment" target="_blank">TERMS OF REFERENCE</a><span>',
  action: "ENTER"
}

const AFFILIATE_LOGOS = [
  "",
]


// 2. MAP DETAILS

// 2A. MAPBOX ACCOUNT DETAILS
// // Mapbox Account: activexchange+cust
const MAPBOX_APIKEY = "pk.eyJ1IjoiYWN0aXZleGNoYW5nZS1jdXN0IiwiYSI6ImNrM292dnI2eDI1Z2MzaHBobWk4Z3Q2cnQifQ.Nx-qysX5Bjm33Zwux6H1dA"
// // Mapbox Studio Style: SE_CANADA
const MAPBOX_STYLE = "mapbox://styles/activexchange-cust/ckkvsfy6h4ewl17n8aqzuxnjo"


// 2B. STARTING MAP VIEW

const MAP_START = {
  //54.188, -114.526
  lat: 53.500, lng: -113.500, zoom: 8 //CANADA
}

// 3. IMAGES

// 3A. MENU IMAGES
const PRIMARY_MENU_IMAGE = '/images/SportsEye_Swimming.jpg'


/////////////////////////////////////////////////////////////////////////////////////

// PART B: ACCOUNT SPECIFIC REFERENCES

/////////////////////////////////////////////////////////////////////////////////////


// 1. POPUPS

const module_recreation_sectionall_layers_site_popup_hover = `
<h4>{site_name}</h4>
`

const module_recreation_sectionall_layers_area_popup_hover = `
<h4>{AREA_NAME}</h4>
<p>1. Active Users</p>
<h4>{se_ax_1_mem_all}</h4>
<p>2. Demand / Population</p>
<h4>{se_leisure_dem}</h4>
<p>3. Conversion</p>
<h4>{se_ax_1_mem_dem_cnv_all}%</h4>
<p>4. Unmet Demand</p>
<h4>{se_ax_1_unmtdem_all}</h4>
<p>5. Future Change in Demand</p>
<h4>{se_ax_1_chngdem_all}</h4>
`

const module_recreation_sectionswim_layers_area_popup_hover = `
<h4>{AREA_NAME}</h4>
<p>1. Active Users</p>
<h4>{se_ax_1_mem_swm}</h4>
<p>2. Demand / Population</p>
<h4>{se_swim_dem}</h4>
<p>3. Conversion</p>
<h4>{se_ax_1_mem_dem_cnv_swm}%</h4>
<p>4. Unmet Demand</p>
<h4>{se_ax_1_unmtdem_swm}</h4>
<p>5. Future Change in Demand</p>
<h4>{se_ax_1_chngdem_swm}</h4>
`

const module_recreation_sectionice_layers_area_popup_hover = `
<h4>{AREA_NAME}</h4>
<p>1. Active Users</p>
<h4>{se_ax_1_mem_ice}</h4>
<p>2. Demand / Population</p>
<h4>{se_ice_dem}</h4>
<p>3. Conversion</p>
<h4>{se_ax_1_mem_dem_cnv_ice}%</h4>
<p>4. Unmet Demand</p>
<h4>{se_ax_1_unmtdem_ice}</h4>
<p>5. Future Change in Demand</p>
<h4>{se_ax_1_chngdem_ice}</h4>
`


const module_cp_indicator_area_layers_popup_hover = `
<h4>{AREA_NAME}</h4>
<p>1. Total Population: <!-- bug --><b>{cp_cen_total_pop}</b></p>
<p>2. Percent 0-14: <!-- bug --><b>{cp_cen_0_14_pop}%</b></p>
<p>3. Percent 65+: <!-- bug --><b>{cp_cen_65_pop}%</b></p>
<p>4. Percent Low Income: <!-- bug --><b>{cp_cen_low_income}%</b></p>
<p>5. Percent Own Home: <!-- bug --><b>{cp_cen_own_home}%</b></p>
<p>6. Percent Rent Home: <!-- bug --><b>{cp_cen_rent_home}%</b></p>
<p>7. Percent Indigenous: <!-- bug --><b>{cp_cen_indigenous_pop}%</b></p>
<p>8. Percent Visable Minority: <!-- bug --><b>{cp_cen_minority_pop}%</b></p>
<p>9. Percent Unemploymed: <!-- bug --><b>{cp_cen_unemployed_pop}%</b></p>
<p>10. Percent Higher Education: <!-- bug --><b>{cp_cen_higher_ed_pop}%</b></p>
<p>11. Deprivation Index: <!-- bug --><b>{cp_cen_deprivation}</b></p>
<p>12. Percent Youth Overweight: <!-- bug --><b>{cp_cen_youth_bmi_pop}%</b></p>
<p>13. Percent Adult Overweight: <!-- bug --><b>{cp_cen_adult_bmi_pop}%</b></p>
<p>14. Physical Activities: <!-- bug --><b>{cp_cen_physical_pop}</b></p>
<p>15. Heart Disease: <!-- bug --><b>{cp_cen_heart_pop}</b></p>
<p>16. Diabetes: <!-- bug --><b>{cp_cen_diabetes_pop}</b></p>
<p>17. Cancer: <!-- bug --><b>{cp_cen_cancer_pop}</b></p>
<p>18. Mental Health: <!-- bug --><b>{cp_cen_mental_low_pop}</b></p>
`


const module_cp_areainfo_layers_school_popup_hover = `
<h4>{institution_name}</h4>
`




// 2. DASHBOARDS

const module_key_dashboard_municipality = `
<h1>LOCAL MUNICIPALITY COMMUNITY IMPACT REPORT (TRENDS)</h1>
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/984efe60-af6b-43a2-8740-f742a2783750/page/FdRyB" frameborder="0" style="border:0" allowfullscreen></iframe>
`

const module_key_dashboard_centremanager = `
<h1>CENTRE MANAGER (PRIORITIES)</h1>
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/56d069a1-5e0d-4a08-995a-7e2328d0a827/page/cAm9" frameborder="0" style="border:0" allowfullscreen></iframe>
`

const module_key_dashboard_covid = `
<h1>COVID RECOVERY (FORECAST)</h1>
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/d930a006-76ff-4ab0-a4db-b9c91399f48b/page/yqYkB" frameborder="0" style="border:0" allowfullscreen></iframe>
`

const module_key_dashboard_siteperformance = `
<h1>SITE PERFORMANCE (BENCHMARKS)</h1>
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/bfecc60e-5bf6-4037-892b-de471aa090a3/page/VqMm" frameborder="0" style="border:0" allowfullscreen></iframe>
`

const module_key_dashboard_retention = `
<div class="standard-popup">
<h1>CUSTOMER JOURNEY (RETENTION)</h1>

<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/3037c4fc-0b31-408a-a9ee-a1a2aee13291/page/SNYDB" frameborder="0" style="border:0" allowfullscreen></iframe>
<br><br>
</div><!-- END OF POPUP -->

</div>
`

const module_key_dashboard_groupex = `
<h1>PROGRAMS DASHBOARD</h1>
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/5b03d5d7-fd16-442e-b8d9-f85529cae291/page/DRsSB" frameborder="0" style="border:0" allowfullscreen></iframe>
`

const module_key_dashboard_aquisition = `
<div class="standard-popup">
<h1>USER ACQUISITION (MARKETING)</h1>
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/7f0043f3-7e9b-4cac-8c2c-f156d4b13e23/page/gDr8" frameborder="0" style="border:0" allowfullscreen></iframe>
<br><br>
<!--<a class="contact-button" href="https://docs.google.com/spreadsheets/d/1PiLL9ReVX5CSSpbAb4xKT0me25GefQex9-KyRea-Tbw/edit?usp=sharing" target=_blank ><span class="h2">TARGET PROSPECT ACQUISITION</span><span class="download-icon"></span><span class="p">Click here to access ACQUISITION download</span></a></div> -->
</div>
`

const module_key_dashboard_swimschool = `
<h1>REGISTERED PROGRAMS (ENROLLMENT)</h1>
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/1ecfac73-f768-465e-90c9-90d25da4ed40/page/8iFsB" frameborder="0" style="border:0" allowfullscreen></iframe>
`

const module_key_dashboard_pricing = `
<h1>PRICING DASHBOARD</h1>
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/5b08a819-8bc5-401f-9b6c-fe61edff4154/page/rCRt" frameborder="0" style="border:0" allowfullscreen></iframe>
`

const module_key_dashboard_healthwellbeing = `
<h1>HEALTH AND FITNESS OPTIMAL LOCATION DASHBOARD</h1>
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/1vCvFyEwd6ezwmTfba4ZhQehTuqCYYQui/page/F33t" frameborder="0" style="border:0" allowfullscreen></iframe>
`


const module_ax_dashboard_socialvalue = `
<h1>SOCIAL VALUE SUMMARY</h1>
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/17a7f434-5cb7-4550-9b90-35252f5c2be9/page/gCnRB" frameborder="0" style="border:0" allowfullscreen></iframe>
`
/*** Faiza Need to be Edit ***/
const module_ax_dashboard_retention = `
<h1>RETENTION DASHBOARD</h1>
<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/694d33df-c7b6-4792-bbc8-f8466353be31/page/KPmu" frameborder="0" style="border:0" allowfullscreen></iframe>
<br/><br/>
<a class="contact-button" href="https://docs.google.com/spreadsheets/d/1IY64UvL5p0At2ausVWrfOp-x15EvVBtrtM0uYngG2iE/edit?usp=sharing" target=_blank ><span class="h2">AT RISK MEMBERS</span><span class="download-icon"></span><span class="p">Click here to access Retention download.</span></a></div><!-- END OF POPUP -->

`

const module_ax_dashboard_sponsor_match = `
<div class="standard-popup">
<h1> SPONSOR MATCH (PARTNERSHIP IDENTIFICATION)</h1>

<iframe width="700" height="500" src="https://datastudio.google.com/embed/reporting/e664e9b4-36ba-43a6-9da3-9549c40b66db/page/l9ItB?s=lF_-VqR7XFk" frameborder="0" style="border:0" allowfullscreen></iframe>
<br><br>
</div><!-- END OF POPUP -->

</div>
`


const module_ax_dashboard_retention_spreadsheet = `


`
const module_ax_dashboard_facility_rental = `
<h1>FACILITY RENTAL</h1>

`


// 3. LAYER TEXT


// 4. DOCUMENTS


const module_recreation_all_sectiondetails_documentHtml = `
LAYER DETAILS TO BE DONE
`

const module_recreation_swim_sectiondetails_documentHtml = `
LAYER DETAILS TO BE DONE
`

const module_recreation_ice_sectiondetails_documentHtml = `
LAYER DETAILS TO BE DONE
`

const module_cp_indicators_sectiondetails_documentHtml = `
<div class="locker-room">
<h3>EXAMPLE MODULE TITLE</h3>
<h3>EXAMPLE LAYER 1</h3>
<p>Example description of the contents of layer 1.</p>
<h3>EXAMPLE LAYER 2</h3>
<p>Example description of the contents of layer 2</p>
</div> <!-- END OF TABLE -->
`

const module_cp_areainfo_sectiondetails_documentHtml = `
LAYER DETAILS TO BE DONE
`

// VIDEOS

const module_video_section1_documentHtml = `
<h1>INTRO TO SE OPERATOR</h1>

<iframe src="https://player.vimeo.com/video/396599596" width="640" height="359" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe

`
const module_video_section2_documentHtml = `
<h1>IDENTIFYING YOUR PRIORITY AREAS</h1>

<iframe src="https://player.vimeo.com/video/398692217" width="640" height="359" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

`
const module_video_section3_documentHtml = `
<h1>MEMBER ACQUISITION</h1>

<iframe src="https://player.vimeo.com/video/396601908" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

`
const module_video_section4_documentHtml = `
<h1>MEMBER RETENTION</h1>

<iframe src="https://player.vimeo.com/video/396605128" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

`
const module_video_section5_documentHtml = `
<h1>OPERATIONS (PROGRAM & PRICING)</h1>

<iframe src="https://player.vimeo.com/video/396607628" width="640" height="359" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

`
const module_video_section6_documentHtml = `
<h1>LOCAL GOVERNMENT MEETINGS</h1>

<iframe src="https://player.vimeo.com/video/396610384" width="640" height="480" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

`
const module_video_section7_documentHtml = `
<h1>INFRASTRUCTURE & ACTION PLANS</h1>

<iframe src="https://player.vimeo.com/video/398733789" width="640" height="359" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

`



/////////////////////////////////////////////////////////////////////////////////////

// PART C: PRODUCT SPECIFIC REFERENCES

/////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////////////

// PART D: SPORTSEYE REFERENCES

/////////////////////////////////////////////////////////////////////////////////////


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
    id: 'module_recreation',
    name: 'RECREATION AND AQUATIC MAPS',
    collapsible: true,
    type: 'CODE_VIEWER',
    CODES: [
      {
        name: 'MY USERS AND SITES',
        id: 'module_recreation_users',
        image: PRIMARY_MENU_IMAGE,
        summary: 'Select layers below to display on the map.',
        sections: [
          {
            heading: 'YOUR SITES',
            text: '<b>Location of your sites</b>',
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'se_ax_1_SITE',
                legendText: 'Your Sites',
                hover: module_recreation_sectionall_layers_site_popup_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: '1. ACTIVE USERS (AREA)',
            text: '<b>Colour: Total Active Users</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'DA',
                id: 'se_ax_1_mem_all_DA',
                legendText: 'Total Active Users in Dissemination Area',
                hover: module_recreation_sectionall_layers_area_popup_hover,
              },
              {
                name: 'TRA',
                id: 'se_ax_1_mem_all_TRA',
                legendText: 'Total Active Users in Census Tract Area',
                hover: module_recreation_sectionall_layers_area_popup_hover,
              },
              {
                id: 'se_ax_1_mem_all_DIV',
                name: 'DIV',
                legendText: 'Total Active Users in Census Division Area',
                hover: module_recreation_sectionall_layers_area_popup_hover,
              },
              {
                id: 'se_ax_1_mem_all_SUB',
                name: 'SUB',
                legendText: 'Total Active Users in Census Subdivision Area',
                hover: module_recreation_sectionall_layers_area_popup_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: '2. DEMAND / POPULATION (AREA)',
            text: '<b>Colour: Total Demand / Population</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'DA',
                id: 'se_leisure_dem_DA',
                legendText: 'Total Demand / Population in Dissemination Area',
                hover: module_recreation_sectionall_layers_area_popup_hover,
              },
              {
                name: 'TRA',
                id: 'se_leisure_dem_TRA',
                legendText: 'Total Demand / Population in Census Tract Area',
                hover: module_recreation_sectionall_layers_area_popup_hover,
              },
              {
                id: 'se_leisure_dem_DIV',
                name: 'DIV',
                legendText: 'Total Demand / Population in Census Division Area',
                hover: module_recreation_sectionall_layers_area_popup_hover,
              },
              {
                id: 'se_leisure_dem_SUB',
                name: 'SUB',
                legendText: 'Total Demand / Population in Census Subdivision Area',
                hover: module_recreation_sectionall_layers_area_popup_hover,
              },
            ]
          },//END OF SECTION

          {
            heading: '3. CONVERSION (AREA)',
            text: '<b>Colour: Total Demand Conversion (%)</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'DA',
                id: 'se_ax_1_mem_dem_cnv_all_DA',
                legendText: 'Total Demand Conversion (%) in Dissemination Area',
                hover: module_recreation_sectionall_layers_area_popup_hover,
              },
              {
                name: 'TRA',
                id: 'se_ax_1_mem_dem_cnv_all_TRA',
                legendText: 'Total Demand Conversion (%) in Census Tract Area',
                hover: module_recreation_sectionall_layers_area_popup_hover,
              },
              {
                id: 'se_ax_1_mem_dem_cnv_all_DIV',
                name: 'DIV',
                legendText: 'Total Demand Conversion (%) in Census Division Area',
                hover: module_recreation_sectionall_layers_area_popup_hover,
              },
              {
                id: 'se_ax_1_mem_dem_cnv_all_SUB',
                name: 'SUB',
                legendText: 'Total Demand Conversion (%) in Census Subdivision Area',
                hover: module_recreation_sectionall_layers_area_popup_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: '4. UNMET DEMAND (GROWTH AREAS)',
            text: '<b>Colour: Total Unmet Demand (Growth Area)</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'DA',
                id: 'se_ax_1_unmtdem_all_DA',
                legendText: 'Total Unmet Demand in Dissemination Area',
                hover: module_recreation_sectionall_layers_area_popup_hover,
              },
              {
                name: 'TRA',
                id: 'se_ax_1_unmtdem_all_TRA',
                legendText: 'Total Unmet Demand in Census Tract Area',
                hover: module_recreation_sectionall_layers_area_popup_hover,
              },
              {
                id: 'se_ax_1_unmtdem_all_DIV',
                name: 'DIV',
                legendText: 'Total Unmet Demand in Census Division Area',
                hover: module_recreation_sectionall_layers_area_popup_hover,
              },
              {
                id: 'se_ax_1_unmtdem_all_SUB',
                name: 'SUB',
                legendText: 'Total Unmet Demand in Census Subdivision Area',
                hover: module_recreation_sectionall_layers_area_popup_hover,
              },
            ]
          },//END OF SECTION      
          {
            heading: '5. FUTURE CHANGE IN DEMAND (2030)',
            text: '<b>Colour: Total Future CHange in Demand</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'DA',
                id: 'se_ax_1_chngdem_all_DA',
                legendText: 'Change in Demand in Dissemination Area',
                hover: module_recreation_sectionall_layers_area_popup_hover,
              },
              {
                name: 'TRA',
                id: 'se_ax_1_chngdem_all_TRA',
                legendText: 'Change in Demand in Census Tract Area',
                hover: module_recreation_sectionall_layers_area_popup_hover,
              },
              {
                name: 'DIV',
                id: 'se_ax_1_chngdem_all_DIV',
                legendText: 'Change in Demand in Census Dvision Area',
                hover: module_recreation_sectionall_layers_area_popup_hover,
              },
              {
                name: 'SUB',
                id: 'se_ax_1_chngdem_all_SUB',
                legendText: 'Change in Demand in Census Subdivision Area',
                hover: module_recreation_sectionall_layers_area_popup_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: 'LAYER DETAILS',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: module_recreation_all_sectiondetails_documentHtml,
          },//END OF SECTION
        ]
      },//END OF SUB-MODULE
      {
        name: 'SWIMMING LESSONS',
        id: 'module_recreation_swim',
        image: PRIMARY_MENU_IMAGE,
        summary: 'Select layers below to display on the map.',
        sections: [
          {
            heading: 'YOUR SITES',
            text: '<b>Location of your Swimming Lesson sites</b>',
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'se_ax_1_swim_SITE',
                legendText: 'Your Swimming Lesson Sites',
                hover: module_recreation_sectionall_layers_site_popup_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: '1. ACTIVE USERS (AREA)',
            text: '<b>Colour: Swimming Lesson Active Users</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'DA',
                id: 'se_ax_1_mem_swm_DA',
                legendText: 'Swimming Lesson Active Users in Dissemination Area',
                hover: module_recreation_sectionswim_layers_area_popup_hover,
              },
              {
                name: 'TRA',
                id: 'se_ax_1_mem_swm_TRA',
                legendText: 'Swimming Lesson Active Users in Census Tract Area',
                hover: module_recreation_sectionswim_layers_area_popup_hover,
              },
              {
                id: 'se_ax_1_mem_swm_DIV',
                name: 'DIV',
                legendText: 'Swimming Lesson Active Users in Census Division Area',
                hover: module_recreation_sectionswim_layers_area_popup_hover,
              },
              {
                id: 'se_ax_1_mem_swm_SUB',
                name: 'SUB',
                legendText: 'Swimming Lesson Active Users in Census Subdivision Area',
                hover: module_recreation_sectionswim_layers_area_popup_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: '2. DEMAND / POPULATION (AREA)',
            text: '<b>Colour: Swimming Lesson Demand / Population</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'DA',
                id: 'se_swim_dem_DA',
                legendText: 'Swimming Lesson Demand / Population in Dissemination Area',
                hover: module_recreation_sectionswim_layers_area_popup_hover,
              },
              {
                name: 'TRA',
                id: 'se_swim_dem_TRA',
                legendText: 'Swimming Lesson Demand / Population in Census Tract Area',
                hover: module_recreation_sectionswim_layers_area_popup_hover,
              },
              {
                id: 'se_swim_dem_DIV',
                name: 'DIV',
                legendText: 'Swimming Lesson Demand / Population in Census Division Area',
                hover: module_recreation_sectionswim_layers_area_popup_hover,
              },
              {
                id: 'se_swim_dem_SUB',
                name: 'SUB',
                legendText: 'Swimming Lesson Demand / Population in Census Subdivision Area',
                hover: module_recreation_sectionswim_layers_area_popup_hover,
              },
            ]
          },//END OF SECTION

          {
            heading: '3. CONVERSION (AREA)',
            text: '<b>Colour: Swimming Lesson Demand Conversion (%)</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'DA',
                id: 'se_ax_1_mem_dem_cnv_swm_DA',
                legendText: 'Swimming Lesson Demand Conversion (%) in Dissemination Area',
                hover: module_recreation_sectionswim_layers_area_popup_hover,
              },
              {
                name: 'TRA',
                id: 'se_ax_1_mem_dem_cnv_swm_TRA',
                legendText: 'Swimming Lesson Demand Conversion (%) in Census Tract Area',
                hover: module_recreation_sectionswim_layers_area_popup_hover,
              },
              {
                id: 'se_ax_1_mem_dem_cnv_swm_DIV',
                name: 'DIV',
                legendText: 'Swimming Lesson Demand Conversion (%) in Census Division Area',
                hover: module_recreation_sectionswim_layers_area_popup_hover,
              },
              {
                id: 'se_ax_1_mem_dem_cnv_swm_SUB',
                name: 'SUB',
                legendText: 'Swimming Lesson Demand Conversion (%) in Census Subdivision Area',
                hover: module_recreation_sectionswim_layers_area_popup_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: '4. UNMET DEMAND (GROWTH AREAS)',
            text: '<b>Colour: Swimming Lesson Unmet Demand (Growth Area)</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'DA',
                id: 'se_ax_1_unmtdem_swm_DA',
                legendText: 'Swimming Lesson Unmet Demand in Dissemination Area',
                hover: module_recreation_sectionswim_layers_area_popup_hover,
              },
              {
                name: 'TRA',
                id: 'se_ax_1_unmtdem_swm_TRA',
                legendText: 'Swimming Lesson Unmet Demand in Census Tract Area',
                hover: module_recreation_sectionswim_layers_area_popup_hover,
              },
              {
                id: 'se_ax_1_unmtdem_swm_DIV',
                name: 'DIV',
                legendText: 'Swimming Lesson Unmet Demand in Census Division Area',
                hover: module_recreation_sectionswim_layers_area_popup_hover,
              },
              {
                id: 'se_ax_1_unmtdem_swm_SUB',
                name: 'SUB',
                legendText: 'Swimming Lesson Unmet Demand in Census Subdivision Area',
                hover: module_recreation_sectionswim_layers_area_popup_hover,
              },
            ]
          },//END OF SECTION      
          {
            heading: '5. FUTURE CHANGE IN DEMAND (2030)',
            text: '<b>Colour: Swimming Lesson Future Change in Demand</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'DA',
                id: 'se_ax_1_chngdem_swm_DA',
                legendText: 'Change in Swimming Lesson Demand in Dissemination Area',
                hover: module_recreation_sectionswim_layers_area_popup_hover,
              },
              {
                name: 'TRA',
                id: 'se_ax_1_chngdem_swm_TRA',
                legendText: 'Change in Swimming Lesson Demand in Census Tract Area',
                hover: module_recreation_sectionswim_layers_area_popup_hover,
              },
              {
                name: 'DIV',
                id: 'se_ax_1_chngdem_swm_DIV',
                legendText: 'Change in Swimming Lesson Demand in Census Dvision Area',
                hover: module_recreation_sectionswim_layers_area_popup_hover,
              },
              {
                name: 'SUB',
                id: 'se_ax_1_chngdem_swm_SUB',
                legendText: 'Change in Swimming Lesson Demand in Census Subdivision Area',
                hover: module_recreation_sectionswim_layers_area_popup_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: 'LAYER DETAILS',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: module_recreation_swim_sectiondetails_documentHtml,
          },//END OF SECTION
        ]
      },//END OF SUB-MODULE
      {
        name: 'ICE ARENA (HOCKEY)',
        id: 'module_recreation_ice',
        image: PRIMARY_MENU_IMAGE,
        summary: 'Select layers below to display on the map.',
        sections: [
          {
            heading: 'YOUR SITES',
            text: '<b>Location of your Ice Arena sites</b>',
            icon: POINT_ICON,
            layers: [
              {
                name: 'SITE',
                id: 'se_ax_1_ice_SITE',
                legendText: 'Your Ice Arena Sites',
                hover: module_recreation_sectionall_layers_site_popup_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: '1. ACTIVE USERS (AREA)',
            text: '<b>Colour: Ice Arena Active Users</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'DA',
                id: 'se_ax_1_mem_ice_DA',
                legendText: 'Ice Arena Active Users in Dissemination Area',
                hover: module_recreation_sectionice_layers_area_popup_hover,
              },
              {
                name: 'TRA',
                id: 'se_ax_1_mem_ice_TRA',
                legendText: 'Ice Arena Active Users in Census Tract Area',
                hover: module_recreation_sectionice_layers_area_popup_hover,
              },
              {
                id: 'se_ax_1_mem_ice_DIV',
                name: 'DIV',
                legendText: 'Ice Arena Active Users in Census Division Area',
                hover: module_recreation_sectionice_layers_area_popup_hover,
              },
              {
                id: 'se_ax_1_mem_ice_SUB',
                name: 'SUB',
                legendText: 'Ice Arena Active Users in Census Subdivision Area',
                hover: module_recreation_sectionice_layers_area_popup_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: '2. DEMAND / POPULATION (AREA)',
            text: '<b>Colour: Ice Arena Demand / Population</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'DA',
                id: 'se_ice_dem_DA',
                legendText: 'Ice Arena Demand / Population in Dissemination Area',
                hover: module_recreation_sectionice_layers_area_popup_hover,
              },
              {
                name: 'TRA',
                id: 'se_ice_dem_TRA',
                legendText: 'Ice Arena Demand / Population in Census Tract Area',
                hover: module_recreation_sectionice_layers_area_popup_hover,
              },
              {
                id: 'se_ice_dem_DIV',
                name: 'DIV',
                legendText: 'Ice Arena Demand / Population in Census Division Area',
                hover: module_recreation_sectionice_layers_area_popup_hover,
              },
              {
                id: 'se_ice_dem_SUB',
                name: 'SUB',
                legendText: 'Ice Arena Demand / Population in Census Subdivision Area',
                hover: module_recreation_sectionice_layers_area_popup_hover,
              },
            ]
          },//END OF SECTION

          {
            heading: '3. CONVERSION (AREA)',
            text: '<b>Colour: Ice Arena Demand Conversion (%)</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'DA',
                id: 'se_ax_1_mem_dem_cnv_ice_DA',
                legendText: 'Ice Arena Demand Conversion (%) in Dissemination Area',
                hover: module_recreation_sectionice_layers_area_popup_hover,
              },
              {
                name: 'TRA',
                id: 'se_ax_1_mem_dem_cnv_ice_TRA',
                legendText: 'Ice Arena Demand Conversion (%) in Census Tract Area',
                hover: module_recreation_sectionice_layers_area_popup_hover,
              },
              {
                id: 'se_ax_1_mem_dem_cnv_ice_DIV',
                name: 'DIV',
                legendText: 'Ice Arena Demand Conversion (%) in Census Division Area',
                hover: module_recreation_sectionice_layers_area_popup_hover,
              },
              {
                id: 'se_ax_1_mem_dem_cnv_ice_SUB',
                name: 'SUB',
                legendText: 'Ice Arena Demand Conversion (%) in Census Subdivision Area',
                hover: module_recreation_sectionice_layers_area_popup_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: '4. UNMET DEMAND (GROWTH AREAS)',
            text: '<b>Colour: Ice Arena Unmet Demand (Growth Area)</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'DA',
                id: 'se_ax_1_unmtdem_ice_DA',
                legendText: 'Ice Arena Unmet Demand in Dissemination Area',
                hover: module_recreation_sectionice_layers_area_popup_hover,
              },
              {
                name: 'TRA',
                id: 'se_ax_1_unmtdem_ice_TRA',
                legendText: 'Ice Arena Unmet Demand in Census Tract Area',
                hover: module_recreation_sectionice_layers_area_popup_hover,
              },
              {
                id: 'se_ax_1_unmtdem_ice_DIV',
                name: 'DIV',
                legendText: 'Ice Arena Unmet Demand in Census Division Area',
                hover: module_recreation_sectionice_layers_area_popup_hover,
              },
              {
                id: 'se_ax_1_unmtdem_ice_SUB',
                name: 'SUB',
                legendText: 'Ice Arena Unmet Demand in Census Subdivision Area',
                hover: module_recreation_sectionice_layers_area_popup_hover,
              },
            ]
          },//END OF SECTION      
          {
            heading: '5. FUTURE CHANGE IN DEMAND (2030)',
            text: '<b>Colour: Ice Arena Future Change in Demand</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'DA',
                id: 'se_ax_1_chngdem_ice_DA',
                legendText: 'Change in Ice Arena Demand in Dissemination Area',
                hover: module_recreation_sectionice_layers_area_popup_hover,
              },
              {
                name: 'TRA',
                id: 'se_ax_1_chngdem_ice_TRA',
                legendText: 'Change in Ice Arena Demand in Census Tract Area',
                hover: module_recreation_sectionice_layers_area_popup_hover,
              },
              {
                name: 'DIV',
                id: 'se_ax_1_chngdem_ice_DIV',
                legendText: 'Change in Ice Arena Demand in Census Dvision Area',
                hover: module_recreation_sectionice_layers_area_popup_hover,
              },
              {
                name: 'SUB',
                id: 'se_ax_1_chngdem_ice_SUB',
                legendText: 'Change in Ice Arena Demand in Census Subdivision Area',
                hover: module_recreation_sectionice_layers_area_popup_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: 'LAYER DETAILS',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: module_recreation_ice_sectiondetails_documentHtml,
          },//END OF SECTION
        ]
      },//END OF SUB-MODULE
    ]
  },//END OF MODULE
  {
    id: 'module_key',
    name: 'IMPACT DASHBOARDS',
    type: 'AREA_VIEWER',
    image: PRIMARY_MENU_IMAGE,
    summary: '',
        sections: [
          {
            heading: 'LOCAL MUNICIPALITY COMMUNITY IMPACT REPORT (TRENDS)',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_key_dashboard_municipality,
          },//END OF SECTION
          {
            heading: 'COVID RECOVERY (FORECAST)',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_key_dashboard_covid,
          },//END OF SECTION
         /** {
            heading: '10. HEALTH AND WELLBEING (IMPACT)',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_key_dashboard_healthwellbeing,
          },//END OF SECTION
          **/
        ]
  }, //END OF MODULE
  {
    id: 'module_key',
    name: 'FULL OPERATOR DASHBOARDS',
    type: 'AREA_VIEWER',
    image: PRIMARY_MENU_IMAGE,
    summary: '',
        sections: [
        /**  {
            heading: '1. LOCAL MUNICIPALITY COMMUNITY IMPACT REPORT (TRENDS)',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_key_dashboard_municipality,
          },//END OF SECTION
**/
          {
            heading: 'CENTRE MANAGER (PRIORITIES)',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_key_dashboard_centremanager,
          },//END OF SECTION
      /**    {
            heading: '3. COVID RECOVERY (FORECAST)',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_key_dashboard_covid,
          },//END OF SECTION
          **/
          {
            heading: 'SITE PERFORMANCE (BENCHMARKS)',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_key_dashboard_siteperformance,
          },//END OF SECTION
          {
            heading: 'CUSTOMER JOURNEY (RETENTION)',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_key_dashboard_retention,
          },//END OF SECTION
          {
            heading: 'GROUP EXERCISE (PROGRAM TIMETABLE)',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_key_dashboard_groupex,
          },//END OF SECTION
          {
            heading: 'USER ACQUISITION (MARKETING)',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_key_dashboard_aquisition,
          },//END OF SECTION
          {
            heading: 'REGISTERED PROGRAMS (ENROLLMENT)',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_key_dashboard_swimschool,
          },//END OF SECTION
          {
            heading: 'PRICING',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_key_dashboard_pricing,
          },//END OF SECTION
           {
            heading: 'FACILITY RENTAL',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_ax_dashboard_facility_rental,
          },
         /** {
            heading: '10. HEALTH AND WELLBEING (IMPACT)',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_key_dashboard_healthwellbeing,
          },//END OF SECTION
          **/
        ]
  }, //END OF MODULE
  {
    id: 'module_cp',
    name: 'COMMUNITY PROFILE',
    collapsible: true,
    type: 'CODE_VIEWER',
    CODES: [
      {
        name: 'CENSUS KEY INDICATORS',
        id: 'module_cp_indicators',
        image: PRIMARY_MENU_IMAGE,
        summary: '<p>Select layers below to display on the map.</p>',
        sections: [
            {
            heading: '1. TOTAL POPULATION',
            text: '<b>Colour: Total Population in Area</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'DA',
                id: 'cp_cen_total_pop_DA',
                legendText: 'Total Population in Dissemination Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'SUB',
                id: 'cp_cen_total_pop_SUB',
                legendText: 'Total Population in Census Subdivision Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'DIV',
                id: 'cp_cen_total_pop_DIV',
                legendText: 'Total Population in Census Division Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'PRO',
                id: 'cp_cen_total_pop_PRO',
                legendText: 'Total Population in Province Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: '2. % 0-14 POPULATION',
            text: '<b>Colour: Percent 0-14 in Area</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'DA',
                id: 'cp_cen_0_14_pop_DA',
                legendText: 'Percent 0-14 in Dissemination Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'SUB',
                id: 'cp_cen_0_14_pop_SUB',
                legendText: 'Percent 0-14 in Census Subdivision Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'DIV',
                id: 'cp_cen_0_14_pop_DIV',
                legendText: 'Percent 0-14 in Census Division Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'PRO',
                id: 'cp_cen_0_14_pop_PRO',
                legendText: 'Percent 0-14 in Province Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: '3. % 65+ POPULATION',
            text: '<b>Colour: Percent 65+ in Area</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'DA',
                id: 'cp_cen_65_pop_DA',
                legendText: 'Percent 65+ in Dissemination Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'SUB',
                id: 'cp_cen_65_pop_SUB',
                legendText: 'Percent 65+ in Census Subdivision Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'DIV',
                id: 'cp_cen_65_pop_DIV',
                legendText: 'Percent 65+ in Census Division Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'PRO',
                id: 'cp_cen_65_pop_PRO',
                legendText: 'Percent 65+ in Province Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: '4. % LOW-INCOME HOUSEHOLDS',
            text: '<b>Colour: Percent Low-Income Households in Area</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'DA',
                id: 'cp_cen_low_income_DA',
                legendText: 'Percent Low Income Household in Dissemination Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'SUB',
                id: 'cp_cen_low_income_SUB',
                legendText: 'Percent Low Income Household in Census Subdivision Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'DIV',
                id: 'cp_cen_low_income_DIV',
                legendText: 'Percent Low Income Household in Census Division Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'PRO',
                id: 'cp_cen_low_income_PRO',
                legendText: 'Percent Low Income Household in Province Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: '5. % OWN HOME',
            text: '<b>Colour: Percent Own Home in Area</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'DA',
                id: 'cp_cen_own_home_DA',
                legendText: 'Percent Own Home in Dissemination Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'SUB',
                id: 'cp_cen_own_home_SUB',
                legendText: 'Percent Own Home in Census Subdivision Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'DIV',
                id: 'cp_cen_own_home_DIV',
                legendText: 'Percent Own Home in Census Division Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'PRO',
                id: 'cp_cen_own_home_PRO',
                legendText: 'Percent Own Home in Province Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: '6. % RENT HOME',
            text: '<b>Colour: Percent Rent Home in Area</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'DA',
                id: 'cp_cen_rent_home_DA',
                legendText: 'Percent Rent Home in Dissemination Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'SUB',
                id: 'cp_cen_rent_home_SUB',
                legendText: 'Percent Rent Home in Census Subdivision Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'DIV',
                id: 'cp_cen_rent_home_DIV',
                legendText: 'Percent Rent Home in Census Division Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'PRO',
                id: 'cp_cen_rent_home_PRO',
                legendText: 'Percent Rent Home in Province Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
            ]
          },//END OF SECTION

          {
            heading: '7. % INDIGENOUS POPULATION',
            text: '<b>Colour: Percent Indigenous Population in Area</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'DA',
                id: 'cp_cen_indigenous_pop_DA',
                legendText: 'Percent Indigenous Population in Dissemination Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'SUB',
                id: 'cp_cen_indigenous_pop_SUB',
                legendText: 'Percent Indigenous Population in Census Subdivision Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'DIV',
                id: 'cp_cen_indigenous_pop_DIV',
                legendText: 'Percent Indigenous Population in Census Division Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'PRO',
                id: 'cp_cen_indigenous_pop_PRO',
                legendText: 'Percent Indigenous Population in Province Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
            ]
          },//END OF SECTION

          {
            heading: '8. % VISABLE MINORTY POPULATION',
            text: '<b>Colour: Percent Visable Minority in Area</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'DA',
                id: 'cp_cen_minority_pop_DA',
                legendText: 'Percent Visable Minority in Dissemination Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'SUB',
                id: 'cp_cen_minority_pop_SUB',
                legendText: 'Percent Visable Minority in Census Subdivision Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'DIV',
                id: 'cp_cen_minority_pop_DIV',
                legendText: 'Percent Visable Minority in Census Division Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'PRO',
                id: 'cp_cen_minority_pop_PRO',
                legendText: 'Percent Visable Minority in Province Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
            ]
          },//END OF SECTION          

          {
            heading: '9. % UNEMPLOYED',
            text: '<b>Colour: Percent Unemploymed in Area</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'DA',
                id: 'cp_cen_unemployed_pop_DA',
                legendText: 'Percent Unemploymed in Dissemination Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'SUB',
                id: 'cp_cen_unemployed_pop_SUB',
                legendText: 'Percent Unemploymed in Census Subdivision Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'DIV',
                id: 'cp_cen_unemployed_pop_DIV',
                legendText: 'Percent Unemploymed in Census Division Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'PRO',
                id: 'cp_cen_unemployed_pop_PRO',
                legendText: 'Percent Unemploymed in Province Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
            ]
          },//END OF SECTION      

          {
            heading: '10. % POST SECONDARY CERTIFICATE, DIPLOMA, OR DEGREE',
            text: '<b>Colour: Percent Post Secondary Certifiate, Diploma, or Degree in Area</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'DA',
                id: 'cp_cen_higher_ed_pop_DA',
                legendText: 'Percent Higher Education in Dissemination Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'SUB',
                id: 'cp_cen_higher_ed_pop_SUB',
                legendText: 'Percent Higher Education in Census Subdivision Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'DIV',
                id: 'cp_cen_higher_ed_pop_DIV',
                legendText: 'Percent Higher Education in Census Division Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'PRO',
                id: 'cp_cen_higher_ed_pop_PRO',
                legendText: 'Percent Higher Education in Province Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
            ]
          },//END OF SECTION      
          
          {
            heading: '11. DEPRIVATION INDEX - SITUATIONAL VULNERABILITY INDEX',
            text: '<b>Colour: Deprivation Index in Area</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'DA',
                id: 'cp_cen_deprivation_DA',
                legendText: 'Deprivation Index in Dissemination Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'SUB',
                id: 'cp_cen_deprivation_SUB',
                legendText: 'Deprivation Index in Census Subdivision Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'DIV',
                id: 'cp_cen_deprivation_DIV',
                legendText: 'Deprivation Index in Census Division Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'PRO',
                id: 'cp_cen_deprivation_PRO',
                legendText: 'Deprivation Index in Province Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
            ]
          },//END OF SECTION      
          
          {
            heading: '12. % YOUTH POP (12-17 OVERWEIGHT/OBESE BMI)',
            text: '<b>Colour: Percent Youth Overweight Population in Area</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'DA',
                id: 'cp_cen_youth_bmi_pop_DA',
                legendText: 'Percent Youth Overweight in Dissemination Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'SUB',
                id: 'cp_cen_youth_bmi_pop_SUB',
                legendText: 'Percent Youth Overweight in Census Subdivision Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'DIV',
                id: 'cp_cen_youth_bmi_pop_DIV',
                legendText: 'Percent Youth Overweight in Census Division Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'PRO',
                id: 'cp_cen_youth_bmi_pop_PRO',
                legendText: 'Percent Youth Overweight in Province Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
            ]
          },//END OF SECTION      
          {
            heading: '13. % ADULT POP (18+ OVERWEIGHT/OBESE BMI)',
            text: '<b>Colour: Percent Adult Overweight Population in Area</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'DA',
                id: 'cp_cen_adult_bmi_pop_DA',
                legendText: 'Percent Adult Overweight in Dissemination Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'SUB',
                id: 'cp_cen_adult_bmi_pop_SUB',
                legendText: 'Percent Adult Overweight in Census Subdivision Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'DIV',
                id: 'cp_cen_adult_bmi_pop_DIV',
                legendText: 'Percent Adult Overweight in Census Division Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'PRO',
                id: 'cp_cen_adult_bmi_pop_PRO',
                legendText: 'Percent Adult Overweight in Province Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
            ]
          },//END OF SECTION      
          {
            heading: '14. PHYSICAL ACTIVITIES AT VIGOROUS INTENSITY - HOURS SPENT [PST WK] - CONSUMPTION (12-17)',
            text: '<b>Colour: Physical Activities in Area</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'DA',
                id: 'cp_cen_physical_pop_DA',
                legendText: 'Physical Activities in Dissemination Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'SUB',
                id: 'cp_cen_physical_pop_SUB',
                legendText: 'Physical Activities in Census Subdivision Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'DIV',
                id: 'cp_cen_physical_pop_DIV',
                legendText: 'Physical Activities in Census Division Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'PRO',
                id: 'cp_cen_physical_pop_PRO',
                legendText: 'Physical Activities in Province Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
            ]
          },//END OF SECTION      
          {
            heading: '15. HEART DISEASE (12+)',
            text: '<b>Colour: Heart Disease in Area</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'DA',
                id: 'cp_cen_heart_pop_DA',
                legendText: 'Heart Disease in Dissemination Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'SUB',
                id: 'cp_cen_heart_pop_SUB',
                legendText: 'Heart Disease in Census Subdivision Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'DIV',
                id: 'cp_cen_heart_pop_DIV',
                legendText: 'Heart Disease in Census Division Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'PRO',
                id: 'cp_cen_heart_pop_PRO',
                legendText: 'Heart Disease in Province Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
            ]
          },//END OF SECTION      
          {
            heading: '16. DIABETES - TYPE 1 + 2',
            text: '<b>Colour: Diabetes in Area</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'DA',
                id: 'cp_cen_diabetes_pop_DA',
                legendText: 'Diabetes in Dissemination Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'SUB',
                id: 'cp_cen_diabetes_pop_SUB',
                legendText: 'Diabetes in Census Subdivision Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'DIV',
                id: 'cp_cen_diabetes_pop_DIV',
                legendText: 'Diabetes in Census Division Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'PRO',
                id: 'cp_cen_diabetes_pop_PRO',
                legendText: 'Diabetes in Province Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
            ]
          },//END OF SECTION      
          {
            heading: '17. HAS CANCER (12+)',
            text: '<b>Colour: Has Cancer in Area</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'DA',
                id: 'cp_cen_cancer_pop_DA',
                legendText: 'Has Cancer in Dissemination Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'SUB',
                id: 'cp_cen_cancer_pop_SUB',
                legendText: 'Has Cancer in Census Subdivision Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'DIV',
                id: 'cp_cen_cancer_pop_DIV',
                legendText: 'Has Cancer in Census Division Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'PRO',
                id: 'cp_cen_cancer_pop_PRO',
                legendText: 'Has Cancer in Province Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
            ]
          },//END OF SECTION      
          {
            heading: '18. PERCEIVED MENTAL HEALTH POOR + FAIR',
            text: '<b>Colour: Mental Health in Area</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'DA',
                id: 'cp_cen_mental_low_pop_DA',
                legendText: 'Mental Health in Dissemination Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'SUB',
                id: 'cp_cen_mental_low_pop_SUB',
                legendText: 'Mental Health in Census Subdivision Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'DIV',
                id: 'cp_cen_mental_low_pop_DIV',
                legendText: 'Mental Health in Census Division Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
              {
                name: 'PRO',
                id: 'cp_cen_mental_low_pop_PRO',
                legendText: 'Mental Health in Province Area',
                // click: '{AREA_NAME}',
                hover: module_cp_indicator_area_layers_popup_hover,
              },
            ]
          },//END OF SECTION    
          {
            heading: 'LAYER DETAILS',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: module_cp_indicators_sectiondetails_documentHtml,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
      {
        name: 'AREA INFO',
        id: 'module_cp_submodule4',
        image: PRIMARY_MENU_IMAGE,
        summary: '<p>Select layers below to display on the map.</p>',
        sections: [
          {
            heading: '1. OPEN EDUCATION FACILITIES DATABASE',
            text: '<b>Open Education Facilities Database</b>',
            icon: POINT_ICON,
            layers: [
              {
                name: 'ALL',
                id: 'CAN_SCHL',
                legendText: 'Education Facility',
                hover: module_cp_areainfo_layers_school_popup_hover,
              },
            ]
          },//END OF SECTION
          {
            heading: '2. ROAD NETWORK',
            text: 'Road Network',
            icon: AREA_ICON,
            layers: [
              {
                name: 'ROAD',
                id: 'CAN_ROAD',
                legendText: 'Road Network',
                // click: '<p>{SITE_NAME}<p>',
                // hover: '<p>{SITE_NAME}<p>',
              },
            ]
          },//END OF SECTION
          {
            heading: '3. AREA BOUNDARIES',
            text: '<b>Area Boundaries</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'DA',
                id: 'cp_bndry_DA',
                legendText: 'Dissemination Area Boundaries',
                // click: '<h4>{AREA_NAME}</h4>',
                // hover: '<h4>{AREA_NAME}</h4>',
              },
              {
                name: 'TRA',
                id: 'cp_bndry_TRA',
                legendText: 'Census Tract Area Boundaries',
                // click: '<h4>{AREA_NAME}</h4>',
                // hover: '<h4>{AREA_NAME}</h4>',
              },
              {
                name: 'SUB',
                id: 'cp_bndry_SUB',
                legendText: 'Census Subdivision Area Boundaries',
                // click: '<h4>{AREA_NAME}</h4>',
                // hover: '<h4>{AREA_NAME}</h4>',
              },
              {
                name: 'DIV',
                id: 'cp_bndry_DIV',
                legendText: 'Census Dvision Area Boundaries',
                // click: '<h4>{AREA_NAME}</h4>',
                // hover: '<h4>{AREA_NAME}</h4>',
              },
              {
                name: 'PRO',
                id: 'cp_bndry_PRO',
                legendText: 'Province Area Boundaries',
                // click: '<h4>{AREA_NAME}</h4>',
                // hover: '<h4>{AREA_NAME}</h4>',
              },
            ]
          },//END OF SECTION
          {
            heading: '4. AREA LABELS',
            text: '<b>Area Labels</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'DA',
                id: 'cp_label_DA',
                legendText: 'Dissemination Area Area Labels',
                // click: '<h4>{AREA_NAME}</h4>',
                // hover: '<h4>{AREA_NAME}</h4>',
              },
              {
                name: 'TRA',
                id: 'cp_label_TRA',
                legendText: 'Census Tract Area Area Labels',
                // click: '<h4>{AREA_NAME}</h4>',
                // hover: '<h4>{AREA_NAME}</h4>',
              },
              {
                name: 'SUB',
                id: 'cp_label_SUB',
                legendText: 'Census Subdivision Area Labels',
                // click: '<h4>{AREA_NAME}</h4>',
                // hover: '<h4>{AREA_NAME}</h4>',
              },
              {
                name: 'DIV',
                id: 'cp_label_DIV',
                legendText: 'Census Division Area Labels',
                // click: '<h4>{AREA_NAME}</h4>',
                // hover: '<h4>{AREA_NAME}</h4>',
              },
              {
                name: 'PRO',
                id: 'cp_label_PRO',
                legendText: 'Province Area Labels',
                // click: '<h4>{AREA_NAME}</h4>',
                // hover: '<h4>{AREA_NAME}</h4>',
              },
            ]
          },//END OF SECTION

          {
            heading: '5. SATELLITE VIEW',
            text: '<b>Satellite View</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'SATELLITE',
                id: 'mapbox-satellite',
                legendText: 'Satellite View',
                // click: '<h4>{AREA_NAME}</h4>',
                // hover: '<h4>{AREA_NAME}</h4>',
              },
            ]
          },//END OF SECTION
          {
            heading: 'LAYER DETAILS',
            text: null,
            icon: DOCUMENT_ICON,
            documentHtml: module_cp_areainfo_sectiondetails_documentHtml,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
    ]
  }, //END OF MODULE
  {
    id: 'module_ax',
    name: 'ACTIVEXCHANGE ADDITIONAL MODULES',
    collapsible: true,
    type: 'CODE_VIEWER',
    CODES: [
      {
        name: 'PROPERTY SEARCH',
        id: 'module_ax_property',
        image: PRIMARY_MENU_IMAGE,
        summary: '<p>Select layers below to display on the map.</p>',
        sections: [
          {
            heading: '1. HEALTH AND FITNESS OPTIMAL HOTSPOTS',
            text: '<b>Colour: Aggregated Unmet Demand</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'DA',
                id: 'se_ax_1_unmtdem_agg_DA',
                legendText: 'Aggregated Unmet Demand in Dissemination Area',
                // hover: '<p>{AREA_NAME}</p><h4>{se_ax_1_unmtdem_agg}</h4>',
                hover: '<p>{AREA_NAME}</p><h4>{se_ax_1_unmtdem_agg}</h4>',
              },
              {
                name: 'TRA',
                id: 'se_ax_1_unmtdem_agg_TRA',
                legendText: 'Aggregated Unmet Demand in Census Tract Area',
                // hover: '<p>{AREA_NAME}</p><h4>{se_ax_1_unmtdem_agg}</h4>',
                hover: '<p>{AREA_NAME}</p><h4>{se_ax_1_unmtdem_agg}</h4>',
              },
              {
                name: 'DIV',
                id: 'se_ax_1_unmtdem_agg_DIV',
                legendText: 'Aggregated Unmet Demand in Census Dvision Area',
                // hover: '<p>{AREA_NAME}</p><h4>{se_ax_1_unmtdem_agg}</h4>',
                hover: '<p>{AREA_NAME}</p><h4>{se_ax_1_unmtdem_agg}</h4>',
              },
              {
                name: 'SUB',
                id: 'se_ax_1_unmtdem_agg_SUB',
                legendText: 'Aggregated Unmet Demand in Census Subdivision Area',
                // hover: '<p>{AREA_NAME}</p><h4>{se_ax_1_unmtdem_agg}</h4>',
                hover: '<p>{AREA_NAME}</p><h4>{se_ax_1_unmtdem_agg}</h4>',
              },

            ]
          },//END OF SECTION
          {
                heading: 'HEALTH AND FITNESS OPTIMAL LOCATION DASHBOARD',
                text: null,
                icon: DASHBOARD_ICON,
                documentHtml: module_key_dashboard_healthwellbeing,
              },//END OF SECTION 
              
        ]
      },//END OF SECTION GROUP
      {
        name: 'SOCIAL VALUE',
        id: 'module_ax_socialvalue',
        image: PRIMARY_MENU_IMAGE,
        summary: '<p>Select layers below to display on the map.</p>',
        sections: [
          {
            heading: '1. SOCIAL VALUE DASHBOARD',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_ax_dashboard_socialvalue,
          },//END OF SECTION
          {
            heading: '2. VALUE DISTRIBUTION',
            text: '<b>Colour: Value Distribution</b>',
            icon: AREA_ICON,
            layers: [
              {
                name: 'DA',
                id: 'se_ax_1_valuedist_DA',
                legendText: 'Value Distribution in Dissemination Area',
                // click: TBC,
                hover: '<h4>{AREA_CODE}</h4><p>Value Distribution:<p/><h4>{se_ax_1_valuedist}</h4>'
              },
              {
                name: 'TRA',
                id: 'se_ax_1_valuedist_TRA',
                legendText: 'Value Distribution in Census Tract Area',
                // click: TBC,
                hover: '<h4>{AREA_CODE}</h4><p>Value Distribution:<p/><h4>{se_ax_1_valuedist}</h4>'
              },
              {
                name: 'DIV',
                id: 'se_ax_1_valuedist_DIV',
                legendText: 'Value Distribution in Census Division Area',
                // click: TBC,
                hover: '<h4>{AREA_CODE}</h4><p>Value Distribution:<p/><h4>{se_ax_1_valuedist}</h4>'
              },
              {
                name: 'SUB',
                id: 'se_ax_1_valuedist_SUB',
                legendText: 'Value Distribution in Census Subdivision Area',
                // click: TBC,
                hover: '<h4>{AREA_CODE}</h4><p>Value Distribution:<p/><h4>{se_ax_1_valuedist}</h4>'
              },
            ]
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
      {
        name: 'RETENTION',
        id: 'module_ax_retention',
        image: PRIMARY_MENU_IMAGE,
        summary: '',
        sections: [
          {
            heading: '1. RETENTION DASHBOARD',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_ax_dashboard_retention,
          },//END OF SECTION
      module_key_dashboard_healthwellbeing
        ]

         },//END OF SECTION GROUP

            
      {
        name: 'SPONSOR MATCH',
        id: 'module_ax_sponsor',
        image: PRIMARY_MENU_IMAGE,
        summary: '',
        sections: [
          {
            heading: '1. SPONSOR MATCH (PARTNERSHIP IDENTIFICATION)',
            text: null,
            icon: DASHBOARD_ICON,
            documentHtml: module_ax_dashboard_sponsor_match,
          },//END OF SECTION
        ]
      },//END OF SECTION GROUP
    ]
  }, //end of MODULE
  {
    id: 'module_video',
    name: 'GUIDANCE VIDEOS',
    type: 'AREA_VIEWER',
    image: PRIMARY_MENU_IMAGE,
    summary: '',
        sections: [
          {
            heading: 'INTRO TO SE OPERATOR',
            text: null,
            icon: QUESTION_ICON,
            documentHtml: module_video_section1_documentHtml,
          },//END OF SECTION
          {
            heading: 'IDENTIFYING YOUR PRIORITY AREAS',
            text: null,
            icon: QUESTION_ICON,
            documentHtml: module_video_section2_documentHtml,
          },//END OF SECTION
          {
            heading: 'MEMBER ACQUISITION',
            text: null,
            icon: QUESTION_ICON,
            documentHtml: module_video_section3_documentHtml,
          },//END OF SECTION
          {
            heading: 'MEMBER RETENTION',
            text: null,
            icon: QUESTION_ICON,
            documentHtml: module_video_section4_documentHtml,
          },//END OF SECTION
          {
            heading: 'OPERATIONS (PROGRAM & PRICING)',
            text: null,
            icon: QUESTION_ICON,
            documentHtml: module_video_section5_documentHtml,
          },//END OF SECTION
          {
            heading: 'LOCAL GOVERNMENT MEETINGS',
            text: null,
            icon: QUESTION_ICON,
            documentHtml: module_video_section6_documentHtml,
          },//END OF SECTION
          {
            heading: 'INFRASTRUCTURE & ACTION PLANS',
            text: null,
            icon: QUESTION_ICON,
            documentHtml: module_video_section7_documentHtml,
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
