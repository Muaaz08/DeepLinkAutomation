$(document).ready(function () {
  const dataTable = $("#dataTable").DataTable({
    data: tableData.map((row) => [
      row.projectId,
      row.status,
      row.region,
      row.type,
      row.feature,
      row.toggleActive ? "Yes" : "No",
      row.category, // New Category Column
      row.subcategory, // New Subcategory Column
    ]),
    columns: [
      { title: "Project ID" },
      { title: "Status" },
      { title: "Region" },
      { title: "Project Type" },
      { title: "Features" },
      { title: "Active" },
      { title: "Category" }, // New Category Column
      { title: "Subcategory" }, // New Subcategory Column
    ],
    pageLength: 10,
  });

  // Data for dependent dropdowns
  const subcategories = {
    Technology: ["Software", "Hardware", "AI"],
    Business: ["Finance", "Marketing", "HR"],
    Science: ["Physics", "Chemistry", "Biology"],
  };

  // Populate the subcategory dropdown based on selected category
  $("#category").on("change", function () {
    const selectedCategory = $(this).val();
    const $subcategory = $("#subcategory");

    // Clear existing options
    $subcategory.empty().append('<option value="">Select Subcategory</option>');

    if (selectedCategory && subcategories[selectedCategory]) {
      subcategories[selectedCategory].forEach((sub) => {
        $subcategory.append(`<option value="${sub}">${sub}</option>`);
      });
    }
  });

  // Apply Filters
  $("#applyFilters").on("click", function () {
    const projectId = $("#projectId").val().trim();
    const status = $("#status").val().trim();
    const region = $("#region").val().trim();
    const type = $("#type").val().trim();
    const category = $("#category").val().trim();
    const subcategory = $("#subcategory").val().trim();

    dataTable.rows().every(function () {
      const data = this.data();

      const matchesProjectId = !projectId || data[0] === projectId;
      const matchesStatus = !status || data[1] === status;
      const matchesRegion = !region || data[2] === region;
      const matchesType = !type || data[3] === type;
      const matchesCategory = !category || data[6] === category;
      const matchesSubcategory = !subcategory || data[7] === subcategory;

      if (
        matchesProjectId &&
        matchesStatus &&
        matchesRegion &&
        matchesType &&
        matchesCategory &&
        matchesSubcategory
      ) {
        $(this.node()).show();
      } else {
        $(this.node()).hide();
      }
    });

    dataTable.draw();
  });

  // Clear Filters
  $("#clearFilters").on("click", function () {
    $("#projectId").val("");
    $("#status").val("");
    $("#region").val("");
    $("#type").val("");
    $("#category").val("");
    $("#subcategory")
      .empty()
      .append('<option value="">Select Subcategory</option>');

    dataTable.search("").columns().search("").draw();
  });
});
