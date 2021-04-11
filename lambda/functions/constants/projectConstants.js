const csvConstants = require("./csvConstants");

const projectTypeNewBuildOptions = [
  { value: 1, label: "New build" },
  { value: 2, label: "Extension" },
  { value: 3, label: "Refurbishment" },
  { value: 4, label: "Closure" },
  { value: 5, label: "Program delivery" },
  { value: 6, label: "Operations" },
  { value: 7, label: "Marketing" },
  { value: 8, label: "Club support" },
  { value: 9, label: "Other (please specify)" }
];

const projectFunding = [
  { value: 1, label: "Yes, requires funding" },
  { value: 2, label: "Requires funding (request being prepared)" },
  { value: 3, label: "Requires funding (request submitted)" },
  { value: 4, label: "No, has been funded" }
];

const projectStage = [
  { value: 1, label: "Concept" },
  { value: 2, label: "Requiring internal review & sign off" },
  { value: 3, label: "Procurement (seeking third party interest)" },
  { value: 4, label: "Procurement (reviewing possible suppliers)" },
  { value: 5, label: "Contracts and legal" },
  { value: 6, label: "Planning application (being prepared)" },
  { value: 7, label: "Planning application (submitted)" },
  { value: 8, label: "Planning application (approved)" },
  { value: 9, label: "Seeking funding" },
  { value: 10, label: "Under construction" },
  { value: 11, label: "Complete and operational" }
];

const projectPriority = [
  { value: 1, label: "Very low" },
  { value: 2, label: "Low" },
  { value: 3, label: "Medium" },
  { value: 4, label: "High" },
  { value: 5, label: "Very high" },
  { value: 99, label: "Unconfirmed" }
];

const privateOptions = [
  { value: 1, label: "Only my organisation" },
  { value: 2, label: "SportsEye Network" },
  { value: 3, label: "Custom privacy" }
];

const projectTableDetails = [
  {
    name: "projectName",
    pgname: "project_name",
    label: "Project Name",
  },
  {
    name: "private",
    pgname: "private",
    label: `Project Sharing`,
    options: privateOptions,

  },
  {
    name: "projectTypeNewBuild",
    pgname: "project_type_new_build",
    label: "Project Type",
    options: projectTypeNewBuildOptions,

  },
  {
    name: "projectTypeNewBuildAlt",
    pgname: "project_type_new_build_alt",
  label: `Project Alt Type` },
  {
    name: "projectDetails",
    pgname: "project_details",
    label: `Project Details`,
    textEntry: "yes"
  },
  {
    name: "projectJustification",
    pgname: "project_justification",
    label: `Project Justification`,
    textEntry: "yes"
  },
  {
    name: "projectCostEst",
    pgname: "project_cost_est",
    label: `Estimated Cost ($)`,
  },
  {
    name: "projectFunding",
    pgname: "project_funding",
    label: `Project Funding`,
    options: projectFunding,
  },
  {
    name: "projectStage",
    pgname: "project_stage",
    label: `Progress Stage`,
    options: projectStage,
  },
  {
    name: "projectDateStart",
    pgname: "project_date_start",
    label: `Expected Start Date`
  },
  {
    name: "projectDateEnd",
    pgname: "project_date_end",
    label: `Expected End Date`
  },
  {
    name: "projectFacilityType",
    pgname: "project_facility_type",
    label: `Facility Type`,
    options: csvConstants.facilityTypeOptions,
  },
  {
    name: "projectFacilitySubtype",
    pgname: "project_facility_subtype",
    label: `Facility Subtype`,
    options: csvConstants.facilitySubtypeOptions
  },
  // ...sportElements,
  {
    name: "projectPriority",
    pgname: "project_priority",
    label: `Project Priority`,
    options: projectPriority
  },
  {
    name: "projectPartner",
    pgname: "project_partner",
    label: `Project Partner`
  }
];

// const projectTableHeaders = [
//   'Site Name',
//   'Project Name',
//   'Plan Owner',
//   'Connected teams',
//   'Project Type',
//   'Start Date',
//   'End Date',
//   'Details',
//   'Justification',
//   'Estimated Cost ($)',
//   'Seeking Funding',
//   'Progress Stage',
//   // 'Project Facility Type',
//   // 'Project Facility Subtype',
//   'Priority',
//   // 'Project Partner',
// ];

const projectTableHeaders = [
  'Site Name',
  'Project Name',
  'Plan Owner',
  'Connected teams',
  'Project Type',
  'Start Date',
  'End Date',
  'Details',
  'Justification',
  'Estimated Cost ($)',
  'Seeking Funding',
  'Progress Stage',
  'Priority',
];

exports.projectTableDetails = projectTableDetails;
exports.projectTableHeaders = projectTableHeaders;
