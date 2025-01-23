// Parse query parameters from the URL
function getQueryParams() {
  const params = {};
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  urlParams.forEach((value, key) => {
    params[key] = value;
  });

  return params;
}

// Apply filters based on query parameters
function applyFiltersFromQueryParams() {
  const params = getQueryParams();

  // Loop through the query parameters and set filter values
  Object.keys(params).forEach((key) => {
    const input = document.querySelector(`[data-filter-name="${key}"]`);
    if (input) {
      input.value = params[key];
      input.dispatchEvent(new Event("change")); // Simulate change event
    }
  });

  // Trigger filter logic after setting the values
  filterDataTable();
}

// Filter the data table based on current input values
function filterDataTable() {
  const projectId = document.getElementById("projectId").value.trim();
  const projectTypeId = document.getElementById("projectTypeId").value.trim();
  const groupId = document.getElementById("groupId").value.trim();

  const rows = document.querySelectorAll("#dataTable tr");
  rows.forEach((row) => {
    const rowProjectId = row.getAttribute("data-project-id");
    const rowProjectTypeId = row.getAttribute("data-project-type-id");
    const rowGroupId = row.getAttribute("data-group-id");

    const matchesProjectId = !projectId || rowProjectId === projectId;
    const matchesProjectTypeId =
      !projectTypeId || rowProjectTypeId === projectTypeId;
    const matchesGroupId = !groupId || rowGroupId === groupId;

    // Show/hide row based on filter conditions
    if (matchesProjectId && matchesProjectTypeId && matchesGroupId) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}

// Add event listeners
document
  .getElementById("applyFilters")
  .addEventListener("click", filterDataTable);

// Apply filters from query params on page load
window.addEventListener("DOMContentLoaded", () => {
  applyFiltersFromQueryParams();
});
