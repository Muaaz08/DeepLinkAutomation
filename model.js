const tableData = [
  {
    projectId: "101",
    status: "Active",
    region: "North",
    type: "TypeA",
    feature: "Feature1",
    toggleActive: true,
    category: "Technology",
    subcategory: "AI",
  },
  {
    projectId: "102",
    status: "Inactive",
    region: "South",
    type: "TypeB",
    feature: "Feature2",
    toggleActive: false,
    category: "Business",
    subcategory: "Finance",
  },
  {
    projectId: "103",
    status: "Pending",
    region: "East",
    type: "TypeA",
    feature: "Feature1",
    toggleActive: true,
    category: "Science",
    subcategory: "Physics",
  },
  {
    projectId: "104",
    status: "Active",
    region: "West",
    type: "TypeB",
    feature: "Feature2",
    toggleActive: false,
    category: "Technology",
    subcategory: "Hardware",
  },
  {
    projectId: "105",
    status: "Inactive",
    region: "North",
    type: "TypeA",
    feature: "Feature1",
    toggleActive: false,
    category: "Business",
    subcategory: "Marketing",
  },
  {
    projectId: "106",
    status: "Pending",
    region: "South",
    type: "TypeB",
    feature: "Feature2",
    toggleActive: true,
    category: "Science",
    subcategory: "Chemistry",
  },
  {
    projectId: "107",
    status: "Active",
    region: "East",
    type: "TypeA",
    feature: "Feature2",
    toggleActive: true,
    category: "Technology",
    subcategory: "Software",
  },
  {
    projectId: "108",
    status: "Inactive",
    region: "West",
    type: "TypeB",
    feature: "Feature1",
    toggleActive: false,
    category: "Business",
    subcategory: "HR",
  },
  {
    projectId: "109",
    status: "Active",
    region: "North",
    type: "TypeA",
    feature: "Feature2",
    toggleActive: true,
    category: "Science",
    subcategory: "Biology",
  },
  {
    projectId: "110",
    status: "Pending",
    region: "South",
    type: "TypeB",
    feature: "Feature1",
    toggleActive: false,
    category: "Technology",
    subcategory: "AI",
  },
  {
    projectId: "111",
    status: "Inactive",
    region: "East",
    type: "TypeA",
    feature: "Feature2",
    toggleActive: true,
    category: "Business",
    subcategory: "Finance",
  },
  {
    projectId: "112",
    status: "Active",
    region: "West",
    type: "TypeB",
    feature: "Feature1",
    toggleActive: true,
    category: "Science",
    subcategory: "Physics",
  },
  {
    projectId: "113",
    status: "Pending",
    region: "North",
    type: "TypeA",
    feature: "Feature2",
    toggleActive: false,
    category: "Technology",
    subcategory: "Hardware",
  },
  {
    projectId: "114",
    status: "Inactive",
    region: "South",
    type: "TypeB",
    feature: "Feature1",
    toggleActive: true,
    category: "Business",
    subcategory: "HR",
  },
  {
    projectId: "115",
    status: "Active",
    region: "East",
    type: "TypeA",
    feature: "Feature2",
    toggleActive: false,
    category: "Technology",
    subcategory: "Software",
  },
  {
    projectId: "116",
    status: "Pending",
    region: "West",
    type: "TypeB",
    feature: "Feature1",
    toggleActive: true,
    category: "Science",
    subcategory: "Chemistry",
  },
  {
    projectId: "117",
    status: "Inactive",
    region: "North",
    type: "TypeA",
    feature: "Feature2",
    toggleActive: true,
    category: "Business",
    subcategory: "Marketing",
  },
  {
    projectId: "118",
    status: "Active",
    region: "South",
    type: "TypeB",
    feature: "Feature1",
    toggleActive: false,
    category: "Technology",
    subcategory: "AI",
  },
  {
    projectId: "119",
    status: "Pending",
    region: "East",
    type: "TypeA",
    feature: "Feature2",
    toggleActive: true,
    category: "Science",
    subcategory: "Physics",
  },
  {
    projectId: "120",
    status: "Inactive",
    region: "West",
    type: "TypeB",
    feature: "Feature1",
    toggleActive: false,
    category: "Business",
    subcategory: "HR",
  },
  {
    projectId: "121",
    status: "Active",
    region: "North",
    type: "TypeA",
    feature: "Feature1",
    toggleActive: true,
    category: "Technology",
    subcategory: "Software",
  },
  {
    projectId: "122",
    status: "Inactive",
    region: "South",
    type: "TypeB",
    feature: "Feature2",
    toggleActive: false,
    category: "Business",
    subcategory: "Finance",
  },
  {
    projectId: "123",
    status: "Pending",
    region: "East",
    type: "TypeA",
    feature: "Feature1",
    toggleActive: true,
    category: "Science",
    subcategory: "Chemistry",
  },
  {
    projectId: "124",
    status: "Active",
    region: "West",
    type: "TypeB",
    feature: "Feature2",
    toggleActive: true,
    category: "Technology",
    subcategory: "Hardware",
  },
  {
    projectId: "125",
    status: "Inactive",
    region: "North",
    type: "TypeA",
    feature: "Feature1",
    toggleActive: true,
    category: "Business",
    subcategory: "Marketing",
  },
  {
    projectId: "126",
    status: "Pending",
    region: "South",
    type: "TypeB",
    feature: "Feature2",
    toggleActive: false,
    category: "Technology",
    subcategory: "AI",
  },
  {
    projectId: "127",
    status: "Active",
    region: "East",
    type: "TypeA",
    feature: "Feature1",
    toggleActive: true,
    category: "Business",
    subcategory: "HR",
  },
  {
    projectId: "128",
    status: "Inactive",
    region: "West",
    type: "TypeB",
    feature: "Feature2",
    toggleActive: false,
    category: "Science",
    subcategory: "Physics",
  },
  {
    projectId: "129",
    status: "Active",
    region: "North",
    type: "TypeA",
    feature: "Feature1",
    toggleActive: false,
    category: "Technology",
    subcategory: "Software",
  },
  {
    projectId: "130",
    status: "Pending",
    region: "South",
    type: "TypeB",
    feature: "Feature2",
    toggleActive: true,
    category: "Business",
    subcategory: "Finance",
  },
  {
    projectId: "131",
    status: "Inactive",
    region: "East",
    type: "TypeA",
    feature: "Feature1",
    toggleActive: true,
    category: "Technology",
    subcategory: "Hardware",
  },
  {
    projectId: "132",
    status: "Active",
    region: "West",
    type: "TypeB",
    feature: "Feature2",
    toggleActive: false,
    category: "Science",
    subcategory: "Biology",
  },
  {
    projectId: "133",
    status: "Pending",
    region: "North",
    type: "TypeA",
    feature: "Feature1",
    toggleActive: true,
    category: "Technology",
    subcategory: "AI",
  },
  {
    projectId: "134",
    status: "Inactive",
    region: "South",
    type: "TypeB",
    feature: "Feature2",
    toggleActive: false,
    category: "Business",
    subcategory: "Marketing",
  },
  {
    projectId: "135",
    status: "Active",
    region: "East",
    type: "TypeA",
    feature: "Feature1",
    toggleActive: true,
    category: "Science",
    subcategory: "Physics",
  },
  {
    projectId: "136",
    status: "Pending",
    region: "West",
    type: "TypeB",
    feature: "Feature2",
    toggleActive: false,
    category: "Technology",
    subcategory: "Software",
  },
  {
    projectId: "137",
    status: "Inactive",
    region: "North",
    type: "TypeA",
    feature: "Feature1",
    toggleActive: true,
    category: "Business",
    subcategory: "HR",
  },
  {
    projectId: "138",
    status: "Active",
    region: "South",
    type: "TypeB",
    feature: "Feature2",
    toggleActive: false,
    category: "Technology",
    subcategory: "Hardware",
  },
  {
    projectId: "139",
    status: "Pending",
    region: "East",
    type: "TypeA",
    feature: "Feature1",
    toggleActive: true,
    category: "Science",
    subcategory: "Biology",
  },
  {
    projectId: "140",
    status: "Inactive",
    region: "West",
    type: "TypeB",
    feature: "Feature2",
    toggleActive: true,
    category: "Business",
    subcategory: "Finance",
  },
  {
    projectId: "141",
    status: "Active",
    region: "North",
    type: "TypeA",
    feature: "Feature1",
    toggleActive: true,
    category: "Technology",
    subcategory: "Software",
  },
  {
    projectId: "142",
    status: "Inactive",
    region: "South",
    type: "TypeB",
    feature: "Feature2",
    toggleActive: false,
    category: "Business",
    subcategory: "HR",
  },
  {
    projectId: "143",
    status: "Pending",
    region: "East",
    type: "TypeA",
    feature: "Feature1",
    toggleActive: true,
    category: "Science",
    subcategory: "Physics",
  },
  {
    projectId: "144",
    status: "Active",
    region: "West",
    type: "TypeB",
    feature: "Feature2",
    toggleActive: false,
    category: "Technology",
    subcategory: "AI",
  },
  {
    projectId: "145",
    status: "Inactive",
    region: "North",
    type: "TypeA",
    feature: "Feature1",
    toggleActive: true,
    category: "Business",
    subcategory: "Finance",
  },
  {
    projectId: "146",
    status: "Pending",
    region: "South",
    type: "TypeB",
    feature: "Feature2",
    toggleActive: true,
    category: "Science",
    subcategory: "Biology",
  },
  {
    projectId: "147",
    status: "Active",
    region: "East",
    type: "TypeA",
    feature: "Feature1",
    toggleActive: false,
    category: "Technology",
    subcategory: "Software",
  },
  {
    projectId: "148",
    status: "Inactive",
    region: "West",
    type: "TypeB",
    feature: "Feature2",
    toggleActive: true,
    category: "Business",
    subcategory: "HR",
  },
  {
    projectId: "149",
    status: "Pending",
    region: "North",
    type: "TypeA",
    feature: "Feature1",
    toggleActive: false,
    category: "Technology",
    subcategory: "Hardware",
  },
  {
    projectId: "150",
    status: "Active",
    region: "South",
    type: "TypeB",
    feature: "Feature2",
    toggleActive: true,
    category: "Science",
    subcategory: "Chemistry",
  },
];
