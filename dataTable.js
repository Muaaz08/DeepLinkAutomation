$(document).ready(function () {
  const dataTable = $("#dataTable").DataTable({
    data: tableData.map((row) => [
      row.projectId,
      row.status,
      row.region,
      row.type,
      row.feature,
      row.toggleActive ? "Yes" : "No",
    ]),
    columns: [
      { title: "Project ID" },
      { title: "Status" },
      { title: "Region" },
      { title: "Project Type" },
      { title: "Features" },
      { title: "Active" },
    ],
    pageLength: 5,
  });

  // Apply filters when the "Apply Filters" button is clicked
  $("#applyFilters").on("click", function () {
    const projectId = $("#projectId").val().trim();
    const status = $("#status").val().trim();
    const region = $("#region").val().trim();
    const type = $("#type").val().trim();
    const features = $("input[data-filter-name='feature']:checked")
      .map(function () {
        return $(this).val();
      })
      .get();
    const toggleActive = $("#toggleActive").is(":checked");

    // Use DataTable's search API to filter
    dataTable.rows().every(function () {
      const data = this.data();

      const matchesProjectId = !projectId || data[0] === projectId;
      const matchesStatus = !status || data[1] === status;
      const matchesRegion = !region || data[2] === region;
      const matchesType = !type || data[3] === type;
      const matchesFeatures =
        features.length === 0 || features.includes(data[4]);
      const matchesToggleActive =
        !toggleActive || data[5] === (toggleActive ? "Yes" : "No");

      if (
        matchesProjectId &&
        matchesStatus &&
        matchesRegion &&
        matchesType &&
        matchesFeatures &&
        matchesToggleActive
      ) {
        $(this.node()).show();
      } else {
        $(this.node()).hide();
      }
    });

    // Ensure DataTable redraws to reflect changes
    dataTable.draw();
  });

  // Clear Filters
  $("#clearFilters").on("click", function () {
    // Reset all filter inputs
    $("#projectId").val("");
    $("#status").val("");
    $("#region").val("");
    $("#type").val("");
    $("input[data-filter-name='feature']").prop("checked", false);
    $("#toggleActive").prop("checked", false);

    // Reset the table to show all rows
    dataTable.search("").columns().search("").draw();
    document.querySelector("#applyFilters").click();
  });
});
