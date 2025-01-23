$(document).ready(function () {
  // Extract query parameters from the URL
  const params = new URLSearchParams(window.location.search);

  const projectId = params.get("projectId") || "";
  const status = params.get("status") || "";
  const region = params.get("region") || "";
  const type = params.get("type") || "";
  const features = params.getAll("feature") || [];
  const toggleActive = params.get("toggleActive") === "true";

  // Set filter inputs based on query parameters
  $("#projectId").val(projectId);
  $("#status").val(status);
  $("#region").val(region);
  $("#type").val(type);

  features.forEach((feature) => {
    $(`input[data-filter-name="feature"][value="${feature}"]`).prop(
      "checked",
      true
    );
  });

  $("#toggleActive").prop("checked", toggleActive);

  // Trigger DataTable filtering based on query params
  const dataTable = $("#dataTable").DataTable();

  dataTable.rows().every(function () {
    const data = this.data();

    const matchesProjectId = !projectId || data[0] === projectId;
    const matchesStatus = !status || data[1] === status;
    const matchesRegion = !region || data[2] === region;
    const matchesType = !type || data[3] === type;
    const matchesFeatures = features.length === 0 || features.includes(data[4]);
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
