export const profile = {
  name: "Julius John T. Dayawon, CE",
  short: "Julius Dayawon",
  role: "Remote QS / Estimator",
  email: "dayawonjuliusjohn@gmail.com",
  phone: "0927 739 3719",
  location: "Gigmoto, Catanduanes",
  availability: "Remote / work-from-home estimating. Willing to relocate.",
  intro:
    "Quantity surveying and estimating for the complete structural package: concrete, formworks and reinforcement, measured from drawings and delivered as clear schedules.",
};

export const services = [
  { title: "Complete structural takeoff", text: "Concrete, formworks and reinforcement measured from issued drawings and schedules, tabulated per structure and location so all three quantities line up." },
  { title: "Rebar quantity takeoff", text: "Reinforcement organized by bar diameter, grade and location/structure, based on bar marks, spacing and details." },
  { title: "Concrete and formwork takeoff", text: "Concrete volumes and formwork contact areas by element and by location/structure." },
  { title: "BOQ / quantity schedules", text: "Organized schedules for estimating, tender preparation and internal review." },
  { title: "Quantity checking", text: "Cross-checking quantities, dimensions and schedules against drawings to find omissions or inconsistencies." },
  { title: "Digital takeoff / drawing review", text: "PDF drawings measured in Bluebeam and exported to Excel as organized estimating outputs." },
];

export const elements = [
  "Footings", "Columns", "Beams", "Slabs", "Walls", "Stairs",
];

export const workflow = [
  { title: "Review", text: "Read the drawings, schedules, specifications and available project data." },
  { title: "Measure", text: "Identify measurable structural elements and measure them in Bluebeam." },
  { title: "Calculate", text: "Develop quantities from drawing dimensions, schedules and stated project information." },
  { title: "Check", text: "Cross-check for consistency, completeness and obvious omissions." },
  { title: "Schedule", text: "Export Bluebeam measurements to Excel and organize them into BOQ / quantity schedules." },
  { title: "Submit", text: "Deliver Excel schedules and marked-up PDFs ready for remote review." },
];

export const deliverables = [
  "Concrete quantity takeoff sheets",
  "Formwork quantity takeoff sheets",
  "Reinforcement summaries by bar diameter, grade and location/structure",
  "Combined concrete–formwork–rebar summary per structure",
  "BOQ / quantity schedules",
  "Drawing-based quantity check sheets",
  "Marked-up Bluebeam PDFs and Excel takeoff records",
];

export const tools = [
  { name: "Bluebeam", note: "Primary tool for PDF review, measurement and digital takeoff, exported to Excel." },
  { name: "Microsoft Excel", note: "Quantity schedules, BOQ and estimating worksheets." },
  { name: "PlanSwift", note: "Digital quantity takeoff where required." },
  { name: "AutoCAD", note: "Basic drawing review." },
  { name: "Word / PowerPoint", note: "Documentation and presentation." },
];

export const experience = [
  {
    company: "Don Lee Builders, Inc.", role: "QS Engineer", place: "Binondo, Manila", period: "June 2025 – Present",
    points: [
      "Sole QS handling structural takeoffs for all for-bidding projects.",
      "Final checker of cutting lists before submission to management/designer.",
      "Final checking of rebar order lists across ongoing projects.",
      "Prepare additional claims for selected ongoing projects.",
    ],
  },
  {
    company: "Don Lee Builders, Inc.", role: "Site Engineer", place: "", period: "January 2025 – June 2025",
    points: ["Structural-project experience that built a practical understanding of drawings, quantities and construction requirements."],
  },
  {
    company: "Archetton Development Inc.", role: "Project-In-Charge", place: "", period: "January 2019 – June 2024",
    points: [
      "Prepared rebar cutting lists.",
      "Handled concrete-pouring and material-requisition related project activities.",
      "Projects included San Miguel Building, ABLS Building and Mainstreet Plaza.",
    ],
  },
];

export const qualifications = [
  { title: "Licensed Civil Engineer", text: "Civil Engineering Board Examination, November 2019" },
  { title: "BS Civil Engineering", text: "Catanduanes State University, Virac, Catanduanes" },
  { title: "Safety training", text: "COSH Training with 2 Hours Training of Trainers, BESO Safety Training & Consultancy Services, September 2023" },
];

export type Project = {
  id: string; name: string; org: string; place: string; period: string;
  group: "Estimating" | "Buildings"; summary: string; details: string[];
};

export const projects: Project[] = [
  {
    id: "bidding", name: "For-bidding structural takeoffs", org: "Don Lee Builders, Inc.", place: "Binondo, Manila",
    period: "2025 – Present", group: "Estimating",
    summary: "Sole QS for the structural takeoffs of every for-bidding project.",
    details: ["Concrete, formwork and reinforcement quantities from drawings", "Quantity information prepared and reviewed for bids"],
  },
  {
    id: "cutting", name: "Cutting list and rebar order checking", org: "Don Lee Builders, Inc.", place: "Ongoing projects",
    period: "2025 – Present", group: "Estimating",
    summary: "Final checker of cutting lists and rebar order lists.",
    details: ["Cutting lists checked before they go to management or the designer", "Rebar order lists checked across ongoing projects"],
  },
  {
    id: "claims", name: "Additional claims", org: "Don Lee Builders, Inc.", place: "Selected ongoing projects",
    period: "2025 – Present", group: "Estimating",
    summary: "Prepares additional claims for selected ongoing projects.",
    details: ["Supported by quantity information from the structural package"],
  },
  {
    id: "san-miguel", name: "San Miguel Building", org: "Archetton Development Inc.", place: "Sta. Cruz, Manila",
    period: "2019 – 2024", group: "Buildings",
    summary: "Project-In-Charge on a Manila building project.",
    details: ["Prepared rebar cutting lists", "Handled concrete-pouring and material-requisition activities"],
  },
  {
    id: "abls", name: "ABLS Building", org: "Archetton Development Inc.", place: "Marikina",
    period: "2019 – 2024", group: "Buildings",
    summary: "Project-In-Charge on a Marikina building project.",
    details: ["Prepared rebar cutting lists", "Handled concrete-pouring and material-requisition activities"],
  },
  {
    id: "mainstreet", name: "Mainstreet Plaza", org: "Archetton Development Inc.", place: "San Pablo City, Laguna",
    period: "2019 – 2024", group: "Buildings",
    summary: "Project-In-Charge on a Laguna commercial project.",
    details: ["Prepared rebar cutting lists", "Handled concrete-pouring and material-requisition activities"],
  },
];
